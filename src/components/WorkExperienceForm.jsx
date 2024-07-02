import styles from "../styles/form.module.css";
export default function WorkExperienceForm({
  workExperiences,
  handleWorkChange,
  index,
}) {
  const handleChange = (e) => {
    handleWorkChange(e, index); // Pass index along with name and value
  };

  return (
    <div>
      <form>
        <h2>Work Experience</h2>
        <div className={styles.inputField}>
          <p>Company:</p>
          <input
            name="company"
            value={workExperiences.company}
            onChange={handleChange}
            type="text"
            placeholder="Company"
          />
        </div>
        <div className={styles.inputField}>
          <p>Title:</p>
          <input
            name="title"
            value={workExperiences.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className={styles.inputField}>
          <p>Description:</p>
          <textarea
            name="description"
            value={workExperiences.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            style={{ width: "100%", resize: "vertical" }}
          />
        </div>
        <div className={styles.inputField}>
          <p>Start Date:</p>
          <input
            name="startDate"
            value={workExperiences.startDate}
            onChange={handleChange}
            type="text"
            placeholder="Start Date"
          />
        </div>
        <div className={styles.inputField}>
          <p>End Date:</p>
          <input
            name="endDate"
            value={workExperiences.endDate}
            onChange={handleChange}
            type="text"
            placeholder="End Date"
          />
        </div>
      </form>
    </div>
  );
}
