import type { CultivationData, FertiliserData, CalculationResults } from "@/lib/types"

export function calculateNutrients(
  cultivation: CultivationData,
  fertiliser: FertiliserData,
  cropData: any,
  fertilizerData: any,
): CalculationResults {
  const nutrients = ["N", "P", "K", "Ca", "Mg", "S", "B", "Cu", "Fe", "Mn", "Mo", "Zn", "Cl", "Na"]

  // Initialize result objects
  const cropUptake: { [key: string]: number } = {}
  const soilTotal: { [key: string]: number } = {}
  const manureEffluent: { [key: string]: number } = {}
  const fertiliserContrib: { [key: string]: number } = {}
  const totalNutrientsAvailable: { [key: string]: number } = {}
  const totalRequirements: { [key: string]: number } = {}

  // Get crop data
  const selectedCrop = cropData[cultivation.cropType]

  // Calculate crop uptake
  if (selectedCrop) {
    nutrients.forEach((nutrient) => {
      const uptakeRate = selectedCrop[`${nutrient}_uptake`] || 0
      cropUptake[nutrient] = cultivation.expectedYield * uptakeRate
    })
  }

  // Calculate soil contribution (simplified baseline estimate)
  nutrients.forEach((nutrient) => {
    soilTotal[nutrient] = (cropUptake[nutrient] || 0) * 0.1 // 10% of crop uptake as baseline soil contribution
  })

  // Calculate manure & effluent contribution (simplified estimates)
  nutrients.forEach((nutrient) => {
    manureEffluent[nutrient] = cropUptake[nutrient] * 0.15 // 15% of crop uptake from organic sources
  })

  // Calculate fertiliser contribution
  fertiliser.addedFertilizers.forEach((fertName) => {
    const fert = fertilizerData[fertName]
    if (fert) {
      nutrients.forEach((nutrient) => {
        const contribution = fertiliser.fertiliserRate * (fert[nutrient] || 0)
        fertiliserContrib[nutrient] = (fertiliserContrib[nutrient] || 0) + contribution
      })
    }
  })

  // Calculate total nutrients available and requirements
  nutrients.forEach((nutrient) => {
    totalNutrientsAvailable[nutrient] =
      (soilTotal[nutrient] || 0) + (manureEffluent[nutrient] || 0) + (fertiliserContrib[nutrient] || 0)

    totalRequirements[nutrient] = (cropUptake[nutrient] || 0) - (totalNutrientsAvailable[nutrient] || 0)
  })

  // Calculate application costs
  const applicationCosts = {
    fertiliserApplication: {
      N: fertiliserContrib.N || 0,
      P: fertiliserContrib.P || 0,
      K: fertiliserContrib.K || 0,
      Other: (fertiliserContrib.Ca || 0) + (fertiliserContrib.Mg || 0) + (fertiliserContrib.S || 0),
    },
    manureApplication: 25.0, // Fixed cost per ha
    effluentApplication: 15.0, // Fixed cost per ha
    otherCharges: 10.0, // Fixed cost per ha
    totalCost: 0,
  }

  // Calculate total cost
  const fertilizerCost =
    (fertiliserContrib.N || 0) * 2.5 + (fertiliserContrib.P || 0) * 3.0 + (fertiliserContrib.K || 0) * 2.0

  applicationCosts.totalCost =
    fertilizerCost +
    applicationCosts.manureApplication +
    applicationCosts.effluentApplication +
    applicationCosts.otherCharges

  return {
    cropUptake,
    soilTotal,
    manureEffluent,
    fertiliserContrib,
    totalNutrientsAvailable,
    totalRequirements,
    applicationCosts,
  }
}
