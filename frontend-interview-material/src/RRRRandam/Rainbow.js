import React from "react";
import "./Rainbow.css";

const Rainbow = () => {
  const drops = Array.from({ length: 90 }, (_, i) => i);

  return (
    <div className="rainbow-scene">
      {/* Sky */}
      <div className="sky" />

      {/* Clouds */}
      <div className="cloud cloud-1">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="cloud cloud-2">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="cloud cloud-3">
        <span />
        <span />
        <span />
      </div>

      {/* Rainbow */}
      <div className="rainbow">
        <div className="rainbow-band red" />
        <div className="rainbow-band orange" />
        <div className="rainbow-band yellow" />
        <div className="rainbow-band green" />
        <div className="rainbow-band blue" />
        <div className="rainbow-band indigo" />
        <div className="rainbow-band violet" />
      </div>

      {/* Rain */}
      <div className="rain">
        {drops.map((drop) => (
          <span
            key={drop}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.8 + Math.random() * 1.2}s`,
              animationDelay: `${Math.random() * 2}s`,
              height: `${10 + Math.random() * 15}px`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Ground */}
      <div className="ground">
        <div className="hill hill-1" />
        <div className="hill hill-2" />
        <div className="hill hill-3" />
      </div>
    </div>
  );
};

export default Rainbow;