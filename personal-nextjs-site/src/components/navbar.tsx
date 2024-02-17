'use client';

import Link from 'next/link';
import React, { useState, createRef } from 'react';
import ProgressBar from './progressBar';

export default function Navbar() {
    return (
        <div className = "fixed w-full z-50">
        <div className="flex flex-row text-black bg-slate-200 bg-opacity-50 w-full items-center justify-between p-4 pl-6 pr-6">
            <h1 className = "text-2xl"> <b>Patrick</b> Negus </h1>
            <div className = "">
                <Link className = {styles.menuElement} href="#home">
                    Home
                </Link>
                <Link  className = {styles.menuElement} href="#projects">
                    Projects
                </Link>
                <Link  className = {styles.menuElement} href="#resume">
                    Resume
                </Link>
            </div>
        </div>
        <ProgressBar/>
        </div>
        
    );
}

const styles = {
    menuElement: 'hover:bg-blue-700 hover:text-white font-bold rounded text-center p-4'
}
  