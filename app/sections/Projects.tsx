"use client";
import ProjectPreview from "@/components/ProjectPreview";
import { projectsData } from "@/constants/projectsData";
import styles from "@/styles/projects.module.scss";
import { showAnimation } from "@/utils/showAnimation";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${styles.listContainer} ${showAnimation(inView)} `}
    >
      {projectsData.map((project, index) => (
        <ProjectPreview project={project} key={index} />
      ))}
    </div>
  );
}
