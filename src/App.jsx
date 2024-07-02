import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CvDisplay from "./components/CvDisplay";
import styles from "./styles/app.module.css";

function App() {
  // State to hold form data including work experiences
  const [formData, setFormData] = useState({
    name: "Nick D",
    email: "",
    phone: "",
    school: "",
    study: "",
    schoolStart: "",
    schoolEnd: "",
  });

  const [workExperiences, setWorkExperiences] = useState([
    {
      company: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleWorkChange = (e, index) => {
    const { name, value } = e.target; // Here is where the error occurs
    const newExperiences = [...workExperiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [name]: value,
    };
    setWorkExperiences(newExperiences);
  };

  const addWorkExperience = () => {
    setWorkExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        company: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className={styles.contentContainer}>
        <div className={styles.formInputs}>
          <GeneralInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <EducationForm handleInputChange={handleInputChange} />
          {/* Mapping through workExperiences to render each WorkExperienceForm */}
          {workExperiences.map((experience, index) => (
            <WorkExperienceForm
              key={index}
              index={index} // Pass index as prop to identify each instance
              workExperiences={experience}
              handleWorkChange={(e) => handleWorkChange(e, index)}
            />
          ))}
          {/* Button to add a new instance of WorkExperienceForm */}
          <div className={styles.btnContainer}>
            <button className={styles.addWorkBtn} onClick={addWorkExperience}>
              Add Work Experience
            </button>
          </div>
        </div>
        <div className={styles.cvDisplay}>
          <CvDisplay formData={formData} workExperiences={workExperiences} />
        </div>
      </div>
    </div>
  );
}

export default App;
