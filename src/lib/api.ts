// Route API requests via Next.js rewrite to avoid CORS in browser
export const API_BASE_URL = "/biota-api"

// Simple in-memory cache with TTL for option lists
const optionCache = new Map<string, { expiry: number; value: string[] }>()
const DEFAULT_TTL_MS = 10 * 60 * 1000 // 10 minutes

function setCache(key: string, value: string[], ttlMs: number = DEFAULT_TTL_MS) {
  optionCache.set(key, { expiry: Date.now() + ttlMs, value })
}

function getCache(key: string): string[] | null {
  const hit = optionCache.get(key)
  if (!hit) return null
  if (Date.now() > hit.expiry) {
    optionCache.delete(key)
    return null
  }
  return hit.value
}

// Chatbot API functions
export async function createChatSession(): Promise<string | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/chat/session`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Create session failed", res.status)
      return null
    }

    const data = await res.json()
    return data.session_id
  } catch (e) {
    console.error("Network error while creating chat session", e)
    return null
  }
}

export async function getChatSessionInfo(sessionId: string): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/chat/session/${sessionId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Get session info failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while getting session info", e)
    return null
  }
}

export async function deleteChatSession(sessionId: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/chat/session/${sessionId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Delete session failed", res.status)
      return false
    }

    return true
  } catch (e) {
    console.error("Network error while deleting session", e)
    return false
  }
}

export async function sendChatMessage(message: string, sessionId?: string): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message,
        session_id: sessionId
      }),
    })

    if (!res.ok) {
      console.error("Send chat message failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while sending chat message", e)
    return null
  }
}

async function fetchOptionList(path: string, params?: Record<string, string>): Promise<string[]> {
  const query = params
    ? "?" + new URLSearchParams(params).toString()
    : ""
  const cacheKey = `opt:${path}${query}`
  const cached = getCache(cacheKey)
  if (cached) return cached

  const res = await fetch(`${API_BASE_URL}${path}${query}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
  })

  if (!res.ok) {
    console.error("Failed to fetch options", path, res.status)
    return []
  }

  const contentType = res.headers.get("content-type") || ""
  if (!contentType.includes("application/json")) {
    const text = await res.text().catch(() => "")
    if (text?.startsWith("<!DOCTYPE") || text?.includes("<html")) {
      console.warn("Options endpoint returned HTML instead of JSON:", path)
    }
    return []
  }

  try {
    const data = await res.json()
    let names: string[] = []
    if (Array.isArray(data)) {
      names = (data as any[])
        .map((item) => normalizeFertiliserName(item))
        .filter((s): s is string => Boolean(s))
    } else if (Array.isArray((data as any).data)) {
      names = ((data as any).data as any[])
        .map((item) => normalizeFertiliserName(item))
        .filter((s): s is string => Boolean(s))
    } else if (typeof data === "object" && data !== null) {
      names = Object.keys(data as Record<string, unknown>)
    }
    const unique = Array.from(new Set(names))
    setCache(cacheKey, unique)
    return unique
  } catch (e) {
    console.error("Invalid options response for", path, e)
    return []
  }
}

export async function fetchCropOptions(): Promise<string[]> {
  // Check the FastAPI docs at /docs; typical endpoint naming based on earlier spec
  return fetchOptionList("/api/v1/calculator/crops")
}

export async function fetchStandardAdviceOptions(): Promise<string[]> {
  // Backend exposes `/api/v1/calculator/standard-advices` with optional `lang`
  return fetchOptionList("/api/v1/calculator/standard-advices", { lang: "EN" })
}
export async function fetchFertilisers(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/calculator/fertilisers?lang=EN`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch fertilisers", res.status)
      return []
    }

    const contentType = res.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      return []
    }

    const data = await res.json()
    if (Array.isArray(data)) {
      const names = (data as any[])
        .map((item) => normalizeFertiliserName(item))
        .filter((s): s is string => Boolean(s))
      return Array.from(new Set(names))
    }
    if (Array.isArray((data as any).data)) return (data as any).data as string[]
    if (typeof data === "object" && data !== null) return Object.keys(data as Record<string, unknown>)
    return []
  } catch (e) {
    console.error("Network error while fetching fertilisers", e)
    return []
  }
}

export async function fetchFertilizersByType(fertilizerType?: string): Promise<any[]> {
  try {
    const params = new URLSearchParams({ lang: "EN" })
    if (fertilizerType) {
      params.append("fertilizer_type", fertilizerType)
    }

    const res = await fetch(`${API_BASE_URL}/api/v1/fertilizers?${params}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch fertilizers by type", res.status)
      return []
    }

    const data = await res.json()
    if (Array.isArray(data)) {
      return data
    }
    return []
  } catch (e) {
    console.error("Network error while fetching fertilizers by type", e)
    return []
  }
}

