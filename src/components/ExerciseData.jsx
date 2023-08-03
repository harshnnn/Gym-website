import React, { useState } from 'react';

const bicepGif = [
    require('../Resources/Biceps/biceps 1.gif'),
    require('../Resources/Biceps/biceps 2.gif'),
    require('../Resources/Biceps/biceps 3.gif'),
    require('../Resources/Biceps/biceps 4.gif'),
    require('../Resources/Biceps/biceps 5.gif'),
];

const deltGif = [
    require('../Resources/Delts/front delt 1.gif'),
    require('../Resources/Delts/front delt 2.gif'),
    require('../Resources/Delts/side delt 1.gif'),
    require('../Resources/Delts/side delt 2.gif'),
    require('../Resources/Delts/rear delt 1.gif'),
];

const forearmGif = [
    require('../Resources/Forearms/forearms-1gif.gif'),
    require('../Resources/Forearms/forearms-2.gif'),
    require('../Resources/Forearms/forearms-3.gif'),
    require('../Resources/Forearms/forearms-4.gif'),
    require('../Resources/Forearms/forearms-5.gif'),
];

const tricepGif = [
    require('../Resources/Triceps/triceps 1.gif'),
    require('../Resources/Triceps/triceps 2.gif'),
    require('../Resources/Triceps/triceps 3.gif'),
    require('../Resources/Triceps/triceps 4.gif'),
    require('../Resources/Triceps/triceps 5.gif'),
];

const trapsGif = [
    require('../Resources/Back/upper traps 1.gif'),
    require('../Resources/Back/upper traps 2.gif'),
    require('../Resources/Back/mid traps 1.gif'),
    require('../Resources/Back/mid traps 2.gif'),
    require('../Resources/Back/lower trap.gif'),
];

const latsGif = [
    require('../Resources/Back/back 1.gif'),
    require('../Resources/Back/back 2.gif'),
    require('../Resources/Back/back 3.gif'),
    require('../Resources/Back/back 4.gif'),
    require('../Resources/Back/back 5.gif'),
];

const absGif = [
    require('../Resources/Core/abs 1.gif'),
    require('../Resources/Core/abs 2.gif'),
    require('../Resources/Core/abs 3.gif'),
    require('../Resources/Core/abs 4.gif'),
    require('../Resources/Core/abs 5.gif'),
];

const obliqueGif = [
    require('../Resources/Core/obliques 1.gif'),
    require('../Resources/Core/obliques 2.gif'),
    require('../Resources/Core/obliques 3.gif'),
    require('../Resources/Core/obliques 4.gif'),
    require('../Resources/Core/obliques 5.gif'),
];

const pectsGif = [
    require('../Resources/Chest/chest.gif'),
    require('../Resources/Chest/chest 2.gif'),
    require('../Resources/Chest/chest 3.gif'),
    require('../Resources/Chest/chest 4.gif'),
    require('../Resources/Chest/chest 5.gif'),
];

const adductorGif = [
    require('../Resources/Legs/adductors 1.gif'),
    require('../Resources/Legs/adductors 2.gif'),
    require('../Resources/Legs/adductors 3.gif'),
    require('../Resources/Legs/adductors 4.gif'),
    require('../Resources/Legs/adductors 5.gif'),
];

const calveGif = [
    require('../Resources/Legs/calves 1.gif'),
    require('../Resources/Legs/calves 2.gif'),
    require('../Resources/Legs/calves 3.gif'),
    require('../Resources/Legs/calves 4.gif'),
    require('../Resources/Legs/calves 5.gif'),
];

const hamstringGif = [
    require('../Resources/Legs/hamstrings 1.gif'),
    require('../Resources/Legs/hamstrings 2.gif'),
    require('../Resources/Legs/hamstrings 3.gif'),
    require('../Resources/Legs/hamstrings 4.gif'),
    require('../Resources/Legs/hamstrings 5.gif'),
];

const gluteGif = [
    require('../Resources/Legs/glutes 1.gif'),
    require('../Resources/Legs/glutes 2.gif'),
    require('../Resources/Legs/glutes 3.gif'),
    require('../Resources/Legs/glutes 4.gif'),
    require('../Resources/Legs/glutes 5.gif'),
];

const quadGif = [
    require('../Resources/Legs/quads 1.gif'),
    require('../Resources/Legs/quads 2.gif'),
    require('../Resources/Legs/quads 3.gif'),
    require('../Resources/Legs/quads 4.gif'),
    require('../Resources/Legs/quads 5.gif'),
];

// Exercise Names
const bicepText = [
    "CONCENTRATION CURL",
    "EZ-BAR CURL",
    "BARBELL PREACHER CURL",
    "SEATED HAMMER CURL",
    "SEATED INCLINE DUMBBELL CURL",
];

const deltText = [
    "DUMBBELL SHOULDER PRESS",
    "Machine Shoulder Press",
    "DUMBBELL LATERAL RAISE",
    "INCLINE DUMBBELL SIDE LATERAL RAISE",
    "REAR DELT FLY MACHINE ",
];

const forearmText = [
    "WRIST ROLLER",
    "DUMBBELL SEATED NEUTRAL WRIST CURL",
    "BARBELL REVERSE WRIST CURL",
    "WRIST CURL",
    "REVERSE GRIP EZ-BAR CURL",

];

const tricepText = [
    "ROPE PUSHDOWN",
    "CABLE ROPE OVERHEAD TRICEPS EXTENSION",
    "CLOSE GRIP BENCH PRESS",
    "DECLINE CLOSE-GRIP BENCH TO SKULL CRUSHER",
    "HIGH PULLEY OVERHEAD TRICEP EXTENSION",
];

const trapText = [
    "DUMBBELL SHRUG",
    "BARBELL SHRUG",
    "CABLE UPRIGHT ROW",
    "KNEELING HIGH PULLEY ROW",
    "INCLINED DUMBBELL Y RAISE",
];

const latsText = [
    "PULL-UP",
    "BARBELL BENT OVER ROW",
    "CABLE ONE ARM LAT PULLDOWN",
    "LAT PULLDOWN",
    "CABLE STRAIGHT ARM PULLDOWN",
];

const absText = [
    "Ab Wheel Rollouts",
    "HANGING KNEE RAISES",
    "Captain’s Chair Leg Raise",
    "KNEELING CABLE CRUNCH",
    "Seated Cable Crunch",
];

const obliqueText = [
    "SIDE PLANK",
    "horizontal Pallof Press",
    "Kneeling cable oblique crunch",
    "Cable Seated Twist ",
    "Standing cable oblique crunch",
];

const pectsText = [
    "FLAT BENCH PRESS",
    "INCLINED DUMBBELL PRESS",
    "DECLINED DUMBBELL PRESS",
    "Machine fly",
    "Standing incline cable fly    ",
];

const adductorText = [
    "CABLE HIP ADDUCTION",
    "THIGH FLY (ADDUCTOR MAGNUS STRETCH)",
    "HIP ADDUCTION MACHINE",
    "Side plank hip adduction",
    " Side Leg Swings",
];

const calveText = [
    "seated barbell calf raise",
    "seated machine calf raise",
    "leg press calf raise",
    "leg press single-leg calf raise",
    "SEATED BARBELL CALF RAISE",
];

const hamstringText = [
    "DUMBBELL RDL",
    "CONVENTIONAL DEADLIFT",
    "LYING LEG CURL",
    "SEATED HAMSTRING CURL",
    "LEVER LYING SINGLE LEG CURL",
];

const gluteText = [
    "GOOD MORNINGS",
    "HIP THRUST",
    "LEVER REVERSE HYPER-EXTENSION",
    "CABLE HIP EXTENSION",
    "CABLE PULL THROUGH",
];

const quadText = [
    "BARBELL SQUAT",
    "LUNGES",
    "LEG EXTENSION",
    "LEG PRESS",
    "BULGARIAN SPLIT SQUAT",
];

export {
    bicepGif,
    deltGif,
    forearmGif,
    tricepGif,
    trapsGif,
    latsGif,
    absGif,
    obliqueGif,
    pectsGif,
    adductorGif,
    calveGif,
    hamstringGif,
    gluteGif,
    quadGif,
    bicepText,
    deltText,
    forearmText,
    tricepText,
    trapText,
    latsText,
    absText,
    obliqueText,
    pectsText,
    adductorText,
    calveText,
    hamstringText,
    gluteText,
    quadText,
};
const ExerciseData = {
    biceps: {
        gifs: bicepGif,
        texts: bicepText,
    },
    delts: {
        gifs: deltGif,
        texts: deltText,
    },
    forearms: {
        gifs: forearmGif,
        texts: forearmText,
    },
    triceps: {
        gifs: tricepGif,
        texts: tricepText,
    },
    traps: {
        gifs: trapsGif,
        texts: trapText,
    },
    lats: {
        gifs: latsGif,
        texts: latsText,
    },
    abs: {
        gifs: absGif,
        texts: absText,
    },
    obliques: {
        gifs: obliqueGif,
        texts: obliqueText,
    },
    pectorals: {
        gifs: pectsGif,
        texts: pectsText,
    },
    adductors: {
        gifs: adductorGif,
        texts: adductorText,
    },
    calves: {
        gifs: calveGif,
        texts: calveText,
    },
    hamstrings: {
        gifs: hamstringGif,
        texts: hamstringText,
    },
    glutes: {
        gifs: gluteGif,
        texts: gluteText,
    },
    quads: {
        gifs: quadGif,
        texts: quadText,
    },
};






