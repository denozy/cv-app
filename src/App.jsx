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
    workExperiences: [], // Array to hold multiple work experiences
  });

  // Handler to update form data for all input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler to add a new work experience to the form data
  const handleAddExperience = (newExperience) => {
    setFormData((prevData) => ({
      ...prevData,
      workExperiences: [...prevData.workExperiences, newExperience], // Adding new experience to the array
    }));
  };

  return (
    <div>
      <header>
        <h1>CV Generator</h1>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.formInputs}>
          {/* GeneralInformation component for personal details */}
          <GeneralInformation handleInputChange={handleInputChange} />
          {/* EducationForm component for education details */}
          <EducationForm handleInputChange={handleInputChange} />
          {/* WorkExperienceForm component for adding work experiences */}
          <WorkExperienceForm
            handleAddExperience={handleAddExperience} // Pass handleAddExperience to WorkExperienceForm
          />
        </div>
        <div>
          {/* CvDisplay component to display the entered data */}
          <CvDisplay formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
