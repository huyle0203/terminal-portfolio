import { GoVerified } from "react-icons/go";
import { SiGithub, SiInstagram, SiLinkedin, SiPatreon, SiYoutube } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/huyle0203",
			text: "@Huyle0203",
		},
		{
			title: "Youtube",
			Icon: SiYoutube,
			href: "https://www.youtube.com/@HuyMeOut",
			text: "@HuyMeOut (My DJ Channel)",
		},
		{
			title: "Instagram",
			Icon: SiInstagram,
			href: "https://www.instagram.com/helluva.huyyy/",
			text: "helluva.huyyy",
		},
		{
			title: "Linkedln",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/huyducle/",
			text: "Huy Le",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					//src="https://avatars.githubusercontent.com/u/52232579?s=400&u=66d824859d14da9ffc4dcb32f3aca6631abb95af&v=4"
					src="/IMG_7712.jpg"
					alt="HuyLe"
					className="w-40 h-40 rounded-full border-2 border-blue-500"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Huy Le</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 22 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software engineer @ Georgia Tech. I like to make cool things
				that will wow you. I am also a DJ and an Entrepeneur as well! 
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
