'use client';

import { useState } from 'react';
import { calculateAllCalories, CalorieInput } from '@/lib/calculations';

interface Results {
  bmr: number;
  tdee: number;
  caloriesForGoal: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
}

export default function Calculator() {
  const [formData, setFormData] = useState<CalorieInput>({
    age: 30,
    weight: 170,
    height: 70,
    gender: 'male',
    activityLevel: 'moderate',
    goal: 'maintenance',
  });

  const [results, setResults] = useState<Results | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedResults = calculateAllCalories(formData);
    setResults(calculatedResults);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculate Your Daily Calories</h2>
        
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="18"
                max="100"
                className="w-full"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                Weight (lbs)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                min="50"
                max="500"
                className="w-full"
              />
            </div>

            {/* Height */}
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                Height (inches)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                min="48"
                max="84"
                className="w-full"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-2">
                Activity Level
              </label>
              <select
                id="activityLevel"
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleInputChange}
                className="w-full"
              >
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (exercise 1-3 days/week)</option>
                <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                <option value="active">Active (exercise 6-7 days/week)</option>
                <option value="very_active">Very Active (intense daily exercise)</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">
                Goal
              </label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full"
              >
                <option value="weight_loss">Weight Loss</option>
                <option value="maintenance">Maintenance</option>
                <option value="muscle_gain">Muscle Gain</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Calculate Calories
          </button>
        </form>

        {/* Results */}
        {results && (
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 text-sm font-medium">BMR (Basal Metabolic Rate)</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{results.bmr}</p>
                <p className="text-gray-500 text-xs mt-2">Calories at rest</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 text-sm font-medium">TDEE (Daily Expenditure)</p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">{results.tdee}</p>
                <p className="text-gray-500 text-xs mt-2">Including activity</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 text-sm font-medium">Calories for Goal</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{results.caloriesForGoal}</p>
                <p className="text-gray-500 text-xs mt-2">Daily target</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Macronutrient Breakdown</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-gray-600 font-medium">Protein</p>
                  <p className="text-2xl font-bold text-red-600 mt-2">{results.macros.protein}g</p>
                  <p className="text-xs text-gray-500 mt-1">4 cal/g</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 font-medium">Carbs</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-2">{results.macros.carbs}g</p>
                  <p className="text-xs text-gray-500 mt-1">4 cal/g</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 font-medium">Fats</p>
                  <p className="text-2xl font-bold text-orange-600 mt-2">{results.macros.fats}g</p>
                  <p className="text-xs text-gray-500 mt-1">9 cal/g</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
