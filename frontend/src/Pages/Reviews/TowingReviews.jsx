import { MapPin, PhoneCall, Star , ChevronDown} from "lucide-react";
import towingReference from "../../assets/towing-reference.png";
import { Footer } from "../../components/Footer";

const referenceImage = towingReference;

const breakdown = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 9 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

const reviews = [
  {
    name: "Marcus D.",
    when: "2 weeks ago",
    rating: 5,
    text: "Broke down on 611 at midnight. Truck was there in under ten minutes and the driver had my car on the flatbed before I even finished the call to my insurance.",
    job: "Flatbed Tow · Perkasie",
  },
  {
    name: "Renee A.",
    when: "1 month ago",
    rating: 5,
    text: "Locked my keys in the car outside a job site with a client waiting. They talked me through it calmly and had the door open in five minutes flat.",
    job: "Lockout · Sellersville",
  },
  {
    name: "Tom H.",
    when: "1 month ago",
    rating: 5,
    text: "Dead battery on a Sunday morning and I figured I'd be waiting all day. Wrong — jump-started on site, no drama, fair price on the invoice.",
    job: "Jump-Start · Dublin, PA",
  },
  {
    name: "Priya S.",
    when: "2 months ago",
    rating: 4,
    text: "Good, professional recovery after a fender-bender. Only note is the wait ran a little past the quoted time, but the crew was careful with the car.",
    job: "Accident Recovery · Quakertown",
  },
  {
    name: "Jake W.",
    when: "3 months ago",
    rating: 5,
    text: "Ran out of gas on the turnpike shoulder, which is exactly where you don't want to be stuck. Fuel delivery got me moving again in one stop.",
    job: "Fuel Delivery · Perkasie",
  },
  {
    name: "Lauren K.",
    when: "3 months ago",
    rating: 5,
    text: "Called three other places first — either no answer or a two-hour wait. Reliable actually answered and had someone rolling immediately.",
    job: "Roadside Assist · Doylestown",
  },
];

export function TowingReviews() {
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
   


      <section className="rev-banner">
        <div className="towing-shell rev-banner-inner">
          <div className="rev-banner-copy">
            <p className="rev-eyebrow">
              <span className="towing-dot" /> CUSTOMER REVIEWS
            </p>
            <h1>What the roadside says about us.</h1>
            <p className="rev-crumb">Home <span>/</span> Reviews</p>
          </div>

          <div className="rev-score-card">
            <strong>4.9</strong>
            <div className="rev-score-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="#ff6108" stroke="#ff6108" />
              ))}
            </div>
            <span>Based on 640 Google reviews</span>

            <div className="rev-breakdown">
              {breakdown.map((b) => (
                <div className="rev-breakdown-row" key={b.stars}>
                  <span>{b.stars}★</span>
                  <div className="rev-breakdown-track">
                    <div className="rev-breakdown-fill" style={{ width: `${b.pct}%` }} />
                  </div>
                  <span className="rev-breakdown-pct">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rev-grid-section">
        <div className="towing-shell">
          <div className="rev-grid">
            {reviews.map((r) => (
              <div className="rev-card" key={r.name}>
                <div className="rev-card-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < r.rating ? "#ff6108" : "none"}
                      stroke="#ff6108"
                    />
                  ))}
                </div>
                <p className="rev-card-text">&ldquo;{r.text}&rdquo;</p>
                <div className="rev-card-foot">
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.when}</span>
                  </div>
                  <span className="rev-card-job">{r.job}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rev-cta">
        <div className="towing-shell rev-cta-inner">
          <div>
            <h2>Had us tow you recently?</h2>
            <p>Leave a Google review and help the next driver stuck on the shoulder.</p>
          </div>
          <a className="towing-cta rev-cta-btn" href="tel:7754068718">
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

     /* ---- Banner with score card ---- */
.rev-banner {
  position: relative;
  padding: 64px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  border-bottom: none;
}

.rev-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 26px,
    rgba(255, 97, 8, 0.05) 26px 52px
  );
}

.rev-banner-inner {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
}

.rev-eyebrow {
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

.rev-banner h1 {
  margin: 0 0 14px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(34px, 4.4vw, 48px);
  font-weight: 900;
  letter-spacing: -0.6px;
  line-height: 0.95;
  max-width: 480px;
  color: #fff;
}

.rev-crumb {
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
}

.rev-crumb span {
  margin: 0 6px;
  color: var(--orange);
}

.rev-score-card {
  flex-shrink: 0;
  width: 250px;
  padding: 26px 26px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.3);
}

.rev-score-card strong {
  display: block;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  color: #171717;
}

.rev-score-stars {
  display: flex;
  gap: 2px;
  margin: 8px 0 6px;
}

.rev-score-card > span {
  display: block;
  margin-bottom: 16px;
  font-size: 11px;
  color: #888;
}

.rev-breakdown-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 10.5px;
  color: #555;
}

.rev-breakdown-row span:first-child {
  width: 18px;
}

.rev-breakdown-track {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: #eee;
  overflow: hidden;
}

.rev-breakdown-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--orange), #ff8a42);
  border-radius: 3px;
}

.rev-breakdown-pct {
  width: 26px;
  text-align: right;
  color: #888;
}

/* ---- Reviews grid ---- */
.rev-grid-section {
  padding: 84px 0 90px;
  background: #fff;
}

.rev-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.rev-card {
  padding: 28px 24px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 12px;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.rev-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 97, 8, 0.3);
}

.rev-card-stars {
  display: flex;
  gap: 2px;
  margin-bottom: 14px;
}

.rev-card-text {
  margin: 0 0 20px;
  font-size: 13px;
  line-height: 1.8;
  color: #3a3a3a;
}

.rev-card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.rev-card-foot strong {
  display: block;
  font-size: 12.5px;
  font-weight: 700;
  color: #171717;
}

.rev-card-foot span {
  display: block;
  font-size: 10.5px;
  color: #888;
}

.rev-card-job {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: var(--orange);
  text-align: right;
  white-space: nowrap;
}

/* ---- CTA strip ---- */
.rev-cta {
  background: #171717;
  padding: 54px 0;
  border-top: none;
}

.rev-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.rev-cta h2 {
  margin: 0 0 6px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
}

.rev-cta p {
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
}

.rev-cta-btn {
  padding: 0 26px;
  min-height: 46px;
  font-size: 12.5px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(255, 97, 8, 0.35);
}
      }
      `}</style>
      <Footer />
    </main>
  );
}
