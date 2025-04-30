import React from 'react';
import Lottie from 'react-lottie-player';

const djAnimation = '/djAnimation.json';

const projects = [
  {
    title: "Vibby",
    description: "An App to Vibe Friends",
    href: "https://youtu.be/HSir4J_kZWw",
    imageUrl: "/projectVibby.png",
    hoverColor: "#FF7079"
  },
  {
    title: "PolyPal",
    description: "AI Language Tutor as Cat",
    href: "https://youtu.be/G7zJqxka4rE",
    imageUrl: "/projectPolyPal.png",
    hoverColor: "#DC8470"
  },
  {
    title: "AI Math Notes",
    description: "Draw and Solve Math",
    href: "https://mathnotes-three.vercel.app",
    imageUrl: "/projectMath.png",
    hoverColor: "#54A4FE"
  },
  {
    title: "I Miss U",
    description: "Mood Tracker for Couples",
    href: "https://github.com/huyle0203/i-miss-u",
    imageUrl: "/projectIMU.png",
    hoverColor: "#FAD06E"
  },
  {
    title: "Huy.GPT Roaster",
    description: "Upload Pic to get Roasted",
    href: "https://roast-my-pic-new.netlify.app",
    imageUrl: "/projectRoast.png",
    hoverColor: "#E79AFF"
  },
  {
    title: "Dungeon Crawler",
    description: "RPG Game in Android",
    href: "https://github.com/huyle0203/Dungeon-Crawler-Game",
    imageUrl: "/projectDungeon.jpg",
    hoverColor: "#44B1FF"
  },
  {
    title: "Chilly Music Buddy",
    description: "Coming Soon!",
    href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
    imageUrl: "/projectChilly.png",
    hoverColor: "#C699FE"
  },
  {
    title: "Write Track",
    description: "Google doc of Keystroke tracking",
    href: "https://github.com/smal8/writetrack",
    imageUrl: "/writetrack.png",
    hoverColor: "#15DB79"
  },
];

export default function Projects() {
  const renderProjectBox = (project: typeof projects[0], index: number) => {
    return (
      <a
        href={project.href}
        key={index}
        className="group block p-4 rounded-lg transition-all duration-200 hover:scale-105 flex flex-col items-center justify-center h-full relative"
        target="_blank"
        rel="noreferrer"
        style={{
          '--hover-color': project.hoverColor,
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-200" 
             style={{ backgroundColor: project.hoverColor }} />
        <img 
          src={project.imageUrl || "/placeholder.svg"} 
          alt={project.title} 
          className="w-3/4 aspect-square rounded-lg mb-2 object-cover relative z-10"
        />
        <h3 className="text-white text-lg font-bold text-center relative z-10">{project.title}</h3>
        <p className="text-gray-400 text-sm text-center relative z-10">{project.description}</p>
      </a>
    );
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      <div className="relative w-[800px] h-[800px] border border-blue-500 rounded-3xl p-8 overflow-hidden">
        <div className="absolute inset-0 p-8">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
            {/* Top Row */}
            {renderProjectBox(projects[0], 0)}
            {renderProjectBox(projects[1], 1)}
            {renderProjectBox(projects[2], 2)}

            {/* Middle Row */}
            {renderProjectBox(projects[3], 3)}
            {/* Center Lottie Animation */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <Lottie
                  path={djAnimation}
                  play
                  loop
                  style={{ width: '150%', height: '150%' }}
                />
              </div>
            </div>
            {renderProjectBox(projects[4], 4)}

            {/* Bottom Row */}
            {renderProjectBox(projects[5], 5)}
            {renderProjectBox(projects[6], 6)}
            {renderProjectBox(projects[7], 7)}
          </div>
        </div>
      </div>
    </div>
  );
}