import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tile from './tile'

export default function HomePageTile() {
    return (
        <div className = {styles.pagetile}>
          <Tile> 
            <p className="w-3/4 md:w-1/2 text-center md:text-justify whitespace-pre-line">
              <h1 className="text-6xl py-6"><b>Hey</b> there!</h1>
              {`My name is Patrick and I'm a software engineer from the United States. 
              
              In January 2024, I graduated cum laude from the University of Massachusetts Amherst with a BS in Computer Science and a minor in Mathematics. At UMass, I had the opportunity to work with a diverse set of technologies. I've had hands-on experience working in game development, machine learning, reverse engineering, and software development. 

              Currently, my focus is on familiarizing myself with modern full-stack development tools. I'm also interested in learning more about cloud computing and distributed systems.
              `}</p>
          
            <div className = "py-6">
              <Image
                src="/headshot.jpg"
                alt="Patrick"
                width={200}
                height={200}
                className="rounded-xl"
                />
                <div className = "flex flex-row justify-between p-6 w-full">
                  <Link className = {styles.link} href={"https://github.com/pnegus/"}>
                    <button className={styles.button}>
                        <Image
                            src="/github-mark-white.png"
                            alt="Github"
                            width={25}
                            height={25}
                        />
                    </button>
                  </Link>

                  <Link className = {styles.link} href={"https://github.com/pnegus/"}>
                    <button className={styles.button}>
                        <Image
                            src="/l-in-logo.png"
                            alt="LinkedIn"
                            width={25}
                            height={25}
                        />
                    </button>
                  </Link>

                  <Link className = {styles.link} href={"mailto:negus.patrickyi@gmail.com"}>
                    <button className={styles.button}>
                    <svg className="h-8 w-8 text-white-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    </button>
                  </Link>
                </div>
            </div>  
          </Tile>
      </div>
    );
}

const styles = {
    button: "flex bg-blue-700 hover:bg-blue-900 text-white font-bold rounded size-10 justify-center items-center",
    pagetile:"flex flex-col w-full h-fit items-center justify-center md:self-center ",
    infotile: "flex flex-row justify-center items-center flex-wrap-reverse w-3/4 space-x-12 py-24 rounded-2xl shadow-lg bg-gray-100 border border-gray-300",
    link: ""
  }