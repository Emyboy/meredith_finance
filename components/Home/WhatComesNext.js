import React from "react";

export default function WhatComesNext() {
  return (
    <div className="uk-section">
      {" "}
      <div className="uk-container">
        {" "}
        <div
          className="uk-grid uk-grid-divider uk-child-width-1-3@m uk-child-width-1-2@s"
          data-uk-grid=""
        >
          {" "}
          <div className="uk-width-1-3@m uk-width-1-1@s uk-first-column">
            {" "}
            <img
              className="uk-float-left uk-margin-remove-adjacent uk-margin-right uk-margin-small-top uk-margin-large-bottom"
              src="/assets/img/monee-content-image5.svg"
              data-src="img/monee-content-image5.svg"
              alt="monee-image5"
              width="82"
              height="142"
              data-uk-img=""
            />{" "}
            <h3>What just happened. And what comes next.</h3>{" "}
            <p>
              Get timely news &amp; analysis from top publications and financial
              websites
            </p>{" "}
            <a className="uk-button uk-button-primary uk-border-rounded" href="#">
              More Insights
            </a>{" "}
          </div>{" "}
          <div>
            {" "}
            <article className="uk-article">
              {" "}
              <i className="fas fa-video fa-lg uk-float-left uk-margin-remove-adjacent uk-margin-small-right"></i>{" "}
              <h6 className="uk-article-meta uk-text-uppercase">Video</h6>{" "}
              <h3 className="uk-margin-remove-top uk-margin-remove-bottom">
                Investing for Income
              </h3>{" "}
              <p className="uk-article-meta uk-text-uppercase uk-margin-small-top">
                Written by <a href="#">John Doe</a>
              </p>{" "}
              <p>
                Eiusmod et tempora incididunt ut labore dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercita.
              </p>{" "}
              <a className="uk-button uk-button-text" href="#">
                Continue Reading{" "}
                <i className="fas fa-chevron-right fa-xs uk-margin-small-left"></i>
              </a>{" "}
            </article>{" "}
          </div>{" "}
          <div>
            {" "}
            <article className="uk-article">
              {" "}
              <i className="fas fa-file-alt fa-lg uk-float-left uk-margin-remove-adjacent uk-margin-small-right"></i>{" "}
              <h6 className="uk-article-meta uk-text-uppercase">Article</h6>{" "}
              <h3 className="uk-margin-remove-top uk-margin-remove-bottom">
                New to Online Investing
              </h3>{" "}
              <p className="uk-article-meta uk-text-uppercase uk-margin-small-top">
                Written by <a href="#">John Doe</a>
              </p>{" "}
              <p>
                Nam liberum tempore soluta nobis est eligendi optioka cumque
                nihil impedit quo minus quod maxime placeat.
              </p>{" "}
              <a className="uk-button uk-button-text" href="#">
                Continue Reading{" "}
                <i className="fas fa-chevron-right fa-xs uk-margin-small-left"></i>
              </a>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
