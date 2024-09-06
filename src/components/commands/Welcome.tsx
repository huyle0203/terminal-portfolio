import React from "react";

export default function Welcome() {
  // Array of colors for gradient effect
  const gradientColors = [
	//"#8b4513", // Saddle Brown (Darker Sand)
	"#8b4513", // Saddle Brown (Darker Sand)
	"#a0522d", // Sienna (Medium Sand)
	"#d2b48c", // Tan (Light Sand)
	"#f5deb3", // Wheat (Very Light Sand)
	"#f0e68c", // Khaki (Sunlit Sand)
	"#ffd700", // Gold (Bright Beach)
	"#B4c551", // Forest Green (Tree Foliage)
	"#00bfff", // Deep Sky Blue (More Regular Blue)
	"#87cefa"  // Light Sky Blue (Light Blueish)
	
  ];

  const letters = "Portfolio".split("");

  return (
    <div>
      <h1 className="font-josefin text-8xl font-bold uppercase">
        Welcome to my{" "}
        <span className="font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{ color: gradientColors[index % gradientColors.length] }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
