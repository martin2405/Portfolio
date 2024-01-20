import { skillsAssets } from "@/constants/projectsData";
import styles from "@/styles/carousel.module.scss";

export default function Carousel() {
  const skills = Object.values(skillsAssets);

  return (
    <div className={styles.container}>
      <div>
        {skills.map((Skill, index) => (
          <Skill key={index} />
        ))}
      </div>

      <div>
        {skills.map((Skill, index) => (
          <Skill key={index} />
        ))}
      </div>
    </div>
  );
}
