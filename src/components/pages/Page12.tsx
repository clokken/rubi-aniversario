import { useEffect, useRef } from "react";
// import ScrollIndicator from "../ScrollIndicator";

export default function Page12() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video === null) return;

    let userClicked = false;

    video.addEventListener('play', () => {
      userClicked = true;
      // console.log('CLICKED');
    });

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target === video) {
          observer.disconnect();

          setTimeout(() => {
            if (!userClicked) {
              // console.log('PLAY NOW');
              video.play();
            }
          }, 1000);

          break;
        }
      }
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="arduino"
      className="page bg-gradient-to-br from-emerald-600 to-teal-700"
    >
      <div className="wrapper flex flex-col justify-center items-center text-center space-y-4">
        <video
          ref={videoRef}
          controls
          preload="auto"
          className="max-w-full max-h-full"
        >
          <source src="/arduino.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <ScrollIndicator /> */}
    </div>
  );
}
