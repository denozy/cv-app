import styles from "./cvdisplay.module.css";

export default function WorkDisplay({ workExperiences }) {
  const formatTextWithLineBreaks = (text) => {
    // Split the text by line breaks
    const lines = text.split("\n");

    // Map each line to a <span> with a <br> tag for line breaks
    return lines.map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className={styles.workExperience}>
      {workExperiences.map((experience, index) => (
        <div key={index} className={styles.workExperienceItem}>
          <h3>{experience.company}</h3>
          <p>{experience.title}</p>
          <p>
            {experience.startDate}
            {experience.endDate ? ` - ${experience.endDate}` : ""}
          </p>
          <p>{formatTextWithLineBreaks(experience.description)}</p>
        </div>
      ))}
    </div>
  );
}
