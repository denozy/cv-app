export default function WorkExperienceForm({ handleInputChange }) {
  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <input
          name="company"
          onChange={handleInputChange}
          type="text"
          placeholder="Company"
        />
        <input
          name="title"
          onChange={handleInputChange}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="responsibilities"
          onChange={handleInputChange}
          type="text"
          placeholder="Responsibilites"
          rows="4"
        />
        <input
          name="workDate"
          onChange={handleInputChange}
          type="text"
          placeholder="Date"
        />
      </form>
    </div>
  );
}
