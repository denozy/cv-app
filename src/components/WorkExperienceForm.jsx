import { useState } from "react";

export default function WorkExperienceForm({
  workExperiences,
  handleWorkChange,
  setWorkExperiences,
}) {
  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <input
          name="company"
          value={workExperiences.company}
          onChange={handleWorkChange}
          type="text"
          placeholder="Company"
        />
        <input
          name="title"
          value={workExperiences.title}
          onChange={handleWorkChange}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={workExperiences.description}
          onChange={handleWorkChange}
          placeholder="Description"
          rows="4"
          style={{ width: "100%", resize: "vertical" }}
        />
        <input
          name="startDate"
          value={workExperiences.startDate}
          onChange={handleWorkChange}
          type="text"
          placeholder="Start Date"
        />
        <input
          name="endDate"
          value={workExperiences.endDate}
          onChange={handleWorkChange}
          type="text"
          placeholder="End Date"
        />
      </form>
    </div>
  );
}
