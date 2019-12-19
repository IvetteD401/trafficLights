import React, { useEffect, useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [lightRed, setLightRed] = useState("light red off");
	const [lightYellow, setLightYellow] = useState("light yellow off");
	const [lightGreen, setLightGreen] = useState("light green off");
	const [counter, setCounter] = useState(0);
	const [auto, setAuto] = useState(false);
	const changeRed = () => {
		if (lightRed === "light red off") {
			setLightRed("light red");
		} else {
			setLightRed("light red off");
		}
	};
	const changeYellow = () => {
		if (lightYellow === "light yellow off") {
			setLightYellow("light yellow");
		} else {
			setLightYellow("light yellow off");
		}
	};
	const changeGreen = () => {
		if (lightGreen === "light green off") {
			setLightGreen("light green");
		} else {
			setLightGreen("light green off");
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setCounter(counter + 1);
		}, 1000);
		if (auto === true && counter < 6) {
			setLightGreen("light green");
			setLightRed("light red off");
			setLightYellow("light yellow off");
		} else if (auto === true && counter < 8) {
			setLightRed("light red off");
			setLightYellow("light yellow");
			setLightGreen("light green off");
		} else if (auto === true && counter < 12) {
			setLightYellow("light yellow off");
			setLightRed("light red");
			setLightGreen("light green off");
		} else if (counter === 12) {
			setCounter(0);
		}
	});

	const OnLoop = () => {
		setAuto(true);
	};

	const OffLoop = () => {
		setAuto(false);
		setLightGreen("light green off");
		setLightYellow("light yellow off");
		setLightRed("light red off");
	};

	return (
		<>
			<div className="text-center mt-5">
				<div className="toplight">
					<div className="lightContainer">
						<div className={lightRed} onClick={changeRed} />
						<div className={lightYellow} onClick={changeYellow} />
						<div className={lightGreen} onClick={changeGreen} />
					</div>
				</div>
			</div>

			<div className="btn-group" role="group">
				<button
					type="button"
					className="btn btn-success"
					id="auto"
					onClick={OnLoop}>
					On
				</button>
				<button type="button" className="btn btn-warning">
					Click
				</button>
				<button
					type="button"
					className="btn btn-danger"
					onClick={OffLoop}>
					Off
				</button>
			</div>
		</>
	);
}
