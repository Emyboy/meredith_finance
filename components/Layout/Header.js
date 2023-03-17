import React from "react";

export default function Header() {
  return (
    <header data-uk-sticky="top: 400; cls-active: in-sticky" class="uk-sticky">
      <div class="uk-section uk-padding-remove-vertical">
        {" "}
        <div class="uk-container">
          {" "}
          <div class="uk-grid">
            {" "}
            <div class="uk-width-1-2@m uk-width-1-2@s in-header-subnav">
              {" "}
              <ul class="uk-subnav uk-subnav-divider uk-flex uk-flex-center uk-flex-left@m uk-flex-left@s">
                {" "}
                <li>
                  <a href="#">Personal</a>
                </li>{" "}
                <li>
                  <a href="#">Institutional</a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div class="uk-width-1-2@m uk-width-1-2@s in-header-button uk-visible@s">
              {" "}
              <div class="uk-flex uk-flex-right">
                {" "}
                <a
                  href="signin.html"
                  class="uk-button uk-button-default uk-button-small uk-border-rounded uk-margin-small-right"
                >
                  Login <i class="fas fa-sign-in-alt"></i>
                </a>{" "}
                <a
                  href="#"
                  class="uk-button uk-button-primary uk-button-small uk-border-rounded"
                >
                  Create Account
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div class="uk-width-1-1">
              <hr class="uk-margin-remove-top" />
            </div>{" "}
          </div>{" "}
          <div class="uk-grid uk-margin-remove-top">
            {" "}
            <div class="uk-width-1-2 uk-width-expand@m">
              {" "}
              <div class="in-header-logo uk-flex uk-flex-middle">
                {" "}
                <a class="uk-logo" href="index.html">
                  <img
                    src="/assets/logo-horizontal.png"
                    data-src="/assets/logo-horizontal.png"
                    width="120"
                    height="54"
                    alt="logo"
                    data-uk-img=""
                  />
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div class="in-navbar-wrapper uk-width-1-2 uk-width-auto@m">
              {" "}
              <nav
                class="uk-navbar-container uk-visible@m uk-navbar"
                data-uk-navbar=""
              >
                {" "}
                <ul class="uk-navbar-nav">
                  {" "}
                  <li>
                    {" "}
                    <a href="index.html" aria-expanded="false">
                      Home<i class="fas fa-chevron-down"></i>
                    </a>{" "}
                    <div class="uk-navbar-dropdown">
                      {" "}
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        {" "}
                        <li>
                          <a href="homepage2.html">Homepage 2</a>
                        </li>{" "}
                        <li>
                          <a href="homepage3.html">Homepage 3</a>
                        </li>{" "}
                        <li>
                          <a href="homepage4.html">Homepage 4</a>
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="markets.html">Markets</a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" aria-expanded="false">
                      Company<i class="fas fa-chevron-down"></i>
                    </a>{" "}
                    <div class="uk-navbar-dropdown">
                      {" "}
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        {" "}
                        <li>
                          <a href="about.html">About</a>
                        </li>{" "}
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>{" "}
                        <li>
                          <a href="careers.html">Careers</a>
                        </li>{" "}
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="education.html">Education</a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" aria-expanded="false">
                      Resources<i class="fas fa-chevron-down"></i>
                    </a>{" "}
                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                      {" "}
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-2 uk-grid"
                        data-uk-grid=""
                      >
                        {" "}
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            {" "}
                            <li>
                              <a href="https://getuikit.com/docs/">
                                Documentation
                                <i class="fas fa-external-link-square-alt fa-sm"></i>
                              </a>
                            </li>{" "}
                            <li>
                              <a href="help-center.html">Help Center</a>
                            </li>{" "}
                            <li>
                              <a href="customers.html">Customers</a>
                            </li>{" "}
                            <li>
                              <a href="roadmap.html">Roadmap</a>
                            </li>{" "}
                            <li>
                              <a href="legal-docs.html">
                                Legal Docs<i class="fas fa-gavel fa-sm"></i>
                              </a>
                            </li>{" "}
                          </ul>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            {" "}
                            <li>
                              {" "}
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit sed do eiusmod incididunt ut
                                labore dolore magna aliqua quaer volupta
                              </p>{" "}
                            </li>{" "}
                          </ul>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </li>{" "}
                </ul>{" "}
              </nav>{" "}
              <div class="in-mobile-nav uk-height-1-1 uk-flex uk-flex-right uk-flex-middle uk-hidden@m">
                <a class="uk-button" href="#mobile-nav-modal" data-uk-toggle="">
                  <i class="fas fa-bars"></i>
                </a>{" "}
              </div>{" "}
              <div
                id="mobile-nav-modal"
                class="uk-modal-full uk-modal"
                data-uk-modal=""
              >
                {" "}
                <div
                  class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
                  data-uk-height-viewport=""
                >
                  {" "}
                  <button
                    class="uk-modal-close-full uk-close-large fas fa-times"
                    type="button"
                  ></button>{" "}
                  <div class="uk-width-large uk-padding-large">
                    {" "}
                    <ul
                      class="uk-nav-primary uk-nav-parent-icon in-margin-negative-top@s uk-nav"
                      data-uk-nav=""
                    >
                      {" "}
                      <li class="uk-parent">
                        <a href="index.html">Home</a>{" "}
                        <ul class="uk-nav-sub" hidden="" aria-hidden="true">
                          {" "}
                          <li>
                            <a href="homepage2.html">Homepage 2</a>
                          </li>{" "}
                          <li>
                            <a href="homepage3.html">Homepage 3</a>
                          </li>{" "}
                          <li>
                            <a href="homepage4.html">Homepage 4</a>
                          </li>{" "}
                        </ul>{" "}
                      </li>{" "}
                      <li>
                        <a href="markets.html">Markets</a>{" "}
                      </li>{" "}
                      <li class="uk-parent">
                        <a href="#">Company</a>{" "}
                        <ul class="uk-nav-sub" hidden="" aria-hidden="true">
                          {" "}
                          <li>
                            <a href="about.html">About</a>
                          </li>{" "}
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>{" "}
                          <li>
                            <a href="careers.html">Careers</a>
                          </li>{" "}
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>{" "}
                        </ul>{" "}
                      </li>{" "}
                      <li>
                        <a href="education.html">Education</a>{" "}
                      </li>{" "}
                      <li class="uk-parent">
                        <a href="#">Resources</a>{" "}
                        <ul class="uk-nav-sub" hidden="" aria-hidden="true">
                          {" "}
                          <li>
                            <a href="https://getuikit.com/docs/">
                              Documentation
                              <i class="fas fa-external-link-square-alt fa-sm"></i>
                            </a>
                          </li>{" "}
                          <li>
                            <a href="help-center.html">Help Center</a>
                          </li>{" "}
                          <li>
                            <a href="customers.html">Customers</a>
                          </li>{" "}
                          <li>
                            <a href="roadmap.html">Roadmap</a>
                          </li>{" "}
                          <li>
                            <a href="legal-docs.html">
                              Legal Docs<i class="fas fa-gavel fa-sm"></i>
                            </a>
                          </li>{" "}
                        </ul>{" "}
                      </li>{" "}
                    </ul>{" "}
                    <a
                      href="signin.html"
                      class="uk-button uk-button-primary uk-border-rounded uk-align-center"
                    >
                      Login{" "}
                      <i class="fas fa-sign-in-alt uk-margin-small-left"></i>
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
