import { MapPin, PhoneCall, ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import towingReference from "../../assets/towing-reference.png";
import { allServices } from "../../data/servicesData";
import { Footer } from "../../components/Footer";

const referenceImage = towingReference;

export function ServiceDetail() {
  const { slug } = useParams();
const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="towing-page svc-detail-page">
        <div className="towing-shell svc-notfound">
          <h1>Service not found</h1>
          <Link className="towing-cta" to="/services">
            Back to Services
          </Link>
        </div>
        <style>{`
          .svc-notfound { padding: 100px 0; text-align: center; }
          .svc-notfound h1 { font-family: "Barlow Condensed", Impact, sans-serif; font-size: 32px; margin-bottom: 18px; }
        `}</style>
      </main>
    );
  }

  const { icon: Icon, code, title, longText, features } = service;

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
   


      <section className="svc-detail-banner">
        <div className="towing-shell">
          <Link to="/services" className="svc-back">
            <ArrowLeft size={14} strokeWidth={2.4} />
            Back to Services
          </Link>
          <p className="svc-eyebrow">
            <span className="towing-dot" /> {code}
          </p>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="svc-detail-body">
        <div className="towing-shell svc-detail-grid">
          <div className="svc-detail-icon-wrap">
            <div className="svc-detail-icon">
              <Icon size={46} strokeWidth={1.7} />
            </div>
          </div>
          <div className="svc-detail-content">
            <p className="svc-detail-text">{longText}</p>
            <ul className="svc-detail-features">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a className="towing-cta svc-detail-cta" href="tel:7754068718">
              CALL 775-406-8718
            </a>
          </div>
        </div>
      </section>

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


        .towing-dot {
          width: 5px;
          height: 5px;
          flex: 0 0 5px;
          border-radius: 50%;
          background: var(--orange);
          display: inline-block;
        }

        .towing-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          min-height: 32px;
          padding: 0 15px;
          border-radius: 4px;
          background: var(--orange);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.17);
          transition: background 160ms ease, transform 160ms ease;
        }

        .towing-cta:hover {
          background: #e95500;
          transform: translateY(-1px);
        }

       /* ---- Detail banner ---- */
.svc-detail-banner {
  position: relative;
  padding: 60px 0 50px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  border-bottom: none;
}

.svc-detail-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 26px,
    rgba(255, 97, 8, 0.05) 26px 52px
  );
}

.svc-back {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  padding: 6px 12px 6px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: background 200ms ease, color 200ms ease, gap 200ms ease;
}

.svc-back:hover {
  background: var(--orange);
  color: #fff;
  gap: 9px;
}

.svc-eyebrow {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: var(--orange);
  text-transform: uppercase;
}

.svc-detail-banner h1 {
  position: relative;
  margin: 0;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(36px, 4.6vw, 50px);
  font-weight: 900;
  letter-spacing: -0.6px;
  line-height: 0.95;
  color: #fff;
}

/* ---- Detail body ---- */
.svc-detail-body {
  padding: 70px 0 90px;
  background: #fafafa;
}

.svc-detail-grid {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 48px;
  align-items: start;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  padding: 40px;
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.06);
}

.svc-detail-icon-wrap {
  display: flex;
  justify-content: center;
}

.svc-detail-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,97,8,0.16), rgba(255,97,8,0.06));
  color: var(--orange);
  box-shadow: 0 10px 24px rgba(255, 97, 8, 0.18);
}

.svc-detail-text {
  margin: 0 0 26px;
  font-size: 14.5px;
  line-height: 1.85;
  color: #4a4a4a;
}

.svc-detail-features {
  margin: 0 0 30px;
  padding-left: 18px;
  list-style: disc;
}

.svc-detail-features li {
  margin-bottom: 11px;
  font-size: 13.5px;
  line-height: 1.6;
  color: #333;
}

.svc-detail-cta {
  padding: 0 26px;
  min-height: 46px;
  font-size: 12.5px;
  box-shadow: 0 8px 20px rgba(255, 97, 8, 0.35);
}

/* ---- RESPONSIVE ---- */
@media (max-width: 991px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
    @media (max-width: 620px) {
  .svc-detail-grid {
    grid-template-columns: 1fr;
    text-align: left;
    padding: 28px 22px;
  }

  .svc-detail-icon-wrap {
    justify-content: flex-start;
  }

  .svc-detail-icon {
    width: 84px;
    height: 84px;
  }
}
          .towing-logo { width: 125px; height: 43px; flex-basis: 125px; }

          .towing-links {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 17px;
            padding-top: 6px;
            font-size: 10px;
          }

          .towing-phone { margin-left: 0; font-size: 22px; }

          .svc-detail-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .svc-detail-features li { text-align: left; }
        }
      `}</style>
      <Footer />
    </main>
  );
  
}