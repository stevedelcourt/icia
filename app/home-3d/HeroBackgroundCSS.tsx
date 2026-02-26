import { useState, useEffect } from 'react'

export function HeroBackgroundCSS() {
  return (
    <>
      <style jsx global>{`
        .waves-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, #00255D, #023D87, #00255D);
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
          overflow: hidden;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .wave {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: #0af;
          width: 200vw;
          height: 200vh;
          margin-left: -100vw;
          margin-top: -50vh;
          border-radius: 40%;
          animation: drift 7000ms infinite linear;
          opacity: 0.3;
        }

        .wave.-three {
          animation: drift 11000ms infinite linear;
          background-color: #77daff;
          opacity: 0.4;
        }

        .wave.-two {
          animation: drift 5000ms infinite linear;
          background-color: #001a3a;
          opacity: 0.2;
        }

        @keyframes drift {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }
      `}</style>

      <div className="waves-container">
        <div className="box">
          <div className="wave" />
          <div className="wave -two" />
          <div className="wave -three" />
        </div>
      </div>
    </>
  )
}
