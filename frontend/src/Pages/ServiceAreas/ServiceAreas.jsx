import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronDown } from "lucide-react";
import { Footer } from "../../components/Footer"; 
import logoImg from "../../assets/logo.png";


const cities = [
  { name: "Brooklyn, NY", query: "Brooklyn, NY" },
  { name: "Long Island, NY", query: "Long Island, NY" },
  { name: "Pasadena, CA", query: "Pasadena, CA" },
  { name: "Beverly Hills, CA", query: "Beverly Hills, CA" },
  { name: "Naperville, IL", query: "Naperville, IL" },
  { name: "Arlington, TX", query: "Arlington, TX" },
  { name: "Plano, TX", query: "Plano, TX" },
  { name: "Evanston, IL", query: "Evanston, IL" },
  { name: "Schaumburg, IL", query: "Schaumburg, IL" },
  { name: "Oak Park, IL", query: "Oak Park, IL" }
];

export default function ServiceAreas() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <main className="towing-page">

      {/* ================= TOP BAR ================= */}
      <div className="towing-topbar">
        <div className="towing-shell towing-topbar-inner">
          <span>
            Are you Ready to Free Septic Service?{" "}
            <a href="#contact">Contact Us</a>
          </span>

          <span className="towing-location">
            <MapPin size={12} strokeWidth={2.4} />
            Perkasie, PA, United States, 18944
          </span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="towing-nav" aria-label="Main navigation">
        <div className="towing-shell towing-nav-inner">

          {/* LOGO LINK WITH IMG TAG */}
         <Link className="towing-logo" to="/" aria-label="Reliable Towing home">
  <img 
    src={logoImg} 
    alt="Reliable Towing Logo" 
    className="towing-logo-img"
  />
</Link>
           

          <ul className="towing-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>

            <li className="towing-dropdown">
              <a href="#">
                Pages <ChevronDown size={13} strokeWidth={2.4} />
              </a>
              <ul className="towing-dropdown-menu">
                <li><a href="/about">About Us</a></li>
                <li><a href="/reviews">Reviews</a></li>
              </ul>
            </li>

            <li className="towing-dropdown">
              <a href="/services">
                Our Services <ChevronDown size={13} strokeWidth={2.4} />
              </a>
              <ul className="towing-dropdown-menu">
                <li><a href="/services">Emergency Towing</a></li>
                <li><a href="/services">Roadside Assistance</a></li>
                <li><a href="/services">Car Lockout</a></li>
              </ul>
            </li>

            <li><a href="/reviews">Reviews</a></li>
          </ul>

          <a className="towing-phone" href="tel:7754068718">
            <div className="contact-item">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="1.5"
                  width="16"
                  height="21"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
                <path
                  d="M8.5 8.5C8.5 8.5 9.2 11.2 10.8 12.8C12.4 14.4 15.2 15.3 15.2 15.3"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 8L10.8 9.8L9.8 11"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2 15.3L13.6 13.7L12.5 14.8"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="19.5" r="1" fill="currentColor" />
              </svg>
              <span>775-406-8718</span>
            </div>
          </a>

        </div>
      </nav>

      {/* ================= SECTION 6: SERVICE AREAS ================= */}
      <section className="areas-section">
        <div className="towing-shell">
          <div className="areas-header">
            <p className="areas-eyebrow">
              <span className="eyebrow-dot"></span>SERVICE AREAS
            </p>
            <h2 className="areas-heading">
              SERVING DALLAS AND THE <br />
              SURROUNDING HOUSTON AREA
            </h2>
          </div>

          {/* CITY PILLS */}
          <div className="areas-grid">
            {cities.map((city) => (
              <button
                key={city.name}
                className={`area-pill ${
                  selectedCity.name === city.name ? "active" : ""
                }`}
                onClick={() => setSelectedCity(city)}
              >
                <i className="bi bi-geo-alt-fill"></i>
                {city.name}
              </button>
            ))}
          </div>

          {/* NOTE */}
          <p className="areas-note">
            Our service area is always growing. Don't worry if your county isn't
            listed. We may still be able to help. Please{" "}
            <a href="tel:7754068718" className="areas-note-link">
              give us a call!
            </a>
          </p>

          {/* MAP */}
          <div className="areas-map-wrap">
            <iframe
              key={selectedCity.name}
              className="areas-map"
              title="Service area map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                selectedCity.query
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* BUTTON */}
          <div className="areas-btn-wrap">
            <Link to="/" className="areas-btn">
              BACK TO HOME
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= STYLES ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Roboto:wght@400;500;700&display=swap');

        .towing-page {
          --orange: #ff6108;
          --ink: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
          background: #ffffff;
          color: #1a1a1a;
          font-family: Roboto, Arial, sans-serif;
        }

        .towing-page *, .towing-page *::before, .towing-page *::after {
          box-sizing: border-box;
        }

        .towing-shell {
          width: min(100% - 148px, 1120px);
          margin: 0 auto;
        }

        /* TOP BAR */
        .towing-topbar {
          height: 25px;
          background: var(--orange);
          color: #fff;
          font-size: 11px;
          font-weight: 500;
        }

        .towing-topbar-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .towing-topbar a {
          color: #fff;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 1px;
        }

        .towing-location {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          opacity: 0.96;
        }

        /* NAVBAR */
        .towing-nav {
          position: relative;
          z-index: 20;
          height: 60px;
          background: #fff;
          color: #171717;
        }

        .towing-nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 28px;
        }

        /* LOGO */
       /* LOGO CONTAINER & IMAGE FIX */
