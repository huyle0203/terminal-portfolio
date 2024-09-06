import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AudioPlayerProvider } from "./context/audio-player-context";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AudioPlayerProvider>
		<App />
		</AudioPlayerProvider>
	</React.StrictMode>
);
