import { ProjectsDataType } from "@/constants/projectsData";
import styles from "@/styles/projects.module.scss";
import Link from "next/link";

interface ProjectPreviewProps {
  project: ProjectsDataType;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className={styles.container}>
      <Link href={project.title}>
        <h4 className={styles.title}>{project.title}</h4>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <div className={styles.image}>
          <div className={styles.floatingContainer}>
            <h4 className={styles.floatingTitle}>{project.title}</h4>
            <p className={styles.floatingSubtitle}>{project.subtitle}</p>
          </div>
          <h4 className={styles.inProgress}>IN PROGRESS</h4>
        </div>
      </Link>
    </div>
  );
}