.towing-logo {
  display: flex;
  align-items: flex-start;
  width: 210px;
  height: 68px;
  flex: 0 0 210px;
  margin-top: 5px;
  z-index: 25;
  text-decoration: none;
}

.towing-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.25));
}

        /* NAV LINKS */
        .towing-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex: 1;
          margin-left: 20px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .towing-links li {
          position: relative;
        }

        .towing-links a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #171717;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .towing-links a:hover {
          color: var(--orange);
        }

        .towing-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 190px;
          padding: 8px 0;
          margin: 0;
          list-style: none;
          background: #fff;
          border-radius: 4px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: opacity 160ms ease, transform 160ms ease, visibility 160ms ease;
          z-index: 30;
        }

        .towing-dropdown:hover .towing-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .towing-dropdown-menu li {
          width: 100%;
        }

        .towing-dropdown-menu a {
          display: block;
          padding: 8px 16px;
          color: #171717;
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
        }

        .towing-dropdown-menu a:hover {
          background: #f7f7f7;
          color: var(--orange);
        }

        /* PHONE */
        .towing-phone {
          margin-left: auto;
          position: relative !important;
          display: inline-flex !important;
          align-items: center !important;
          width: max-content !important;
          height: 30px !important;
          padding-left: 36px !important;
          gap: 0 !important;
          color: #171717;
          text-decoration: none;
          white-space: nowrap !important;
          font-family: "Barlow Condensed", Impact, sans-serif;
          font-size: 29px;
          font-weight: 800;
          line-height: 30px !important;
        }

        .towing-phone svg {
          position: absolute !important;
          left: 0 !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 28px !important;
          height: 28px !important;
          min-width: 28px !important;
          min-height: 28px !important;
          display: block !important;
          color: #222;
          stroke-width: 2.5;
        }

        .towing-phone span {
          display: inline !important;
          width: auto !important;
          height: auto !important;
          white-space: nowrap !important;
          line-height: 30px !important;
        }

        /* SECTION 6: SERVICE AREAS */
        .areas-section {
          background-color: #ffffff;
          padding: 80px 0;
        }

        .areas-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .areas-eyebrow {
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1F1F1F;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }

        .areas-eyebrow .eyebrow-dot {
          width: 7px;
          height: 7px;
          background-color: var(--orange);
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }

        .areas-heading {
          font-family: 'Barlow Condensed', 'Impact', sans-serif;
          font-size: 44px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          text-align: center;
          color: #1a1a1a;
          margin: 0 auto;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }

        .area-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #f4f4f4;
          color: #1a1a1a;
          border: none;
          border-radius: 6px;
          padding: 14px 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
        }

        .area-pill i {
          color: var(--orange);
          font-size: 15px;
        }

        .area-pill:hover {
          background-color: #ececec;
          transform: translateY(-2px);
        }

        .area-pill.active {
          background-color: var(--orange);
          color: #ffffff;
        }

        .area-pill.active i {
          color: #ffffff;
        }

        .areas-note {
          color: #6b6b6b;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
          text-align: center;
        }

        .areas-note-link {
          color: var(--orange);
          font-weight: 700;
          text-decoration: none;
        }

        .areas-note-link:hover {
          text-decoration: underline;
        }

        .areas-map-wrap {
          width: 100%;
          height: 380px;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 30px;
          border: 1px solid #e4e4e4;
        }

        .areas-map {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .areas-btn-wrap {
          text-align: center;
        }

        .areas-btn {
          display: inline-block;
          background-color: var(--orange);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 16px 40px;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .areas-btn:hover {
          background-color: #d9690a;
          color: #ffffff;
        }

        @media (max-width: 991px) {
          .towing-shell {
            width: min(100% - 32px, 100%);
          }
          .areas-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .areas-heading {
            font-size: 28px;
          }
        }

        @media (max-width: 576px) {
          .areas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .areas-map-wrap {
            height: 280px;
          }
        }
      `}</style>
    </main>
  );
}