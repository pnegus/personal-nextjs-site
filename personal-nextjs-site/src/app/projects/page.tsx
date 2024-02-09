import React from 'react';
import ProjectTile from '@/components/projectTile';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <React.Fragment>
            <h1 className="text-6xl text-center font-bold">My Projects</h1>
            <p>
                {`Below you can peruse some of my projects that I'm currently working on. You can also check out my GitHub to see some of my other work.`}
            </p>
            <div className = "grid grid-cols-2 grid-rows-2 gap-4">
                <ProjectTile 
                    title="Personal Site" 
                    description="This website was built with Next.js and Tailwind CSS. It's a work in progress, but I'm happy with how it's turning out so far." 
                    url = ""/>

                <ProjectTile 
                    title="Project 2" 
                    description="This is a project that I'm currently working on. It's a work in progress, but I'm happy with how it's turning out so far." 
                    url = ""/>

                <ProjectTile 
                    title="Project 3" 
                    description="This is a project that I'm currently working on. It's a work in progress, but I'm happy with how it's turning out so far." 
                    url = ""/>

                <ProjectTile 
                    title="Project 3" 
                    description="This is a project that I'm currently working on. It's a work in progress, but I'm happy with how it's turning out so far." 
                    url = ""/>

            </div>

            <Link  href={"https://github.com/pnegus/"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
                    <Image
                        src="/github-mark-white.png"
                        alt="Github"
                        width={25}
                        height={25}
                    />
                </button>
            </Link>
        </React.Fragment>
    );
}