import style from "./form.module.css";
import { useState } from "react";
export default function GeneralInformation({ handleInputChange }) {
  return (
    <div>
      <form>
        <h2>General Information</h2>
        <p>Full name</p>
        <input
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Full name"
        />
        <input
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="phone"
          onChange={handleInputChange}
          type="text"
          placeholder="Phone"
        />
      </form>
    </div>
  );
}
