import React from "react";

export default function PageDetailImage({ data, loading }) {
  return (
    <figure className="page-detail-container img-wrapper">
      {loading && <img className="img-contain" src="" alt="items" />}
      {!loading && (
        <img className="img-contain" src={`/${data.imageUrl}`} alt="items" />
      )}
    </figure>
  );
}
