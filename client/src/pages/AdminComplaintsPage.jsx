import React from "react";

function AdminComplaintsPage(props) {
  const { complaints } = props;
  return (
    <div>
      {complaints.map((c) => {
        <div key={c._id}>
          <h4>{c.category}</h4>
          <p>{c.message}</p>
        </div>;
      })}
    </div>
  );
}

export default AdminComplaintsPage;
