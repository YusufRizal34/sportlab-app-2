import React from "react";

export default function Profile({ data }) {
  return (
    <section>
      {data && (
        <div className="container">
          <div className="profile-title">
            <h4>{data.username}</h4>
          </div>
          <div className="profile-container">
            <div className="row">
              <div className="col">Name : {data.username}</div>
              <div className="col">Email : {data.email}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
