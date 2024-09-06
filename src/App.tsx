import React from "react";
import BackgroundVideo from "./components/BackgroundImage";
import TerminalBox from "./components/TerminalBox";
import { AudioPlayer } from "./components/Audio/AudioPlayer";

// import { AudioToggleButton } from "./components/AudioToggleButton";

const App: React.FC = () => {
	return (
		<>
			<div className="h-screen w-full flex justify-center items-center font-poppins font-medium">
				<div className="w-full">
					<div className="block sm:hidden mb-10 bg-yellow-200 py-3 text-center text-xl text-gray-700">
						<p>For better experience please try this with a PC!</p>
						<p>This is not designed for mobile view.</p>
						<a href="https://chensokheng.me" className="block p-2 underline">
							Visit this instead
						</a>
					</div>
					
					<TerminalBox />
					
					
				</div>
			</div>
			{/* <AudioPlayer /> */}
			<BackgroundVideo />
		</>
	);
};

export default App;
