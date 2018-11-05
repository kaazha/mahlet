import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div class="container container-footer">
        <div class="footer-inner">
          <div class="footer-template">
            <div class="col-sm-12 col-md-12 col-lg-4 featured-video">
              <h3 class="widget-title">Learn More About Us By Watching </h3>
              <div class="video">
              <iframe 
                width="420"
                height="240"
              src="https://www.youtube-nocookie.com/embed/DhOtmQlDVQs" 
              frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-8 footer-right-side">
              <div class="row footer-first-row">
                <div class="col-sm-6 col-md-6 col-lg-6 footer-contact">
                  <h3 class="widget-title">Quick Contact</h3>
                  <ul class="menu-social-footer">
                    <li class="footer-link">
                      <a href="mailto:melakuy@yahoo.com"><i class="fab fas fa-envelope"></i>Email Us!</a>
                    </li>
                    <li class="footer-link">
                      <a href="tel:123-456-7890"><i class="fab fas fa-phone"></i>Call Us: 123-456-789</a>
                    </li>
                  </ul>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6 footer-sidebar">
                  <section id="nav_menu-3" class="widget widget_nav_menu">
                    <h2 class="widget-title">Helpful Links</h2>
                    <div class="menu-helpful-links-container">
                      <ul id="menu-helpful-links" class="menu">
                        <li
                          id="menu-item-161"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a href="/blog/">
                            Our Blog
                          </a>
                        </li>
                        <li
                          id="menu-item-148"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-148"
                        >
                          <a href="/contact/">
                            Contact
                          </a>
                        </li>
                        <li
                          id="menu-item-152"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-152"
                        >
                          <a href="/Archive/">
                            Archive
                          </a>
                        </li>
                        <li
                          id="menu-item-149"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-149"
                        >
                          <a href="/">
                            Search
                          </a>
                        </li>
                        <li
                          id="menu-item-150"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-150"
                        >
                          <a href="/Donate">
                            Donate
                          </a>
                        </li>
                        <li
                          id="menu-item-151"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-151"
                        >
                          <a href="/faq/">
                            FAQ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </section>{" "}
                </div>
              </div>

              <div class="row footer-second-row">
                <div class="col-sm-12 col-md-12 col-lg-12 footer-call-to-action">
                  {/* <div class="footer-cta-text-wrapper">
                    <h3 class="widget-title">Newsletter Delivered </h3>
                    <p class="">
                      Newsletters delivered to your inbox the day we post.{" "}
                    </p>
                  </div> */}
                  <h4 class="widget-title">Stay connected with us. Be the first to hear about new songs, events and more. </h4>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12 footer-call-to-action2">
                  <div class="footer-cta-text-wrapper">
                      <input type="email" id="subscribe-email" placeholder="enter your email here" size="32" class="subscribe-email"></input>
                  </div>
                  <div class="footer-call-to-action-btn">
                    <a
                      href="#"
                      onclick="return false;"
                      data-anchor="#"
                      class="btn scroll-to-section subscribe-btn"
                    >
                      Subscribe{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-info">
          Powered by{" "}
          <a href="/" rel="nofollow">
            Kaz
          </a>{" "}
          | {" "}
          <a href="/" rel="nofollow">
            Kaz - Los Angeles, CA
          </a>{" "}
        </div>
      </div>
    </React.Fragment>
  );
}
