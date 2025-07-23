import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GlassmorphismFooter = () => (
  <footer
    className="mt-0"
    style={{
      fontFamily: "Roboto, sans-serif",
      background: "rgba(255,255,255,0.50)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      boxShadow: "0 8px 32px 0 rgba(31,38,135,0.13)",
    }}
  >
    {/* Newsletter Section */}
    <div
      className="py-5"
      style={{
        background: "rgba(39, 102, 183, 0.93)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h2
              className="fw-bold text-white"
              style={{
                letterSpacing: "0.5px",
                fontFamily: "Georgia, serif",
              }}
            >
              Subscribe our Newsletter
            </h2>
          </div>
          <div className="col-lg-8">
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
                style={{
                  borderRadius: "6px",
                  fontSize: "1.1rem",
                  minWidth: "250px",
                }}
              />
              <button
                className="btn"
                type="submit"
                style={{
                  background: "#a42828",
                  color: "#fff",
                  borderRadius: "6px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  minWidth: "120px",
                }}
              >
               Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Glass Footer Main */}
    <div className="container py-5">
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-3 mb-4 mb-md-0 d-flex flex-column justify-content-center">
          {/* <div className="mb-2 text-secondary">
            <i className="bi bi-telephone me-2"></i>
            0555 38 38 48
          </div>
          <div className="mb-2 text-secondary">
            <i className="bi bi-geo-alt me-2"></i>
            Accra, Kumasi, Kasoa
          </div>
          <div className="mb-2 text-secondary">
            <i className="bi bi-envelope me-2"></i>
            info@upischool.com
          </div> */}
        </div>
        {/* Footer Menus */}
        <div className="col-md-9">
          <div className="row row-cols-2 row-cols-md-4">
            <div className="col mb-4 mb-md-0">
              <div className="fw-bold border-bottom pb-1 mb-2" style={{fontFamily: "Georgia, serif"}}>Company</div>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Become a Pro</a></li>
              </ul>
            </div>
            <div className="col mb-4 mb-md-0">
              <div className="fw-bold border-bottom pb-1 mb-2" style={{fontFamily: "Georgia, serif"}}>Links</div>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Courses</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Events</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Gallery</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">FAQs</a></li>
              </ul>
            </div>
            <div className="col mb-4 mb-md-0">
              <div className="fw-bold border-bottom pb-1 mb-2" style={{fontFamily: "Georgia, serif"}}>Support</div>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Documentation</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Forums</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Language Packs</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Release Status</a></li>
              </ul>
            </div>
            <div className="col mb-4 mb-md-0">
              <div className="fw-bold border-bottom pb-1 mb-2" style={{fontFamily: "Georgia, serif"}}>Recommend</div>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Certification</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Accreditation</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Partners</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Study Abroad</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Divider and Floating Button */}
      <div className="row mt-4">
        <div className="col-12 position-relative">
          <hr />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "-32px",
              transform: "translateX(-50%)",
              zIndex: 2,
              background: "rgba(255,255,255,0.85)",
              borderRadius: "50%",
              boxShadow: "0 2px 16px 0 rgba(39,102,183,0.18)",
              padding: "14px",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285f4">
              <circle cx="12" cy="12" r="12" fill="#4285f4" />
              <polygon points="12,7 16,15 8,15" fill="#fff" />
            </svg>
          </div>
        </div>
      </div>
      {/* Bottom Row: Motto and Links */}
      <div className="row align-items-center py-2">
        <div className="col-md-4 text-muted small">Think beyond average</div>
        <div className="col-md-4 text-center">
          {/* Empty for center alignment of floating button */}
        </div>
        <div className="col-md-4 text-end">
          <a href="#" className="text-muted small mx-2 text-decoration-none">Privacy</a>
          <a href="#" className="text-muted small mx-2 text-decoration-none">Terms</a>
          <a href="#" className="text-muted small mx-2 text-decoration-none">Sitemap</a>
          <a href="#" className="text-muted small mx-2 text-decoration-none">Purchase</a>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div
      className="text-center py-3"
      style={{
        background: "rgba(240,240,240,0.92)",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        fontSize: "1rem",
        color: "#888",
      }}
    >
      UPI Technologies by Training Dev. Powered by UPI.
    </div>
  </footer>
);

export default GlassmorphismFooter;