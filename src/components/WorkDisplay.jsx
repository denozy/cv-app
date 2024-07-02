import React from "react";
import styles from "./cvdisplay.module.css";

export default function WorkDisplay({ workExperiences }) {
  return (
    <div className={styles.workExperience}>
      <div className={styles.workExperienceItem}>
        <h3>{workExperiences.company}</h3>
        <p>{workExperiences.title}</p>
        <p>
          {workExperiences.startDate} - {workExperiences.endDate}
        </p>
        <p>{workExperiences.description}</p>
      </div>
    </div>
  );
}
