import React from "react";

export default function AboutUs() {
  return (
    <div className="uk-section">
      {" "}
      <div className="uk-container">
        {" "}
        <div className="uk-grid">
          {" "}
          <div className="uk-width-1-1">
            {" "}
            <h2>
              Trade stocks on our Intuitive,
              <br />
              easy-to-use and powerful platform
            </h2>{" "}
            <div
              className="uk-child-width-1-1 uk-child-width-1-3@m uk-child-width-1-2@s uk-grid"
              data-uk-grid=""
            >
              {" "}
              <div className="uk-first-column">
                {" "}
                <p className="uk-margin-remove-top">
                  Our award-winning platform gives you access to powerful
                  technical charting &amp; fundamental research tools. See for
                  yourself how equity trading at Monee Capital gives you some of
                  the best value.
                </p>{" "}
                <a
                  className="uk-button uk-button-primary uk-button-large uk-border-rounded"
                  href="#"
                >
                  Open an Account
                </a>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="uk-text-center monee-fee-wrapper">
                  {" "}
                  <h3 className="uk-text-uppercase uk-margin-remove-bottom">
                    stocks
                  </h3>{" "}
                  <h1 className="uk-margin-remove-top">
                    {" "}
                    <span className="monee-currency">$</span>{" "}
                    <span className="monee-fee">4</span> 95{" "}
                  </h1>{" "}
                  <p className="uk-margin-remove-top uk-margin-remove-bottom">
                    Flat-rate stocks
                  </p>{" "}
                  <span className="uk-label uk-label-warning uk-margin-remove-top">
                    Other fee may apply
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="uk-visible@m">
                {" "}
                <img
                  className="in-top-offset-50 uk-align-right"
                  src="/assets/img/monee-content-platform2.png"
                  data-src="/assets/img/monee-content-platform2.pn"
                  alt="monee-platform"
                  width="350"
                  height="258"
                  data-uk-img=""
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
