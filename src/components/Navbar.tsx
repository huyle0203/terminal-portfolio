import React from "react";
import { VscTerminal } from "react-icons/vsc";
import { AudioPlayer } from "./Audio/AudioPlayer";

export default function Navbar() {
	const boxs = [
		{
			color: "bg-red-500",
		},
		{
			color: "bg-yellow-500",
		},
		{
			color: "bg-green-500",
		},
	];
	return (
		<div>
			{/* Blue terminal portfolio */}
			<div className="text-blue-300 max-w-4xl mx-auto border-x-2 border-t-2 border-slate-800 rounded-t-md bg-slate-800 p-2 flex items-center">
				<div className="flex gap-2">
					{boxs.map(({ color }, index) => {
						return (
							<div
								key={index}
								className={`w-3 h-3 ${color} rounded-full`}
							></div>
						);
					})}
				</div>
				<div className="flex-1 mr-16 flex justify-center items-center">
					<div className="flex items-center gap-1">
						<VscTerminal className="text-xl" />
						<h1 className="text-center">HuyLe/terminal_portfolio</h1>
					</div>
				</div>
			</div>
			<div className="left-0 right-0"><AudioPlayer/></div>
		</div>
	);
}
