import React, { useState, useEffect, useRef } from 'react';
import Navbar from './navbar';
import WorkoutSplit from './workout-splits';
import './workout-plan.css';

const WorkoutPlanPage = () => {


  //for card loading animation
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  //for push pull legs upper lower rest divs
  const [activeDiv, setActiveDiv] = useState(null);

  const handleButtonClick = (divId) => {
    var infoDivs = document.getElementsByClassName('info-div');
    var i = 0;
    setActiveDiv(divId);
    if (divId === 'div1') {
      
      for (i = 0; i < infoDivs.length; i++) {
        infoDivs[i].style.display = 'none';
      }
      const workouts = document.querySelectorAll('.workouts');
      changeHeadingText('PUSH WORKOUTS');
      workouts.forEach((element) => {
        element.style.display = 'block';

      });

    }
    if (divId === 'div2') {
      // var infoDivs = document.getElementsByClassName('info-div');
      for (i = 0; i < infoDivs.length; i++) {
        infoDivs[i].style.display = 'none';
      }
      const workouts = document.querySelectorAll('.workouts');
      changeHeadingText('PULL WORKOUTS')
      workouts.forEach((element) => {
        element.style.display = 'block';
      });
    }
    if (divId === 'div3') {
      // var infoDivs = document.getElementsByClassName('info-div');
      for (i = 0; i < infoDivs.length; i++) {
        infoDivs[i].style.display = 'none';
      }
      const workouts = document.querySelectorAll('.workouts');
      changeHeadingText('LEG WORKOUTS')
      workouts.forEach((element) => {
        element.style.display = 'block';
      });
    }
    if (divId === 'div4') {
      for (i = 0; i < infoDivs.length; i++) {
        infoDivs[i].style.display = 'none';
      }
      const workouts = document.querySelectorAll('.workouts');
      changeHeadingText('UPPER BODY WORKOUTS')
      workouts.forEach((element) => {
        element.style.display = 'block';
      });
    }
    if (divId === 'div5') {
      for (i = 0; i < infoDivs.length; i++) {
        infoDivs[i].style.display = 'none';
      }
      const workouts = document.querySelectorAll('.workouts');
      changeHeadingText('LOWER WORKOUTS')
      workouts.forEach((element) => {
        element.style.display = 'block';
      });
    }

  };

  //to change the heading when different component renders on screen
  const [headingText, setHeadingText] = useState('Workout Plans');
  const changeHeadingText = (newText) => {
    setHeadingText(newText);
  };

  // to set all the cards to display none once any card is clicked to view
  const hideCards = () => {
    const cardDivs = document.querySelectorAll('.card');
    cardDivs.forEach(div => {
      div.style.display = 'none';
    });
  };

  const [Htextnum, setHtextnum] = useState(0);

  const [isDiv1Open, setIsDiv1Open] = useState(false);
  const viewDiv1 = () => {
    toggleShortcuts();
    setIsDiv1Open(!isDiv1Open);
    changeHeadingText('6-Day Push/Pull/Legs Split');
    setHtextnum(1);
    hideCards();
  }

  const [isDiv2Open, setIsDiv2Open] = useState(false);
  const viewDiv2 = () => {
    setIsDiv2Open(!isDiv2Open);
    changeHeadingText('6-Day Upper/Lower Split');
    setHtextnum(2);
    hideCards();
  }

  const [isDiv3Open, setIsDiv3Open] = useState(false);
  const viewDiv3 = () => {
    setIsDiv3Open(!isDiv3Open);
    changeHeadingText('5-Day Push/Pull/Legs Split');
    setHtextnum(3);
    hideCards();
  }

  const [isDiv4Open, setIsDiv4Open] = useState(false);
  const viewDiv4 = () => {
    setIsDiv4Open(!isDiv4Open);
    changeHeadingText('5-Day Bro Split');
    setHtextnum(4);
    hideCards();
  }

  const [isDiv5Open, setIsDiv5Open] = useState(false);
  const viewDiv5 = () => {
    setIsDiv5Open(!isDiv5Open);
    changeHeadingText('4-Day Upper/Lower Split');
    setHtextnum(5);
    hideCards();
  }

  const [isDiv6Open, setIsDiv6Open] = useState(false);
  const viewDiv6 = () => {
    setIsDiv6Open(!isDiv6Open);
    changeHeadingText('3-Day Full-Body Split');
    setHtextnum(6);
    hideCards();
  }

  const [isDiv7Open, setIsDiv7Open] = useState(false);
  const viewDiv7 = () => {
    setIsDiv7Open(!isDiv7Open);
    changeHeadingText('5-Day Push/Pull/Legs/Upper/Lower');
    setHtextnum(7);
    hideCards();
  }

  const close = () => {
    setIsDiv1Open(false);
    setIsDiv2Open(false);
    setIsDiv3Open(false);
    setIsDiv4Open(false);
    setIsDiv5Open(false);
    setIsDiv6Open(false);
    setIsDiv7Open(false);

    changeHeadingText("Workout Plans");

    const cardDivs = document.querySelectorAll('.card');
    cardDivs.forEach(div => {
      div.style.display = 'inline';
    });
  }

  const [hideShortcuts, setHideShortcuts] = useState(false);

  const toggleShortcuts = () => {
    setHideShortcuts(!hideShortcuts);
  };


  const programRef = useRef(null);
  const getstartedRef = useRef(null);

  const scrollToProgram = () => {
    
      if (programRef.current) {
        programRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    


  }

  const scrollTogetstarted = () => {
    if(getstartedRef.current){
      getstartedRef.current.scrollIntoView({behavior:'smooth'});
    }
  }
  


  return (

    <div className='workoutplan-body'>
      <Navbar />

      <div className='top-div'>
        <h1>{headingText}</h1>
      </div>

      <div className="card-container">

        <WorkoutSplit activeDiv={activeDiv} changeHeading={changeHeadingText} Htextnum={Htextnum} />

        <div className={`shortcuts-show ${hideShortcuts ? 'shortcuts-hide' : ''}`}>
                <button onClick={scrollToProgram}>Program Overview</button>
                <button onClick={scrollTogetstarted}>Get Started</button>
        </div>

        {isDiv1Open &&
          <div className='info-div'>
            {/* <WorkoutSplit activeDiv={activeDiv} changeHeading={changeHeadingText} /> */}
            <button className='content-btn' onClick={close} ></button>
            <div className='split-bg'>
              <img src={require('../Resources/workout-split/workout 1.webp')} alt="fafad" />
            </div>
            <div className='split-content'>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A PPL split is a simple training schedule that trains different muscle groups on different days of the week.</li>
                  <li>Breaking up workouts into push, pull, and legs maximizes work and rest to help you make gains. </li>
                  <li>PPL splits prioritize movement over individual muscle groups to effectively build functional strength.</li>
                  <li>The PPL split allows for flexibility in training by allowing you to customize exercises for each muscle group.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span >H</span>it the gym consistently, and you’ll see some pretty questionable things—from gym bros chasing a pump to attention seekers ego lifting. For every few phone scrollers, you’ll catch a unicorn: headphones on, head down, putting in the work.</p>
                <p>If they’re always pumping iron, with the muscle to show for it, you can guarantee they’re following a structured workout routine. There are endless ways to break it down. One of the best? The “Push Pull Legs” (PPL) split.</p>
                <p>Praised for its simplicity and attention to movement (as opposed to focusing on individual muscle groups like a bro split), the PPL split is one of the most popular ways to program your workouts. Even better, in a sea of Reddit threads arguing over which split is the best, few have anything negative to say about a PPL routine.</p>
                <p>What’s so great about a PPL split and exactly how do you use it for maximum muscle gains? Everything you need to know is below.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Targeted Muscle Groups:</strong> By focusing on push exercises (such as chest, shoulders, and triceps) on one day, pull exercises (such as back and biceps) on another day, and leg exercises (such as quads, hamstrings, and calves) on a separate day, the Push/Pull/Legs Split allows you to target specific muscle groups more intensely.</li>
                  <li><strong>Increased Volume and Frequency:</strong> Training each muscle group twice a week allows for increased training volume and frequency, leading to better muscle development, strength gains, and overall progress.</li>
                  <li><strong>Variety and Balanced Training:</strong> The split ensures a balanced approach to training by incorporating a variety of exercises that engage different muscle groups, promoting overall muscle balance, symmetry, and preventing muscle imbalances.</li>
                  <li><strong>Enhanced Recovery:</strong> By alternating between push, pull, and leg days, the Push/Pull/Legs Split provides adequate rest and recovery for each muscle group, reducing the risk of overtraining and allowing for optimal muscle repair and growth.</li>
                  <li><strong>Progressive Overload:</strong> The split allows for gradual progression by increasing the intensity, weight, or reps over time, stimulating muscle adaptation and continued progress.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a PPL Split?</h3>
                <p>A PPL split is a workout program designed to build muscle in almost every single muscle group by splitting different movements (and thus, major muscle groups) into distinct days of the week. On certain days you train your upper body pushing muscles (push), upper body pulling muscles (pull), or your lower body (legs). Like so:</p>
                <ul>
                  <li>Day #1, Push: Chest, shoulders, triceps</li>
                  <li>Day #2, Pull: Back, biceps</li>
                  <li>Day #3, Legs: Legs, glutes, abs</li>
                  <li>Day #4, Push: Chest, shoulders, triceps</li>
                  <li>Day #5, Pull: Back, biceps</li>
                  <li>Day #6, Legs: Legs, glutes, abs</li>
                  <li>Day #7, Rest</li>
                </ul>
              </div>
            </div>


            <div className='workout-split'>
              <h2>Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>
          </div>}

        {isDiv2Open &&
          <div className='info-div'>
            <p className='divnumber' style={{ display: 'none' }}>2</p>
            <button className='content-btn' onClick={close}></button>
            <div className='split-bg'>
              <img src={require('../Resources/workout-split/workout 2.jpg')} alt="fafad" />
            </div>
            <div className='split-content'>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A 6-day upper/lower split is a training schedule that alternates between upper body and lower body workouts on different days of the week.</li>
                  <li>Breaking up workouts into upper and lower body sessions allows for targeted training and sufficient recovery.</li>
                  <li>Upper/lower splits are effective for building overall strength and muscle mass.</li>
                  <li>This split provides flexibility to customize exercises for each body part.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span>H</span>aving a well-structured workout routine is essential for making progress in the gym. One popular training split that many athletes and fitness enthusiasts follow is the 6-day upper/lower split.</p>
                <p>This split is highly regarded for its ability to target both the upper and lower body effectively, providing ample recovery time between sessions. By dedicating specific days to each body part, you can focus on developing strength and muscle mass in a balanced manner.</p>
                <p>Curious about the benefits and details of a 6-day upper/lower split? Read on to discover everything you need to know.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Targeted Upper and Lower Body Training:</strong> The split allows you to focus on training the upper body (including chest, back, shoulders, and arms) on certain days and the lower body (including legs and glutes) on other days, ensuring specific muscle groups receive adequate attention.</li>
                  <li><strong>Increased Training Frequency:</strong> With a 6-day split, you can train each body part twice a week, leading to increased training frequency and volume. This promotes muscle development, strength gains, and overall progress.</li>
                  <li><strong>Variety and Balanced Development:</strong> By incorporating a variety of exercises for both the upper and lower body, the split allows for a well-rounded and balanced approach to training. This helps prevent muscle imbalances and promotes symmetry and overall muscular development.</li>
                  <li><strong>Optimal Recovery:</strong> By alternating between upper and lower body workouts, you provide adequate rest and recovery for each muscle group. This helps reduce the risk of overtraining and allows for optimal muscle repair and growth.</li>
                  <li><strong>Progressive Overload:</strong> The split enables you to progressively increase the intensity, weight, or reps over time, facilitating continuous muscle adaptation and ongoing progress.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a 6-Day Upper/Lower Split?</h3>
                <p>A 6-day upper/lower split is a workout program that alternates between upper body and lower body workouts on different days of the week. It typically follows the following pattern:</p>
                <ul>
                  <li>Day #1, Upper Body: Chest, shoulders, triceps, back, biceps</li>
                  <li>Day #2, Lower Body: Legs, glutes, abs</li>
                  <li>Day #3, Rest</li>
                  <li>Day #4, Upper Body: Chest, shoulders, triceps, back, biceps</li>
                  <li>Day #5, Lower Body: Legs, glutes, abs</li>
                  <li>Day #6, Rest</li>
                  <li>Day #7, Rest</li>
                </ul>
                <p>This split allows for dedicated training sessions for both the upper and lower body, targeting major muscle groups in each area. It also provides rest days to allow for recovery and avoid overtraining.</p>
              </div>
            </div>

            <div className='workout-split'>
              <h2> Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='upper-icon' onClick={() => handleButtonClick('div4')}><p>UPPER BODY</p></button>
                <button className='lower-icon' onClick={() => handleButtonClick('div5')}><p>LOWER BODY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

          </div>}

        {isDiv3Open &&
          <div className='info-div'>
            <button className='content-btn' onClick={close}></button>
            <div className='split-bg'>
              <img src={require('../Resources/workout-split/workout 3.webp')} alt="fafad" />
            </div>
            <div className='split-content'>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A 5-day push/pull/legs split is a training schedule that divides workouts into push, pull, and leg days on different days of the week.</li>
                  <li>Push days focus on training the muscles involved in pushing movements, pull days target the muscles used in pulling movements, and leg days concentrate on the lower body.</li>
                  <li>This split allows for targeted training of specific muscle groups while providing adequate rest and recovery.</li>
                  <li>Customization of exercises and intensity levels is possible within each training day.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span>H</span>aving a well-organized workout routine can greatly enhance your progress in the gym. One popular training split that is widely adopted by fitness enthusiasts is the 5-day push/pull/legs split.</p>
                <p>This split is highly regarded for its ability to target different muscle groups effectively, allowing for optimal muscle development and strength gains. By dividing workouts into push, pull, and leg days, you can ensure each muscle group receives sufficient attention and rest.</p>
                <p>Interested in the benefits and details of a 5-day push/pull/legs split? Keep reading to discover all the important information.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Targeted Muscle Group Training:</strong> The split dedicates specific days to train the muscles involved in pushing movements (such as chest, shoulders, and triceps) on push days, pulling movements (such as back and biceps) on pull days, and the lower body (including legs, glutes, and abs) on leg days. This targeted approach allows for focused training of each muscle group.</li>
                  <li><strong>Optimized Volume and Frequency:</strong> Training each muscle group once a week on a 5-day split allows for increased training volume and frequency compared to traditional bro splits. This enhanced frequency promotes better muscle development, strength gains, and overall progress.</li>
                  <li><strong>Varied and Balanced Training:</strong> The split incorporates a variety of exercises that engage different muscle groups, promoting overall muscle balance, symmetry, and preventing imbalances. This balanced training approach contributes to functional strength and overall fitness.</li>
                  <li><strong>Effective Rest and Recovery:</strong> By alternating between push, pull, and leg days, the split ensures that each muscle group has sufficient rest and recovery time. This reduces the risk of overtraining and allows for optimal muscle repair and growth.</li>
                  <li><strong>Progressive Overload:</strong> The split allows for progressive overload by gradually increasing the intensity, weight, or reps over time. This promotes muscle adaptation and continued progress.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a 5-Day Push/Pull/Legs Split?</h3>
                <p>A 5-day push/pull/legs split is a workout program that divides training sessions into push exercises, pull exercises, and leg exercises across five days of the week. It typically follows the following pattern:</p>
                <ul>
                  <li>Day #1, Push: Chest, shoulders, triceps</li>
                  <li>Day #2, Pull: Back, biceps</li>
                  <li>Day #3, Legs: Quads, hamstrings, calves</li>
                  <li>Day #4, Rest</li>
                  <li>Day #5, Push: Chest, shoulders, triceps</li>
                  <li>Day #6, Pull: Back, biceps</li>
                  <li>Day #7, Rest</li>
                </ul>
                <p>This split allows for targeted training of different muscle groups and movement patterns throughout the week. It also provides rest days to allow for recovery and avoid overtraining.</p>
              </div>
            </div>

            <div className='workout-split'>
              <h2>Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>


            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div5')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div5')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div5')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

          </div>}

        {isDiv4Open &&
          <div className='info-div'>
            <button className='content-btn' onClick={close}></button>
            <div className='split-bg'>
              <img src={require('../Resources/workout-split/workout 4.webp')} alt="fafad" />
            </div>
            <div className='split-content'>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A 5-day bro split is a training schedule that focuses on training individual muscle groups on different days of the week.</li>
                  <li>The bro split is popular among bodybuilders and emphasizes isolation exercises for maximum muscle hypertrophy.</li>
                  <li>This split allows for high volume and intensity on each muscle group.</li>
                  <li>Rest days are incorporated to allow for recovery and muscle growth.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span>H</span>ave you ever come across a gym enthusiast who seems to prioritize individual muscle groups with dedicated training sessions? They might be following a 5-day bro split, a popular workout routine among bodybuilders.</p>
                <p>The bro split is characterized by targeting specific muscle groups on different days of the week, focusing on isolation exercises for maximum muscle hypertrophy. While opinions on the effectiveness of the bro split may vary, it remains a widely practiced training method.</p>
                <p>If you're curious about the benefits and structure of a 5-day bro split, keep reading to learn more.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Targeted Muscle Group Training:</strong> The bro split allows you to dedicate an entire training session to a specific muscle group, ensuring it receives maximum attention and stimulation.</li>
                  <li><strong>High Volume and Intensity:</strong> By focusing on a single muscle group per session, you can incorporate a higher volume of exercises and target the muscles with greater intensity.</li>
                  <li><strong>Isolation Exercises for Hypertrophy:</strong> The bro split typically emphasizes isolation exercises, which specifically target individual muscles, promoting hypertrophy (muscle growth) in those areas.</li>
                  <li><strong>Rest and Recovery:</strong> Rest days are incorporated into the split to allow for adequate recovery and muscle growth. This helps prevent overtraining and supports overall fitness progress.</li>
                  <li><strong>Flexibility in Exercise Selection:</strong> With the bro split, you have the flexibility to choose exercises that target each muscle group according to your preferences and goals.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a 5-Day Bro Split?</h3>
                <p>A 5-day bro split is a workout program that targets individual muscle groups on different days of the week. It typically follows the following pattern:</p>
                <ul>
                  <li>Day #1, Chest: Chest exercises (e.g., bench press, dumbbell flyes)</li>
                  <li>Day #2, Back: Back exercises (e.g., pull-ups, bent-over rows)</li>
                  <li>Day #3, Legs: Leg exercises (e.g., squats, lunges)</li>
                  <li>Day #4, Shoulders: Shoulder exercises (e.g., overhead press, lateral raises)</li>
                  <li>Day #5, Arms: Arm exercises (e.g., bicep curls, tricep pushdowns)</li>
                  <li>Day #6, Rest</li>
                  <li>Day #7, Rest</li>
                </ul>
                <p>This split allows for targeted training of individual muscle groups, allowing for a higher level of volume and potentially greater muscle development. It also provides rest days for recovery and growth.</p>
              </div>
            </div>

            <div className='workout-split'>
              <h2>Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div5')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div5')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div5')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

          </div>}

        {isDiv5Open &&
          <div className='info-div'>
            <button className='content-btn' onClick={close}></button>
            <div className='split-bg ' >
              <img src={require('../Resources/workout-split/workout 5.avif')} alt="fafad" />
            </div>
            <div className='split-content program' ref={programRef}>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A 4-day upper/lower split is a training schedule that alternates between upper body and lower body workouts on different days of the week.</li>
                  <li>Breaking up workouts into upper and lower body sessions allows for targeted training and sufficient recovery.</li>
                  <li>Upper/lower splits are effective for building overall strength and muscle mass.</li>
                  <li>This split provides flexibility to customize exercises for each body part.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span>H</span>aving a well-structured workout routine is essential for making progress in the gym. One popular training split that many athletes and fitness enthusiasts follow is the 4-day upper/lower split.</p>
                <p>This split is highly regarded for its ability to target both the upper and lower body effectively while providing sufficient recovery time between sessions. By dedicating specific days to each body part, you can focus on developing strength and muscle mass in a balanced manner.</p>
                <p>Curious about the benefits and details of a 4-day upper/lower split? Read on to discover everything you need to know.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Targeted Upper and Lower Body Training:</strong> The split allows you to focus on training the upper body (including chest, back, shoulders, and arms) on certain days and the lower body (including legs and glutes) on other days, ensuring specific muscle groups receive adequate attention.</li>
                  <li><strong>Increased Training Frequency:</strong> With a 4-day split, you can train each body part twice a week, leading to increased training frequency and volume. This promotes muscle development, strength gains, and overall progress.</li>
                  <li><strong>Variety and Balanced Development:</strong> By incorporating a variety of exercises for both the upper and lower body, the split allows for a well-rounded and balanced approach to training. This helps prevent muscle imbalances and promotes symmetry and overall muscular development.</li>
                  <li><strong>Optimal Recovery:</strong> By alternating between upper and lower body workouts, you provide adequate rest and recovery for each muscle group. This helps reduce the risk of overtraining and allows for optimal muscle repair and growth.</li>
                  <li><strong>Progressive Overload:</strong> The split enables you to progressively increase the intensity, weight, or reps over time, facilitating continuous muscle adaptation and ongoing progress.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a 4-Day Upper/Lower Split?</h3>
                <p>A 4-day upper/lower split is a workout program that divides training sessions into upper body and lower body workouts on alternating days. It typically follows the following pattern:</p>
                <ul>
                  <li>Day #1, Upper Body: Chest, shoulders, triceps, back, biceps</li>
                  <li>Day #2, Lower Body: Legs, glutes, abs</li>
                  <li>Day #3, Rest</li>
                  <li>Day #4, Upper Body: Chest, shoulders, triceps, back, biceps</li>
                  <li>Day #5, Lower Body: Legs, glutes, abs</li>
                  <li>Day #6, Rest</li>
                  <li>Day #7, Rest</li>
                </ul>
                <p>This split allows for dedicated training sessions for both the upper and lower body, targeting major muscle groups in each area. It also provides rest days to allow for recovery and avoid overtraining.</p>
              </div>

            </div>

            <div className='workout-split getstarted' ref={getstartedRef}>
              <h2> Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div5')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div5')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div5')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

          </div>}

        {isDiv6Open &&
          <div className='info-div'>
            <button className='content-btn' onClick={close}></button>
            <div className='split-bg'>
              <img src={require('../Resources/workout-split/workout 7.jfif')} alt="fafad" />
            </div>
            <div className='split-content'>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A 3-day full-body split is a training schedule that involves working out the entire body in each session.</li>
                  <li>Each workout focuses on different exercises and muscle groups to ensure comprehensive training.</li>
                  <li>Full-body splits are effective for building overall strength, muscle mass, and improving overall fitness.</li>
                  <li>This split provides flexibility to customize exercises based on individual goals and preferences.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span>H</span>aving a well-designed workout routine is crucial for achieving fitness goals. One popular training split that many individuals follow is the 3-day full-body split.</p>
                <p>This split is highly regarded for its ability to target the entire body in each session, ensuring comprehensive training and efficient use of time. By incorporating different exercises and targeting various muscle groups, you can build overall strength, increase muscle mass, and improve overall fitness.</p>
                <p>Curious about the benefits and details of a 3-day full-body split? Read on to discover everything you need to know.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Comprehensive Full-Body Training:</strong> The split allows you to work out all major muscle groups in each session, ensuring balanced development and overall fitness.</li>
                  <li><strong>Increased Training Frequency:</strong> With a 3-day split, you can train the entire body three times a week, providing adequate stimulus for muscle growth and strength gains.</li>
                  <li><strong>Efficient Use of Time:</strong> Full-body splits are time-efficient since you don't have to dedicate separate days to specific muscle groups. It is ideal for individuals with limited time for workouts.</li>
                  <li><strong>Variety and Balanced Development:</strong> By including a variety of exercises that target different muscle groups, the split allows for a well-rounded and balanced approach to training, preventing muscle imbalances.</li>
                  <li><strong>Optimal Recovery:</strong> By having rest days between sessions, the split provides adequate recovery time for muscle repair and growth.</li>
                  <li><strong>Flexibility in Exercise Selection:</strong> The split provides flexibility to customize exercises based on individual goals and preferences, allowing you to prioritize specific muscle groups or focus on compound movements.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a 3-Day Full-Body Split?</h3>
                <p>A 3-day full-body split is a workout program that involves training the entire body in each session. It typically follows the following pattern:</p>
                <ul>
                  <li>Day #1: Full-Body Workout</li>
                  <li>Day #2: Rest</li>
                  <li>Day #3: Full-Body Workout</li>
                  <li>Day #4: Rest</li>
                  <li>Day #5: Full-Body Workout</li>
                  <li>Day #6: Rest</li>
                  <li>Day #7: Rest</li>
                </ul>
                <p>During each full-body workout, you will include exercises that target different muscle groups. This split allows for comprehensive training of the entire body while providing sufficient rest days for recovery.</p>

              </div>

            </div>

            <div className='workout-split'>
              <h2> Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div5')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div5')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div5')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

          </div>}

        {isDiv7Open &&
          <div className='info-div'>
            <button className='content-btn' onClick={close}></button>
            <div className='split-bg'>
              <img src={require('../Resources/workout-split/workout 8.webp')} alt="fafad" />
            </div>
            <div className='split-content'>
              <div className='fast-facts'>
                <h3>Fast Facts</h3>
                <ul>
                  <li>A 5-day push/pull/legs/upper/lower split is a training schedule that divides workouts into specific movement patterns and body parts across five days of the week.</li>
                  <li>It combines the benefits of push, pull, legs, upper body, and lower body training for a comprehensive workout routine.</li>
                  <li>This split allows for targeted training of different muscle groups while providing adequate rest and recovery.</li>
                  <li>It provides flexibility to customize exercises and prioritize individual fitness goals.</li>
                </ul>
              </div>
              <div className='about-split'>
                <p><span>H</span>aving a well-structured workout routine is key to achieving fitness goals. One effective training split that combines various training styles is the 5-day push/pull/legs/upper/lower split.</p>
                <p>This split integrates push exercises, pull exercises, leg workouts, upper body training, and lower body training across the week. It provides a comprehensive approach to building strength, increasing muscle mass, and improving overall fitness.</p>
                <p>Curious about the benefits and details of the 5-day push/pull/legs/upper/lower split? Read on to discover everything you need to know.</p>
              </div>
              <br />
              <div className='benefits'>
                <h3>Benefits:</h3>
                <ul>
                  <li><strong>Targeted Training of Different Muscle Groups:</strong> The split allows you to focus on specific muscle groups and movement patterns each day, promoting targeted muscle development and improved strength.</li>
                  <li><strong>Variety and Balanced Development:</strong> By incorporating push, pull, leg, upper body, and lower body workouts, the split ensures a well-rounded and balanced approach to training, preventing muscle imbalances and promoting overall symmetry.</li>
                  <li><strong>Increased Training Frequency:</strong> With a 5-day split, you can train each muscle group and movement pattern once a week, providing adequate stimulus for muscle growth and strength gains.</li>
                  <li><strong>Optimal Rest and Recovery:</strong> The split allows for rest days between different training sessions, ensuring adequate recovery for each muscle group and minimizing the risk of overtraining.</li>
                  <li><strong>Flexibility in Exercise Selection:</strong> The split provides flexibility to customize exercises based on individual goals and preferences, allowing you to prioritize specific muscle groups or focus on compound movements.</li>
                  <li><strong>Progressive Overload:</strong> By gradually increasing the intensity, weight, or reps over time, the split facilitates continuous muscle adaptation and ongoing progress.</li>
                </ul>
              </div>

              <div className='about-split'>
                <h3>What Is a 5-Day Push/Pull/Legs/Upper/Lower Split?</h3>
                <p>A 5-day push/pull/legs/upper/lower split is a workout program that divides training sessions into specific movement patterns and body parts across five days of the week. It typically follows the following pattern:</p>
                <ul>
                  <li>Day #1, Push: Chest, shoulders, triceps</li>
                  <li>Day #2, Pull: Back, biceps</li>
                  <li>Day #3, Legs: Quads, hamstrings, calves</li>
                  <li>Day #4, Upper Body: Chest, shoulders, back, biceps, triceps</li>
                  <li>Day #5, Lower Body: Quads, hamstrings, glutes, calves</li>
                  <li>Day #6, Rest</li>
                  <li>Day #7, Rest</li>
                </ul>
                <p>This split allows for targeted training of different muscle groups and movement patterns throughout the week, providing ample rest and recovery between sessions. It also offers flexibility to customize exercises based on individual goals and preferences.</p>
              </div>


            </div>

            <div className='workout-split'>
              <h2> Workout Schedule</h2>
              <div className='heading'><h2>Week 1</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 2</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 3</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div1')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div2')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div3')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

            <div className='workout-split'>
              <div className='heading'><h2>Week 4</h2>
              </div>
              <div className='workout-day'>
                <button className='push-icon' onClick={() => handleButtonClick('div5')}><p>PUSH DAY</p> </button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='pull-icon' onClick={() => handleButtonClick('div5')}><p>PULL DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='legs-icon' onClick={() => handleButtonClick('div5')}><p>LEGS DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
                <button className='rest-icon'><p>REST DAY</p></button>
              </div>
            </div>

          </div>}


        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/3 days.jpg')} alt='6 days push pull ' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Push-Pull-Legs Split</h3>
            <div className={isLoading ? 'shineAnimation ' : 'days'}>6 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47 show-button'} onClick={viewDiv1} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/4 days.jpg')} alt='6 day upper lower' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Upper-Lower Split</h3>
            <div className={isLoading ? 'shineAnimation' : 'days'}>5 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47'} onClick={viewDiv2} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/5 days.jpg')} alt='5 day bulking' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Push-Pull-Legs Split</h3>
            <div className={isLoading ? 'shineAnimation' : 'days'}>4 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47'} onClick={viewDiv3} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/6 days.jpg')} alt='5 day bro split' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Bro Split</h3>
            <div className={isLoading ? 'shineAnimation' : 'days'}>3 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47'} onClick={viewDiv4} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/bro-split.jpg')} alt='4 day' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Upper-Lower Split</h3>
            <div className={isLoading ? 'shineAnimation' : 'days'}>3 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47'} onClick={viewDiv5} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/thumb 6.jpg')} alt='3 days full' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Full-Body Split</h3>
            <div className={isLoading ? 'shineAnimation' : 'days'}>3 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47'} onClick={viewDiv6} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            {isLoading ? <div className="shineAnimation"></div> : <img src={require('../Resources/Workout-plan/thumb 8.jpg')} alt='advanced' />}
          </div>
          <div className="cardInfo">
            <h3 className={isLoading ? 'shineAnimation' : ''}>Push-Pull-Legs-Upper-Lower</h3>
            <div className={isLoading ? 'shineAnimation' : 'days'}>3 day</div>
            <button className={isLoading ? 'button-47 shineAnimation' : 'button-47 '} onClick={viewDiv7} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'VIEW'}
            </button>
            <button className={isLoading ? "button-47 shineAnimation" : 'button-47'} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'SAVE'}
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default WorkoutPlanPage;
