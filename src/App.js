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
import LoginPage from './components/login/login';
import SignupPage from './components/login/signup';
import User from './components/login/user';
import Protected from './components/login/Protected';



function App() {
	return (
		<BrowserRouter>
		<Routes>
		    <Route path="/" element={<LandingPage />} />
		    <Route path='/muscle-selector' element={<MuscleGroupSelector/>} />
      		{/* <Route path='/navbar' element={<Navbar/>}/> */}
      		<Route path='/diet' element={<DietPage/>}/>
      		<Route path='/workout-plan' element={<WorkoutPlanPage/>}/>
      		<Route path='/ai-assistant' element={<AiAssistantPage/>}/>
			<Route path='/login' element={<LoginPage/>}/>
			<Route path='/signup' element={<SignupPage/>}/>
			<Route path="/user/*" element={<Protected />}>
          		<Route index element={<User />} />
        	</Route>


		</Routes>
	  </BrowserRouter>

	);
}
export default App;

