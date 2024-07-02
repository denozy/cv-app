import styles from "../styles/form.module.css";
export default function GeneralInformation({ handleInputChange }) {
  return (
    <div>
      <form>
        <h2>General Information</h2>
        <div className={styles.inputField}>
          <p>Name:</p>
          <input
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Full name"
          />
        </div>
        <div className={styles.inputField}>
          <p>Email:</p>
          <input
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputField}>
          <p>Phone:</p>
          <input
            name="phone"
            onChange={handleInputChange}
            type="text"
            placeholder="Phone"
          />
        </div>
      </form>
    </div>
  );
}
