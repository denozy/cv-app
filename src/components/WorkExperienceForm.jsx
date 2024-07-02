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
      <h2>Work Experience</h2>
      <form>
        <input
          name="company"
          value={workExperiences.company}
          onChange={handleChange}
          type="text"
          placeholder="Company"
        />
        <input
          name="title"
          value={workExperiences.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={workExperiences.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          style={{ width: "100%", resize: "vertical" }}
        />
        <input
          name="startDate"
          value={workExperiences.startDate}
          onChange={handleChange}
          type="text"
          placeholder="Start Date"
        />
        <input
          name="endDate"
          value={workExperiences.endDate}
          onChange={handleChange}
          type="text"
          placeholder="End Date"
        />
      </form>
    </div>
  );
}
