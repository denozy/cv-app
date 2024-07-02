import WorkDisplay from "./WorkDisplay";
import styles from "./cvdisplay.module.css";
export default function CvDisplay({ formData, workExperiences }) {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.general}>
        <div className={styles.nameHeader}>
          <h1>{formData.name}</h1>
        </div>
        <div className={styles.contactInfo}>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.educationHeader}>
          <h2>Education</h2>
        </div>
        <h3>{formData.school}</h3>
        <p>{formData.study}</p>
        <p>
          {formData.schoolStart}
          {formData.schoolEnd ? ` - ${formData.schoolEnd}` : ""}
        </p>
      </div>
      <WorkDisplay workExperiences={workExperiences} />
    </div>
  );
}
