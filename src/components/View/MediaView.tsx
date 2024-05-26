// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from "react";
import { FileContext } from "@/context/MediaContext";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import Controll from "../Controls/Controll";
const MediaView = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);


  const { videoFile, setVideoFile, audioFile, setAudioFile } =
    useContext(FileContext);

  useEffect(() => {
    if (videoFile && videoRef.current) {
      videoRef.current.src = videoFile;
    }
  }, [videoFile]);

  useEffect(() => {
    if (audioFile && audioRef.current) {
      audioRef.current.src = audioFile;
    }
    console.log("update audio")
  }, [audioFile]);

  return (
    <>
      {videoFile && (
        <div className="">
          <video
            className="w h-auto rounded-lg shadow-lg"
            width={600}
            ref={videoRef}
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Controll videoRef={videoRef} audioRef={audioRef} />
        </div>
      )}
      {audioFile && (
        <audio ref={audioRef} controls>
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

    </>
  );
};

export default MediaView;
