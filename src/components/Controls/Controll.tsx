// @ts-nocheck
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
const Controll = ({ videoRef, audioRef }) => {
  const [play, setPlay] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="relative w-full flex flex-row justify-center items-center gap-5 m-20 bg-slate-500/0 -left-20 text-xl">
      {play ? (
        <FaPause
        className="cursor-pointer"
          onClick={() => {
            setPlay(false);
            pauseVideo();
          }}
        />
      ) : (
        <FaPlay
        className="cursor-pointer"
          onClick={() => {
            setPlay(true);
            playVideo();
          }}
        />
      )}
    </div>
  );
};

export default Controll;
