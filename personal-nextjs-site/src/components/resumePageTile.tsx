import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import ProjectTile from './projectTile';
import Tile from './tile';

export default function ResumePageTile() {
    return (
        <div className = {styles.pagetile}>
            <Tile>
                 <h1 className="text-6xl text-center py-12"><b>My</b> Resume</h1>

                <ProjectTile
                    title="Download" 
                    description="" 
                    url = "/resume.pdf"
                    />
                
            </Tile>
            
        </div>
    );
}

const styles = {
    button: "flex bg-blue-700 hover:bg-blue-900 text-white font-bold rounded size-10 justify-center items-center",
    pagetile:"flex flex-col w-full h-full items-center justify-center",
    infotile: "flex flex-row justify-center items-center flex-wrap-reverse w-full space-x-12 py-24",
    link: ""
  }