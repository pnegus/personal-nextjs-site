import Image from "next/image";
import Navbar from "@/components/navbar";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="text-6xl text-center font-bold">Hey there 👋</h1>
      <Image
        src="/headshot.jpg"
        alt="Patrick"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="text-2xl text-center">{`My name is Patrick. Welcome to my site! Feel free to look around!`}</p>
    </React.Fragment>
  );
}
