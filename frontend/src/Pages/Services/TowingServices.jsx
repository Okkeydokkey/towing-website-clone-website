import {
  MapPin,
  PhoneCall,
  Car,
  Fuel,
  KeyRound,
  Battery,
  Truck,
  LifeBuoy,
  ChevronDown
} from "lucide-react";
import towingReference from "../../assets/towing-reference.png";
import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceApi";
import { services } from "../../data/servicesData";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
const referenceImage = towingReference;



const steps = [
  { n: "01", title: "Call dispatch", text: "Tell us your location and what happened — takes under a minute." },
  { n: "02", title: "Truck rolls out", text: "The nearest driver is routed to you immediately, no queue." },
  { n: "03", title: "We handle it on scene", text: "Your vehicle (and you) get to where you need to be, safely." },
];

export function TowingServices() {
  const [adminServices, setAdminServices] = useState([]);

  useEffect(() => {
    getServices()
      .then(setAdminServices)
      .catch((err) => console.error("Could not load services:", err));
  }, []);

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
   

      <section className="svc-banner">
        <div className="towing-shell svc-banner-inner">
          <p className="svc-eyebrow">
            <span className="towing-dot" /> WHAT WE DO
          </p>
          <h1>Six services. One phone call.</h1>
          <p className="svc-crumb">Home <span>/</span> Services</p>
        </div>
      </section>

      <section className="svc-grid-section">
        <div className="towing-shell">
          <div className="svc-grid">
       {services.map(({ icon: Icon, code, slug, title, text }) => (
  <div className="svc-card" key={code}>
    <div className="svc-card-top">
      <span className="svc-code">{code}</span>
      <div className="svc-icon">
        <Icon size={22} strokeWidth={2.1} />
      </div>
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
    <Link className="svc-link" to={`/services/${slug}`}>Learn More →</Link>
  </div>
))}

            {adminServices.map((s) => (
              <div className="svc-card" key={s._id}>
                <div className="svc-card-top">
                  <span className="svc-code">NEW</span>
                  <div className="svc-icon">
                    <Truck size={22} strokeWidth={2.1} />
                  </div>
                </div>
                <h3>{s.title}</h3>
                <p>
                  {s.description} {s.price && `— starting at $${s.price}`}
                </p>
                <a className="svc-link" href="tel:7754068718">Request this →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="towing-shell">
          <span className="svc-tag">How it works</span>
          <h2 className="svc-process-title">From call to curb.</h2>
          <div className="svc-process-grid">
            {steps.map((s, i) => (
              <div className="svc-step" key={s.n}>
                <span className="svc-step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {i < steps.length - 1 && <span className="svc-step-line" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="towing-shell svc-cta-inner">
          <div>
            <h2>Not sure which service you need?</h2>
            <p>Tell dispatch what's going on — we'll send the right truck and equipment.</p>
          </div>
          <a className="towing-cta svc-cta-btn" href="tel:7754068718">
            CALL 775-406-8718
          </a>
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

     /* ---- Detail banner ---- */
/* ---- Banner ---- */
.svc-banner {
  position: relative;
  padding: 64px 0 54px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  border-bottom: none;
}

.svc-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 26px,
    rgba(255, 97, 8, 0.05) 26px 52px
  );
}

.svc-eyebrow {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--orange);
  text-transform: uppercase;
}

.svc-banner h1 {
  position: relative;
  margin: 0 0 14px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(40px, 5.5vw, 60px);
  font-weight: 900;
  letter-spacing: -0.6px;
  line-height: 0.95;
  color: #fff;
}

.svc-crumb {
  position: relative;
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
}

.svc-crumb span {
  margin: 0 6px;
  color: var(--orange);
}

/* ---- Services grid ---- */
.svc-grid-section {
  padding: 84px 0 30px;
  background: #fff;
}

.svc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.svc-card {
  position: relative;
  padding: 30px 26px 26px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 12px;
  transition: border-color 220ms ease, transform 220ms ease, box-shadow 220ms ease;
}

.svc-card:hover {
  border-color: var(--orange);
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.09);
}

.svc-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.svc-code {
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #a8a8a8;
}

.svc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgba(255, 97, 8, 0.12);
  color: var(--orange);
  transition: transform 220ms ease;
}

.svc-card:hover .svc-icon {
  transform: scale(1.08) rotate(-4deg);
}

.svc-card h3 {
  margin: 0 0 10px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 21px;
  font-weight: 700;
  color: #171717;
}

.svc-card p {
  margin: 0 0 18px;
  font-size: 13px;
  line-height: 1.7;
  color: #666;
}

.svc-link {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--orange);
  text-decoration: none;
  transition: letter-spacing 200ms ease;
}

.svc-link:hover {
  letter-spacing: 0.4px;
}

/* ---- Process ---- */
.svc-process {
  padding: 90px 0 90px;
  background: #fafafa;
}

.svc-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  color: var(--orange);
  text-transform: uppercase;
}

.svc-tag::before {
  content: '';
  width: 26px;
  height: 2px;
  background: var(--orange);
}

.svc-process-title {
  margin: 0 0 48px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(28px, 3.4vw, 38px);
  font-weight: 800;
  color: #171717;
}

.svc-process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.svc-step {
  position: relative;
  padding: 8px 0;
}

.svc-step-n {
  display: block;
  margin-bottom: 14px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 46px;
  font-weight: 900;
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 1.6px var(--orange);
}

.svc-step h3 {
  margin: 0 0 10px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #171717;
}

.svc-step p {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: #666;
}

.svc-step-line {
  position: absolute;
  top: 24px;
  left: calc(100% + 18px);
  width: calc(36px - 18px);
  height: 1px;
  background: linear-gradient(90deg, #dcdcdc, transparent);
}

/* ---- CTA strip ---- */
.svc-cta {
  background: #171717;
  padding: 54px 0;
  border-top: none;
}

.svc-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.svc-cta h2 {
  margin: 0 0 6px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
}

.svc-cta p {
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
}

.svc-cta-btn {
  padding: 0 26px;
  min-height: 46px;
  font-size: 12.5px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(255, 97, 8, 0.35);
}
        @media (max-width: 900px) {
          .svc-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .svc-process-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .svc-step-line {
            display: none;
          }
        }

        @media (max-width: 620px) {
          .towing-shell {
            width: min(100% - 42px, 680px);
          }

          .towing-nav-inner {
            flex-wrap: wrap;
            justify-content: center;
            padding: 4px 0 8px;
            gap: 14px;
          }

          .towing-logo {
            width: 125px;
            height: 43px;
            flex-basis: 125px;
          }

          .towing-links {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 17px;
            padding-top: 6px;
            font-size: 10px;
          }

          .towing-phone {
            margin-left: 0;
            font-size: 22px;
          }

          .svc-grid {
            grid-template-columns: 1fr;
          }

          .svc-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <Footer />
    </main>
  );
}