import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

interface SplineBackgroundProps {
  scene?: string;
  className?: string;
}

const SplineBackground = ({ 
  scene = "https://prod.spline.design/KNdsIJaEPBVPVSX7/scene.splinecode", // Your custom 3D scene
  className = "" 
}: SplineBackgroundProps) => {
  
  const hideWatermark = () => {
    // Target only Spline watermark elements specifically
    const watermarkSelectors = [
      'a[href*="spline.design"]',
      'a[href*="spline"]',
      '[data-spline-watermark]',
      '.spline-watermark'
    ];
    
    watermarkSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        const element = el as HTMLElement;
        // Check if it's actually a watermark (contains spline text or logo)
        if (element.textContent?.toLowerCase().includes('spline') || 
            (element as HTMLAnchorElement).href?.includes('spline') ||
            element.getAttribute('data-spline-watermark')) {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.opacity = '0';
        }
      });
    });
  };

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse flex items-center justify-center">
          <div className="text-white text-xl">Loading 3D Scene...</div>
        </div>
      }>
        <Spline
          scene={scene}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onLoad={() => {
            console.log('Spline scene loaded successfully');
            console.log('Scene URL:', scene);
            
            // Hide watermark with targeted approach
            setTimeout(hideWatermark, 1000);
            setTimeout(hideWatermark, 3000);
          }}
          onError={(error) => {
            console.error('Spline scene error:', error);
            console.error('Failed scene URL:', scene);
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineBackground;