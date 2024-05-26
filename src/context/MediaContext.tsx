// @ts-nocheck
import React, { createContext, useState } from "react";

const FileContext = createContext("");

const FileContextProvider = ({ children }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  return (
    <FileContext.Provider
      value={{
        videoFile,
        setVideoFile,
        audioFile,
        setAudioFile,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export { FileContext, FileContextProvider };
