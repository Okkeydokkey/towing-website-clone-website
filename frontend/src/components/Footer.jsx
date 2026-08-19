import logoImg from "../assets/logo.png";
import TruckImg from "../assets/4.jpeg";
import Blogtwo from "../assets/blog2.png";
import Blogthree from "../assets/blog3.png";
import FaqImg from "../assets/faq.jpeg";
import whyTruckImg from "../assets/rightside.png";
import TruckImg1 from "../assets/2.1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const instagramPosts = [TruckImg, Blogtwo, Blogthree, FaqImg, whyTruckImg, TruckImg1];

export function Footer() {
     const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* COLUMN 1 - LOGO + ABOUT */}
          <div className="footer-col footer-about">
            <img src={logoImg} alt="Reliable Towing & Recovery" className="footer-logo" />
            <p className="footer-about-text">
              Reliable Towing Service is committed to providing fast, reliable,
              professional towing and roadside assistance 24/7.
            </p>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="#areas">Service Area</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* COLUMN 3 - OUR SERVICE */}
          <div className="footer-col">
            <h4 className="footer-heading">OUR SERVICE</h4>
            <ul className="footer-links">
              <li><a href="/services">Emergency Towing</a></li>
              <li><a href="/services">Roadside Assistance</a></li>
              <li><a href="/services">Vehicle Recovery</a></li>
              <li><a href="/services">Long Distance Towing</a></li>
              <li><a href="/services">Accident Recovery</a></li>
              <li><a href="/services">24/7 Towing</a></li>
            </ul>
          </div>

          {/* COLUMN 4 - CONTACT INFO */}
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT INFO</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:9075550203">(907) 555-0203</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:reliableservice@gmail.com">
                  reliableservice@gmail.com
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>314 E Highland Mall Blvd, Suite 508, Austin, TX 78752.</span>
              </li>
            </ul>

            <div className="footer-social">
              <a href="#" className="social-icon facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* COLUMN 5 - INSTAGRAM */}
          <div className="footer-col">
            <h4 className="footer-heading">INSTAGRAM POST</h4>
            <div className="footer-instagram-grid">
              {instagramPosts.map((img, i) => (
                <div className="insta-thumb" key={i}>
                  <img src={img} alt={`Instagram post ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* BOTTOM BAR */}
<div className="footer-bottom">
  <p className="footer-copyright">
    © Copyright 2026 - Reliable Towing Service. All Right Reserved
  </p>
  <p className="footer-legal-links">
    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
  </p>

  <div className="towing-admin-menu">
    <button
      type="button"
      className="towing-admin-trigger"
      aria-label="Admin menu"
      title="Admin menu"
      onClick={() => setAdminMenuOpen((v) => !v)}
    >
      <Menu size={18} strokeWidth={2.2} />
    </button>
    {adminMenuOpen && (
      <div className="towing-admin-dropdown">
        <Link to="/admin/login" onClick={() => setAdminMenuOpen(false)}>
          Admin
        </Link>
      </div>
    )}
     </div>
            </div>  
          </div> 

    <style>{`
  .site-footer {
    --orange: #ff6108;
    background-color: #ffffff;
    padding: 60px 0 0;
    border-top: 1px solid #eeeeee;
    position: relative;
    overflow: visible;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1.3fr 0.8fr 0.9fr 1fr 1fr;
    gap: 30px;
    padding-bottom: 40px;
  }

  .footer-heading {
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0 0 18px;
  }

  .footer-logo {
    height: 60px;
    width: auto;
    object-fit: contain;
    margin-bottom: 14px;
  }

  .footer-about-text {
    color: #6b6b6b;
    font-size: 13.5px;
    line-height: 1.6;
    margin: 0;
  }

  .footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer-links li { margin-bottom: 12px; }

  .footer-links a {
    color: #6b6b6b;
    font-size: 13.5px;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover { color: var(--orange); }

  .footer-contact-list {
    list-style: none;
    margin: 0 0 18px;
    padding: 0;
  }

  .footer-contact-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 14px;
    font-size: 13.5px;
    color: #6b6b6b;
    line-height: 1.5;
  }

  .footer-contact-list i {
    color: var(--orange);
    font-size: 14px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .footer-contact-list a {
    color: #6b6b6b;
    text-decoration: none;
  }

  .footer-contact-list a:hover { color: var(--orange); }

  .footer-social {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .social-icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #dddddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1a1a;
    font-size: 14px;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .social-icon:hover {
    background-color: var(--orange);
    border-color: var(--orange);
    color: #ffffff;
  }

  .social-icon.facebook {
    background-color: var(--orange);
    border-color: var(--orange);
    color: #ffffff;
  }

  .footer-instagram-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .insta-thumb {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 6px;
    overflow: hidden;
  }

  .insta-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .footer-bottom {
    border-top: 1px solid #eeeeee;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    overflow: visible;
  }

  .footer-copyright,
  .footer-legal-links {
    color: #888888;
    font-size: 13px;
    margin: 0;
  }

  .footer-legal-links a {
    color: #888888;
    text-decoration: none;
  }

  .footer-legal-links a:hover { color: var(--orange); }

  /* ADMIN MENU STYLES */
  .towing-admin-menu {
    position: relative;
    display: inline-block;
  }

  .towing-admin-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #171717;
    border-radius: 4px;
    transition: background 160ms ease, color 160ms ease;
  }

  .towing-admin-trigger:hover {
    background: #f1f1f1;
    color: var(--orange);
  }

  .towing-admin-dropdown {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    min-width: 130px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 999;
  }

  .towing-admin-dropdown a {
    display: block;
    padding: 10px 14px;
    color: #171717;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  .towing-admin-dropdown a:hover {
    background: #f5f5f5;
    color: var(--orange);
  }

  @media (max-width: 991px) {
    .footer-top { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 576px) {
    .footer-top { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; text-align: center; }
  }
`}</style>
    </footer>
  );
}