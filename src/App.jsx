import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CvDisplay from "./components/CvDisplay";
import styles from "./app.module.css";

function App() {
  // State to hold form data including work experiences
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    schoolStart: "", // Added for education details
    schoolEnd: "", // Added for education details
  });

  const [workExperiences, setWorkExperiences] = useState({
    company: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleWorkChange = (e) => {
    const { name, value } = e.target;
    setWorkExperiences((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler to update form data for all input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <header>
        <h1>CV Generator</h1>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.formInputs}>
          <GeneralInformation handleInputChange={handleInputChange} />
          <EducationForm handleInputChange={handleInputChange} />
          <WorkExperienceForm
            workExperiences={workExperiences}
            handleWorkChange={handleWorkChange}
            setWorkExperiences={setWorkExperiences}
          />
        </div>
        <div>
          <CvDisplay formData={formData} workExperiences={workExperiences} />
        </div>
      </div>
    </div>
  );
}

export default App;
