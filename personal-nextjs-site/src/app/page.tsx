import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollableTileRoot from "@/components/scrollableTileRoot";
import HomePageTile from "@/components/homePageTile";
import ProjectPageTile from "@/components/projectPageTile";
import ResumePageTile from "@/components/resumePageTile";

export default function Index() {
  return (
    <React.Fragment>              
      
    <ScrollableTileRoot background = "bg-white" id = "home" chevron = {true}>
      <HomePageTile />
    </ScrollableTileRoot>

    <ScrollableTileRoot background = "bg-white" id = "projects" chevron = {true}>
      <ProjectPageTile />
    </ScrollableTileRoot>

    <ScrollableTileRoot background = "bg-white" id = "resume" chevron = {false}>
      <ResumePageTile />
    </ScrollableTileRoot>
        
    </React.Fragment>
  );
}

