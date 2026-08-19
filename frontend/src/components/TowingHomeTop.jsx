import { MapPin, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


import towingReference from "../assets/towing-reference.png";
import section1 from "../assets/section1.png";

const referenceImage = towingReference;

export function TowingHomeTop() {

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

          <a
            className="towing-logo"
            href="/"
            aria-label="Reliable Towing home"
          />

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

       <a
  className="towing-phone"
  href="tel:7754068718"
>
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

  <circle
    cx="12"
    cy="19.5"
    r="1"
    fill="currentColor"
  />
</svg>
 <span>775-406-8718</span>
</div>
  
</a>

        </div>
        </nav>

       

      {/* ================= HERO SECTION ================= */}
      <section className="towing-hero" id="home">

        {/* FULL BACKGROUND IMAGE */}
        <div
          className="towing-hero-background"
          aria-hidden="true"
        />

        {/* ONLY CTA BUTTON IS HTML */}
        <div className="towing-hero-cta-wrapper">
          <a
            className="towing-cta"
            href="tel:7754068718"
          >
            CALL NOW FOR IMMEDIATE DISPATCH
          </a>
        </div>

      </section>

      {/* ================= STYLES ================= */}
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Roboto:wght@400;500;700&display=swap');


        /* =====================================================
           GLOBAL
        ===================================================== */

     .towing-page {
  --orange: #ff6108;
  --ink: #252525;

  overflow-x: hidden;

  background: #fff;
  color: #171717;

  font-family: Roboto, Arial, sans-serif;
}

        .towing-page *,
        .towing-page *::before,
        .towing-page *::after {
          box-sizing: border-box;
        }


        .towing-shell {
          width: min(100% - 148px, 1120px);
          margin: 0 auto;
        }


        /* =====================================================
           TOP BAR
        ===================================================== */

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


        /* =====================================================
           NAVBAR
        ===================================================== */

        .towing-nav {
          position: relative;

          z-index: 20;

          height: 52px;

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

        .towing-logo {
          width: 154px;
          height: 47px;

          flex: 0 0 154px;

          align-self: flex-start;

          margin-top: 10px;

          background-image: url(${referenceImage});
          background-repeat: no-repeat;

          background-position: -76px -40px;
          background-size: 784px 471px;

          filter: drop-shadow(
            0 2px 1px rgba(0, 0, 0, 0.18)
          );
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
}
          .towing-links {
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


        .towing-links a {
          color: #171717;

          text-decoration: none;

          transition:
            color 160ms ease;
        }


        .towing-links a:hover {
          color: var(--orange);
        }
/* ================= PHONE ================= */

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

  font-family:
    "Barlow Condensed",
    Impact,
    sans-serif;

  font-size: 29px;
  font-weight: 800;

  line-height: 30px !important;
}

/* PHONE ICON */
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

/* Number/text */
.towing-phone span {
  display: inline !important;
  width: auto !important;
  height: auto !important;
  white-space: nowrap !important;
  line-height: 30px !important;
}

        /* ADMIN */

        .towing-admin-trigger {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          width: 34px;
          height: 34px;

          margin-left: 14px;

          flex-shrink: 0;

          color: #171717;

          border-radius: 4px;

          transition:
            background 160ms ease,
            color 160ms ease;
        }


        .towing-admin-trigger:hover {
          background: #f1f1f1;
          color: var(--orange);
        }
          .towing-admin-menu {
  position: relative;
}

.towing-admin-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 120px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  z-index: 20;
}

.towing-admin-dropdown a {
  display: block;
  padding: 10px 14px;
  color: #171717;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.towing-admin-dropdown a:hover {
  background: #f5f5f5;
  color: var(--orange);
}


        /* =====================================================
           HERO
           
           section1.png contains:
           - dark background
           - heading
           - towing image
           - orange diagonal
           - proof badges

           ONLY CTA is placed through HTML.
        ===================================================== */

      .towing-hero {
  position: relative;
  width: 100%;

  aspect-ratio: 2 / 1;

  min-height: 0;

  overflow: hidden;

  background: #252525;

  isolation: isolate;

  display: block;
}
.towing-hero-background {
  position: absolute;
  inset: 0;

  z-index: 1;

  background-image: url(${section1});
  background-repeat: no-repeat;

  background-size: 100% 100%;
  background-position: center center;

  pointer-events: none;
}


        /* =====================================================
           CTA POSITION
        ===================================================== */
.towing-hero-cta-wrapper {
  position: absolute;
  z-index: 10;

  left: 9.2%;
  top: 60.5%;

  transform: translateY(-50%);

  pointer-events: none;
}


.towing-cta {
  width: 280px;
  min-width: 280px;
  height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 18px;

  background: var(--orange);
  color: #fff;

  border-radius: 5px;

  font-family: "Barlow Condensed", Arial, sans-serif;
  font-size: 13px !important;
  font-weight: 800;

  letter-spacing: 0;
  line-height: 1;

  white-space: nowrap;
  text-align: center;
  text-decoration: none;

  box-shadow:
    inset 0 -1px 0 rgba(0, 0, 0, 0.17),
    0 2px 5px rgba(0, 0, 0, 0.18);
}
.towing-cta:hover {
  background: #e95500;
  transform: translateY(-1px);
}



        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 861px) {

          .towing-hero {
            /*
              Keeps the complete generated image visible.
            */
            aspect-ratio: 2 / 1;

            min-height: 430px;

            height: auto;
          }


          .towing-hero-background {
            background-size: 100% 100%;
          }


          .towing-hero-cta-wrapper {
            left: 9.2%;
            top: 60.4%;
          }


 .towing-cta {
  min-height: 38px;

  padding: 0 20px;

  font-size: 16px !important;
  letter-spacing: 0.4px;
}
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 860px) {

          .towing-shell {
            width: min(
              100% - 42px,
              680px
            );
          }


          .towing-nav-inner {
            gap: 14px;
          }


          .towing-logo {
            width: 125px;

            flex-basis: 125px;

            background-position: -76px -40px;
          }


          .towing-links {
            gap: 11px;

            font-size: 10px;
          }


          .towing-phone {
            font-size: 23px;
          }


          .towing-hero {
            min-height: 360px;

            aspect-ratio: 2 / 1;
          }


          .towing-hero-background {
            background-size: 100% 100%;
          }


          .towing-hero-cta-wrapper {
            left: 9.2%;
            top: 60.4%;
          }


          .towing-cta {
            min-height: 33px;

            padding: 0 14px;

            font-size: 9px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 620px) {

          .towing-topbar-inner {
            justify-content: center;

            font-size: 9px;
          }


          .towing-location {
            display: none;
          }


          .towing-nav {
            height: auto;
          }


          .towing-nav-inner {
            min-height: 67px;

            flex-wrap: wrap;

            justify-content: center;

            padding: 4px 0 8px;
          }


          .towing-logo {
            width: 125px;
            height: 43px;

            flex-basis: 125px;

            margin: 0 auto 0 0;
          }


          .towing-phone {
            margin-left: 0;

            font-size: 22px;
          }
.phone-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
}

.phone-icon svg {
  width: 24px;
  height: 24px;
}

          .towing-links {
            order: 3;

            width: 100%;

            justify-content: center;

            gap: 17px;

            padding-top: 2px;

            font-size: 10px;
          }


          /* HERO */

           .towing-hero {
    aspect-ratio: 2 / 1;
    min-height: 0;
    height: auto;
  }

  .towing-hero-background {
    background-size: 100% 100%;
  }

            .towing-hero-cta-wrapper {
    left: 9%;
    top: 60.5%;
  }

  .towing-cta {
    min-height: 38px;
    padding: 0 15px;
    font-size: 11px;
  }
}

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .towing-phone {
            font-size: 19px;
          }


          .towing-logo {
            width: 112px;

            flex-basis: 112px;
          }


          .towing-links {
            gap: 13px;

            font-size: 9px;
          }


          .towing-hero {
            height: 270px;

            min-height: 270px;
          }


          .towing-cta {
            min-height: 28px;

            padding: 0 9px;

            font-size: 7.5px;
          }
        }

      `}</style>
    </main>
  );
}