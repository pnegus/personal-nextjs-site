import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollableTileRoot from "@/components/scrollableTileRoot";
import HomePageTile from "@/components/homePageTile";
import ProjectPageTile from "@/components/projectPageTile";

export default function Index() {
  return (
    <React.Fragment>              
      
    <ScrollableTileRoot background = "bg-white" id = "home" chevron = {true}>
      <HomePageTile />
    </ScrollableTileRoot>

    <ScrollableTileRoot background = "bg-gray-100" id = "projects" chevron = {false}>
      <ProjectPageTile />
    </ScrollableTileRoot>
        
    </React.Fragment>
  );
}

