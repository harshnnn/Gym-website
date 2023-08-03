import { useState } from "react";
import React from 'react';
import ExerciseData from "./ExerciseData";
import {
    expandedBicepDiv,
    expandedDeltDiv,
    expandedForearmDiv,
    expandedTricepsDiv,
    expandedTrapsDiv,
    expandedLatsDiv,
    expandedAbsDiv,
    expandedObliqueDiv,
    expandedPectorialDiv,
    expandedAdductorDiv,
    expandedClaveDiv,
    expandedHamstringDiv,
    expandedGluteDiv,
    expandedQuadDiv,
} from "./ExerciseData";

const WorkoutSplit = ({ activeDiv, changeHeading, Htextnum }) => {



    const bicepGif = ExerciseData.biceps.gifs;
    const bicepText = ExerciseData.biceps.texts;
    const deltGif = ExerciseData.delts.gifs;
    const deltText = ExerciseData.delts.texts;
    const forearmGif = ExerciseData.forearms.gifs;
    const forearmText = ExerciseData.forearms.texts;
    const tricepGif = ExerciseData.triceps.gifs;
    const tricepText = ExerciseData.triceps.texts;
    const trapsGif = ExerciseData.traps.gifs;
    const trapText = ExerciseData.traps.texts;
    const latsGif = ExerciseData.lats.gifs;
    const latsText = ExerciseData.lats.texts;
    const absGif = ExerciseData.abs.gifs;
    const absText = ExerciseData.abs.texts;
    const obliqueGif = ExerciseData.obliques.gifs;
    const obliqueText = ExerciseData.obliques.texts;
    const pectsGif = ExerciseData.pectorals.gifs
    const pectsText = ExerciseData.pectorals.texts
    const adductorGif = ExerciseData.adductors.gifs
    const adductorText = ExerciseData.adductors.texts
    const calveGif = ExerciseData.calves.gifs
    const calveText = ExerciseData.calves.texts
    const hamstringGif = ExerciseData.hamstrings.gifs
    const hamstringText = ExerciseData.hamstrings.texts
    const gluteGif = ExerciseData.glutes.gifs
    const gluteText = ExerciseData.glutes.texts
    const quadGif = ExerciseData.quads.gifs
    const quadText = ExerciseData.quads.texts

    const indicesToShow = [1, 2, 4];


    const handlebuttonclick = () => {
        var infoDivs = document.getElementsByClassName('info-div');
        for (var i = 0; i < infoDivs.length; i++) {
            //setting the parent div to block form display none(because i set it do display none on clicking the workout buttons)
            infoDivs[i].style.display = 'block';
        }
        const workouts = document.querySelectorAll('.workouts');
        workouts.forEach((element) => {
            element.style.display = 'none';
        });
        if (Htextnum === 1) {
            changeHeading('6-Day Push/Pull/Legs Split');
        }
        if (Htextnum === 2) {
            changeHeading('6-Day Upper/Lower Split');
        }
        if (Htextnum === 3) {
            changeHeading('5-Day Push/Pull/Legs Split');
        }
        if (Htextnum === 4) {
            changeHeading('5-Day Bro Split');
        }
        if (Htextnum === 5) {
            changeHeading('4-Day Upper/Lower Split');
        }
        if (Htextnum === 6) {
            changeHeading('3-Day Full-Body Split');
        }
        if (Htextnum === 7) {
            changeHeading('5-Day Push/Pull/Legs/Upper/Lower');
        }

    };




    return (
        <> 
            {activeDiv === 'div1' &&
                
                <div className='push-workouts workouts'>
                    
                    <button className='content-btn' onClick={handlebuttonclick}></button>
                    <div className='workouts-body'>

                        <div className="exercise">
                            {pectsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}


                        </div>

                        <div className="exercise">
                            {deltGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>

                        <div className="exercise">
                            <h3>Close Grip Bench Press</h3>
                            {tricepGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>
                    </div>

                </div>
            }


            {activeDiv === 'div2' &&
                <div className='pull-workouts workouts'>
                    <button className='content-btn' onClick={handlebuttonclick}></button>
                    <div className='workouts-body'>

                        <div className="exercise">
                            {latsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}


                        </div>

                        <div className="exercise">
                            {bicepGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>

                        <div className="exercise">
                            <h3>Close Grip Bench Press</h3>
                            {trapsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>
                    </div>

                </div>
            }

            {activeDiv === 'div3' &&
                <div className='leg-workouts workouts'>
                    <button className='content-btn' onClick={handlebuttonclick}></button>
                    <div className='workouts-body'>

                        <div className="exercise">
                            {latsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}


                        </div>

                        <div className="exercise">
                            {bicepGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>

                        <div className="exercise">
                            <h3>Close Grip Bench Press</h3>
                            {trapsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>
                    </div>

                </div>
            }

            {activeDiv === 'div4' &&

                <div className='upper-workouts workouts'>
                    <button className='content-btn' onClick={handlebuttonclick}></button>
                    <div className='workouts-body'>

                        <div className="exercise">
                            {latsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}


                        </div>

                        <div className="exercise">
                            {bicepGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>

                        <div className="exercise">
                            <h3>Close Grip Bench Press</h3>
                            {trapsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>
                    </div>

                </div>
            }

            {activeDiv === 'div5' &&
                <div className='lower-workouts workouts'>
                    <button className='content-btn' onClick={handlebuttonclick}></button>
                    <div className='workouts-body'>

                        <div className="exercise">
                            {latsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}


                        </div>

                        <div className="exercise">
                            {bicepGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>

                        <div className="exercise">
                            <h3>Close Grip Bench Press</h3>
                            {trapsGif.map((images, index) => (
                                indicesToShow.includes(index) && (<div key={index} >

                                    {index === 1 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 1</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 2</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className='main-info'>
                                            <div className='exersise-count'>
                                                <p>Exercise 3</p>
                                            </div>
                                            <div className='exersise-title'>
                                                <p>Inclined Dumbbell Press</p>
                                            </div>
                                            <div className='exersise-equipment'>
                                                <p>Dumbbells, Full Gym	</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        key={index}
                                        src={images}
                                        alt={`Chest exercise ${index}`}
                                    />

                                    {index === 1 && (

                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>

                                    )}
                                    {index === 2 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>8, 8, 8, 8</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div className="exercise-info">
                                            <div>
                                                <p>4</p>
                                                <label>SETS</label>
                                            </div>
                                            <div>
                                                <p>10, 10, 10, 10</p>
                                                <label>REPS</label>
                                            </div>
                                            <div>
                                                <p>45-60"</p>
                                                <label>REST</label>
                                            </div>
                                        </div>
                                    )}
                                </div>)
                            ))}

                        </div>
                    </div>

                </div>
            }
        </>

    )
}

export default WorkoutSplit;