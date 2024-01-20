"use client";
import { projectsData, skillsAssets } from "@/constants/projectsData";
import styles from "@/styles/project.module.scss";
import { showAnimation } from "@/utils/showAnimation";
import { notFound } from "next/navigation";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const { ref: refProblem, inView: inViewProblem } = useInView({
    triggerOnce: true,
  });
  const { ref: refImage2, inView: inViewImage2 } = useInView({
    triggerOnce: true,
  });
  const { ref: refSolution, inView: inViewSolution } = useInView({
    triggerOnce: true,
  });
  const { ref: refImage3, inView: inViewImage3 } = useInView({
    triggerOnce: true,
  });

  const project = projectsData.find((project) => project.title === "Xyz3");

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>{project.title}</h2>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div>
      <div className={styles.imageAnimated} />
      <div className={styles.contentContainer}>
        <div className={styles.animatedContainer}>
          <h5>Project Duration</h5>
          <p className={styles.typography}>6 Months</p>
          <h5>Stack</h5>
          <div className={styles.stackContainer}>
            {project.stack.map((skill, index) => {
              const Technology = skillsAssets[skill];
              return <Technology key={index} />;
            })}
          </div>
        </div>
        <div
          ref={refProblem}
          className={`${styles.problemContainer} ${showAnimation(
            inViewProblem
          )}`}
        >
          <h3>Problem</h3>
          <p className={styles.typography}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div
        ref={refImage2}
        className={`${styles.image} ${showAnimation(inViewImage2)}`}
      />
      <div
        ref={refSolution}
        className={`${styles.contentContainer} ${showAnimation(
          inViewSolution
        )}`}
      >
        <h3>Solution</h3>
        <p className={styles.typography}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <div
        ref={refImage3}
        className={`${styles.image} ${showAnimation(inViewImage3)}`}
      />
    </div>
  );
}
