import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [lightRed, setLight1] = useState("light red off");
	var myVar = setInterval(myTimer, 1000);
	function myTimer() {
		var d = changeGreen();
		document.getElementById("auto").innerHTML = d;
	}
	const changeRed = () => {
		if (lightRed === "light red off") {
			setLight1("light red");
		} else {
			setLight1("light red off");
		}
	};
	const [lightYellow, setLight2] = useState("light yellow off");
	const changeYellow = () => {
		if (lightYellow === "light yellow off") {
			setLight2("light yellow");
		} else {
			setLight2("light yellow off");
		}
	};
	const [lightGreen, setLight3] = useState("light green off");
	const changeGreen = () => {
		if (lightGreen === "light green off") {
			setLight3("light green");
		} else {
			setLight3("light green off");
		}
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
				<button type="button" className="btn btn-success" id="auto">
					Auto
				</button>
				<button type="button" className="btn btn-danger">
					Off
				</button>
				<button type="button" className="btn btn-warning">
					Click
				</button>
			</div>
			{/* Flexbox container for aligning the toasts
			<div
				aria-live="polite"
				aria-atomic="true"
				className="d-flex justify-content-center align-items-center"
				style={{ minHeight: "200px" }}>
				{/* Then put toasts within */}
			{/* <div
					className="toast"
					role="alert"
					aria-live="assertive"
					aria-atomic="true">
					<div className="toast-header">
						<img src="..." className="rounded mr-2" alt="..." />
						<strong className="mr-auto">Bootstrap</strong>
						<small>11 mins ago</small>
						<button
							type="button"
							className="ml-2 mb-1 close"
							data-dismiss="toast"
							aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="toast-body">
						Hello, world! This is a toast message.
					</div>
				</div> */}
			{/* </div>  */}
		</>
	);
}
