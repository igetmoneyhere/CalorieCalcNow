// Calorie calculation formulas

export interface CalorieInput {
  age: number;
  weight: number; // in pounds
  height: number; // in inches
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goal: 'weight_loss' | 'maintenance' | 'muscle_gain';
}

export interface CalorieResult {
  bmr: number; // Basal Metabolic Rate
  tdee: number; // Total Daily Energy Expenditure
  caloriesForGoal: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
}

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

// Mifflin-St Jeor equation (more accurate)
export function calculateBMR(input: CalorieInput): number {
  const { age, weight, height, gender } = input;
  
  // Convert to metric
  const weightKg = weight * 0.453592;
  const heightCm = height * 2.54;
  
  if (gender === 'male') {
    return Math.round((10 * weightKg + 6.25 * heightCm - 5 * age + 5));
  } else {
    return Math.round((10 * weightKg + 6.25 * heightCm - 5 * age - 161));
  }
}

export function calculateTDEE(bmr: number, activityLevel: string): number {
  const multiplier = activityMultipliers[activityLevel as keyof typeof activityMultipliers];
  return Math.round(bmr * multiplier);
}

export function calculateCaloriesForGoal(
  tdee: number,
  goal: string
): number {
  switch (goal) {
    case 'weight_loss':
      return Math.round(tdee - 500); // 500 calorie deficit
    case 'muscle_gain':
      return Math.round(tdee + 300); // 300 calorie surplus
    case 'maintenance':
    default:
      return tdee;
  }
}

export function calculateMacros(
  calories: number,
  goal: string
): { protein: number; carbs: number; fats: number } {
  let proteinPercentage = 0.3;
  let carbsPercentage = 0.4;
  let fatsPercentage = 0.3;

  if (goal === 'muscle_gain') {
    proteinPercentage = 0.35;
    carbsPercentage = 0.4;
    fatsPercentage = 0.25;
  } else if (goal === 'weight_loss') {
    proteinPercentage = 0.35;
    carbsPercentage = 0.35;
    fatsPercentage = 0.3;
  }

  return {
    protein: Math.round((calories * proteinPercentage) / 4),
    carbs: Math.round((calories * carbsPercentage) / 4),
    fats: Math.round((calories * fatsPercentage) / 9),
  };
}

export function calculateAllCalories(input: CalorieInput): CalorieResult {
  const bmr = calculateBMR(input);
  const tdee = calculateTDEE(bmr, input.activityLevel);
  const caloriesForGoal = calculateCaloriesForGoal(tdee, input.goal);
  const macros = calculateMacros(caloriesForGoal, input.goal);

  return {
    bmr,
    tdee,
    caloriesForGoal,
    macros,
  };
}
