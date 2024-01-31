import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className = "grid grid-cols-3 w-full grid-cols-navbar">
          <Navbar />
        </div>
      <h1 className="text-6xl text-center font-bold">Hey there 👋</h1>
      <Image
        src="/headshot.jpg"
        alt="Patrick"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="text-2xl text-center pb-36">My name is Patrick, and welcome to my site! Feel free to look around.</p>
    </main>
  );
}
