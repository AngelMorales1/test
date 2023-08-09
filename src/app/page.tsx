"use client";
import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const [first, setfirst] = useState<string | undefined | null>(undefined);

  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setfirst(imageSrc);
  }, [webcamRef]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Webcam videoConstraints={videoConstraints} screenshotFormat="image/jpeg" ref={webcamRef} />
      <button onClick={capture}>Capture photo</button>
      {first && <img src={first} alt="Captured" />}
    </main>
  );
}
