import React from "react";
import propTypes from "prop-types";

export default function PanelTitle({
  title = "Panel Name",
  href = "#",
  isFilter,
  isPrimary,
  isCenter,
  isMainTitle,
}) {
  const className = [];
  if (isPrimary) className.push("btn-primary");
  if (isCenter) className.push("text-center");

  if (isFilter) {
    return (
      <div className="row">
        <div className="col-6">
          <div className="product-title">
            {isMainTitle ? <h3>{title}</h3> : <h4>{title}</h4>}
          </div>
        </div>
        <div className="col-6">
          <div className="product-filter">
            <a className={`btn ${className.join(" ")}`} href={href}>
              Filter
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className={`product-title ${className.join(" ")}`}>
          {isMainTitle ? <h3>{title}</h3> : <h4>{title}</h4>}
        </div>
      </div>
    </div>
  );
}

PanelTitle.propTypes = {
  href: propTypes.string,
  className: propTypes.string,
  isFilter: propTypes.bool,
  isPrimary: propTypes.bool,
  isCenter: propTypes.bool,
  isMainTitle: propTypes.bool,
};
