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
        <input
          name="responsibilities"
          onChange={handleInputChange}
          type="text"
          placeholder="Responsibilites"
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
