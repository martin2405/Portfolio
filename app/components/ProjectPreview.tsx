import { ProjectsDataType } from "@/constants/projectsData";
import styles from "@/styles/projects.module.scss";
import Link from "next/link";
import Image from "next/image";
import Github from "../../public/icons/github.svg";
import Web from "../../public/icons/web.svg";

interface ProjectPreviewProps {
  project: ProjectsDataType;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{project.title}</h4>
      <div className={styles.image}>
        <Link href={project.webLink} target="_blank">
          <div className={styles.webLinkContainer}>
            <Web className={styles.icon} />
          </div>
        </Link>
        <Link href={project.githubLink} target="_blank">
          <div className={styles.githubLinkContainer}>
            <Github className={styles.icon} />
          </div>
        </Link>
        <div className={styles.floatingContainer}>
          <h4 className={styles.floatingTitle}>{project.title}</h4>
        </div>
        <h4 className={styles.inProgress}>IN PROGRESS</h4>
        <Image src={project.primaryImage} alt={project.title} fill={true} />
      </div>
    </div>
  );
}
