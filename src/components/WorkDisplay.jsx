import styles from "./cvdisplay.module.css";
export default function WorkDisplay({ workExperiences }) {
  const formatTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
  return (
    <>
      <div className={styles.workExperience}>
        {workExperiences.map((experience, index) => (
          <div key={index} className={styles.workExperience}>
            <h3>{experience.company}</h3>
            <p>{experience.position}</p>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <p>{formatTextWithLineBreaks(experience.description)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
