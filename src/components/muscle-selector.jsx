import React, { useState, useRef, useEffect } from "react";
import Navbar from "./navbar";
import './muscle-selector.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

const MuscleGroupSelector = () => {



	React.useEffect(() => {
		AOS.init(); // Initialize AOS library for scroll animations
	}, []);


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

	//Image expansion
	const [expandedDelt, setExpandedDelt] = useState(null);
	const [selectedDeltIndex, setSelectedDeltIndex] = useState(null);
	//To expand the div and pass the index of image
	const handleDeltClick = (image, index) => {
		setExpandedDelt(image);
		setSelectedDeltIndex(index);
	};
	//To close the expanded div
	const handleCloseClickDelt = () => {
		setExpandedDelt(null);
	};

	const [expandedBicep, setExpandedBicep] = useState(null);
	const [selectedBicepIndex, setSelectedBicepIndex] = useState(null);
	const handleBicepClick = (image, index) => {
		setExpandedBicep(image);
		setSelectedBicepIndex(index);
	};
	const handleClickCloseBicep = () => {
		setExpandedBicep(null);
	};

	const [expandedForearm, setExpandedForearm] = useState(null);
	const [selectedForearmIndex, setSelectedForearmIndex] = useState(null);
	const handleForearmClick = (image, index) => {
		setExpandedForearm(image);
		setSelectedForearmIndex(index);
	};
	const handleClickCloseForearm = () => {
		setExpandedForearm(null);
	};

	const [expandedTricep, setExpandedTricep] = useState(null);
	const [selectedTricepIndex, setSelectedTricepIndex] = useState(null);
	const handleTricepClick = (image, index) => {
		setExpandedTricep(image);
		setSelectedTricepIndex(index);
	};
	const handleClickCloseTricep = () => {
		setExpandedTricep(null);
	};

	const [expandedTraps, setExpandedTraps] = useState(null);
	const [selectedTrapsIndex, setSelectedTrapsIndex] = useState(null);
	const handleTrapsClick = (image, index) => {
		setExpandedTraps(image);
		setSelectedTrapsIndex(index);
	};
	const handleClickCloseTraps = () => {
		setExpandedTraps(null);
	};

	const [expandedLats, setExpandedLats] = useState(null);
	const [selectedLatsIndex, setSelectedLatsIndex] = useState(null);
	const handleLatsClick = (image, index) => {
		setExpandedLats(image);
		setSelectedLatsIndex(index);
	};
	const handleClickCloseLats = () => {
		setExpandedLats(null);
	};

	const [expandedAbs, setExpandedAbs] = useState(null);
	const [selectedAbsIndex, setSelectedAbsIndex] = useState(null);
	const handleAbsClick = (image, index) => {
		setExpandedAbs(image);
		setSelectedAbsIndex(index);
	};
	const handleClickCloseAbs = () => {
		setExpandedAbs(null);
	};

	const [expandedObluque, setExpandedObluque] = useState(null);
	const [selectedObluqueIndex, setSelectedObluqueIndex] = useState(null);
	const handleObluqueClick = (image, index) => {
		setExpandedObluque(image);
		setSelectedObluqueIndex(index);
	};
	const handleClickCloseObluque = () => {
		setExpandedObluque(null);
	};

	const [expandedPects, setExpandedPects] = useState(null);
	const [selectedPectsIndex, setSelectedPectsIndex] = useState(null);
	const handlePectsClick = (image, index) => {
		setExpandedPects(image);
		setSelectedPectsIndex(index);
	};
	const handleClickClosePects = () => {
		setExpandedPects(null);
	};

	const [expandedAdductor, setExpandedAdductor] = useState(null);
	const [selectedAdductorIndex, setSelectedAdductorIndex] = useState(null);
	const handleAdductorClick = (image, index) => {
		setExpandedAdductor(image);
		setSelectedAdductorIndex(index);
	};
	const handleClickCloseAdductor = () => {
		setExpandedAdductor(null);
	};

	const [expandedCalve, setExpandedCalve] = useState(null);
	const [selectedCalveIndex, setSelectedCalveIndex] = useState(null);
	const handleCalveClick = (image, index) => {
		setExpandedCalve(image);
		setSelectedCalveIndex(index);
	};
	const handleClickCloseCalve = () => {
		setExpandedCalve(null);
	};

	const [expandedHamstring, setExpandedHamstring] = useState(null);
	const [selectedHamstringIndex, setSelectedHamstringIndex] = useState(null);
	const handleHamstringClick = (image, index) => {
		setExpandedHamstring(image);
		setSelectedHamstringIndex(index);
	};
	const handleClickCloseHamstring = () => {
		setExpandedHamstring(null);
	};

	const [expandedGlutes, setExpandedGlutes] = useState(null);
	const [selectedGlutesIndex, setSelectedGlutesIndex] = useState(null);
	const handleGlutesClick = (image, index) => {
		setExpandedGlutes(image);
		setSelectedGlutesIndex(index);
	};
	const handleClickCloseGlutes = () => {
		setExpandedGlutes(null);
	};

	const [expandedQuads, setExpandedQuads] = useState(null);
	const [selectedQuadsIndex, setSelectedQuadsIndex] = useState(null);
	const handleQuadsClick = (image, index) => {
		setExpandedQuads(image);
		setSelectedQuadsIndex(index);
	};
	const handleClickCloseQuads = () => {
		setExpandedQuads(null);
	};




	//For opening divs of svg or muscle name click
	const [isBicepsVisible, setIsBicepsVisible] = useState(false);
	const [isDeltoidsVisible, setIsDeltoidsVisible] = useState(false);
	const [isForearmsVisible, setIsForearmsVisible] = useState(false);
	const [isTricepsVisible, setIsTricepsVisible] = useState(false);
	const [isTrapeziusVisible, setIsTrapeziusVisible] = useState(false);
	const [isLatsVisible, setIsLatsVisible] = useState(false);
	const [isAbsVisible, setIsAbsVisible] = useState(false);
	const [isObliquesVisible, setIsObliquesVisible] = useState(false);
	const [isPectoralsVisible, setIsPectoralsVisible] = useState(false);
	const [isAdductorsVisible, setIsAdductorsVisible] = useState(false);
	const [isCalvesVisible, setIsCalvesVisible] = useState(false);
	const [isHamstringsVisible, setIsHamstringsVisible] = useState(false);
	const [isGlutesVisible, setIsGlutesVisible] = useState(false);
	const [isQuadsVisible, setIsQuadsVisible] = useState(false);

	//for scrolling
	const bicepsRef = useRef(null);
	const deltoidsRef = useRef(null);
	const forearmsRef = useRef(null);
	const tricepsRef = useRef(null);
	const trapeziusRef = useRef(null);
	const latsRef = useRef(null);
	const absRef = useRef(null);
	const obliquesRef = useRef(null);
	const pectoralsRef = useRef(null);
	const adductorsRef = useRef(null);
	const calvesRef = useRef(null);
	const hamstringsRef = useRef(null);
	const glutesRef = useRef(null);
	const quadsRef = useRef(null);

	const div_biceps = (bicepsRef) => {
		setIsBicepsVisible((prevState) => !prevState);
	};

	const div_deltoids = () => {
		setIsDeltoidsVisible((prevState) => !prevState);
	};
	const div_forearms = () => {
		setIsForearmsVisible((prevState) => !prevState);
	};
	const div_triceps = () => {
		setIsTricepsVisible((prevState) => !prevState);
	};
	const div_trapezius = () => {
		setIsTrapeziusVisible((prevState) => !prevState);
	};
	const div_lats = () => {
		setIsLatsVisible((prevState) => !prevState);
	};
	const div_abs = () => {
		setIsAbsVisible((prevState) => !prevState);
	};
	const div_obliques = () => {
		setIsObliquesVisible((prevState) => !prevState);
	};
	const div_pectorals = () => {
		setIsPectoralsVisible((prevState) => !prevState);
	};
	const div_adductors = () => {
		setIsAdductorsVisible((prevState) => !prevState);
	};
	const div_calves = () => {
		setIsCalvesVisible((prevState) => !prevState);
	};
	const div_hamstrings = () => {
		setIsHamstringsVisible((prevState) => !prevState);
	};
	const div_glutes = () => {
		setIsGlutesVisible((prevState) => !prevState);
	};
	const div_quads = () => {
		setIsQuadsVisible((prevState) => !prevState);
	};


	useEffect(() => {
		if (isBicepsVisible && bicepsRef.current) {
			bicepsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isBicepsVisible]);

	useEffect(() => {
		if (isDeltoidsVisible && deltoidsRef.current) {
			deltoidsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isDeltoidsVisible]);

	useEffect(() => {
		if (isForearmsVisible && forearmsRef.current) {
			forearmsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isForearmsVisible]);

	useEffect(() => {
		if (isTricepsVisible && tricepsRef.current) {
			tricepsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isTricepsVisible]);

	useEffect(() => {
		if (isTrapeziusVisible && trapeziusRef.current) {
			trapeziusRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isTrapeziusVisible]);

	useEffect(() => {
		if (isLatsVisible && latsRef.current) {
			latsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isLatsVisible]);

	useEffect(() => {
		if (isAbsVisible && absRef.current) {
			absRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isAbsVisible]);

	useEffect(() => {
		if (isObliquesVisible && obliquesRef.current) {
			obliquesRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isObliquesVisible]);

	useEffect(() => {
		if (isPectoralsVisible && pectoralsRef.current) {
			pectoralsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isPectoralsVisible]);

	useEffect(() => {
		if (isAdductorsVisible && adductorsRef.current) {
			adductorsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isAdductorsVisible]);

	useEffect(() => {
		if (isCalvesVisible && calvesRef.current) {
			calvesRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isCalvesVisible]);

	useEffect(() => {
		if (isHamstringsVisible && hamstringsRef.current) {
			hamstringsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isHamstringsVisible]);

	useEffect(() => {
		if (isGlutesVisible && glutesRef.current) {
			glutesRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isGlutesVisible]);

	useEffect(() => {
		if (isQuadsVisible && quadsRef.current) {
			quadsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isQuadsVisible]);


	return (

		<main>

			<Navbar />

			<div className="muscle-selector-body">
				<div className="top-div topDiv"><h1>Select Muscle Group</h1></div>
				<div className="muscle-groups">

					{/* <h1>Select Muscle Group</h1> */}


					<div className="div1">

						<h2>Arms</h2>
						<input type="checkbox" className="biceps muscles-helper" id="biceps" />
						<label htmlFor="biceps" onClick={div_biceps}>Biceps</label>
						<input type="checkbox" className="deltoids muscles-helper" id="deltoids" />
						<label htmlFor="deltoids" onClick={div_deltoids}>Deltoids</label>
						<input type="checkbox" className="forearms muscles-helper" id="forearms" />
						<label htmlFor="forearms" onClick={div_forearms}>Forearms</label>
						<input type="checkbox" className="triceps muscles-helper" id="triceps" />
						<label htmlFor="triceps" onClick={div_triceps}>Triceps</label>
						<h2>Back</h2>
						<input type="checkbox" className="trapezius muscles-helper" id="trapezius" />
						<label htmlFor="trapezius" onClick={div_trapezius}>Trapezius</label>
						<input type="checkbox" className="lats muscles-helper" id="lats" />
						<label htmlFor="lats" onClick={div_lats}>Lats</label>
						<h2>Core</h2>
						<input type="checkbox" className="abs muscles-helper" id="abs" />
						<label htmlFor="abs" onClick={div_abs}>Abs</label>
						<input type="checkbox" className="obliques muscles-helper" id="obliques" />
						<label htmlFor="obliques" onClick={div_obliques}>Obliques</label>
						<input type="checkbox" className="pectorals muscles-helper" id="pectorals" />
						<label htmlFor="pectorals" onClick={div_pectorals}>Pectorals</label>
						<h2>Legs</h2>
						<input type="checkbox" className="adductors muscles-helper" id="adductors" />
						<label htmlFor="adductors" onClick={div_adductors}>Adductors</label>
						<input type="checkbox" className="calves muscles-helper" id="calves" />
						<label htmlFor="calves" onClick={div_calves}>Calves</label>
						<input type="checkbox" className="hamstrings muscles-helper" id="hamstrings" />
						<label htmlFor="hamstrings" onClick={div_hamstrings}>Hamstrings</label>
						<input type="checkbox" className="glutes muscles-helper" id="glutes" />
						<label htmlFor="glutes" onClick={div_glutes}>Glutes</label>
						<input type="checkbox" className="quads muscles-helper" id="quads" />
						<label htmlFor="quads" onClick={div_quads}>Quads</label>
					</div>
					<div className="div2">
						<svg
							viewBox="0 0 176 207"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlSpace="preserve"
							style={{
								fillRule: "evenodd",
								clipRule: "evenodd",
								strokeLinejoin: "round",
								strokeMiterlimit: 1.41421,
							}}
						>
							<rect
								id="Artboard1"
								x={0}
								y={0}
								width={175.551}
								height={206.785}
								style={{
									fill: "none",
								}}
							/>
							<g id="Back-Muscles">
								<g>
									<g id="Trapezius" onClick={div_trapezius}>
										<g>
											<path
												d="M129.543,76.453c0.075,0.385 0.737,-2.948 1.567,-2.58c0.829,0.369 1.852,2.584 1.842,2.488c-0.26,-2.728 2.184,-6.972 3.963,-9.859c1.932,-3.136 2.94,-3.318 4.238,-7.371c0.517,-1.615 0,-12.163 2.211,-16.033c2.212,-3.869 3.778,-3.473 5.437,-4.422c0.362,-0.207 -13.577,-1.309 -14.779,-10.719c-0.198,-1.556 -0.211,-2.973 0.036,-4.392c0.247,-1.42 -7.247,-1.995 -7.647,-0.092c-0.612,2.906 4.562,11.205 -13.084,13.913c-1.239,0.19 3.655,2.08 6.357,6.173c0.659,0.998 0.647,3.367 2.672,16.678c0.453,2.976 6.322,11.786 7.187,16.216Z"
												style={{
													fill: "#262626",
												}}
											/>
										</g>
									</g>
									<g id="Lats" onClick={div_lats}>
										<path
											d="M134.34,75.599c0,0 5.048,5.158 5.597,8.231c0.549,3.073 0.557,8.648 3.183,8.231c0.035,-0.005 -0.895,-2.038 0.325,-4.136c4.193,-7.206 4.394,-15.619 4.394,-15.619l1.427,-13.718c0,0 -3.915,1.393 -7.024,-0.659c-0.623,-0.411 -0.256,4.772 -3.251,7.473c-1.226,1.105 -5.858,7.124 -4.651,10.197Z"
											style={{
												fill: "#404040",
											}}
										/>
										<path
											d="M127.775,75.599c0,0 -5.049,5.158 -5.597,8.231c-0.549,3.073 -0.557,8.648 -3.183,8.231c-0.035,-0.005 0.895,-2.038 -0.326,-4.136c-4.192,-7.206 -4.393,-15.619 -4.393,-15.619l-1.427,-13.718c0,0 3.915,1.393 7.024,-0.659c0.623,-0.411 0.255,4.772 3.251,7.473c1.226,1.105 5.858,7.124 4.651,10.197Z"
											style={{
												fill: "#404040",
											}}
										/>
									</g>
									<g id="Triceps" onClick={div_triceps}>
										<path
											d="M149.266,49.372c0,0 3.715,-2.597 5.023,-1.85c1.309,0.748 3.739,5.515 4.02,7.478c0.28,1.963 1.495,17.573 1.495,17.573c0,0 -0.467,1.945 -1.776,2.422c-1.308,0.476 -1.121,-4.059 -2.113,-4.555c-0.991,-0.496 -0.045,3.516 -1.037,3.832c-0.991,0.315 -3.876,-1.082 -3.876,-1.082l-2.194,-6.446c0,0 2.058,-13.917 0.458,-17.372Z"
											style={{
												fill: "#333",
											}}
										/>
										<path
											d="M112.671,49.372c0,0 -3.715,-2.597 -5.023,-1.85c-1.309,0.748 -3.739,5.515 -4.02,7.478c-0.28,1.963 -1.495,17.573 -1.495,17.573c0,0 0.467,1.945 1.776,2.422c1.308,0.476 1.121,-4.059 2.113,-4.555c0.991,-0.496 0.045,3.516 1.036,3.832c0.992,0.315 3.877,-1.082 3.877,-1.082l2.194,-6.446c0,0 -2.058,-13.917 -0.458,-17.372Z"
											style={{
												fill: "#333",
											}}
										/>
									</g>
									<g id="Forearms" onClick={div_forearms}>
										<path
											d="M159.804,73.41c0,0 3.727,5.905 4.477,10.404c0.75,4.499 -0.094,13.404 2.062,15.466c2.156,2.062 -6.235,3.749 -6.539,1.687c-0.303,-2.062 -9.5,-17.601 -8.458,-20.433c0.282,-0.766 -0.281,-7.405 -0.281,-7.405l3.241,1.866c0,0 0.696,2.821 -0.898,3.664c-1.593,0.844 0.938,3.281 1.969,2.25c1.031,-1.031 1.687,-3 2.905,-3.375c1.219,-0.375 -0.937,-2.104 -0.187,-2.504c0.75,-0.401 1.709,-1.62 1.709,-1.62Z"
											style={{
												fill: "#595959",
											}}
										/>
										<path
											d="M102.444,73.41c0,0 -3.727,5.905 -4.477,10.404c-0.75,4.499 0.094,13.404 -2.062,15.466c-2.156,2.062 6.236,3.749 6.539,1.687c0.303,-2.062 9.5,-17.601 8.458,-20.433c-0.282,-0.766 0.281,-7.405 0.281,-7.405l-3.241,1.866c0,0 -0.696,2.821 0.898,3.664c1.593,0.844 -0.937,3.281 -1.968,2.25c-1.032,-1.031 -1.688,-3 -2.906,-3.375c-1.219,-0.375 0.937,-2.104 0.187,-2.504c-0.749,-0.401 -1.709,-1.62 -1.709,-1.62Z"
											style={{
												fill: "#595959",
											}}
										/>
									</g>
									<g id="Glutes" onClick={div_glutes}>
										<path
											d="M116.292,89.962c0.806,-0.134 13.533,6.223 14.226,16.039c0.693,9.815 -6.928,13.33 -13.359,11.611c-6.43,-1.719 -5.954,-9.396 -5.786,-11.242c0.12,-1.318 1.27,-4.277 2.315,-11.444c0.181,-1.241 1.798,-4.83 2.604,-4.964Z"
											style={{
												fill: "#1a1a1a",
											}}
										/>
										<path
											d="M147.461,91.166c-0.718,-0.286 -13.58,3.525 -15.977,13.028c-2.396,9.503 3.994,14.407 10.225,13.947c6.231,-0.459 7.168,-8.085 7.344,-9.93c0.126,-1.316 -0.403,-4.44 -0.083,-11.675c0.056,-1.253 -0.79,-5.085 -1.509,-5.37Z"
											style={{
												fill: "#1a1a1a",
											}}
										/>
									</g>
									<g id="Hamstrings" onClick={div_hamstrings}>
										<path
											d="M134.031,118.726c0,0 12.347,0.487 14.305,-1.231c1.959,-1.718 2.481,9.396 0,21.406c-2.48,12.01 -0.916,13.351 -1.279,13.035c-2.739,-2.372 -4.386,-8.297 -4.578,-8.153c-0.152,0.115 -5.704,8.313 -4.791,14.7c0.052,0.368 -5.202,-28.975 -5.985,-32.542c-0.783,-3.567 -1.965,-6.826 2.328,-7.215Z"
											style={{
												fill: "#333",
											}}
										/>
										<path
											d="M127.912,118.726c0,0 -12.283,0.487 -14.231,-1.231c-1.947,-1.718 -2.467,9.396 0,21.406c2.468,12.01 0.912,13.351 1.273,13.035c2.725,-2.372 4.363,-8.297 4.554,-8.153c0.152,0.115 5.675,8.313 4.767,14.7c-0.052,0.368 5.175,-28.975 5.954,-32.542c0.778,-3.567 0.171,-7.106 -2.317,-7.215Z"
											style={{
												fill: "#333",
											}}
										/>
									</g>
									<g id="Calves" onClick={div_calves}>
										<path
											d="M142.885,152.39c0,0 -5.718,7.108 -6.096,10.007c-0.378,2.898 -0.387,16.918 0.677,19.353c0.779,1.782 4.588,-3.96 5.545,-7.56c0.956,-3.6 -0.014,3.34 2.394,5.922c0.407,0.436 4.674,-13.753 3.447,-18.453c-1.702,-6.519 -2.344,-8.369 -1.913,-11.391c0.678,-4.752 -2.574,2.122 -3.046,4.264c-0.472,2.142 -1.008,-2.142 -1.008,-2.142Z"
											style={{
												fill: "#4d4d4d",
											}}
										/>
										<path
											d="M119.244,152.39c0,0 5.718,7.108 6.096,10.007c0.378,2.898 0.387,16.918 -0.677,19.353c-0.779,1.782 -4.588,-3.96 -5.545,-7.56c-0.957,-3.6 0.014,3.34 -2.394,5.922c-0.407,0.436 -4.674,-13.753 -3.447,-18.453c1.702,-6.519 2.344,-8.369 1.913,-11.391c-0.678,-4.752 2.574,2.122 3.046,4.264c0.472,2.142 1.008,-2.142 1.008,-2.142Z"
											style={{
												fill: "#4d4d4d",
											}}
										/>
									</g>
								</g>
							</g>
							<g id="Front-Muscles">
								<g id="Deltoids" onClick={div_deltoids}>
									<path
										d="M35.684,38.139c0,0 -12.432,-7.085 -17.512,3.476c-1.869,3.885 -0.459,16.146 -0.401,16.71c0.038,0.373 3.69,-7.88 6.817,-9.625c0.537,-0.299 -0.144,-8.31 11.096,-10.561Z"
										style={{
											fill: "#333",
										}}
									/>
									<path
										d="M52.463,38.139c0,0 12.432,-7.085 17.512,3.476c1.869,3.885 0.459,16.146 0.401,16.71c-0.038,0.373 -3.69,-7.88 -6.818,-9.625c-0.536,-0.299 0.145,-8.31 -11.095,-10.561Z"
										style={{
											fill: "#333",
										}}
									/>
								</g>
								<g id="Biceps" onClick={div_biceps}>
									<path
										d="M25.232,48.934c0,0 1.105,16.785 -0.186,17.535c-1.481,0.86 -2.239,9.14 -2.239,9.14c0,0 -0.746,-2.099 -1.585,-2.005c-0.84,0.093 -2.425,1.679 -2.752,2.238c-0.326,0.56 -5.223,-17.301 6.762,-26.908Z"
										style={{
											fill: "#404040",
										}}
									/>
									<path
										d="M63.528,51.098c0,0 -1.105,16.784 0.187,17.534c1.481,0.861 2.238,9.141 2.238,9.141c0,0 0.746,-2.099 1.586,-2.005c0.839,0.093 2.425,1.678 2.751,2.238c0.327,0.56 5.223,-17.302 -6.762,-26.908Z"
										style={{
											fill: "#404040",
										}}
									/>
								</g>
								<g id="Pectorals" onClick={div_pectorals}>
									<path
										d="M42.057,40.112c-0.311,3.984 2.007,8.955 2.037,11.938c0.04,4.039 -0.33,7.303 -7.463,8.098c-5.733,0.638 -7.022,-1.737 -8.88,-2.919c-1.159,-0.738 -1.515,-8.373 -2.573,-9.527c-0.723,-0.788 3.991,-8.909 10.523,-8.851c6.532,0.057 6.421,0.425 6.356,1.261Z"
										style={{
											fill: "#595959",
										}}
									/>
									<path
										d="M46.136,40.112c0.311,3.984 -2.008,8.955 -2.037,11.938c-0.04,4.039 0.329,7.303 7.463,8.098c5.733,0.638 7.022,-1.737 8.879,-2.919c1.16,-0.738 1.515,-8.373 2.574,-9.527c0.723,-0.788 -3.991,-8.909 -10.523,-8.851c-6.533,0.057 -6.422,0.425 -6.356,1.261Z"
										style={{
											fill: "#595959",
										}}
									/>
								</g>
								<g id="Obliques" onClick={div_obliques}>
									<path
										d="M36.007,62.836c0,0 1.395,31.809 0,32.945c-1.394,1.136 -1.678,-6.343 -6.79,-7.195c-0.953,-0.159 -0.163,-17.23 -2.449,-21.3c-2.285,-4.071 8.267,-5.775 9.239,-4.45Z"
										style={{
											fill: "#262626",
										}}
									/>
									<path
										d="M51.917,62.836c0,0 -1.395,31.809 0,32.945c1.394,1.136 1.678,-6.343 6.79,-7.195c0.953,-0.159 0.163,-17.23 2.449,-21.3c2.285,-4.071 -8.267,-5.775 -9.239,-4.45Z"
										style={{
											fill: "#262626",
										}}
									/>
								</g>
								<g id="Abs" onClick={div_abs}>
									<path
										d="M44.343,60.277c0,0 -5.885,-1.868 -8.56,1.474c-2.675,3.341 0.465,16.298 -0.248,21.113c-0.713,4.815 3.292,24.8 5.331,25.563c1.267,0.475 2.143,0.569 3.567,-0.089c1.256,-0.58 7.126,-13.883 7.896,-25.594c0.356,-5.416 4.855,-21.729 -2.992,-22.913c-4.539,-0.685 -4.994,0.446 -4.994,0.446Z"
										style={{
											fill: "#595959",
										}}
									/>
								</g>
								<g id="Quads" onClick={div_quads}>
									<path
										d="M31.536,95.898c0,0 11.073,23.633 10.268,34.698c-0.805,11.065 -2.012,14.887 -2.012,17.704c0,2.816 0.361,-4.209 -3.165,-4.225c-4.132,-0.019 -7.219,3.332 -8.338,7.023c-0.159,0.527 -0.999,-10.497 -0.999,-10.497c0,0 -1.416,-3.038 -2.386,-13.241c-1.468,-15.448 10.299,-21.015 6.632,-31.462"
										style={{
											fill: "#333",
										}}
									/>
									<path
										d="M56.329,95.898c0,0 -11.073,23.633 -10.268,34.698c0.804,11.065 2.012,14.887 2.012,17.704c0,2.816 -0.361,-4.209 3.165,-4.225c4.131,-0.019 7.219,3.332 8.337,7.023c0.16,0.527 0.999,-10.497 0.999,-10.497c0,0 1.417,-3.038 2.387,-13.241c1.468,-15.448 -10.299,-21.015 -6.632,-31.462"
										style={{
											fill: "#333",
										}}
									/>
								</g>
								<g id="Adductors" onClick={div_adductors}>
									<path
										d="M34.684,93.947c0,0 4.231,11.716 5.884,14.86c2.454,4.668 3.854,8.447 3.487,9.049c-0.368,0.602 -1.254,9.8 -1.32,8.966c-0.474,-6.017 -7.45,-29.324 -8.592,-30.924c-0.63,-0.882 0.537,-1.957 0.541,-1.951Z"
										style={{
											fill: "#4d4d4d",
										}}
									/>
									<path
										d="M53.036,93.947c0,0 -4.231,11.716 -5.884,14.86c-2.454,4.668 -3.854,8.447 -3.487,9.049c0.368,0.602 1.254,9.8 1.32,8.966c0.474,-6.017 7.45,-29.324 8.592,-30.924c0.63,-0.882 -0.537,-1.957 -0.541,-1.951Z"
										style={{
											fill: "#4d4d4d",
										}}
									/>
								</g>
							</g>
							<path
								id="Front"
								d="M44.055,118.158c-0.3,3.531 3.185,22.306 4.422,29.636c0.589,3.472 2.204,9.13 1.623,12.134c-0.83,4.187 -1.07,9.604 -0.613,12.759c0.288,1.916 1.195,10.752 -0.103,13.984c-0.678,1.695 -1.922,10.38 -1.922,10.38c-3.241,8.182 -1.412,7.779 -1.412,7.779c1.003,1.231 2.722,0.097 2.722,0.097c1.309,0.834 2.215,-0.198 2.215,-0.198c1.124,0.93 2.434,-0.115 2.434,-0.115c1.412,0.733 2.721,-0.618 2.721,-0.618c0.811,0.408 1.009,-0.108 1.009,-0.108c2.433,-0.156 -1.357,-7.941 -1.357,-7.941c-0.908,-6.993 0.9,-10.884 0.9,-10.884c5.923,-17.565 6.224,-22.226 3.856,-28.845c-0.666,-1.911 -0.835,-2.668 -0.528,-3.497c0.709,-1.915 0.192,-9.617 1.057,-12.675c1.669,-5.898 3.316,-20.856 4.174,-27.836c1.153,-9.401 -4.085,-22.007 -4.085,-22.007c-1.147,-5.129 0.535,-23.406 0.535,-23.406c2.349,3.655 2.259,10.107 2.259,10.107c-0.373,6.766 5.466,17.107 5.466,17.107c2.806,4.274 3.868,8.328 3.868,8.629c0,1.231 -0.269,4.212 -0.269,4.212l0.107,2.595c0.049,0.661 0.42,2.937 0.36,4.037c-0.438,6.769 0.638,5.495 0.638,5.495c0.907,0 1.904,-5.447 1.904,-5.447c0,1.405 -0.343,5.61 0.415,7.197c0.906,1.892 1.573,-0.325 1.585,-0.77c0.24,-8.619 0.758,-6.361 0.758,-6.361c0.504,6.992 1.123,8.572 2.234,8.025c0.842,-0.401 0.072,-8.391 0.072,-8.391c1.441,4.746 2.534,5.502 2.534,5.502c2.379,1.67 0.908,-2.943 0.578,-3.856c-1.76,-4.854 -1.815,-6.536 -1.815,-6.536c2.199,4.361 3.857,4.2 3.857,4.2c2.144,-0.685 -1.875,-6.86 -4.23,-9.819c-1.201,-1.507 -2.751,-3.526 -3.201,-4.724c-0.733,-2.03 -1.286,-8.557 -1.286,-8.557c-0.222,-7.702 -2.126,-11.047 -2.126,-11.047c-3.255,-5.211 -3.868,-14.93 -3.868,-14.93l-0.144,-16.411c-1.141,-11.194 -9.389,-11.274 -9.389,-11.274c-8.337,-1.241 -9.497,-3.935 -9.497,-3.935c-1.766,-2.541 -0.757,-7.412 -0.757,-7.412c1.465,-1.192 2.03,-4.355 2.03,-4.355c2.433,-1.866 2.313,-4.596 1.19,-4.566c-0.902,0.024 -0.698,-0.723 -0.698,-0.723c1.522,-12.288 -9.387,-12.915 -9.387,-12.915l-1.665,0c0,0 -10.914,0.627 -9.395,12.912c0,0 0.204,0.748 -0.705,0.723c-1.121,-0.03 -1.225,2.7 1.199,4.566c0,0 0.564,3.162 2.03,4.355c0,0 1.009,4.871 -0.757,7.412c0,0 -1.156,2.694 -9.497,3.935c0,0 -8.262,0.08 -9.385,11.274l-0.156,16.411c0,0 -0.601,9.719 -3.869,14.93c0,0 -1.895,3.346 -2.114,11.047c0,0 -0.556,6.527 -1.286,8.557c-0.445,1.192 -1.993,3.211 -3.205,4.724c-2.375,2.953 -6.368,9.115 -4.232,9.819c0,0 1.666,0.161 3.856,-4.2c0,0 -0.045,1.67 -1.802,6.536c-0.345,0.901 -1.814,5.514 0.565,3.856c0,0 1.102,-0.757 2.535,-5.502c0,0 -0.769,7.99 0.086,8.391c1.118,0.548 1.728,-1.033 2.232,-8.025c0,0 0.517,-2.258 0.756,6.361c0.012,0.445 0.664,2.662 1.575,0.77c0.768,-1.587 0.423,-5.785 0.423,-7.197c0,0 0.986,5.448 1.907,5.448c0,0 1.084,1.273 0.639,-5.496c-0.072,-1.106 0.316,-3.376 0.364,-4.037l0.105,-2.595c0,0 -0.271,-2.974 -0.271,-4.212c0,-0.307 1.064,-4.355 3.869,-8.629c0,0 5.833,-10.346 5.457,-17.107c0,0 -0.081,-6.452 2.268,-10.107c0,0 1.667,18.276 0.537,23.406c0,0 -5.247,12.606 -4.09,22.007c0.853,6.998 2.496,21.937 4.169,27.836c0.874,3.052 0.357,10.752 1.058,12.675c0.316,0.835 0.15,1.605 -0.529,3.497c-2.355,6.619 -2.055,11.281 3.868,28.845c0,0 1.823,3.892 0.902,10.884c0,0 -3.784,7.785 -1.361,7.941c0,0 0.19,0.516 1.01,0.108c0,0 1.309,1.351 2.723,0.618c0,0 1.31,1.046 2.43,0.115c0,0 0.898,1.032 2.207,0.198c0,0 1.718,1.159 2.739,-0.097c0,0 1.814,0.403 -1.415,-7.779c0,0 -1.237,-8.675 -1.919,-10.38c-1.3,-3.231 -0.382,-12.086 -0.105,-13.984c0.447,-3.172 0.208,-8.577 -0.609,-12.759c-0.598,-2.997 1.021,-8.656 1.619,-12.134c1.228,-7.323 4.403,-29.633 4.403,-29.633Z"
								style={{
									fill: "none",
									stroke: "#000",
									strokeWidth: 1,
								}}
							/>
							<path
								id="Back"
								d="M130.969,118.158c-0.3,3.531 3.184,22.306 4.422,29.636c0.588,3.472 2.203,9.13 1.622,12.134c-0.829,4.187 -1.069,9.604 -0.612,12.759c0.288,1.916 1.194,10.752 -0.103,13.984c-0.679,1.695 -1.923,10.38 -1.923,10.38c-3.24,8.182 -1.411,7.779 -1.411,7.779c1.003,1.231 2.721,0.097 2.721,0.097c1.31,0.834 2.216,-0.198 2.216,-0.198c1.124,0.93 2.434,-0.115 2.434,-0.115c1.411,0.733 2.721,-0.618 2.721,-0.618c0.81,0.408 1.009,-0.108 1.009,-0.108c2.432,-0.156 -1.358,-7.941 -1.358,-7.941c-0.907,-6.993 0.901,-10.884 0.901,-10.884c5.923,-17.565 6.224,-22.226 3.856,-28.845c-0.667,-1.911 -0.835,-2.668 -0.529,-3.497c0.71,-1.915 0.193,-9.617 1.058,-12.675c1.669,-5.898 3.316,-20.856 4.174,-27.836c1.153,-9.401 -4.085,-22.007 -4.085,-22.007c-1.148,-5.129 0.534,-23.406 0.534,-23.406c2.349,3.655 2.26,10.107 2.26,10.107c-0.373,6.766 5.466,17.107 5.466,17.107c2.805,4.274 3.868,8.328 3.868,8.629c0,1.231 -0.27,4.212 -0.27,4.212l0.108,2.595c0.048,0.661 0.42,2.937 0.36,4.037c-0.438,6.769 0.637,5.495 0.637,5.495c0.908,0 1.905,-5.447 1.905,-5.447c0,1.405 -0.343,5.61 0.415,7.197c0.906,1.892 1.573,-0.325 1.585,-0.77c0.24,-8.619 0.757,-6.361 0.757,-6.361c0.505,6.992 1.124,8.572 2.235,8.025c0.841,-0.401 0.072,-8.391 0.072,-8.391c1.441,4.746 2.534,5.502 2.534,5.502c2.379,1.67 0.908,-2.943 0.577,-3.856c-1.76,-4.854 -1.814,-6.536 -1.814,-6.536c2.199,4.361 3.856,4.2 3.856,4.2c2.145,-0.685 -1.874,-6.86 -4.229,-9.819c-1.201,-1.507 -2.751,-3.526 -3.201,-4.724c-0.733,-2.03 -1.286,-8.557 -1.286,-8.557c-0.222,-7.702 -2.126,-11.047 -2.126,-11.047c-3.256,-5.211 -3.868,-14.93 -3.868,-14.93l-0.144,-16.411c-1.142,-11.194 -9.39,-11.274 -9.39,-11.274c-8.337,-1.241 -9.497,-3.935 -9.497,-3.935c-1.766,-2.541 -0.756,-7.412 -0.756,-7.412c1.465,-1.192 2.03,-4.355 2.03,-4.355c2.433,-1.866 2.313,-4.596 1.19,-4.566c-0.902,0.024 -0.698,-0.723 -0.698,-0.723c1.521,-12.288 -9.387,-12.915 -9.387,-12.915l-1.666,0c0,0 -10.913,0.627 -9.394,12.912c0,0 0.204,0.748 -0.705,0.723c-1.121,-0.03 -1.226,2.7 1.198,4.566c0,0 0.565,3.162 2.03,4.355c0,0 1.01,4.871 -0.756,7.412c0,0 -1.156,2.694 -9.497,3.935c0,0 -8.262,0.08 -9.386,11.274l-0.156,16.411c0,0 -0.6,9.719 -3.869,14.93c0,0 -1.895,3.346 -2.114,11.047c0,0 -0.555,6.527 -1.285,8.557c-0.445,1.192 -1.994,3.211 -3.205,4.724c-2.376,2.953 -6.368,9.115 -4.232,9.819c0,0 1.666,0.161 3.856,-4.2c0,0 -0.045,1.67 -1.802,6.536c-0.346,0.901 -1.814,5.514 0.565,3.856c0,0 1.102,-0.757 2.534,-5.502c0,0 -0.768,7.99 0.087,8.391c1.118,0.548 1.727,-1.033 2.232,-8.025c0,0 0.516,-2.258 0.756,6.361c0.012,0.445 0.664,2.662 1.575,0.77c0.768,-1.587 0.423,-5.785 0.423,-7.197c0,0 0.985,5.448 1.907,5.448c0,0 1.084,1.273 0.639,-5.496c-0.072,-1.106 0.316,-3.376 0.364,-4.037l0.105,-2.595c0,0 -0.271,-2.974 -0.271,-4.212c0,-0.307 1.064,-4.355 3.868,-8.629c0,0 5.833,-10.346 5.458,-17.107c0,0 -0.081,-6.452 2.268,-10.107c0,0 1.667,18.276 0.537,23.406c0,0 -5.247,12.606 -4.09,22.007c0.852,6.998 2.496,21.937 4.169,27.836c0.874,3.052 0.357,10.752 1.058,12.675c0.315,0.835 0.15,1.605 -0.529,3.497c-2.355,6.619 -2.055,11.281 3.868,28.845c0,0 1.823,3.892 0.902,10.884c0,0 -3.785,7.785 -1.361,7.941c0,0 0.19,0.516 1.009,0.108c0,0 1.309,1.351 2.724,0.618c0,0 1.31,1.046 2.43,0.115c0,0 0.898,1.032 2.207,0.198c0,0 1.718,1.159 2.739,-0.097c0,0 1.814,0.403 -1.416,-7.779c0,0 -1.237,-8.675 -1.918,-10.38c-1.3,-3.231 -0.382,-12.086 -0.105,-13.984c0.447,-3.172 0.207,-8.577 -0.609,-12.759c-0.598,-2.997 1.021,-8.656 1.618,-12.134c1.229,-7.323 4.404,-29.633 4.404,-29.633Z"
								style={{
									fill: "none",
									stroke: "#000",
									strokeWidth: 1,
								}}
							/>
						</svg>
					</div>
				</div>
				<div className="exercise-div">


					<div>

						{isBicepsVisible && (

							<div ref={bicepsRef} className="myDiv" >

								<div className="myDiv-header">
									<button onClick={div_biceps} className="content-btn"></button>
									<h3>Biceps</h3>
								</div>

								<div className="gif-container">
									{bicepGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Bicep exercise ${index}`}
												onClick={() => handleBicepClick(images, index)}
											/>
											<p className="bicepText">{bicepText[index]}</p>
										</div>

									))}



								</div>
								{expandedBicep && (

									<div className="expanded-image"  >
										<div className="closebtn-div">
											<button
												className="content-btn"
												style={{ visibility: "visible" }}
												onClick={handleClickCloseBicep}
											></button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedBicep} alt="Expanded Img" />
										</div>


										<div className="expanded-image-text">
											<p>{expandedBicepDiv[selectedBicepIndex]}</p>
										</div>

									</div>
								)}

							</div>
						)}
					</div>

					<div>

						{isDeltoidsVisible && (

							<div ref={deltoidsRef} className="myDiv ">
								<div className="myDiv-header" >
									<button onClick={div_deltoids} className="content-btn"></button>
									<h3>Deltoids</h3>
								</div>

								<div className="gif-container">
									{deltGif.map((image, index) => (
										<div key={index} >
											<img
												key={index}
												src={image}
												alt={`Delt exercise ${index}`}
												onClick={() => handleDeltClick(image, index)}
											/>
											<p>{deltText[index]}</p>
										</div>

									))}
								</div>

								{expandedDelt && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className="content-btn" style={{ visibility: 'visible' }} onClick={handleCloseClickDelt}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedDelt} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedDeltDiv[selectedDeltIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isForearmsVisible && (
							<div ref={forearmsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_forearms} className="content-btn"></button>
									<h3>Forearms</h3>
								</div>

								<div className="gif-container">
									{forearmGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Forearm exercise ${index}`}
												onClick={() => handleForearmClick(images, index)}
											/>
											<p>{forearmText[index]}</p>
										</div>

									))}
								</div>

								{expandedForearm && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseForearm}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedForearm} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedForearmDiv[selectedForearmIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isTricepsVisible && (
							<div ref={tricepsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_triceps} className="content-btn"></button>
									<h3>Triceps</h3>
								</div>

								<div className="gif-container">
									{tricepGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Tricep exercise ${index}`}
												onClick={() => handleTricepClick(images, index)}
											/>
											<p>{tricepText[index]}</p>
										</div>

									))}
								</div>

								{expandedTricep && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseTricep}>
											</button>
										</div>

										<div className="expandedImg-div">
											<img src={expandedTricep} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedTricepsDiv[selectedTricepIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isTrapeziusVisible && (
							<div ref={trapeziusRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_trapezius} className="content-btn"></button>
									<h3>Trapezius</h3>
								</div>

								<div className="gif-container">
									{trapsGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Traps exercise ${index}`}
												onClick={() => handleTrapsClick(images, index)}
											/>
											<p>{trapText[index]}</p>
										</div>

									))}
								</div>

								{expandedTraps && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseTraps}>
											</button>
										</div>

										<div className="expandedImg-div">
											<img src={expandedTraps} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedTrapsDiv[selectedTrapsIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isLatsVisible && (
							<div ref={latsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_lats} className="content-btn"></button>
									<h3>Lats</h3>
								</div>

								<div className="gif-container">
									{latsGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Lats exercise ${index}`}
												onClick={() => handleLatsClick(images, index)}
											/>
											<p>{latsText[index]}</p>
										</div>

									))}
								</div>

								{expandedLats && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseLats}>
											</button>
										</div>

										<div className="expandedImg-div">
											<img src={expandedLats} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedLatsDiv[selectedLatsIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isAbsVisible && (
							<div ref={absRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_abs} className="content-btn"></button>
									<h3>Abs</h3>
								</div>

								<div className="gif-container">
									{absGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Abs exercise ${index}`}
												onClick={() => handleAbsClick(images, index)}
											/>
											<p>{absText[index]}</p>
										</div>

									))}
								</div>

								{expandedAbs && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseAbs}>
											</button>
										</div>

										<div className="expandedImg-div">
											<img src={expandedAbs} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedAbsDiv[selectedAbsIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isObliquesVisible && (
							<div ref={obliquesRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_obliques} className="content-btn"></button>
									<h3>Obliques</h3>
								</div>

								<div className="gif-container">
									{obliqueGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Oblique exercise ${index}`}
												onClick={() => handleObluqueClick(images, index)}
											/>
											<p>{obliqueText[index]}</p>
										</div>

									))}
								</div>

								{expandedObluque && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseObluque}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedObluque} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedObliqueDiv[selectedObluqueIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isPectoralsVisible && (
							<div ref={pectoralsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_pectorals} className="content-btn"></button>
									<h3>Chest</h3>
								</div>

								<div className="gif-container">
									{pectsGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Pects exercise ${index}`}
												onClick={() => handlePectsClick(images, index)}
											/>
											<p>{pectsText[index]}</p>
										</div>

									))}
								</div>

								{expandedPects && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickClosePects}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedPects} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedPectorialDiv[selectedPectsIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isAdductorsVisible && (
							<div ref={adductorsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_adductors} className="content-btn"></button>
									<h3>Adductors</h3>
								</div>

								<div className="gif-container">
									{adductorGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Adductor exercise ${index}`}
												onClick={() => handleAdductorClick(images, index)}
											/>
											<p>{adductorText[index]}</p>
										</div>

									))}
								</div>

								{expandedAdductor && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className="content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseAdductor}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedAdductor} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedAdductorDiv[selectedAdductorIndex]}</p>
										</div>
									</div>
								)}

							</div>
						)}
					</div>
					<div>

						{isCalvesVisible && (
							<div ref={calvesRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_calves} className="content-btn"></button>
									<h3>Claves</h3>
								</div>

								<div className="gif-container">
									{calveGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Calve exercise${index}`}
												onClick={() => handleCalveClick(images, index)}
											/>
											<p>{calveText[index]}</p>
										</div>

									))}
								</div>

								{expandedCalve && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseCalve}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedCalve} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedClaveDiv[selectedCalveIndex]}</p>
										</div>
									</div>
								)}


							</div>
						)}
					</div>
					<div>

						{isHamstringsVisible && (
							<div ref={hamstringsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_hamstrings} className="content-btn"></button>
									<h3>Hamstrings</h3>
								</div>

								<div className="gif-container">
									{hamstringGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Hamstring exercise${index}`}
												onClick={() => handleHamstringClick(images, index)}
											/>
											<p>{hamstringText[index]}</p>
										</div>

									))}
								</div>

								{expandedHamstring && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseHamstring}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedHamstring} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedHamstringDiv[selectedHamstringIndex]}</p>
										</div>
									</div>
								)}


							</div>
						)}
					</div>
					<div>

						{isGlutesVisible && (
							<div ref={glutesRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_glutes} className="content-btn"></button>
									<h3>Glutes</h3>
								</div>

								<div className="gif-container">
									{gluteGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Glute exercise ${index}`}
												onClick={() => handleGlutesClick(images, index)}
											/>
											<p>{gluteText[index]}</p>
										</div>

									))}
								</div>

								{expandedGlutes && (

									<div className="expanded-image">
										<div className="closebtn-div">
											<button className="content-btn"
												style={{ visibility: 'visible' }}
												onClick={handleClickCloseGlutes}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedGlutes} alt="Expanded Img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedGluteDiv[selectedGlutesIndex]}</p>
										</div>
									</div>
								)}


							</div>
						)}
					</div>
					<div>

						{isQuadsVisible && (
							<div ref={quadsRef} className="myDiv">
								<div className="myDiv-header">
									<button onClick={div_quads} className="content-btn"></button>
									<h3>Quads</h3>
								</div>

								<div className="gif-container">
									{quadGif.map((images, index) => (
										<div key={index} >
											<img
												key={index}
												src={images}
												alt={`Quad exercise${index}`}
												onClick={() => handleQuadsClick(images, index)}
											/>
											<p>{quadText[index]}</p>
										</div>

									))}
								</div>

								{expandedQuads && (
									<div className="expanded-image">
										<div className="closebtn-div">
											<button className=" content-btn" style={{ visibility: 'visible' }} onClick={handleClickCloseQuads}>
											</button>
										</div>
										<div className="expandedImg-div">
											<img src={expandedQuads} alt="Expanded img" />
										</div>

										<div className="expanded-image-text">
											<p>{expandedQuadDiv[selectedQuadsIndex]}</p>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

		</main >
	);
};
export default MuscleGroupSelector;  