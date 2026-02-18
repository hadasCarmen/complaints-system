import { useState } from "react";
import { useNavigate } from "react-router";
import { loginAdmin } from "../api/complaintsApi";

function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await loginAdmin(password);

      // שמירת הטוקן
      localStorage.setItem("adminToken", data.token);

      // מעבר לעמוד האדמין
      navigate("/commanders");

    } catch (error) {
      alert("סיסמה שגויה");
    }
  }

  return (
    <div>
      <h2>כניסת מפקדים</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="הכנס סיסמה"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">כניסה</button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
