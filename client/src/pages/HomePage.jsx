import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>תיבת תלונות אנונימיות בבסיס צבאי</h1>
      <p>שלחו תלונה בצורה אנונימית</p>

      <button onClick={() => navigate("/submit")}>
        שליחת תלונה
      </button>

      <hr />

      <h2>מפקדים בלבד</h2>
      <button onClick={() => navigate("/admin/login")}>
        כניסה לאדמין
      </button>
    </div>
  );
}

export default HomePage;
