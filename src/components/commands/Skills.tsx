import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiJavascript,
	SiJenkins,
	SiNestjs,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiTypescript,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "React/ReactNative",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Java",
		},
		{
			Icon: SiTypescript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",
		},
		{
			Icon: SiExpress,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Express.js",
		},
		{
			Icon: SiNextdotjs,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Next.js",
		},
		{
			Icon: SiNestjs,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "NestJS",
		},
		{
			Icon: SiPostgresql,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "PostgreSQL",
		},
		{
			Icon: SiPython,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Python",
		},
		{
			Icon: SiJenkins,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Jenkins",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
