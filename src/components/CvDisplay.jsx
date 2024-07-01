import WorkDisplay from "./WorkDisplay";
import styles from "./cvdisplay.module.css";
export default function CvDisplay({ formData }) {
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
        <h3>{formData.school}</h3>
        <p>{formData.study}</p>
        <p>Completed: {formData.schoolDate}</p>
      </div>
      <WorkDisplay formData={formData} />
    </div>
  );
}
