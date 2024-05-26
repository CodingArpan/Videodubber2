// @ts-nocheck
import { useState, useContext,useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FileContext } from "@/context/MediaContext";

const Controll = ({ videoRef, audioRef }) => {
  const [play, setPlay] = useState(false);
  const { videoFile, setVideoFile, audioFile, setAudioFile } =
    useContext(FileContext);
  useEffect(() => {
    if (audioFile && audioRef.current) {
      audioRef.current.src = audioFile;
    }
  }, [audioFile]);

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

    const handleDrop = (files) => {
      console.log(files);
      console.log("end");

      const video = files.find((file) => file.type.startsWith("video/"));
      const audio = files.find((file) => file.type.startsWith("audio/"));
      if (video) setVideoFile(URL.createObjectURL(video));
      if (audio) setAudioFile(URL.createObjectURL(audio));
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
      <label
        className="px-5 py-2 bg-orange-600 rounded-xl text-gray-200 text-lg cursor-pointer"
        htmlFor="aud"
      >
        Upload Audio
      </label>

      <input
        onDrop={(e) => {
          handleDrop(e);
        }}
        className="hidden"
        accept="audio/*"
        type="file"
        name="aud"
        id="aud"
      />
    </div>
  );
};

export default Controll;
