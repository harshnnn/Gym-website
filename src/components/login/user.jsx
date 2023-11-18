
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, firestore } from './firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import maleimage from '../../Resources/Users/male.png';
import femaleimage from '../../Resources/Users/female.png';

import './login.css';
import WorkoutPlanPage from '../workout-plan';

const User = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const userRef = doc(firestore, 'UserData', user.uid);
    const [changeData, setChangeData] = useState(null);
    const [rightDiv, setRightDiv] = useState(true);

    const changedatafun = () => {
        // if (changeData) {
        //     setChangeData(null);
        // }
        if (changeData == null) {
            setChangeData(true);
            setRightDiv(null);
        }
    }

    const showPrograms = () => {
        if (changeData) {
            setChangeData(null);
        }
        setRightDiv(true);
    }

    const [userData, setUserData] = useState({
        Weight: '',
        Height: '',
        Age: '',
        Gender: '',
        Name: user.displayName || 'User', // Get user's display name or set as 'User'
        WorkoutId: '', // Include WorkoutId in userData

    });

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const loadData = async () => {
        try {
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserData(userData);
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    useEffect(() => {
        loadData(); // Load user data on component mount
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(userRef, userData); // Update user data in Firestore
            console.log('User information updated successfully!');
            if (userData.WorkoutId) {
                const userProgramRef = doc(firestore, 'UserPrograms', user.uid);
                await setDoc(userProgramRef, { WorkoutId: userData.WorkoutId });
                console.log('WorkoutId saved successfully!');
            }
        } catch (error) {
            console.error('Error updating user information:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const calculateBMI = (weight, height) => {
        // Convert height from centimeters to meters
        const heightInMeters = height / 100;

        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);

        // Return the calculated BMI
        return bmi.toFixed(2); // Limiting to 2 decimal places
    };

    const bmi = calculateBMI(userData.Weight, userData.Height);


    const bmiPointer = document.getElementById('bmiPointer');
    if (bmiPointer) {
        if (bmi < 18.5) {
            bmiPointer.style.left = '13%';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiPointer.style.left = '40%';
        } else if (bmi >= 25 && bmi < 30) {
            bmiPointer.style.left = '61%';
        } else {
            bmiPointer.style.left = '82%';
        }
    }


    const availableWorkouts = [
        { id: 1, name: 'Push-Pull-Legs Split (6 days)' },
        { id: 2, name: 'Upper-Lower Split (5 days)' },
        { id: 3, name: 'Push-Pull-Legs Split (4 days)' },
        { id: 4, name: 'Bro Split (3 days)' },
        { id: 5, name: 'Upper-Lower Split (3 days)' },
        { id: 6, name: 'Full Body Split (3 days)' },
        { id: 7, name: 'Push-Pull-Legs-Upper-Lower (3 days)' },


    ];

    const [showMenu, setShowMenu] = useState(false);

    const handleWorkoutSelect = (selectedId) => {
        setUserData((prevData) => ({
            ...prevData,
            WorkoutId: selectedId,
        }));
        setShowMenu(false); // Hide the menu after selecting a workout
    };

    // const saveWorkout = async (workoutId) => {
    //     // Your logic to save the workout using workoutId
    //     console.log(`Saving workout ${workoutId}`);
    //     // Make sure to handle saving logic here
    //     if (userData.WorkoutId) {
    //         const userProgramRef = doc(firestore, 'UserPrograms', user.uid);
    //         await setDoc(userProgramRef, { WorkoutId: userData.WorkoutId });
    //         console.log('WorkoutId saved successfully!');
    //     }
    // };



    return (
        <>
            <Navbar />
            <div className="user-body">
                <div className='header'><h1>Profile</h1></div>


                <div className='content-1'>
                    <div className='image-data'>
                        <div className='avatar'>
                            {userData.Gender === 'male' ? (
                                <img src={maleimage} alt="Male Avatar" />
                            ) : (
                                <img src={femaleimage} alt="Female Avatar" />
                            )}
                        </div>
                        <div><h2>{userData.Name}</h2></div>
                        {/* Displaying Current User Data */}
                        <div>

                            <p>Weight: {userData.Weight} kg</p>
                            <p>Height: {userData.Height} cm</p>
                            <p>Age: {userData.Age} </p>
                            <p>Gender: {userData.Gender}</p>
                            <p>Name: {userData.Name}</p>
                            {/* <p>WorkoutId: {userData.WorkoutId}</p> */}
                            {/* <p>BMI: {bmi}</p> Displaying the calculated BMI */}

                        </div>

                        <button onClick={showPrograms} className='profile-btn'>My Programs</button>
                        <button onClick={changedatafun} className='profile-btn'>Update Data</button>
                        <button onClick={handleLogout} className='profile-btn'>Logout</button>


                    </div>

                    {rightDiv !== null && (
                        <div className='user-programs'>

                            <div className='saved-programs'>
                                <h2>PROGRAMS I HAVE CREATED</h2>

                                <div className='program-div'>

                                    {
                                        userData.WorkoutId === 0 ? (
                                            <h4>You have no saved workout program.</h4>
                                        ) : (
                                            <h4>{availableWorkouts.find((w) => w.id === userData.WorkoutId)?.name ?? 'You have no saved workout program.'}</h4>
                                        )
                                    }

                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => setShowMenu(!showMenu)}>New Program +</button>
                                        {userData.WorkoutId && <button onClick={handleSubmit}>Save</button>}
                                    </div>


                                    {showMenu && (
                                        <div className="workout-menu">
                                            <ul>
                                                {availableWorkouts.map((workout) => (
                                                    <li key={workout.id} onClick={() => handleWorkoutSelect(workout.id)}>
                                                        {workout.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* <div className='saved-programs'>
                                <h2>SAVED PROGRAMS</h2>
                                <div className='program-div'>
                                    <h4>You have no saved workout program.</h4>
                                </div>
                            </div> */}
                        </div>
                    )}

                    {changeData !== null && (
                        <form onSubmit={handleSubmit} className='user-form'>
                            <h2>My Details</h2>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="Name"
                                    value={userData.Name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Weight:
                                <input
                                    type="text"
                                    name="Weight"
                                    value={userData.Weight}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Height:
                                <input
                                    type="text"
                                    name="Height"
                                    value={userData.Height}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Age:
                                <input
                                    type="text"
                                    name="Age"
                                    value={userData.Age}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Gender:
                                <select
                                    name="Gender"
                                    value={userData.Gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>

                            <button type="submit">Save</button>
                        </form>
                    )}

                </div>



                <div class="bmi-scale">
                    <div class="bmi-label underweight">Underweight</div>
                    <div class="bmi-label normal">Normal</div>
                    <div class="bmi-label overweight">Overweight</div>
                    <div class="bmi-label obese">Obese</div>
                    <div class="bmi-pointer" id="bmiPointer"></div>
                </div>
                <p class="bmi-value">BMI: <span id="bmiValue">{bmi}</span></p>


                {/* <WorkoutPlanPage workoutId={1} saveWorkout={saveWorkout}  /> */}

            </div>

        </>
    );
};

export default User;

