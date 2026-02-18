import { useNavigate } from "react-router";
import ComplaintForm from "../components/ComplaintForm";
import { createComplaint } from "../api/complaintsApi";

function SubmitComplaintPage() {
  const navigate = useNavigate();
  async function handleSubmit(formData) {
    await createComplaint(formData);
    navigate("/");
  }
  return (
    <div>
      <h2>Submit Complaint</h2>
      <ComplaintForm onSubmit={handleSubmit} />
    </div>
  );
}
export default SubmitComplaintPage