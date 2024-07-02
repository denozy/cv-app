import { useState } from "react";

export default function WorkExperienceForm({ handleAddExperience }) {
  // State to manage individual work experience form fields
  const [workExperience, setWorkExperience] = useState({
    company: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  // Handler to update fields in the work experience form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  // Handler to add the current work experience to the main form data
  const handleAdd = () => {
    handleAddExperience(workExperience); // Call handleAddExperience with current workExperience
    setWorkExperience({
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <input
          name="company"
          value={workExperience.company}
          onChange={handleChange}
          type="text"
          placeholder="Company"
        />
        <input
          name="title"
          value={workExperience.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={workExperience.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          style={{ width: "100%", resize: "vertical" }}
        />
        <input
          name="startDate"
          value={workExperience.startDate}
          onChange={handleChange}
          type="text"
          placeholder="Start Date"
        />
        <input
          name="endDate"
          value={workExperience.endDate}
          onChange={handleChange}
          type="text"
          placeholder="End Date"
        />
        {/* Note: Removed onClick event on button */}
        <button type="button" onClick={handleAdd}>
          Add Work Experience
        </button>
      </form>
    </div>
  );
}
