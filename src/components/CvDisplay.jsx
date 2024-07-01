import styles from "./cvdisplay.module.css";
export default function CvDisplay({ formData }) {
  return (
    <div className={styles.displayContainer}>
      <h1>{formData.name}</h1>
      <h1>{formData.email}</h1>
      <h1>{formData.phone}</h1>
      <h1>{formData.school}</h1>
      <h1>{formData.study}</h1>
      <h1>{formData.schoolDate}</h1>
      <h1>{formData.company}</h1>
      <h1>{formData.title}</h1>
      <h1>{formData.responsibilities}</h1>
      <h1>{formData.workDate}</h1>
    </div>
  );
}
