import React from "react";

export default function BackgroundVideo() {
	return (
		// Set a cool background video
		<div className="absolute top-0 w-full h-screen -z-10 overflow-hidden">
			<video
				autoPlay
				loop
				muted
				className="h-full w-full object-cover object-center"
			>
				<source src="/output.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
