import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import ProjectTile from './projectTile';
import Tile from './tile';

export default function ProjectPageTile() {
    return (
        <div className = {styles.pagetile}>
            <Tile>
                 <h1 className="text-6xl text-center p-6 px-6"><b>My</b> Projects</h1>

                <div className = "flex flex-col h-max space-y-6 flex-wrap scale-90">
                    <ProjectTile 
                        title="Budgeting App" 
                        description="A budgeting application built using React Native for Android." 
                        url = "https://github.com/pnegus/budget-react-app"/>

                    <ProjectTile 
                        title="Portfolio Site" 
                        description="The site you're currently on! Built using NextJS and styled using Tailwind CSS and framer-motion." 
                        url = "https://github.com/pnegus/personal-nextjs-site"/>

                    <ProjectTile 
                        title="ESP32-S2 Latency Tester" 
                        description="E2E System Latency testing tool using an ESP32-S2 and CircuitPython." 
                        url = "https://github.com/pnegus/circuitpython-latency-tester"/>

                    <ProjectTile 
                        title="Toy POS System" 
                        description="This is a toy point-of-sale system I'm building using .NET and a React-Native frontend." 
                        url = ""/>

                </div>
            </Tile>
            
        </div>
    );
}

const styles = {
    button: "flex bg-blue-700 hover:bg-blue-900 text-white font-bold rounded size-10 justify-center items-center",
    pagetile:"flex flex-col w-full h-fit items-center justify-center md:self-center",
    infotile: "flex flex-row justify-center items-center flex-wrap-reverse w-full space-x-12 py-24",
    link: ""
  }