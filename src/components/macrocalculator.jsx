import React, { useState } from 'react';
import './macrocalculator.css';

const MacroCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('light'); 
    const [goal, setGoal] = useState('gain');

    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);
    const [saturatedFat, setSaturatedFat] = useState(0);
    const [foodEnergy, setFoodEnergy] = useState(0);

    const activityLevelMultiplier = {
        light: 1.2,
        moderate: 1.55,
        active: 1.725,
    };


    const goalMacroPercentages = {
        gain: { protein: 0.25, carbs: 0.55, fat: 0.2 }, 
        maintain: { protein: 0.3, carbs: 0.5, fat: 0.2 },
        loose: { protein: 0.35, carbs: 0.45, fat: 0.2 } 
      };
    

    const calculateBMR = () => {
        if(age == null){
            alert('enter your age');
        }
        console.log(goalMacroPercentages);
        // Calculate BMR using Mifflin-St Jeor equation (male and female formulas)
        if (gender === 'male') {
            return (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else if (gender === 'female') {
            return (10 * weight) + (6.25 * height) - (5 * age) - 161;
        } else {
            // Handle non-binary or unknown gender
            console.warn('Unable to calculate BMR due to unknown gender');
            return 0;
        }
    };

    const calculateMacros = () => {
        
        // Perform calculations based on the input values

        // Calculate BMR (Basal Metabolic Rate)
        const BMR = calculateBMR();

        // Calculate daily calorie needs based on activity level
        const dailyCalorieNeeds = BMR * activityLevelMultiplier[activityLevel];

        // Determine macronutrient percentages based on goal
        const macronutrientPercentages = goalMacroPercentages[goal];

        // Calculate macronutrient amounts in grams
        const calculatedProtein = (dailyCalorieNeeds * macronutrientPercentages.protein) / 4;
        const calculatedCarbs = (dailyCalorieNeeds * macronutrientPercentages.carbs) / 4;
        const calculatedFat = (dailyCalorieNeeds * macronutrientPercentages.fat) / 9;

        // Calculate sugar, saturated fat, and food energy (based on assumptions)
        const calculatedSugar = calculatedCarbs * 0.1; // Placeholder: Assuming 10% of carbs come from sugar
        const calculatedSaturatedFat = calculatedFat * 0.25; // Placeholder: Assuming 25% of fat comes from saturated fat
        const calculatedFoodEnergy = dailyCalorieNeeds; // Placeholder: Using daily calorie needs as food energy

        // Set the calculated values to display in the UI
        setProtein(calculatedProtein.toFixed(2));
        setCarbs(calculatedCarbs.toFixed(2));
        setFat(calculatedFat.toFixed(2));
        setSugar(calculatedSugar.toFixed(2));
        setSaturatedFat(calculatedSaturatedFat.toFixed(2));
        setFoodEnergy(calculatedFoodEnergy.toFixed(2));
    };

    


    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleActivityChange = (event) => {
        setActivityLevel(event.target.value);
    };

    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform calculations or processing based on the form inputs here
        calculateMacros(); // Call the function to calculate on form submit
    };

    return (
        <div className="macro-calculator">
            <h2>Macro Calculator</h2>
            <form className='macro-form' onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" value={age} required onChange={handleAgeChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" value={gender} onChange={handleGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="height">Height (cm):</label>
                    <input type="number" id="height" value={height} onChange={handleHeightChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="number" id="weight" value={weight} onChange={handleWeightChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="activity">Activity:</label>
                    <select id="activity" value={activityLevel}  onChange={handleActivityChange}>
                        <option value="light">Light</option>
                        <option value="moderate">Mordrate</option>
                        <option value="active">Active</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="goal">Your Goal:</label>
                    <select id="goal" value={goal}  onChange={handleGoalChange}>
                        <option value="gain">Gain Weight</option>
                        <option value="maintain">Maintain</option>
                        <option value="loose">Loose Weight</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>


            <div className="results">
                <h3>Macronutrient Requirements</h3>
                <p>Protein: {protein} grams/day</p>
                <p>Carbs: {carbs} grams/day</p>
                <p>Fat: {fat} grams/day</p>
                <p>Sugar: {sugar} grams/day</p>
                <p>Saturated Fat: {saturatedFat} grams/day</p>
                <p>Food Energy: {foodEnergy} Calories/day</p>
            </div>
        </div>
    );
};

export default MacroCalculator;
