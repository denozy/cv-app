import styles from "../styles/form.module.css";
export default function EducationForm({ handleInputChange }) {
  return (
    <div>
      <form>
        <h2>Education</h2>
        <div className={styles.inputField}>
          <p>School:</p>
          <input
            name="school"
            onChange={handleInputChange}
            type="text"
            placeholder="School"
          />
        </div>
        <div className={styles.inputField}>
          <p>Studied:</p>
          <input
            name="study"
            onChange={handleInputChange}
            type="text"
            placeholder="Study"
          />
        </div>
        <div className={styles.inputField}>
          <p>Start Date:</p>
          <input
            name="schoolStart"
            onChange={handleInputChange}
            type="text"
            placeholder="Start date"
          />
        </div>
        <div className={styles.inputField}>
          <p>End Date:</p>
          <input
            name="schoolEnd"
            onChange={handleInputChange}
            type="text"
            placeholder="End date"
          />
        </div>
      </form>
    </div>
  );
}
