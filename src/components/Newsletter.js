import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter-container py-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-sm-12">
            <h4>Sign Up For Newsletter</h4>
            <p>
              Get E-mail updates about our latest shop and
              <span>special offer</span>
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <form className="d-flex">
              <input
                className="form-control input-newsletter"
                type="text"
                placeholder="Your email address"
              />
              <button className="btn btn-newsletter" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
