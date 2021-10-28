import React from "react";
import ProjectCard from "../ProjectsCard/ProjectsCard";
import "./ProjectsSelection.sass";
import FadeInUp from "../../animations/FadeInUp";

export default function App({ projectsData }) {
    return (
        <div className="wwd-section">
            <FadeInUp>
                <h1
                    className="hero-title-1 merriweather-bold-darkblue-136px"
                    data-id="148:879"
                >
                    Our Projects
                </h1>
            </FadeInUp>
            <div className="project-details">
                {projectsData.map((e) => (
                    <ProjectCard
                        opMbfmTitle={e.projectName}
                        opMbfmCopy={e.projectDescription}
                        opMbfmImage={e.projectImage.sourceUrl}
                    />
                ))}
            </div>
        </div>
    );
}
