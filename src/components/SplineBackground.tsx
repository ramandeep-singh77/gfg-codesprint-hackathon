import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

interface SplineBackgroundProps {
  scene?: string;
  className?: string;
}

const SplineBackground = ({
  scene = "/scene-clean.splinecode", // Your custom 3D scene
  className = "",
}: SplineBackgroundProps) => {
  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse flex items-center justify-center">
            <div className="text-white text-xl">Loading 3D Scene...</div>
          </div>
        }
      >
        <Spline
          scene={scene}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onError={(error) => {
            console.error("Spline scene error:", error);
            console.error("Failed scene URL:", scene);
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineBackground;
