import React, { useEffect, useState } from "react";
import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
		{ Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
		{ Icon: SiNetlify, color: "text-green-400", duration: "duration-1000" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Why?</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
				There are countless websites already to showcase yourself, right? <br/>
				Behold, Terminal Portfolio is a portfolio style that lets you go
				through the portfolio in a terminal way ~
			</p>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Tech stack
			</h1>
			<p className="text-lg animate-reveal-0.7">
				This site is purely written with React and Tailwindcss only. For the
				deployment, it is deployed on Netlify.
			</p>
			<div className="flex gap-5 text-4xl">
				{techs.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
