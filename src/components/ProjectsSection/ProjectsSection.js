import React from "react";
import ProjectCard from "../ProjectsCard/ProjectsCard";
import "./ProjectsSelection.sass";

export default function App() {
    return (
        <div className="wwd-section">
            <h1 className="hero-title-1 merriweather-bold-darkblue-136px" data-id="148:879">
                Our Projects
            </h1>
            <div className="project-details">
                <ProjectCard
                    opMbfmTitle="Melt Blown Fabric Manufacturing"
                    opMbfmCopy="Melt blowing is a conventional fabrication method of micro-and
                    nanofibers where a polymer melt is extruded through ..."
                    opMbfmImage="op-mbfm-rectangle.png"
                />
                <ProjectCard
                    opMbfmTitle="Melt Blown Fabric Manufacturing"
                    opMbfmCopy="Melt blowing is a conventional fabrication method of micro-and
                    nanofibers where a polymer melt is extruded through ..."
                    opMbfmImage="op-mbfm-rectangle.png"
                />
                <ProjectCard
                    opMbfmTitle="Melt Blown Fabric Manufacturing"
                    opMbfmCopy="Melt blowing is a conventional fabrication method of micro-and
                    nanofibers where a polymer melt is extruded through ..."
                    opMbfmImage="op-mbfm-rectangle.png"
                />
                <ProjectCard
                    opMbfmTitle="Melt Blown Fabric Manufacturing"
                    opMbfmCopy="Melt blowing is a conventional fabrication method of micro-and
                    nanofibers where a polymer melt is extruded through ..."
                    opMbfmImage="op-mbfm-rectangle.png"
                />
            </div>
        </div>
    );
}
