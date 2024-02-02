import Image from "next/image";
import Link from 'next/link';


export default function Page() {
    return (
        <div className = "flex flex-col items-center text-center">
            <h1 className="text-6xl font-bold">About me</h1>
            <p className = "p-12">
                I'm a full-stack developer who enjoys tinkering with stuff.
                <br></br>
                I graduated from UMass Amherst in 2024 with a degree in Computer Science. 

                Currently, I'm working on a few passion projects (including this website). 
                
                I'm also looking for a job, so if you're hiring, feel free to reach out to me!

                <br></br><br></br>

                You can download my resume below.
            </p>
            <Link  href={'/resume.pdf'}  target="_blank"  rel="noopener noreferrer" locale={false} download>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </button>
            </Link>

            <p className="p-12">
                Psst... while you're at it, say hi to my cats, Nala and Coco!
            </p>

            <div className = "flex flex-row h-200">
                <Image
                    src="/coco.jpg"
                    alt="Coco"
                    width={200}
                    height={200}
                    className="p-6 rounded-full"
                />
                
                <Image
                    src="/nala.jpg"
                    alt="Nala"
                    width={200}
                    height={200}
                    className="p-6 rounded-full"
                />
            </div>
        </div>
    );
}