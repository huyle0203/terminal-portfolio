import React from "react";

type HelpCmd = {
	cmd: string;
	detail: string;
};
export default function Help() {
	const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "bio", detail: "To show my bio information." },
		{ cmd: "skill", detail: "To list all of my skills." },
		{ cmd: "hobby", detail: "To see what I love to do." },
		{ cmd: "contact", detail: "To contact me." },
		{ cmd: "about", detail: "What is terminal portfolio?" },
		{ cmd: "ctrl + l", detail: "To clear the history." },
	];
	return (
		<div className="w-11/12 mx-auto">
			{listOfHelpCommands.map(({ cmd, detail }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-20">{cmd}</h1>
						<p className="text-gray-300 flex-1 ">{detail}</p>
					</div>
				);
			})}
		</div>
	);
}
