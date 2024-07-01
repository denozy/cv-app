export default function EducationForm({ handleInputChange }) {
  return (
    <div>
      <form>
        <h2>Education</h2>
        <input
          name="school"
          onChange={handleInputChange}
          type="text"
          placeholder="School"
        />
        <input
          name="study"
          onChange={handleInputChange}
          type="text"
          placeholder="Study"
        />
        <input
          name="schoolDate"
          onChange={handleInputChange}
          type="text"
          placeholder="Date"
        />
      </form>
    </div>
  );
}
