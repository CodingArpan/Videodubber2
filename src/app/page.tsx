"use client";
import { Navbar } from "@/components/Navbar";
import { Upload } from "@/components/Uploads/Upload";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-7xl flex flex-row justify-between items-start">
      <Navbar />
      
      <div className="w-full flex justify-center items-center absolute
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        flex-col gap-4  
       ">
        <Upload />
      </div>
    </div>
  );
}
