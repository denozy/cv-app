import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CvDisplay from "./components/CvDisplay";
import styles from "./app.module.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    schoolDate: "",
    company: "",
    title: "",
    responsibilities: "",
    workDate: "",
  });

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
        <div>
          <GeneralInformation handleInputChange={handleInputChange} />
          <EducationForm handleInputChange={handleInputChange} />
          <WorkExperienceForm handleInputChange={handleInputChange} />
        </div>
        <div>
          <CvDisplay formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
