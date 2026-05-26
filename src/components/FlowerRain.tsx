import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  size: number;
  rotation: number;
  type: "rose" | "marigold" | "white";
  duration: number;
}

export default function FlowerRain() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals after mount
    const generated: Petal[] = Array.from({ length: 28 }).map((_, i) => {
      const typeRand = Math.random();
      const type =
        typeRand < 0.4 ? "rose" : typeRand < 0.75 ? "marigold" : "white";
      return {
        id: i,
        left: Math.random() * 100, // random percentage
        delay: Math.random() * 12, // random delay up to 12s
        size: Math.random() * 16 + 10, // size 10px to 26px
        rotation: Math.random() * 360,
        type,
        duration: Math.random() * 10 + 10, // 10s to 20s travel time
      };
    });
    setPetals(generated);
  }, []);

  const getPetalColor = (type: "rose" | "marigold" | "white") => {
    switch (type) {
      case "rose":
        return "fill-pink-400 opacity-80";
      case "marigold":
        return "fill-yellow-500 opacity-90";
      case "white":
        return "fill-pink-50 opacity-90";
    }
  };

  return (
    <div id="flower-rain" className="fixed inset-0 pointer-events-none z-15 overflow-hidden">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            animation: `floatUp ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
            bottom: "-50px", // start below screen
          }}
          viewBox="0 0 24 24"
        >
          {petal.type === "rose" ? (
            // A rose petal shape
            <path
              d="M12 2C8 2 4 6 4 10c0 5 5 12 8 12s8-7 8-12c0-4-4-8-8-8z"
              className={getPetalColor(petal.type)}
            />
          ) : petal.type === "marigold" ? (
            // A marigold flower / fluffy petal shape
            <path
              d="M12 3c-1.5 0-3 1.5-3 3S7.5 9 6 9s-3 1.5-3 3 1.5 3 3 3 3 1.5 3 3 1.5 3 3 3 3-1.5 3-3 1.5-3 3-3 3-1.5 3-3-1.5-3-3-3-3-1.5-3-3-1.5-3-3-3z"
              className={getPetalColor(petal.type)}
            />
          ) : (
            // Delicate white jasmine petal shape
            <path
              className={getPetalColor(petal.type)}
              d="M12 2C6.48 2 2 6.48 2 12c0 3.04 1.36 5.76 3.5 6.5C7.5 19.5 10 20 12 20s4.5-.5 6.5-1.5c2.14-.74 3.5-3.46 3.5-6.5 0-5.52-4.48-10-10-10z"
            />
          )}
        </svg>
      ))}
    </div>
  );
}
