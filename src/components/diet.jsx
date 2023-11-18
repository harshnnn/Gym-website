import React, { useState } from 'react';
import Navbar from './navbar';
import './diet.css';
import foodData from './foodData.json';
import vegFoodData from './vegFoodData.json';
import MacroCalculator from './macrocalculator';


const DietPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedFood, setSelectedFood] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [totalCalories, setTotalCalories] = useState(0);
	const [totalProtein, setTotalProtein] = useState(0);
	const [totalFat, setTotalFat] = useState(0);
	const [totalCarbs, setTotalCarbs] = useState(0);
	const [calorieGoal, setCalorieGoal] = useState(0);
	const [foodsMatchingGoal, setFoodsMatchingGoal] = useState([]);

	const handleSearchTermChange = (event) => {
		const term = event.target.value;
		setSearchTerm(term);
		setSelectedFood(null);
	};

	const handleFoodSelect = (food) => {
		setSelectedFood(food);
		setSearchTerm('');
	};

	const handleQuantityChange = (event) => {
		const quantity = parseInt(event.target.value, 10);
		setQuantity(quantity);
	};

	const calculateNutrients = () => {
		if (selectedFood) {
			const { calories, protein, fat, carbs } = selectedFood;
			const totalCalories = quantity * calories;
			const totalProtein = quantity * protein;
			const totalFat = quantity * fat;
			const totalCarbs = quantity * carbs;

			setTotalCalories(totalCalories);
			setTotalProtein(totalProtein);
			setTotalFat(totalFat);
			setTotalCarbs(totalCarbs);
		}
	};

	const filteredFood = foodData.filter(
		(food) => food.name.toLowerCase().includes(searchTerm.toLowerCase())
	);


	const findFoodsByCalories = () => {
		const goal = calorieGoal;
		const result = [];

		// Function to calculate the difference between the goal and the total calories
		const getDifference = (total, goal) => Math.abs(total - goal);

		// Sorting vegFoodData by calories in ascending order
		const sortedFoods = vegFoodData.sort((a, b) => a.calories - b.calories);

		// Loop through sorted foods to find the combination closest to the goal
		for (let i = 0; i < sortedFoods.length; i++) {
			let sum = sortedFoods[i].calories;
			let foods = [sortedFoods[i]];
			for (let j = i + 1; j < sortedFoods.length; j++) {
				if (sum + sortedFoods[j].calories <= goal) {
					sum += sortedFoods[j].calories;
					foods.push(sortedFoods[j]);
				}
			}
			if (getDifference(sum, goal) < getDifference(totalCalories, goal)) {
				result.length = 0; // Clear the previous result
				result.push(...foods);
				setTotalCalories(sum);
			}
		}
		setFoodsMatchingGoal(result);
	};

	const handleGoalChange = (event) => {
		const goal = parseInt(event.target.value, 10);
		setCalorieGoal(goal);
	};


	return (
		<>
			<Navbar />
			<div className='diet-page'>

				<div className="calorie-calculator">
					<h2>Calorie Calculator</h2>
					<div className="input-group">
						<label htmlFor="foodSearch">Search for Food:</label>
						<input
							type="text"
							id="foodSearch"
							value={searchTerm}
							onChange={handleSearchTermChange}
							placeholder="Type to search..."
						/>
					</div>
					{filteredFood.length > 0 && searchTerm && (
						<div className="search-results">
							{filteredFood.map((food) => (
								<div
									key={food.id}
									className="search-result"
									onClick={() => handleFoodSelect(food)}
								>
									{food.name}
								</div>
							))}
						</div>
					)}
					<div className="input-group">
						<label htmlFor="quantityInput">Quantity:</label>
						<input
							type="number"
							id="quantityInput"
							value={quantity}
							onChange={handleQuantityChange}
						/>
					</div>
					<button onClick={calculateNutrients}>Calculate Nutrients</button>
					{totalCalories > 0 && (
						<div className="result">
							<p>Total Calories: {totalCalories}</p>
							<p>Total Protein: {totalProtein}g</p>
							<p>Total Fat: {totalFat}g</p>
							<p>Total Carbs: {totalCarbs}g</p>
						</div>
					)}
				</div>


				<div className='Meat-daily-goal calorie-calculator'>
					<h2>Find Foods Matching Calorie Goal</h2>
					<div className="input-group">
						<label htmlFor="calorieGoal">Enter Calorie Goal:</label>
						<input
							type="number"
							id="calorieGoal"
							value={calorieGoal}
							onChange={handleGoalChange}
						/>
					</div>
					<button onClick={findFoodsByCalories}>Find Foods</button>
					{foodsMatchingGoal.length > 0 && (
						<div className="matching-foods">
							<h3>Foods Matching Goal:</h3>
							<ul>
								{foodsMatchingGoal.map((food) => (
									<li key={food.id}>{food.name}</li>
								))}
							</ul>
							<p>Total Calories: {totalCalories}</p>
						</div>
					)}
				</div>
				<MacroCalculator/>
			</div>
		</>
	);
};

export default DietPage;
