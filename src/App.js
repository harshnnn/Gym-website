import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
import MuscleGroupSelector from './components/muscle-selector';
import Navbar from './components/navbar';
import DietPage from './components/diet';
import WorkoutPlanPage from './components/workout-plan';
import AiAssistantPage from './components/ai-assistant';
import LandingPage from './components/landing-page';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
		<Routes>
		    <Route path="/" element={<LandingPage />} />
		    <Route path='/muscle-selector' element={<MuscleGroupSelector/>} />
      		<Route path='/navbar' element={<Navbar/>}/>
      		<Route path='/diet' element={<DietPage/>}/>
      		<Route path='/workout-plan' element={<WorkoutPlanPage/>}/>
      		<Route path='/ai-assistant' element={<AiAssistantPage/>}/>
		</Routes>
	  </BrowserRouter>

	);
}
export default App;

