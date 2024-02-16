'use client'

import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import React, { useEffect } from 'react';

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div className = "bg-gray-600 fixed w-full h-0.5" style = {{scaleX: scrollYProgress}}>
            
        </motion.div>
    )
}