export async function fetchFertilizersByElement(element: string, fertilizerType?: string): Promise<string[]> {
  try {
    const fertilizers = await fetchFertilizersByType(fertilizerType)
    
    // Filter fertilizers based on element type
    const elementFilters: Record<string, (name: string) => boolean> = {
      magnesium: (name) => name.toLowerCase().includes("mag") || name.toLowerCase().includes("magnesium"),
      calcium: (name) => name.toLowerCase().includes("calcium") || name.toLowerCase().includes("ca"),
      potassium: (name) => name.toLowerCase().includes("potassium") || name.toLowerCase().includes("kalium") || name.toLowerCase().includes("k"),
      nitrogen: (name) => name.toLowerCase().includes("nitrate") || name.toLowerCase().includes("ammonium") || name.toLowerCase().includes("urea"),
      phosphorus: (name) => name.toLowerCase().includes("phosphate") || name.toLowerCase().includes("phosphoric"),
      sulfur: (name) => name.toLowerCase().includes("sulphate") || name.toLowerCase().includes("sulfate"),
      trace: (name) => name.toLowerCase().includes("trace") || name.toLowerCase().includes("mix") || name.toLowerCase().includes("plus"),
    }

    const filter = elementFilters[element.toLowerCase()]
    if (!filter) {
      return fertilizers.map(f => f.name)
    }

    return fertilizers
      .filter(f => filter(f.name))
      .map(f => f.name)
  } catch (e) {
    console.error("Network error while fetching fertilizers by element", e)
    return []
  }
}

export async function postTankCalculation(payload: unknown): Promise<any | null> {
  const res = await fetch(`${API_BASE_URL}/api/v1/calculator/tank`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/html",
    },
    body: JSON.stringify(payload ?? {}),
  })

  if (!res.ok) {
    console.error("Tank calculation failed", res.status)
    // Try to read textual error for display
    const text = await res.text().catch(() => "")
    if (text) {
      return { html: `<pre>${escapeHtml(text)}</pre>` }
    }
    return null
  }

  const contentType = res.headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    try {
      return await res.json()
    } catch (e) {
      console.error("Invalid tank calculation JSON", e)
      return null
    }
  }

  // Handle HTML responses (server may return pre-rendered tables)
  try {
    const html = await res.text()
    return { html }
  } catch (e) {
    console.error("Invalid tank calculation text", e)
    return null
  }
}

// Analysis API endpoints
export async function getSubstrateAnalysis(substrateName: string, lang: string = "EN"): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/analysis/substrate?substrate_name=${encodeURIComponent(substrateName)}&lang=${lang}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Substrate analysis failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while fetching substrate analysis", e)
    return null
  }
}

export async function getWaterAnalysis(source: string = "100%", lang: string = "EN"): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/analysis/water-analysis?source=${encodeURIComponent(source)}&lang=${lang}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Water analysis failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while fetching water analysis", e)
    return null
  }
}

export async function getDrainAnalysis(percentage: string = "0%", lang: string = "EN"): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/analysis/drain-analysis?percentage=${encodeURIComponent(percentage)}&lang=${lang}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Drain analysis failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while fetching drain analysis", e)
    return null
  }
}

export async function getAdviceTargets(adviceName: string, lang: string = "EN"): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/analysis/advice?advice_name=${encodeURIComponent(adviceName)}&lang=${lang}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Advice targets failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while fetching advice targets", e)
    return null
  }
}

export async function saveManualAdjustment(adjustment: any): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/analysis/manual-adjustment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(adjustment),
    })

    if (!res.ok) {
      console.error("Manual adjustment save failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while saving manual adjustment", e)
    return null
  }
}

export async function getManualAdjustment(sessionId: string = "default"): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/analysis/manual-adjustment?session_id=${encodeURIComponent(sessionId)}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("Manual adjustment fetch failed", res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.error("Network error while fetching manual adjustment", e)
    return null
  }
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function normalizeFertiliserName(item: unknown): string | null {
  if (typeof item === "string") return item
  if (item && typeof item === "object") {
    const obj = item as Record<string, unknown>
    const candidates = [
      obj.name,
      obj.label,
      obj.title,
      obj.fertiliser,
      (obj.fertilizer as any),
      obj.fertiliser_name,
      obj.fertilizer_name,
    ]
    for (const c of candidates) {
      if (typeof c === "string" && c.trim().length > 0) return c
    }
    // Try first string property
    for (const [_, v] of Object.entries(obj)) {
      if (typeof v === "string" && v.trim().length > 0) return v
    }
    // Fallback to JSON string to keep it selectable but stable
    try {
      return JSON.stringify(item)
    } catch {
      return null
    }
  }
  return null
}

