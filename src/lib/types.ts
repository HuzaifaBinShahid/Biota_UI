export interface CultivationData {
  // Section 1: Crop type
  cropType: string
  /** Selected standard advice option for the chosen crop (from API) */
  standardAdvice?: string
  cropSize: number
  expectedYield: number
  yieldVariation: number
  /**
   * Percentage of drainage expected on the field (0-100)
   */
  drainagePercentage: number

  // Section 3: Grain protein content
  targetProtein: number
  nitrogenFixation: number
  soilAnalysis: {
    pH: number
    N: number
    P: number
    K: number
    S: number
    Ca: number
    Mg: number
    Na: number
    Cl: number
    B: number
    Cu: number
    Fe: number
    Mn: number
    Mo: number
    Zn: number
  }
}

export interface FertiliserData {
  currentFerts: string
  fertiliserRate: number
  unit: string
  numberOfApplications: number
  addedFertilizers: string[]
  /**
   * Optional UI fields for the new fertilisation system box
   */
  systemType?: string
  tankVolume?: number
  concentration?: number
  selectedTank?: "A" | "B"
}

export interface DefaultFertilizers {
  nitrogen: string
  phosphorus: string
  potassium: string
  sulfur: string
  calcium: string
  magnesium: string
}

export interface RecipeData {
  fertiliserSource: string
  rate: number
  unit: string
  addedSources: Array<{
    source: string
    rate: number
    unit: string
  }>
}

export interface FinalResults {
  waterRequirement: number
  phRange: string
  ecTarget: number
  nutrients: {
    [key: string]: {
      required: number
      supplied: number
      balance: number
    }
  }
}

export interface CalculationResults {
  cropUptake: { [key: string]: number }
  soilTotal: { [key: string]: number }
  manureEffluent: { [key: string]: number }
  fertiliserContrib: { [key: string]: number }
  totalNutrientsAvailable: { [key: string]: number }
  totalRequirements: { [key: string]: number }
  applicationCosts: {
    fertiliserApplication: {
      N: number
      P: number
      K: number
      Other: number
    }
    manureApplication: number
    effluentApplication: number
    otherCharges: number
    totalCost: number
  }
}
