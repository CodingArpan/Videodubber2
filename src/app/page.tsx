"use client";
import { Navbar } from "@/components/Navbar";
import { Upload } from "@/components/Uploads/Upload";
import Image from "next/image";
import { FileContextProvider } from "@/context/MediaContext";
import MediaView from "@/components/View/MediaView";

export default function Home() {
  return (
    <FileContextProvider>
      <div className="w-full flex flex-row justify-between items-start">
        <Navbar />

        <div
          className="w-full flex justify-center items-center absolute
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        flex-col gap-4  
       "
        >
          <Upload />
        </div>

        <div className="bg-black/0 p-2 w-full h-screen flex flex-col justify-evenly items-center ">
          <MediaView />
        </div>
      </div>
    </FileContextProvider>
  );
}