const expandedBicepDiv = [
    <div>
        <h2>CONCENTRATION CURL</h2>
        <ul>
            <li>primarily targets the biceps muscles of the arms.</li>
            <li>This can help to address muscle imbalances between the left and right sides of the body, which can be common due to dominant hand use or previous injuries.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Sit on a bench or chair with your feet flat on the ground and a dumbbell in one hand.</li>
            <li>Place your elbow on the inside of your thigh, with your arm fully extended and the dumbbell hanging straight down.</li>
            <li>Curl the weight up towards your shoulder, keeping your elbow stationary and your upper arm pressed against your thigh.</li>
            <li>Pause at the top of the movement, then slowly lower the weight back down to the starting position.</li>
            <li>Repeat for the desired number of repetitions, then switch to the other arm and repeat.</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>


    </div>,
    <div>
        <h2>EZ-BAR CURL</h2>
        <ul>
            <li>primarily targets the biceps muscles of the arms.</li>
            <li>EZ-bars have an undulating middle section which allows a semi-supinated grip.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Keeping your upper arms fixed by your sides, exhale as you curl the EZ-curl bar up toward your shoulders.</li>
            <li>At the top of the movement, hold for a count of two and squeeze your biceps.</li>
            <li>Inhale as you lower the EZ-curl bar to the starting position in a controlled manner.</li>
            <li>Repeat for the desired number of repetitions.</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,


    <div>
        <h2>barbell preacher curl </h2>
        <ul>
            <li>Trains biceps in shortend position.</li>
            <li>preacher curls have been a topic of controversy in fitness and bodybuilding subcultures due to injury concerns.</li>
        </ul>
        <ol> <h4>Follow these steps to perform barbell preacher curl :</h4>
            <li>Begin by selecting a lighter-weight EZ barbell and placing it on the front bar rest of the preacher bench </li>
            <li>Adjust the height of the seat so that your upper arms and chest are both in contact with the pad (your armpits should be hovering over the top edge of the bench) </li>
            <li>With your upper arms resting on the pad, lean forward and grab onto the EZ-curl bar with an underhand grip with your hands shoulder-width apart </li>
            <li>Begin curling the bar up by contracting your biceps and flexing your elbow, lifting the bar to shoulder height </li>
            <li>Slowly lower your arms back down to starting position by elongating the bicep muscles to maximize their full range of motion</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SEATED HAMMER CURL
        </h2>
        <ul>
            <li>great exercise for building forearm and grip strength, as well as developing the brachialis and brachioradialis muscle</li>
            <li>Seated hammer curls can help to develop the muscles of the upper arm, leading to a more defined and toned appearance.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a SEATED hammer CURL :</h4>
            <li>Sit on a bench or chair with your feet flat on the ground, and hold a dumbbell in each hand with a neutral (hammer) grip, palms facing each other.</li>
            <li>Keep your elbows close to your sides, and engage your core to maintain a stable position.</li>
            <li>Slowly lift the dumbbells towards your shoulders by flexing your elbows, keeping your wrists and forearms in a neutral position.</li>
            <li>Pause for a moment at the top of the movement, and then slowly lower the dumbbells back down to the starting position.</li>
            <li>Repeat for the desired number of repetitions, maintaining control and avoiding swinging the weights or using momentum.</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,


    <div>
        <h2>SEATED INCLINE DUMBBELL CURL</h2>
        <ul>
            <li>allows for a greater range of motion and increased activation of the biceps.</li>
            <li>commonly performed as a part of a strength training program and is often used to develop arm strength, as it allows more range of motion</li>
        </ul>
        <ol> <h4>Follow these steps to perform a SEATED INCLINE DUMBBELL CURL :</h4>
            <li>Set up the bench: Adjust the bench to a 45-degree incline and ensure that it is stable and secure. Sit on the bench with your back straight and your feet flat on the floor.</li>
            <li>Choose the right weight: Choose a weight that is appropriate for your fitness level and goals. Start with a lighter weight and gradually increase as you become stronger.</li>
            <li>Position your arms: Position your arms so that they are fully extended and parallel to the floor. Keep your elbows close to your body.</li>
            <li>Pause at the top of the movement, then slowly lower the weight back down to the starting position.</li>
            <li>Control the movement: Throughout the exercise, focus on maintaining control and avoiding any swinging or jerking motions. Use a slow and controlled movement to engage your muscles fully.</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedDeltDiv = [
    <div>
        <h2>DUMBBELL SHOULDER PRESS</h2>
        <ul>
            <li> exercise that targets the muscles of the shoulders and upper body.</li>
            <li> Many people tend to have imbalances between their shoulder muscles due to poor posture or overuse of certain muscles. The dumbbell shoulder press can help correct these imbalances by working both sides of the body independently.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li> Begin seated with your feet firmly on the floor. Hold the dumbbells at shoulder height with your palms facing forwards.</li>
            <li>Exhale and press the dumbbells over your head. Hold for a brief second at the top and then slowly lower to the starting position.</li>
            <li>Be mindful of your lower back position. As you press overhead, your back will have the tendency to arch. Remember to start with lighter weights and gradually increase the load as you progress. Keep you core muscles engaged so that you maintain good posture.</li>


        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>


    </div>,
    <div>
        <h2>Machine Shoulder Press</h2>
        <ul>
            <li>The machine shoulder press is a compound exercise, meaning it engages multiple muscles throughout the range of motion, including</li>
            <li>It is a variation of the seated dumbbell shoulder press. The machine’s fixed trajectory and ability to handle heavy loads make it optimal for beginners and advanced lifters alike. </li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Adjust the seat to the right height. The weights should not stack at the bottom of the range of motion.</li>
            <li>Grab the handles with a pronated (palms facing forward) grip. Alternatively, you could use a neutral (palms facing each other) grip.</li>
            <li>Place your feet flat on the floor so your heels are under your knees. It will help generate more power.</li>
            <li>Take a deep breath, tighten your core, and push the handles overhead. However, do not lock out your elbows at the top.</li>
            <li>Pause at the top and contract your shoulders and slowly return to the starting position</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>


    </div>,
    <div>
        <h2>DUMBBELL LATERAL RAISE</h2>
        <ul>
            <li>primarily targets the lateral deltoids, the muscles on the sides of the shoulders.</li>
            <li>Balanced shoulder development can help create a proportionate and visually appealing physique. To achieve a well-rounded upper body workout, it’s recommended to combine the dumbbell lateral raise </li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Stand tall with your feet shoulder-width apart, knees slightly bent, and hold a dumbbell in each hand. Let your arms hang naturally by your sides with your palms facing your body.</li>
            <li>Keeping your back straight and your shoulders relaxed, exhale and lift both arms out to the sides until they are parallel to the floor. Maintain a slight bend in your elbows as you raise your arms.</li>
            <li>Focus on using your shoulder muscles to perform the movement, rather than relying on momentum or swinging your body.</li>
            <li>Pause for a moment at the top of the movement, feeling the contraction in your shoulder muscles.</li>
            <li>Inhale and slowly lower your arms back down to the starting position, controlling the descent.</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>


    </div>,
    <div>
        <h2>INCLINE DUMBBELL SIDE LATERAL RAISE</h2>
        <ul>
            <li>The single-arm incline lateral raise is an exercise targeting the lateral head of the shoulder muscles. </li>
            <li>A great lateral head can give you the appearance of having wide shoulders. Although it can be difficult for beginners to do incline side laterals.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>For starting position, grab a dumbbell with your right hand and lie down on your left side on an inclined bench. The angle should be between 40-60 degrees.</li>
            <li>Place the dumbbell on your right side, with your palm facing your thigh.</li>
            <li>Without bending your elbow, lift your arm so that it aligns with your shoulder rotating your palm inward. Keep your weight under control. </li>
            <li>Continue for the prescribed number of repetitions with your right hand. Then switch to your left arm.</li>


        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>


    </div>,
    <div>
        <h2>REAR DELT FLY MACHINE</h2>
        <ul>
            <li>A rear delt fly machine is a great way to work the posterior deltoid, rhomboids, and middle trapezius</li>
            <li>Rear delt fly exercise will help you build defined back and shoulders. It is one of the best exercises you should do If you want a defined and more shred back muscle.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Adjust the seat so that the handles are about shoulder level, and make sure to maintain good neck and lower back posture.</li>
            <li> Exhale and pull your arms apart until your shoulders are parallel with your body. Hold for a brief second and then slowly return to the starting position.</li>
            <li>You don’t have to pull your arms as far back as possible during this exercise. Use a comfortable range of motion, and don’t force your shoulder too far past parallel with your body.</li>
            <li>As with every exercise posture is very important, make sure that your keep your head in good alignment and don’t let your head move forwards.</li>


        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>


    </div>,
];

const expandedForearmDiv = [
    <div>
        <h2>WRIST ROLLER</h2>
        <ul>
            <li>A wrist roller is a piece of fitness equipment used for strengthening the forearm muscles, improving grip strength, and developing wrist stability.</li>
            <li>It typically consists of a cylindrical rod or tube with a rope or handle attached to it, and a weight plate or other resistance attached to the end of the rope.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Stand or sit with your arms extended in front of you, keeping your elbows close to your body and your hands at shoulder level.</li>
            <li> Roll the wrist roller towards your body, using only your wrists to move the weight up the rope and towards your hands.</li>
            <li>Pause for a moment at the top of the movement, then slowly roll the weight back down the rope towards the floor.</li>
            <li>Repeat the movement for several repetitions, focusing on keeping your wrists stable and engaged throughout the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>WRIST ROLLER</h2>
        <ul>
            <li>One Arm Seated Dumbbell Wrist Curl is a strength exercise that works your forearm muscles.</li>
            <li>One Arm Seated Dumbbell Wrist Curl is a great basic move. When done correctly, it can effectively target your arms, forearms and upper body.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Grasp a pair of dumbbell using a neutral grip (palms facing in) and sit down on the end of a flat bench.</li>
            <li>Rest the back of your forearms on the tops of your inner thigh so that your wrists are just off the end of it.</li>
            <li>Bending only at the wrists, let the dumbbell drop as far as possible. This is the starting position for the exercise.</li>
            <li>Slowly raise the dumbbells up as far as possible squeezing the forearm muscles at the top of the movement.</li>
            <li>Pause, and then slowly lower the dumbbell back to the starting position.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>WRIST ROLLER</h2>
        <ul>
            <li>Forearm exercises such as the seated barbell wrist curl can wear out your grip strength, so it’s best to leave them for the end of your workout, after you have completed all exercises for which grip strength is necessary, such as the barbell deadlift.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Exhale as you slowly close your hands, lifting the barbell into your palms, before curling the barbell upward by flexing your wrists.</li>
            <li>Hold for a count of two.</li>
            <li>Inhale as you reverse the movement by extending your wrists, opening your hands, and allowing the barbell to roll down into your finger tips.</li>
            <li>Repeat for the prescribed number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>WRIST CURL</h2>
        <ul>
            <li>It is a very effective exercise to improve the forearm and wrist muscles. If you build up your wrists and forearms you will be able to lift more weight while performing other exercises.</li>
            <li>The reason you cannot lift your body weight may be due to weak wrists and arms. Adding wrist and forearm exercise to your workout program will create strong wrist flexors.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Exhale as you slowly close your hands, lifting the barbell into your palms, before curling the barbell upward by flexing your wrists.</li>
            <li>Hold for a count of two.</li>
            <li>Inhale as you reverse the movement by extending your wrists, opening your hands, and allowing the barbell to roll down into your finger tips.</li>
            <li>Repeat for the prescribed number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>REVERSE GRIP EZ-BAR CURL</h2>
        <ul>
            <li>The reverse grip EZ-bar curl is a variation of the biceps curl exercise that targets the biceps brachii muscles, as well as the brachialis and brachioradialis muscles of the forearm. </li>
            <li>In this hand position places more emphasis on the brachialis and brachioradialis muscles.</li>
        </ul>
        <ol> <h4>Follow these steps to perform a concentration curl :</h4>
            <li>Exhale as you slowly close your hands, lifting the barbell into your palms, before curling the barbell upward by flexing your wrists.</li>
            <li>Hold for a count of two.</li>
            <li>Inhale as you reverse the movement by extending your wrists, opening your hands, and allowing the barbell to roll down into your finger tips.</li>
            <li>Repeat for the prescribed number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedTricepsDiv = [
    <div>
        <h2>ROPE PUSHDOWN</h2>
        <ul>
            <li>The cable rope pushdown is an effective exercise that targets the triceps muscles. The cables provide a constant tension that really challenges the triceps through the entire range of motion. And the cables really help you get a good burn or pump in the back of the arms.</li>
        </ul>
        <ol> <h4>How to perform a rope pushdown:</h4>
            <li> Attach a rope attachment to the upper part of a cable machine. Hold the rope with your hands facing each other.</li>
            <li> Exhale and pull the rope down towards your waist. Hold for a brief moment and then slowly return to the starting position.</li>
            <li>Keep your shoulders in good alignment during this exercise. The tendency is for the shoulders to tip forwards as you push down.</li>
            <li>Also keep your shoulders stationary during this exercise. Only move your elbows to isolate and focus on the triceps.</li>
            <li>Stand up straight and keep your back in good alignment, and always move in a slow and controlled manner.</li>


        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE ROPE OVERHEAD TRICEPS EXTENSION</h2>
        <ul>
            <li>The overhead Cable tricep extension is an isolation exercise that works the muscle on the back of the upper arm, known as the triceps.</li>
        </ul>
        <ol> <h4>How to perform a rope overhead triceps extension:</h4>
            <li>Stand face away from the cable machine and attach a tricep rope to the low pulley.</li>
            <li>Grasp the rope with both hands, keeping your arms straight and close together.</li>
            <li>Keeping your elbows locked, extend your arms straight overhead, contracting your triceps.</li>
            <li>Slowly return to the starting position and repeat for desired reps.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CLOSE GRIP BENCH PRESS</h2>
        <ul>
            <li>The close grip bench press is a variation of the traditional bench press exercise where the lifter holds the bar with a narrow grip, usually with the hands placed closer than shoulder-width apart. This exercise primarily targets the triceps, but also engages the chest and shoulders.</li>
        </ul>
        <ol> <h4>How to perform a close grip bench press:</h4>
            <li>Lie down on a flat bench with your feet flat on the ground and your back in a neutral position.</li>
            <li>Grab the bar with a close grip, with your hands placed slightly less than shoulder-width apart.</li>
            <li>Unrack the bar and lower it slowly towards your chest while keeping your elbows tucked in close to your body.</li>
            <li>Pause briefly at the bottom of the movement, then press the bar back up to the starting position, squeezing your triceps at the top.</li>
            <li>Repeat for your desired number of repetitions.</li>

        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>DECLINE BARBELL SKULL CRUSHER</h2>
        <ul>
            <li>The Decline Barbell Skull Crusher is a compound exercise that primarily targets the triceps, but also engages the shoulders and chest to a lesser extent.</li>
        </ul>
        <ol>
            <h4>How to perform a Decline Barbell Skull Crusher:</h4>
            <li>Set up an adjustable decline bench to a comfortable angle, typically between 20 to 30 degrees decline.</li>
            <li>Lie down on the bench and hold a barbell with an overhand grip, slightly narrower than shoulder-width apart.</li>
            <li>Extend your arms straight up over your chest, keeping your elbows stationary and perpendicular to the floor.</li>
            <li>Slowly lower the barbell towards your forehead by bending your elbows, maintaining control and focusing on the contraction in your triceps.</li>
            <li>Once the barbell is near your forehead or slightly lower, pause briefly and then extend your arms back up to the starting position, fully contracting your triceps.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>HIGH PULLEY OVERHEAD TRICEP EXTENSION</h2>
        <ul>
            <li>Targets the Triceps: The High Pulley Overhead Tricep Extension is an isolation exercise that specifically targets the triceps muscles, helping to tone, strengthen, and develop the back of the upper arms.</li>
            <li>Improves Arm Strength and Definition: By performing this exercise, you can effectively increase your arm strength and develop greater definition in the triceps, leading to more sculpted and toned arms.</li>
        </ul>
        <ol>
            <h4>How to perform a High Pulley Overhead Tricep Extension:</h4>
            <li>Stand facing the cable machine and attach a rope handle to the high pulley.</li>
            <li>Grasp the rope with both hands, keeping your palms facing each other and your elbows bent at a 90-degree angle, close to your sides.</li>
            <li>Step back to create tension in the cable and engage your core for stability.</li>
            <li>While keeping your upper arms stationary and your elbows in, extend your forearms downward by fully straightening your arms. Focus on contracting your triceps at the bottom of the movement.</li>
            <li>Hold the contracted position for a brief moment, then slowly return to the starting position by allowing your forearms to rise back up.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedTrapsDiv = [
    <div>
        <h2>DUMBBELL SHRUG</h2>
        <ul>
            <li>Targets the Trapezius Muscles: The Dumbbell Shrug is an isolation exercise that primarily targets the trapezius muscles, which are located in the upper back and neck area. It helps strengthen and develop the traps, leading to improved posture and upper body aesthetics.</li>
            <li>Improves Shoulder Stability: This exercise also engages the muscles surrounding the shoulders, including the deltoids and rhomboids, which contribute to shoulder stability and enhanced upper body strength.</li>
        </ul>
        <ol>
            <h4>How to perform a Dumbbell Shrug:</h4>
            <li>Stand with your feet shoulder-width apart, holding a dumbbell in each hand by your sides with a neutral grip (palms facing your body).</li>
            <li>Keep your arms straight and your shoulders relaxed as you lift your shoulders straight up toward your ears in a shrugging motion. Avoid rolling your shoulders forward or backward.</li>
            <li>Squeeze your shoulder blades together at the top of the movement, hold for a brief moment, and focus on contracting the trapezius muscles.</li>
            <li>Slowly lower the dumbbells back down to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>BARBELL SHRUG</h2>
        <ul>
            <li>Targets the Trapezius Muscles: The Barbell Shrug is an effective exercise that primarily targets the trapezius muscles, helping to strengthen and develop the upper back and neck area.</li>
        </ul>
        <ol>
            <h4>How to perform a Barbell Shrug:</h4>
            <li>Stand with your feet shoulder-width apart, holding a barbell in front of you with an overhand grip and your hands slightly wider than shoulder-width apart.</li>
            <li>Keep your arms straight and your shoulders relaxed as you lift your shoulders straight up toward your ears in a shrugging motion.</li>
            <li>Squeeze your shoulder blades together at the top of the movement, hold for a brief moment, and focus on contracting the trapezius muscles.</li>
            <li>Slowly lower the barbell back down to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE UPRIGHT ROW</h2>
        <ul>
            <li>Targets the Deltoids and Trapezius Muscles: The Cable Upright Row is a compound exercise that primarily targets the deltoid muscles (shoulders) and trapezius muscles (upper back and neck), helping to build strength and definition in these areas.</li>
            <li>Improves Shoulder and Postural Strength: This exercise also engages the muscles of the upper back, including the rhomboids and rear deltoids, contributing to improved shoulder and postural strength.</li>
        </ul>
        <ol>
            <h4>How to perform a Cable Upright Row:</h4>
            <li>Stand facing the cable machine with your feet shoulder-width apart.</li>
            <li>Grasp a straight or EZ bar attachment with an overhand grip, hands slightly narrower than shoulder-width apart.</li>
            <li>Keep your arms straight and your back upright as you lift the bar upward by raising your elbows, leading with your hands.</li>
            <li>Keep lifting until the bar reaches your upper chest, keeping it close to your body throughout the movement.</li>
            <li>Pause briefly at the top, focusing on the contraction in your deltoids and upper back.</li>
            <li>Lower the bar back down to the starting position in a controlled manner.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>KNEELING HIGH PULLEY ROW</h2>
        <ul>
            <li>Targets the Back Muscles: The Kneeling High Pulley Row is a compound exercise that primarily targets the muscles of the back, including the latissimus dorsi (lats), rhomboids, and rear deltoids, helping to build strength and definition in these areas.</li>
            <li>Improves Upper Body Strength and Posture: This exercise also engages the muscles of the shoulders, arms, and core, contributing to improved upper body strength and posture.</li>
        </ul>
        <ol>
            <h4>How to perform a Kneeling High Pulley Row:</h4>
            <li>Set up a high pulley cable machine with a straight bar attachment.</li>
            <li>Kneel in front of the cable machine and grasp the bar with an overhand grip, hands slightly wider than shoulder-width apart.</li>
            <li>Keep your back straight and your core engaged as you pull the bar towards your lower chest, squeezing your shoulder blades together.</li>
            <li>Pause briefly at the top of the movement, focusing on the contraction in your back muscles.</li>
            <li>Slowly extend your arms forward to return to the starting position, keeping tension on the muscles throughout the exercise.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>INCLINED DUMBBELL Y RAISE</h2>
        <ul>
            <li>Targets the Shoulder Muscles: The Inclined Dumbbell Y Raise is an isolation exercise that primarily targets the shoulder muscles, specifically the posterior deltoids (rear shoulders), helping to strengthen and develop this area.</li>
            <li>Improves Posture and Shoulder Stability: This exercise also engages the muscles of the upper back, including the rhomboids and trapezius, contributing to improved posture and shoulder stability.</li>
        </ul>
        <ol>
            <h4>How to perform an Inclined Dumbbell Y Raise:</h4>
            <li>Set an adjustable bench to a 45-degree incline angle.</li>
            <li>Lie face down on the inclined bench with a dumbbell in each hand, palms facing inwards.</li>
            <li>Keep your arms straight and your thumbs pointing upward as you lift the dumbbells out to your sides and up to form a "Y" shape with your body.</li>
            <li>Focus on squeezing your shoulder blades together and engaging the posterior deltoids at the top of the movement.</li>
            <li>Slowly lower the dumbbells back down to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedLatsDiv = [
    <div>
        <h2>PULL-UP</h2>
        <ul>
            <li>Targets the Upper Body Muscles: The Pull-Up is a compound exercise that primarily targets the muscles of the upper body, including the latissimus dorsi (lats), biceps, and upper back, helping to build strength and definition in these areas.</li>
            <li>Improves Upper Body Strength and Grip Strength: This exercise also engages the muscles of the shoulders, arms, and core, contributing to improved upper body strength and grip strength.</li>
        </ul>
        <ol>
            <h4>How to perform a Pull-Up:</h4>
            <li>Find a pull-up bar with a comfortable grip position (typically slightly wider than shoulder-width apart).</li>
            <li>Hang from the bar with your arms fully extended, palms facing away from you (overhand grip).</li>
            <li>Engage your core and squeeze your shoulder blades together as you pull your body upward by bending your elbows, bringing your chin above the bar.</li>
            <li>Pause briefly at the top of the movement, focusing on the contraction in your back muscles.</li>
            <li>Lower your body back down with control until your arms are fully extended.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>BARBELL BENT OVER ROW</h2>
        <ul>
            <li>Targets the Back Muscles: The Barbell Bent Over Row is a compound exercise that primarily targets the muscles of the back, including the latissimus dorsi (lats), rhomboids, and rear deltoids, helping to build strength and definition in these areas.</li>
            <li>Improves Posture and Upper Body Strength: This exercise also engages the muscles of the shoulders, arms, and core, contributing to improved posture and overall upper body strength.</li>
        </ul>
        <ol>
            <h4>How to perform a Barbell Bent Over Row:</h4>
            <li>Stand with your feet shoulder-width apart, knees slightly bent, and hold a barbell with an overhand grip, hands slightly wider than shoulder-width apart.</li>
            <li>Bend forward from your hips, keeping your back straight and your core engaged, until your torso is nearly parallel to the floor.</li>
            <li>Allow the barbell to hang directly in front of you at arm's length, with your arms fully extended.</li>
            <li>Keeping your elbows close to your body, pull the barbell up towards your lower chest by driving your elbows behind you.</li>
            <li>Squeeze your shoulder blades together at the top of the movement, focusing on contracting the muscles of your back.</li>
            <li>Slowly lower the barbell back down to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE ONE ARM LAT PULLDOWN</h2>
        <ul>
            <li>Targets the Latissimus Dorsi: The Cable One Arm Lat Pulldown is an isolation exercise that primarily targets the latissimus dorsi (lats), the large muscles of the back, helping to strengthen and develop this area.</li>
            <li>Improves Back Strength and Definition: This exercise also engages the muscles of the shoulders, arms, and core, contributing to improved back strength and definition.</li>
        </ul>
        <ol>
            <h4>How to perform a Cable One Arm Lat Pulldown:</h4>
            <li>Stand facing a cable machine and set the pulley attachment at a high position.</li>
            <li>Grasp the handle with one hand, palm facing down.</li>
            <li>Take a step back to create tension in the cable, and position your feet shoulder-width apart.</li>
            <li>With your arm fully extended, pull the handle down towards the side of your waist, focusing on engaging your lat muscles.</li>
            <li>Squeeze your lat at the bottom of the movement, and then slowly release and return to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions, and then switch arms to perform the exercise on the opposite side.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LAT PULLDOWN</h2>
        <ul>
            <li>Targets the Latissimus Dorsi: The Lat Pulldown is a compound exercise that primarily targets the latissimus dorsi (lats), the large muscles of the back, helping to build strength and size in this area.</li>
            <li>Improves Upper Body Strength: This exercise also engages the muscles of the shoulders, arms, and core, contributing to improved upper body strength and stability.</li>
        </ul>
        <ol>
            <h4>How to perform a Lat Pulldown:</h4>
            <li>Sit on a lat pulldown machine and adjust the thigh pad so that your thighs are secured beneath it.</li>
            <li>Grasp the bar with an overhand grip, hands slightly wider than shoulder-width apart.</li>
            <li>Keep your feet flat on the floor and your back straight as you pull the bar down towards your upper chest.</li>
            <li>Squeeze your shoulder blades together and focus on engaging your lats at the bottom of the movement.</li>
            <li>Slowly release the bar and return it to the starting position, with your arms fully extended.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE STRAIGHT ARM PULLDOWN</h2>
        <ul>
            <li>Targets the Lats and Upper Back Muscles: The Cable Straight Arm Pulldown is an isolation exercise that primarily targets the latissimus dorsi (lats) and the muscles of the upper back, helping to strengthen and develop these areas.</li>
            <li>Improves Shoulder Mobility and Stability: This exercise also engages the muscles of the shoulders and core, contributing to improved shoulder mobility and stability.</li>
        </ul>
        <ol>
            <h4>How to perform a Cable Straight Arm Pulldown:</h4>
            <li>Stand facing a cable machine with a high pulley attachment.</li>
            <li>Grasp the handle with both hands, palms facing down, and step back to create tension in the cable.</li>
            <li>Keep your arms straight and your core engaged as you pull the handle down towards your thighs, leading with your shoulders.</li>
            <li>At the bottom of the movement, squeeze your shoulder blades together and focus on engaging your lats.</li>
            <li>Slowly release and return the handle back to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedAbsDiv = [
    <div>
        <h2>AB WHEEL ROLLOUTS</h2>
        <ul>
            <li>Targets the Core Muscles: Ab Wheel Rollouts are a challenging exercise that primarily targets the muscles of the core, including the rectus abdominis, obliques, and transverse abdominis, helping to strengthen and tone these muscles.</li>
            <li>Improves Core Stability and Strength: This exercise also engages the muscles of the shoulders, arms, and back, contributing to improved core stability and overall strength.</li>
        </ul>
        <ol>
            <h4>How to perform Ab Wheel Rollouts:</h4>
            <li>Kneel on the floor and place the ab wheel on the ground in front of you.</li>
            <li>Grasp the handles of the ab wheel and position your hands shoulder-width apart.</li>
            <li>Engage your core and slowly roll the wheel forward, extending your arms and lowering your torso towards the floor.</li>
            <li>Maintain a straight line from your head to your knees throughout the movement.</li>
            <li>Pause briefly in the fully extended position, feeling the tension in your core.</li>
            <li>Engage your core muscles and roll the wheel back towards your knees, returning to the starting position with control.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>HANGING KNEE RAISES</h2>
        <ul>
            <li>Targets the Core Muscles: Hanging Knee Raises are an effective exercise that primarily targets the muscles of the core, including the rectus abdominis, obliques, and hip flexors, helping to strengthen and tone these muscles.</li>
            <li>Improves Core Stability and Flexibility: This exercise also engages the muscles of the shoulders, arms, and back, contributing to improved core stability and flexibility.</li>
        </ul>
        <ol>
            <h4>How to perform Hanging Knee Raises:</h4>
            <li>Find a pull-up bar and hang from it with your arms fully extended and hands slightly wider than shoulder-width apart.</li>
            <li>Engage your core muscles and lift your knees up towards your chest, bending at the hips.</li>
            <li>Pause briefly at the top of the movement, squeezing your abs.</li>
            <li>Lower your knees back down with control, returning to the starting position.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CAPTAIN'S CHAIR LEG RAISE</h2>
        <ul>
            <li>Targets the Lower Abdominals: The Captain's Chair Leg Raise is an effective exercise that primarily targets the lower abdominal muscles, helping to strengthen and tone this area.</li>
            <li>Improves Core Stability and Balance: This exercise also engages the muscles of the hip flexors and obliques, contributing to improved core stability and balance.</li>
        </ul>
        <ol>
            <h4>How to perform Captain's Chair Leg Raise:</h4>
            <li>Find a captain's chair or knee raise station and position yourself on the chair, gripping the handles with your palms facing down.</li>
            <li>Keep your back against the backrest and maintain a straight posture.</li>
            <li>Engage your core muscles and lift your knees up towards your chest, bending at the hips.</li>
            <li>Pause briefly at the top of the movement, squeezing your lower abs.</li>
            <li>Lower your legs back down with control, returning to the starting position.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>KNEELING CABLE CRUNCH</h2>
        <ul>
            <li>Targets the Abdominal Muscles: The Kneeling Cable Crunch is an effective exercise that primarily targets the abdominal muscles, including the rectus abdominis and obliques, helping to strengthen and tone this area.</li>
            <li>Improves Core Stability and Flexibility: This exercise also engages the muscles of the hip flexors and lower back, contributing to improved core stability and flexibility.</li>
        </ul>
        <ol>
            <h4>How to perform Kneeling Cable Crunch:</h4>
            <li>Attach a rope handle to a high pulley on a cable machine.</li>
            <li>Kneel down facing away from the machine and grab the rope with both hands, placing them on the sides of your head.</li>
            <li>Keep your hips stationary and contract your abdominal muscles as you bring your elbows towards your thighs.</li>
            <li>Exhale as you crunch forward and squeeze your abs at the peak of the movement.</li>
            <li>Inhale as you slowly return to the starting position, keeping tension on the abs.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SEATED CABLE CRUNCH</h2>
        <ul>
            <li>Targets the Abdominal Muscles: The Seated Cable Crunch is an effective exercise that primarily targets the abdominal muscles, including the rectus abdominis and obliques, helping to strengthen and tone this area.</li>
            <li>Improves Core Stability and Flexibility: This exercise also engages the muscles of the hip flexors and lower back, contributing to improved core stability and flexibility.</li>
        </ul>
        <ol>
            <h4>How to perform Seated Cable Crunch:</h4>
            <li>Attach a rope handle to a high pulley on a cable machine.</li>
            <li>Sit down facing the machine and position the rope handle behind your head, grasping it with both hands.</li>
            <li>Keep your feet flat on the floor and maintain a slight backward lean from the hips.</li>
            <li>Engage your core muscles and curl your torso down towards your thighs, using your abs to initiate the movement.</li>
            <li>Exhale as you crunch forward and squeeze your abs at the peak of the movement.</li>
            <li>Inhale as you slowly return to the starting position, maintaining tension on the abs.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedObliqueDiv = [
    <div>
        <h2>SIDE PLANK</h2>
        <ul>
            <li>Targets the Core Muscles: The Side Plank is an effective exercise that primarily targets the muscles of the core, including the obliques, transverse abdominis, and glutes, helping to strengthen and stabilize these muscles.</li>
            <li>Improves Core Stability and Balance: This exercise also engages the muscles of the shoulders, hips, and legs, contributing to improved core stability, balance, and overall body strength.</li>
        </ul>
        <ol>
            <h4>How to perform a Side Plank:</h4>
            <li>Start by lying on your side on an exercise mat or the floor. Place your elbow directly beneath your shoulder and stack your feet on top of each other.</li>
            <li>Engage your core muscles and lift your hips off the ground, creating a straight line from your head to your feet.</li>
            <li>Keep your body in a straight, rigid position, avoiding any sagging or rotation.</li>
            <li>Hold the position for a specific duration, focusing on maintaining proper form and breathing.</li>
            <li>Lower your hips back down to the starting position.</li>
            <li>Repeat on the other side, alternating between left and right sides.</li>
            <li>Gradually increase the duration of the hold as you become more comfortable and stronger.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>HORIZONTAL PALLOF PRESS</h2>
        <ul>
            <li>Targets the Core Muscles: The Horizontal Pallof Press is an effective exercise that primarily targets the muscles of the core, including the obliques, transverse abdominis, and back muscles, helping to strengthen and stabilize these muscles.</li>
            <li>Improves Core Stability and Anti-Rotation Strength: This exercise also engages the muscles of the shoulders, chest, and arms, contributing to improved core stability, balance, and resistance against rotational forces.</li>
        </ul>
        <ol>
            <h4>How to perform a Horizontal Pallof Press:</h4>
            <li>Attach a resistance band to a sturdy anchor point at waist height.</li>
            <li>Stand perpendicular to the anchor point, with your feet shoulder-width apart and knees slightly bent.</li>
            <li>Grasp the resistance band handle with both hands and position your hands at chest height, with your arms extended straight in front of you.</li>
            <li>Engage your core muscles and press the resistance band away from your chest, extending your arms in front of you.</li>
            <li>Keep your body stable and avoid rotating or twisting as you press the band.</li>
            <li>Hold the extended position for a brief moment, focusing on maintaining proper form and stability.</li>
            <li>Slowly release the tension and bring the band back towards your chest, returning to the starting position.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>KNEELING CABLE OBLIQUE CRUNCH</h2>
        <ul>
            <li>Targets the Oblique Muscles: The Kneeling Cable Oblique Crunch is an effective exercise that primarily targets the oblique muscles, helping to strengthen and tone the sides of your core.</li>
            <li>Improves Core Stability and Flexibility: This exercise also engages the muscles of the hip flexors and lower back, contributing to improved core stability and flexibility.</li>
        </ul>
        <ol>
            <h4>How to perform Kneeling Cable Oblique Crunch:</h4>
            <li>Attach a rope handle to a low pulley on a cable machine.</li>
            <li>Kneel down facing the machine and position the rope handle behind your head, grasping it with both hands.</li>
            <li>Keep your knees hip-width apart and your hips stationary throughout the movement.</li>
            <li>Engage your core muscles and crunch your torso down to the side, bringing your elbow toward your hip.</li>
            <li>Exhale as you crunch and squeeze your obliques at the peak of the movement.</li>
            <li>Inhale as you slowly return to the starting position, maintaining tension on the obliques.</li>
            <li>Repeat on the other side, alternating between left and right oblique crunches.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE SEATED TWIST</h2>
        <ul>
            <li>Targets the Oblique Muscles: The Cable Seated Twist is an effective exercise that primarily targets the oblique muscles, helping to strengthen and tone the sides of your core.</li>
            <li>Improves Core Stability and Rotation: This exercise also engages the muscles of the hips, lower back, and shoulders, contributing to improved core stability, balance, and rotational strength.</li>
        </ul>
        <ol>
            <h4>How to perform Cable Seated Twist:</h4>
            <li>Attach a handle to a cable machine at chest height.</li>
            <li>Sit down facing the machine and grasp the handle with both hands, extending your arms straight in front of you.</li>
            <li>Keep your feet flat on the floor and maintain an upright posture throughout the exercise.</li>
            <li>Engage your core muscles and rotate your torso to one side, pulling the cable handle across your body.</li>
            <li>Exhale as you twist and squeeze your obliques at the end of the movement.</li>
            <li>Inhale as you slowly return to the starting position, maintaining control over the resistance.</li>
            <li>Repeat on the other side, alternating between left and right twists.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>STANDING CABLE OBLIQUE CRUNCH</h2>
        <ul>
            <li>Targets the Oblique Muscles: The Standing Cable Oblique Crunch is an effective exercise that primarily targets the oblique muscles, helping to strengthen and tone the sides of your core.</li>
            <li>Improves Core Stability and Flexibility: This exercise also engages the muscles of the hip flexors and lower back, contributing to improved core stability and flexibility.</li>
        </ul>
        <ol>
            <h4>How to perform Standing Cable Oblique Crunch:</h4>
            <li>Set the cable pulley to a height slightly above shoulder level and attach a handle.</li>
            <li>Stand sideways to the cable machine with your feet shoulder-width apart and your side facing the machine.</li>
            <li>Grasp the handle with the hand closest to the machine and position your arm extended straight up above your shoulder.</li>
            <li>Keep your knees slightly bent and maintain an upright posture throughout the exercise.</li>
            <li>Engage your core muscles and crunch your torso down to the side, bringing your elbow toward your hip.</li>
            <li>Exhale as you crunch and squeeze your obliques at the peak of the movement.</li>
            <li>Inhale as you slowly return to the starting position, maintaining tension on the obliques.</li>
            <li>Repeat on the other side, alternating between left and right oblique crunches.</li>
            <li>Repeat for the desired number of repetitions.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedPectorialDiv = [
    <div>
        <h2>FLAT BENCH PRESS</h2>
        <ul>
            <li>Targets the Chest Muscles: The Flat Bench Press is a compound exercise that primarily targets the muscles of the chest, including the pectoralis major and minor, as well as the anterior deltoids and triceps.</li>
            <li>Builds Upper Body Strength: This exercise is highly effective for building upper body strength, promoting muscle growth, and enhancing overall upper body power.</li>
        </ul>
        <ol>
            <h4>How to perform Flat Bench Press:</h4>
            <li>Lie down on a flat bench with your feet firmly planted on the floor.</li>
            <li>Position your head, upper back, and buttocks in contact with the bench, maintaining a neutral spine.</li>
            <li>Grasp the barbell with a grip slightly wider than shoulder-width, keeping your wrists straight.</li>
            <li>Unrack the barbell and hold it directly above your chest, with your arms fully extended.</li>
            <li>Inhale as you lower the barbell towards your chest, keeping your elbows slightly tucked.</li>
            <li>Lower the bar until it lightly touches your chest or reaches a position just above it.</li>
            <li>Exhale as you push the barbell upward, extending your arms back to the starting position.</li>
            <li>Repeat for the desired number of repetitions, maintaining control over the weight.</li>
            <li>Ensure proper form and avoid excessive arching of the back or bouncing the barbell off the chest.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>INCLINED DUMBBELL PRESS</h2>
        <ul>
            <li>Targets the Upper Chest Muscles: The Inclined Dumbbell Press is a compound exercise that primarily targets the upper chest muscles, including the clavicular fibers of the pectoralis major.</li>
            <li>Develops Upper Body Strength and Size: This exercise is effective for developing upper body strength and size, enhancing the appearance and definition of the chest and shoulders.</li>
        </ul>
        <ol>
            <h4>How to perform Inclined Dumbbell Press:</h4>
            <li>Set an incline bench at a 30-45 degree angle.</li>
            <li>Sit on the bench with your feet firmly planted on the floor.</li>
            <li>Hold a dumbbell in each hand with an overhand grip.</li>
            <li>Lean back onto the bench and lift the dumbbells to shoulder level, palms facing forward.</li>
            <li>Keep your elbows slightly bent and in line with your shoulders throughout the exercise.</li>
            <li>Inhale as you lower the dumbbells slowly and with control, bringing them to the sides of your chest.</li>
            <li>Exhale as you press the dumbbells upward, extending your arms back to the starting position.</li>
            <li>Repeat for the desired number of repetitions, maintaining proper form and control over the weights.</li>
            <li>Ensure a smooth and controlled motion, avoiding excessive arching of the back or using momentum to lift the dumbbells.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>DECLINED DUMBBELL PRESS</h2>
        <ul>
            <li>Targets the Lower Chest Muscles: The Declined Dumbbell Press is a compound exercise that primarily targets the lower chest muscles, including the sternal fibers of the pectoralis major.</li>
            <li>Enhances Lower Chest Development: This exercise helps to enhance the development and definition of the lower chest, creating a more balanced and sculpted appearance.</li>
        </ul>
        <ol>
            <h4>How to perform Declined Dumbbell Press:</h4>
            <li>Set a decline bench at a 30-45 degree angle.</li>
            <li>Lie down on the bench with your head positioned lower than your hips.</li>
            <li>Hold a dumbbell in each hand with an overhand grip.</li>
            <li>Extend your arms fully and position the dumbbells at chest level, palms facing forward.</li>
            <li>Keep your elbows slightly bent and in line with your shoulders throughout the exercise.</li>
            <li>Inhale as you lower the dumbbells in a controlled manner, bringing them down towards the sides of your chest.</li>
            <li>Exhale as you press the dumbbells upward, extending your arms back to the starting position.</li>
            <li>Repeat for the desired number of repetitions, maintaining proper form and control over the weights.</li>
            <li>Ensure a smooth and controlled motion, avoiding excessive arching of the back or using momentum to lift the dumbbells.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>MACHINE FLY</h2>
        <ul>
            <li>Targets the Chest Muscles: The Machine Fly is an isolation exercise that primarily targets the muscles of the chest, including the pectoralis major and minor.</li>
            <li>Enhances Chest Definition and Size: This exercise helps to enhance chest definition, promote muscle growth, and develop overall upper body strength and size.</li>
        </ul>
        <ol>
            <h4>How to perform Machine Fly:</h4>
            <li>Adjust the seat height and positioning of the machine according to your comfort.</li>
            <li>Sit on the machine with your back firmly against the pad and grip the handles with your palms facing inward.</li>
            <li>Place your elbows in line with your shoulders and maintain a slight bend in your elbows throughout the exercise.</li>
            <li>Exhale as you push the handles together, bringing them forward in a controlled motion.</li>
            <li>Squeeze your chest muscles at the peak of the movement and hold for a brief moment.</li>
            <li>Inhale as you slowly return the handles to the starting position, maintaining tension on the chest muscles.</li>
            <li>Repeat for the desired number of repetitions, focusing on maintaining proper form and control.</li>
            <li>Avoid using momentum or swinging the body during the exercise, ensuring a smooth and controlled motion.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>STANDING INCLINE CABLE FLY</h2>
        <ul>
            <li>Targets the Chest Muscles: The Standing Incline Cable Fly is an isolation exercise that primarily targets the muscles of the chest, including the pectoralis major and minor.</li>
            <li>Enhances Chest Definition and Size: This exercise helps to enhance chest definition, promote muscle growth, and develop overall upper body strength and size.</li>
        </ul>
        <ol>
            <h4>How to perform Standing Incline Cable Fly:</h4>
            <li>Set the cable pulleys to a low position and attach the handles.</li>
            <li>Stand facing away from the machine with your feet shoulder-width apart and a slight bend in your knees.</li>
            <li>Grasp the handles with an overhand grip, palms facing inward.</li>
            <li>Lean forward at the hips, maintaining a slight bend in your elbows and a neutral spine.</li>
            <li>Inhale as you open your arms out to the sides, keeping a slight bend in your elbows.</li>
            <li>Squeeze your chest muscles at the peak of the movement and hold for a brief moment.</li>
            <li>Exhale as you bring your arms back together, crossing them in front of your chest.</li>
            <li>Repeat for the desired number of repetitions, focusing on maintaining proper form and control.</li>
            <li>Avoid using momentum or swinging the body during the exercise, ensuring a smooth and controlled motion.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedAdductorDiv = [
    <div>
        <h2>CABLE HIP ADDUCTION</h2>
        <ul>
            <li>Targets the Hip Adductor Muscles: The Cable Hip Adduction exercise specifically targets the hip adductor muscles, which are responsible for bringing the legs closer to the midline of the body.</li>
            <li>Improves Hip Strength and Stability: This exercise helps to strengthen the inner thigh muscles and improve hip stability, which can be beneficial for various activities and sports.</li>
        </ul>
        <ol>
            <h4>How to perform Cable Hip Adduction:</h4>
            <li>Attach an ankle cuff to the cable machine at a low position.</li>
            <li>Stand alongside the machine with your left side facing the weight stack.</li>
            <li>Secure the ankle cuff around your right ankle.</li>
            <li>Stand tall with a slight bend in your left knee and a stable posture.</li>
            <li>Keeping your upper body upright and your core engaged, slowly move your right leg across the midline of your body, towards your left leg.</li>
            <li>Squeeze your inner thigh muscles at the peak of the movement and hold for a brief moment.</li>
            <li>Slowly return your right leg back to the starting position in a controlled manner.</li>
            <li>Repeat for the desired number of repetitions on the right side, then switch to the left side.</li>
            <li>Focus on maintaining proper form, avoiding any excessive swinging or using momentum to perform the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>THIGH FLY (ADDUCTOR MAGNUS STRETCH)</h2>
        <ul>
            <li>Targets the Adductor Muscles: The Thigh Fly exercise primarily targets the adductor muscles, particularly the adductor magnus, which are located on the inner thigh.</li>
            <li>Improves Hip Flexibility and Mobility: This exercise helps to stretch and strengthen the adductor muscles, promoting improved hip flexibility and mobility.</li>
        </ul>
        <ol>
            <h4>How to perform Thigh Fly (Adductor Magnus Stretch):</h4>
            <li>Start by standing upright with your feet shoulder-width apart.</li>
            <li>Shift your weight onto your right leg and slightly bend your right knee.</li>
            <li>Extend your left leg out to the side, keeping it straight.</li>
            <li>Slowly lower your body towards your right side by bending your right knee and pushing your hips back.</li>
            <li>As you lower, you should feel a stretch in your inner thigh (adductor muscles) of the left leg.</li>
            <li>Hold the stretch for 20-30 seconds, feeling a gentle pull in the inner thigh.</li>
            <li>Return to the starting position by pushing through your right heel and returning to an upright position.</li>
            <li>Repeat the stretch on the opposite side, shifting your weight onto your left leg.</li>
            <li>Perform the stretch for the desired number of repetitions on each side, focusing on maintaining proper form and control.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>HIP ADDUCTION MACHINE</h2>
        <ul>
            <li>Targets the Hip Adductor Muscles: The Hip Adduction Machine exercise specifically targets the hip adductor muscles, which are responsible for bringing the legs closer to the midline of the body.</li>
            <li>Improves Hip Strength and Stability: This exercise helps to strengthen the inner thigh muscles and improve hip stability, which can be beneficial for various activities and sports.</li>
        </ul>
        <ol>
            <h4>How to perform Hip Adduction Machine:</h4>
            <li>Adjust the seat and positioning of the machine according to your comfort.</li>
            <li>Sit on the machine with your back firmly against the pad and position your legs on the provided pads.</li>
            <li>Keep your knees slightly bent and maintain a neutral spine throughout the exercise.</li>
            <li>Inwardly squeeze your legs together, bringing the pads towards the midline of your body.</li>
            <li>Pause for a brief moment at the peak of the movement, feeling a contraction in your inner thigh muscles.</li>
            <li>Slowly release the tension and return your legs to the starting position in a controlled manner.</li>
            <li>Repeat for the desired number of repetitions, focusing on maintaining proper form and control.</li>
            <li>Avoid using momentum or excessive swinging of the legs during the exercise, ensuring a smooth and controlled motion.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SIDE PLANK HIP ADDUCTION</h2>
        <ul>
            <li>Targets the Hip Adductor Muscles: The Side Plank Hip Adduction exercise specifically targets the hip adductor muscles, which are responsible for bringing the legs closer to the midline of the body.</li>
            <li>Improves Core Stability and Hip Strength: This exercise not only engages the hip adductors but also challenges the core muscles, improving overall stability and hip strength.</li>
        </ul>
        <ol>
            <h4>How to perform Side Plank Hip Adduction:</h4>
            <li>Start by lying on your side with your legs extended and stacked on top of each other.</li>
            <li>Prop yourself up on your lower forearm, keeping your elbow directly beneath your shoulder.</li>
            <li>Engage your core and lift your hips off the ground, creating a straight line from your head to your feet.</li>
            <li>Maintain a stable side plank position while keeping your body aligned.</li>
            <li>Slowly raise your top leg, lifting it toward the ceiling while maintaining control and stability.</li>
            <li>Pause for a brief moment at the top of the movement, feeling a contraction in your hip adductor muscles.</li>
            <li>Lower your leg back down to the starting position in a controlled manner.</li>
            <li>Repeat for the desired number of repetitions on one side, then switch to the other side.</li>
            <li>Focus on maintaining proper form, keeping your core engaged, and avoiding any excessive movement or rotation of the hips.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SIDE LEG SWINGS</h2>
        <ul>
            <li>Targets the Hip Abductor Muscles: Side Leg Swings primarily target the hip abductor muscles, which are responsible for moving the leg away from the midline of the body.</li>
            <li>Improves Hip Mobility and Dynamic Flexibility: This exercise helps to increase hip mobility and dynamic flexibility of the hip abductors, which can be beneficial for activities that require lateral movements.</li>
        </ul>
        <ol>
            <h4>How to perform Side Leg Swings:</h4>
            <li>Stand next to a sturdy support, such as a wall or a pole, for balance.</li>
            <li>Place your feet shoulder-width apart and maintain a slight bend in your knees.</li>
            <li>Hold onto the support with one hand for stability.</li>
            <li>Shift your weight onto your left leg while keeping your torso upright and engaging your core.</li>
            <li>Swing your right leg out to the side, crossing in front of your left leg.</li>
            <li>Control the swing and bring your right leg back to the starting position.</li>
            <li>Repeat the leg swings for the desired number of repetitions on one side.</li>
            <li>Switch to the other side and perform leg swings with your left leg.</li>
            <li>Keep the movement controlled and maintain your balance throughout the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedClaveDiv = [
    <div>
        <h2>STANDING BARBELL CALF RAISE</h2>
        <ul>
            <li>Targets the Calf Muscles: The Standing Barbell Calf Raise exercise primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles, which are located in the back of the lower leg.</li>
            <li>Improves Calf Strength and Size: This exercise helps to strengthen and develop the calf muscles, enhancing their size, shape, and overall lower leg strength.</li>
        </ul>
        <ol>
            <h4>How to perform Standing Barbell Calf Raise:</h4>
            <li>Start by standing upright with your feet shoulder-width apart, and place a barbell across your upper back, resting it on your trapezius muscles.</li>
            <li>Ensure that your spine is straight, and your core is engaged throughout the exercise.</li>
            <li>Keep a slight bend in your knees and your heels in contact with the floor.</li>
            <li>Slowly raise your heels off the floor by extending your ankles, contracting your calf muscles.</li>
            <li>Raise your heels as high as possible, feeling a stretch and contraction in your calf muscles.</li>
            <li>Hold the contracted position for a brief moment, emphasizing the squeeze in your calves.</li>
            <li>Lower your heels back down to the starting position in a controlled manner.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining proper form and control.</li>
            <li>Ensure that the barbell remains balanced on your upper back throughout the exercise, and use an appropriate amount of weight based on your strength and fitness level.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SEATED MACHINE CALF RAISE</h2>
        <ul>
            <li>Targets the Calf Muscles: The Seated Machine Calf Raise exercise primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles, which are located in the back of the lower leg.</li>
            <li>Improves Calf Strength and Size: This exercise helps to strengthen and develop the calf muscles, enhancing their size, shape, and overall lower leg strength.</li>
        </ul>
        <ol>
            <h4>How to perform Seated Machine Calf Raise:</h4>
            <li>Start by sitting on the calf raise machine with your feet placed on the platform and your knees positioned under the pads.</li>
            <li>Adjust the machine to ensure that your knees are in line with the axis of rotation and the balls of your feet are on the edge of the platform.</li>
            <li>Keep your torso upright and grasp the handles or the sides of the machine for support.</li>
            <li>Begin by pushing against the platform with the balls of your feet, extending your ankles and raising your heels as high as possible.</li>
            <li>Hold the fully extended position for a brief moment, feeling the contraction in your calf muscles.</li>
            <li>Slowly lower your heels back down to the starting position, allowing your calves to stretch.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining control and focusing on the engagement of your calf muscles.</li>
            <li>Adjust the weight on the machine as needed to match your strength and fitness level.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LEG PRESS CALF RAISE</h2>
        <ul>
            <li>Targets the Calf Muscles: The Leg Press Calf Raise exercise primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles, which are located in the back of the lower leg.</li>
            <li>Improves Calf Strength and Size: This exercise helps to strengthen and develop the calf muscles, enhancing their size, shape, and overall lower leg strength.</li>
        </ul>
        <ol>
            <h4>How to perform Leg Press Calf Raise:</h4>
            <li>Start by sitting on a leg press machine and position your feet on the footplate with the balls of your feet resting against the edge.</li>
            <li>Adjust the seat and footplate to align your knees with the axis of rotation.</li>
            <li>Release the safety mechanism and extend your legs to lift the weight, keeping a slight bend in your knees.</li>
            <li>Ensure that your heels are slightly hanging off the footplate, allowing for a full range of motion in the calf muscles.</li>
            <li>Lower your heels as far as possible, feeling a stretch in your calf muscles.</li>
            <li>Push through the balls of your feet and raise your heels as high as possible, contracting your calf muscles.</li>
            <li>Hold the fully contracted position for a brief moment, emphasizing the squeeze in your calves.</li>
            <li>Slowly lower your heels back down to the starting position, allowing your calves to stretch.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining control and focusing on the engagement of your calf muscles.</li>
            <li>Adjust the weight on the machine as needed to match your strength and fitness level.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LEG PRESS SINGLE-LEG CALF RAISE</h2>
        <ul>
            <li>Targets the Calf Muscles: The Leg Press Single-Leg Calf Raise exercise primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles, which are located in the back of the lower leg.</li>
            <li>Improves Calf Strength and Size: This exercise helps to strengthen and develop the calf muscles, enhancing their size, shape, and overall lower leg strength.</li>
        </ul>
        <ol>
            <h4>How to perform Leg Press Single-Leg Calf Raise:</h4>
            <li>Start by sitting on a leg press machine and position your feet on the footplate with the balls of your feet resting against the edge.</li>
            <li>Release the safety mechanism and extend one leg to lift the weight, keeping a slight bend in your knee.</li>
            <li>Ensure that your heel is slightly hanging off the footplate, allowing for a full range of motion in the calf muscle of the working leg.</li>
            <li>Lower your heel as far as possible, feeling a stretch in your calf muscle.</li>
            <li>Push through the ball of your foot and raise your heel as high as possible, contracting your calf muscle.</li>
            <li>Hold the fully contracted position for a brief moment, emphasizing the squeeze in your calf.</li>
            <li>Slowly lower your heel back down to the starting position, allowing your calf to stretch.</li>
            <li>Repeat the movement for the desired number of repetitions on one leg before switching to the other leg.</li>
            <li>Maintain control throughout the exercise and focus on the engagement of your calf muscle.</li>
            <li>Adjust the weight on the machine as needed to match your strength and fitness level.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SEATED BARBELL CALF RAISE</h2>
        <ul>
            <li>Targets the Calf Muscles: The Seated Barbell Calf Raise exercise primarily targets the calf muscles, specifically the gastrocnemius and soleus muscles, which are located in the back of the lower leg.</li>
            <li>Improves Calf Strength and Size: This exercise helps to strengthen and develop the calf muscles, enhancing their size, shape, and overall lower leg strength.</li>
        </ul>
        <ol>
            <h4>How to perform Seated Barbell Calf Raise:</h4>
            <li>Start by sitting on a bench or chair with your feet flat on the ground and shoulder-width apart.</li>
            <li>Place a barbell across your thighs, holding it securely with both hands.</li>
            <li>Ensure that your knees are slightly bent and your heels are in contact with the floor throughout the exercise.</li>
            <li>Slowly raise your heels off the floor by extending your ankles, contracting your calf muscles.</li>
            <li>Continue lifting until you reach the maximum contraction point for your calves.</li>
            <li>Hold the contracted position for a brief moment, focusing on squeezing your calf muscles.</li>
            <li>Lower your heels back down to the starting position in a controlled manner.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining proper form and control.</li>
            <li>It is important to use an appropriate amount of weight and ensure that the barbell remains secure on your thighs throughout the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,

];

const expandedHamstringDiv = [
    <div>
        <h2>DUMBBELL ROMANIAN DEADLIFT (RDL)</h2>
        <ul>
            <li>Targets the Hamstrings and Glutes: The Dumbbell Romanian Deadlift (RDL) primarily targets the hamstrings and glutes, while also engaging the lower back, core, and other leg muscles.</li>
            <li>Improves Hip Hinge Movement: This exercise helps to develop the hip hinge movement pattern, which is essential for proper lifting mechanics and functional movements.</li>
        </ul>
        <ol>
            <h4>How to perform Dumbbell Romanian Deadlift (RDL):</h4>
            <li>Begin by holding a pair of dumbbells in front of your thighs with an overhand grip.</li>
            <li>Stand with your feet shoulder-width apart, keeping a slight bend in your knees.</li>
            <li>Initiate the movement by pushing your hips back and leaning forward from the hips while maintaining a neutral spine.</li>
            <li>Lower the dumbbells along the front of your legs, keeping them close to your body.</li>
            <li>Lower the dumbbells until you feel a stretch in your hamstrings, but avoid rounding your back.</li>
            <li>Keep your core engaged and your chest lifted throughout the movement.</li>
            <li>Once you reach the bottom position, where your hamstrings are fully stretched, reverse the movement by driving your hips forward.</li>
            <li>As you drive your hips forward, squeeze your glutes and bring your torso back to an upright position.</li>
            <li>Ensure that you maintain control throughout the exercise and avoid using momentum.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on proper form and engaging the target muscles.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CONVENTIONAL DEADLIFT</h2>
        <ul>
            <li>Targets Multiple Muscle Groups: The Conventional Deadlift is a compound exercise that targets several muscle groups, including the back, glutes, hamstrings, core, and grip.</li>
            <li>Improves Strength and Power: This exercise is highly effective for building overall strength and power in the posterior chain, promoting functional movement patterns and enhancing athletic performance.</li>
        </ul>
        <ol>
            <h4>How to perform Conventional Deadlift:</h4>
            <li>Begin by standing with your feet hip-width apart, with the barbell on the floor in front of you.</li>
            <li>Position your feet so that the barbell is centered over the middle of your feet.</li>
            <li>Bend down and grip the barbell with your hands slightly wider than shoulder-width apart, using an overhand grip or a mixed grip (one hand overhand, one hand underhand).</li>
            <li>Lower your hips, keeping your back straight and your chest lifted.</li>
            <li>Engage your core and drive through your heels as you lift the barbell off the floor, extending your hips and knees simultaneously.</li>
            <li>As you stand up, keep the barbell close to your body, maintaining a neutral spine position.</li>
            <li>Once you reach the top position, with your hips fully extended and shoulders back, reverse the movement and lower the barbell back down to the floor.</li>
            <li>Ensure that you maintain proper form throughout the exercise, keeping your back flat, chest lifted, and core engaged.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on maintaining control and engaging the target muscles.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LYING LEG CURL</h2>
        <ul>
            <li>Targets the Hamstrings: The Lying Leg Curl exercise primarily targets the hamstrings, the muscles located at the back of the thigh.</li>
            <li>Develops Leg Strength and Stability: This exercise helps to develop leg strength, improve hamstring muscle balance, and enhance overall lower body stability.</li>
        </ul>
        <ol>
            <h4>How to perform Lying Leg Curl:</h4>
            <li>Start by lying face down on a leg curl machine, with your legs fully extended and your ankles positioned under the leg pad.</li>
            <li>Hold onto the handles of the machine for stability.</li>
            <li>Engage your core and keep your upper body flat on the bench throughout the movement.</li>
            <li>Bend your knees to lift the weight, bringing your heels toward your glutes.</li>
            <li>Ensure that your upper legs remain in contact with the leg pad.</li>
            <li>At the top of the movement, when your hamstrings are fully contracted, pause briefly and squeeze the muscles.</li>
            <li>Slowly lower the weight back down, extending your legs to the starting position.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on maintaining control and engaging the hamstrings.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>SEATED HAMSTRING CURL</h2>
        <ul>
            <li>Targets the Hamstrings: The Seated Hamstring Curl exercise primarily targets the hamstrings, the muscles located at the back of the thigh.</li>
            <li>Improves Hamstring Strength and Stability: This exercise helps to develop strength and stability in the hamstrings, contributing to overall lower body strength and athletic performance.</li>
        </ul>
        <ol>
            <h4>How to perform Seated Hamstring Curl:</h4>
            <li>Start by adjusting the machine to fit your body size and comfort level. Sit on the machine with your back against the backrest and your legs extended in front of you.</li>
            <li>Position the lower leg pad just above your ankles, resting against the back of your lower legs.</li>
            <li>Hold onto the handles of the machine for stability.</li>
            <li>Engage your core and keep your upper body upright throughout the movement.</li>
            <li>Bend your knees and curl your legs upward, bringing your heels toward your glutes.</li>
            <li>Ensure that your upper legs remain in contact with the leg pad.</li>
            <li>At the top of the movement, when your hamstrings are fully contracted, pause briefly and squeeze the muscles.</li>
            <li>Slowly lower the weight back down, extending your legs to the starting position.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on maintaining control and engaging the hamstrings.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LEVER LYING SINGLE LEG CURL</h2>
        <ul>
            <li>Targets the Hamstrings: The Lever Lying Single Leg Curl exercise primarily targets the hamstrings, the muscles located at the back of the thigh.</li>
            <li>Enhances Hamstring Strength and Balance: This exercise helps to develop strength, balance, and stability in the hamstrings, contributing to overall lower body strength and functional movement.</li>
        </ul>
        <ol>
            <h4>How to perform Lever Lying Single Leg Curl:</h4>
            <li>Start by lying face down on a leg curl machine that is designed for single-leg exercises.</li>
            <li>Position yourself with your upper body flat on the bench and your legs extended straight behind you.</li>
            <li>Secure one leg under the lever pad, just above the ankle.</li>
            <li>Place your hands on the handles or hold onto the sides of the bench for stability.</li>
            <li>Engage your core and keep your hips and upper body stationary throughout the movement.</li>
            <li>Bend your knee, curling your leg upward as you bring your heel toward your glutes.</li>
            <li>Ensure that your upper leg remains in contact with the bench and your hips do not lift off the bench.</li>
            <li>At the top of the movement, when your hamstrings are fully contracted, pause briefly and squeeze the muscles.</li>
            <li>Slowly lower your leg back down, extending it straight behind you to the starting position.</li>
            <li>Repeat the movement with the same leg for the desired number of repetitions before switching to the other leg.</li>
            <li>Focus on maintaining control and engaging the hamstrings throughout the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedGluteDiv = [
    <div>
        <h2>GOOD MORNINGS</h2>
        <ul>
            <li>Targets the Hamstrings, Glutes, and Lower Back: Good Mornings primarily target the hamstrings, glutes, and lower back muscles, helping to strengthen and develop these areas.</li>
            <li>Improves Posterior Chain Strength and Stability: This exercise is effective for enhancing strength and stability in the posterior chain, which includes the muscles along the backside of the body.</li>
        </ul>
        <ol>
            <h4>How to perform Good Mornings:</h4>
            <li>Start by standing with your feet shoulder-width apart, and place a barbell across your upper back, resting it on your trapezius muscles.</li>
            <li>Engage your core and maintain a slight bend in your knees throughout the movement.</li>
            <li>Keeping your back straight and your chest lifted, hinge forward at the hips, pushing your buttocks backward.</li>
            <li>Lower your upper body until it is parallel to the floor or until you feel a stretch in your hamstrings.</li>
            <li>Ensure that your spine remains in a neutral position and avoid rounding your back.</li>
            <li>Engage your hamstrings and glutes to return to the starting position, pushing your hips forward.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on maintaining control and feeling the tension in your hamstrings and glutes.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>HIP THRUST</h2>
        <ul>
            <li>Targets the Glutes and Hamstrings: Hip Thrust primarily targets the gluteal muscles (glutes) and hamstrings, helping to strengthen and develop these areas.</li>
            <li>Improves Hip Strength and Power: This exercise is effective for enhancing hip strength, power, and overall lower body stability.</li>
        </ul>
        <ol>
            <h4>How to perform Hip Thrust:</h4>
            <li>Start by sitting on the ground with your back against a stable bench or elevated surface. Your knees should be bent, and your feet should be flat on the floor, hip-width apart.</li>
            <li>Place a padded barbell or a weight plate across your hips, just above your pelvic bone.</li>
            <li>Brace your core and drive your heels into the ground to lift your hips off the floor.</li>
            <li>As you lift, focus on squeezing your glutes and engaging your hamstrings.</li>
            <li>Continue lifting until your hips are fully extended and your body forms a straight line from your knees to your shoulders.</li>
            <li>Hold the contracted position for a brief pause, focusing on maintaining tension in your glutes.</li>
            <li>Lower your hips back down to the starting position, maintaining control throughout the movement.</li>
            <li>Repeat the movement for the desired number of repetitions, emphasizing proper form and glute activation.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LEVER REVERSE HYPER-EXTENSION</h2>
        <ul>
            <li>Targets the Lower Back, Glutes, and Hamstrings: The Lever Reverse Hyper-extension primarily targets the muscles of the lower back, glutes, and hamstrings, helping to strengthen and develop these areas.</li>
            <li>Improves Posterior Chain Strength and Stability: This exercise is effective for enhancing strength and stability in the posterior chain, which includes the muscles along the backside of the body.</li>
        </ul>
        <ol>
            <h4>How to perform Lever Reverse Hyper-extension:</h4>
            <li>Start by positioning yourself face down on a lever reverse hyper-extension machine with your hips on the padded platform and your upper body supported by the bench or handles.</li>
            <li>Allow your legs to hang off the edge of the platform, ensuring that your feet are clear of any obstructions.</li>
            <li>Engage your core and glutes to maintain a stable position throughout the movement.</li>
            <li>Begin the exercise by raising your legs upward, leading with your heels, until they are in line with your body or slightly higher.</li>
            <li>At the top of the movement, squeeze your glutes and engage your hamstrings.</li>
            <li>Lower your legs back down in a controlled manner, returning to the starting position.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on maintaining control and feeling the tension in your lower back, glutes, and hamstrings.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE HIP EXTENSION</h2>
        <ul>
            <li>Targets the Glutes and Hamstrings: Cable Hip Extension primarily targets the gluteal muscles (glutes) and hamstrings, helping to strengthen and develop these areas.</li>
            <li>Improves Hip Strength and Stability: This exercise is effective for enhancing hip strength, stability, and overall lower body function.</li>
        </ul>
        <ol>
            <h4>How to perform Cable Hip Extension:</h4>
            <li>Start by attaching an ankle cuff to your ankle and securing the cable to a low pulley on a cable machine.</li>
            <li>Stand facing away from the machine, with your feet shoulder-width apart and a slight bend in your knees.</li>
            <li>Hold onto a stable structure or handle for support.</li>
            <li>Engage your core and keep your upper body upright throughout the exercise.</li>
            <li>Begin the movement by extending your hip backward, driving your leg straight back while maintaining control.</li>
            <li>Ensure that your back remains straight and your pelvis stays level.</li>
            <li>At the top of the movement, squeeze your glutes and engage your hamstrings.</li>
            <li>Slowly return your leg to the starting position in a controlled manner.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on proper form and glute activation.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>CABLE PULL THROUGH</h2>
        <ul>
            <li>Targets the Glutes and Hamstrings: Cable Pull Through primarily targets the gluteal muscles (glutes) and hamstrings, helping to strengthen and develop these areas.</li>
            <li>Improves Hip Strength and Stability: This exercise is effective for enhancing hip strength, stability, and overall lower body function.</li>
        </ul>
        <ol>
            <h4>How to perform Cable Pull Through:</h4>
            <li>Start by attaching a rope handle to a low pulley on a cable machine.</li>
            <li>Stand facing away from the machine with your feet shoulder-width apart and a slight bend in your knees.</li>
            <li>Hold the rope handle between your legs, with your hands crossed in front of your body.</li>
            <li>Step forward, creating tension in the cable, and position your feet slightly in front of the cable anchor point.</li>
            <li>Engage your core and keep your spine neutral throughout the exercise.</li>
            <li>Hinge at the hips, allowing your torso to lean forward while keeping your back straight.</li>
            <li>Continue to hinge forward until you feel a stretch in your hamstrings, and then push your hips forward to return to the starting position.</li>
            <li>As you return to the starting position, focus on squeezing your glutes and engaging your hamstrings.</li>
            <li>Repeat the movement for the desired number of repetitions, focusing on proper form and hip activation.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

const expandedQuadDiv = [
    <div>
        <h2>BARBELL SQUAT</h2>
        <ul>
            <li>Targets the Lower Body: Barbell Squat primarily targets the muscles of the lower body, including the quadriceps, hamstrings, and glutes.</li>
            <li>Full Body Compound Exercise: This exercise is a compound movement that engages multiple muscle groups, promoting overall strength and muscle development.</li>
        </ul>
        <ol>
            <h4>How to perform Barbell Squat:</h4>
            <li>Start by positioning the barbell on a squat rack at an appropriate height. Ensure that the barbell is loaded with weights according to your fitness level.</li>
            <li>Step under the barbell and position it on your upper back and shoulders. Take a firm grip on the bar with your hands slightly wider than shoulder-width apart.</li>
            <li>Step back from the squat rack and position your feet shoulder-width apart, with your toes slightly pointed outward.</li>
            <li>Brace your core, maintain a neutral spine, and keep your chest up throughout the exercise.</li>
            <li>Initiate the movement by bending at the knees and hips, lowering your body into a squat position.</li>
            <li>Lower yourself until your thighs are parallel to the floor or slightly below parallel, ensuring that your knees track over your toes.</li>
            <li>Drive through your heels and extend your knees and hips to return to the starting position.</li>
            <li>As you ascend, focus on contracting your quadriceps, hamstrings, and glutes.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining proper form and control throughout.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LUNGES</h2>
        <ul>
            <li>Targets the Lower Body: Dumbbell Lunges primarily target the muscles of the lower body, including the quadriceps, hamstrings, and glutes.</li>
            <li>Improves Balance and Stability: This exercise challenges your balance and stability, promoting better coordination and overall lower body strength.</li>
        </ul>
        <ol>
            <h4>How to perform Lunges:</h4>
            <li>Start by holding a dumbbell in each hand, with your palms facing your body.</li>
            <li>Stand with your feet shoulder-width apart, maintaining an upright posture.</li>
            <li>Take a step forward with your right foot, ensuring that your step is long enough to create a lunge position.</li>
            <li>Lower your body by bending both knees, allowing your back knee to lower toward the floor without touching it.</li>
            <li>Keep your front knee directly above your ankle and your torso upright throughout the movement.</li>
            <li>Push through your front heel to return to the starting position.</li>
            <li>Repeat the movement on the opposite side, stepping forward with your left foot.</li>
            <li>Continue alternating legs, performing lunges for the desired number of repetitions.</li>
            <li>Focus on maintaining control, proper form, and engaging your leg muscles throughout the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LEG EXTENSION</h2>
        <ul>
            <li>Targets the Quadriceps: Leg Extension primarily targets the quadriceps muscles, located on the front of your thighs.</li>
            <li>Isolation Exercise for Leg Development: This exercise isolates the quadriceps, making it an effective choice for developing strength and muscular definition in the front of your legs.</li>
        </ul>
        <ol>
            <h4>How to perform Leg Extension:</h4>
            <li>Start by adjusting the leg extension machine according to your height and comfort.</li>
            <li>Sit on the machine with your back firmly against the backrest and your feet placed under the padded lever.</li>
            <li>Ensure that your knees are aligned with the pivot point of the machine.</li>
            <li>Grasp the handles on the sides of the seat for stability.</li>
            <li>Engage your core and maintain a straight back throughout the exercise.</li>
            <li>Exhale as you extend your legs, lifting the padded lever by straightening your knees.</li>
            <li>Continue to extend your legs until they are almost fully straightened, focusing on contracting your quadriceps.</li>
            <li>Pause for a moment at the top of the movement, then inhale as you slowly lower the padded lever to the starting position.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining control and proper form.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>LEG PRESS</h2>
        <ul>
            <li>Targets the Lower Body: Leg Press primarily targets the muscles of the lower body, including the quadriceps, hamstrings, and glutes.</li>
            <li>Compound Exercise for Leg Strength: This exercise is a compound movement that engages multiple muscle groups, promoting overall lower body strength and development.</li>
        </ul>
        <ol>
            <h4>How to perform Leg Press:</h4>
            <li>Start by adjusting the leg press machine according to your height and comfort.</li>
            <li>Sit on the machine with your back firmly against the backrest and your feet placed on the foot platform shoulder-width apart.</li>
            <li>Position your knees at a 90-degree angle, with your feet slightly higher than your hips.</li>
            <li>Grasp the handles on the sides of the seat for stability.</li>
            <li>Engage your core and maintain a neutral spine throughout the exercise.</li>
            <li>Press through your heels and extend your legs, pushing the foot platform away from your body.</li>
            <li>Continue to extend your legs until they are almost fully straightened, focusing on contracting your leg muscles.</li>
            <li>Pause for a moment at the top of the movement, then slowly bend your knees to lower the foot platform back towards your body.</li>
            <li>Repeat the movement for the desired number of repetitions, maintaining control and proper form.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
    <div>
        <h2>BULGARIAN SPLIT SQUAT</h2>
        <ul>
            <li>Targets the Lower Body: Bulgarian Split Squat primarily targets the muscles of the lower body, including the quadriceps, hamstrings, and glutes.</li>
            <li>Unilateral Exercise for Balance and Stability: This exercise is performed unilaterally, meaning one leg at a time, which helps improve balance, stability, and correct muscular imbalances.</li>
        </ul>
        <ol>
            <h4>How to perform Bulgarian Split Squat:</h4>
            <li>Start by holding a dumbbell in each hand, with your palms facing your body.</li>
            <li>Stand with your back facing away from a bench or elevated platform.</li>
            <li>Place the top of your left foot on the bench, positioning your right leg forward in a split stance.</li>
            <li>Ensure that your feet are hip-width apart and your front knee is directly above your ankle.</li>
            <li>Engage your core and maintain an upright posture throughout the exercise.</li>
            <li>Lower your body by bending both knees, allowing your back knee to lower toward the floor without touching it.</li>
            <li>Keep your front knee directly above your ankle and your torso upright throughout the movement.</li>
            <li>Push through your front heel to return to the starting position.</li>
            <li>Repeat the movement on the same leg for the desired number of repetitions, then switch legs and perform the exercise on the opposite side.</li>
            <li>Focus on maintaining control, proper form, and engaging your leg muscles throughout the exercise.</li>
        </ol>
        <div className='expandeddiv-btn-container'>
            <button className='button-47'>Add To Workout</button>
        <button className='button-47'>Watch Video</button>
        </div>
    </div>,
];

export {
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
};


export default ExerciseData;
