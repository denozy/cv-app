import styles from "./cvdisplay.module.css";
export default function WorkDisplay({ formData }) {
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
        <h3>{formData.company}</h3>
        <h4>{formData.title}</h4>
        <p>{formatTextWithLineBreaks(formData.responsibilities)}</p>
        <p>{formData.workDate}</p>
      </div>
    </>
  );
}
