import React, { useState } from "react";
import './StopWatch.css';
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import Buttons from './Buttons.css';

function StopWatch() {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);

React.useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);

const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

const handlePauseResume = () => {
	setIsPaused(!isPaused);
};

const handleReset = () => {
	setIsActive(false);
	setTime(0);
};

return (
	<div className="stop-watch">

	<Timer time={time} />
<img src="https://media-exp1.licdn.com/dms/image/C5603AQFruSDIPVZLcw/profile-displayphoto-shrink_200_200/0/
1602282072725?e=1666224000&v=beta&t=mCeW_bwBYa5p8sjcjjNXpFb_IZF94jmGAXH_Fhr8k3A"></img>
	<ControlButtons
		active={isActive}
		isPaused={isPaused}
		handleStart={handleStart}
		handlePauseResume={handlePauseResume}
		handleReset={handleReset}
	/>
	</div>
);
}

export default StopWatch;
