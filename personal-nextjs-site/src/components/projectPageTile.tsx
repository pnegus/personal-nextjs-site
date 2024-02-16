import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import ProjectTile from './projectTile';

export default function ProjectPageTile() {
    return (
        <div className = {styles.pagetile}>
            {/* <h1 className="text-6xl text-center font-bold p-6">My Projects</h1> */}

            <div className = "grid grid-cols-2 grid-rows-2 gap-4 w-2/3">
                <ProjectTile 
                    title="Budgeting App" 
                    description="A budgeting application built using React Native. Uses AsyncStorage for persisting user Data and React-Query for state management." 
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
        </div>
    );
}

const styles = {
    button: "flex bg-blue-700 hover:bg-blue-900 text-white font-bold rounded size-10 justify-center items-center",
    pagetile:"flex flex-col w-full h-full items-center justify-center",
    infotile: "flex flex-row justify-center items-center flex-wrap-reverse w-full space-x-12 py-24",
    link: ""
  }