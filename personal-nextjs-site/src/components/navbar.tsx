'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="flex-col p-6">
            <div className="flex space-x-4">
                <button onClick={() => setOpen(!isOpen)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                    </svg>
                </button>
            </div>

            {isOpen? 
                    <div className="flex flex-col">
                        <Link onClick={() => setOpen(!isOpen)} className = {styles.menuElement} href="/">
                                Home
                        </Link>
                        <Link onClick={() => setOpen(!isOpen)} className = {styles.menuElement} href="/about">
                            About
                        </Link>
                        <Link onClick={() => setOpen(!isOpen)} className = {styles.menuElement} href="/projects">
                            Projects
                        </Link>
                        <Link onClick={() => setOpen(!isOpen)} className = {styles.menuElement} href="/contact">
                            Contact
                        </Link>
                    </div>
                    : <></>
                }
        </nav>
    );
}

const styles = {
    menuElement: 'hover:bg-blue-700 text-white font-bold rounded text-center p-4'
}
  