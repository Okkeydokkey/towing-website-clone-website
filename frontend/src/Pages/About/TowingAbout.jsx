import { MapPin, PhoneCall, ShieldCheck, Clock3, Wrench, Truck, ChevronDown} from "lucide-react";
import towingReference from "../../assets/towing-reference.png";
import aboutPhoto from "../../assets/towing-photo.png";
import { Footer } from "../../components/Footer";
const referenceImage = towingReference;
const photoImage = aboutPhoto;

const stats = [
  { value: "12+", label: "Years on the road" },
  { value: "24/7", label: "Dispatch, every day" },
  { value: "9 min", label: "Avg. city response" },
  { value: "30k+", label: "Vehicles recovered" },
];

const values = [
  {
    icon: Clock3,
    title: "We pick up, fast",
    text: "Every call gets a truck moving inside minutes — not a callback promise.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: "Fully bonded operators, background-checked drivers, and gear that's inspected weekly.",
  },
  {
    icon: Wrench,
    title: "Trained on every rig",
    text: "From sedans to flatbeds, our crew is certified on the equipment before it touches your car.",
  },
  {
    icon: Truck,
    title: "Modern fleet",
    text: "Flatbeds and wheel-lift trucks kept in shop-fresh condition, so your vehicle rides safe.",
  },
];

export function TowingAbout() {
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
      <section className="about-banner">
        <div className="towing-shell about-banner-inner">
          <p className="about-eyebrow">
            <span className="towing-dot" /> ABOUT RELIABLE TOWING &amp; RECOVERY
          </p>
          <h1>Built on the shoulder of the highway.</h1>
          <p className="about-crumb">Home <span>/</span> About</p>
        </div>
      </section>

      <section className="about-story">
        <div className="towing-shell about-story-inner">
          <div className="about-story-copy">
            <span className="about-tag">01 — The Story</span>
            <h2>
              Started with one truck.
              <br />
              Never missed a call.
            </h2>
            <p>
              Reliable Towing &amp; Recovery began with a single flatbed and a phone that
              never stopped ringing. Over a decade later, the number's the same — we just
              added more trucks to answer it. Every driver on our roster started the same
              way: riding along at 2 a.m., learning that the job isn't the tow, it's the
              person standing next to the car.
            </p>
            <p>
              We still run the business like it's one truck. No call centers, no
              outsourced dispatch — the person who answers the phone knows the roads
              you're stuck on.
            </p>
          </div>
          <div className="about-story-photo">
            <img src={photoImage} alt="Reliable Towing crew loading a car onto a flatbed" />
            <div className="about-story-tag">Perkasie Yard — Bay 2</div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="towing-shell about-stats-grid">
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="towing-shell">
          <span className="about-tag">02 — Why Us</span>
          <h2 className="about-values-title">What you're actually getting on scene.</h2>
          <div className="about-values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="about-value-card" key={title}>
                <div className="about-value-icon">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="towing-shell about-cta-inner">
          <div>
            <h2>Stranded right now?</h2>
            <p>Dispatch is live 24/7 — tell us where you are and we'll do the rest.</p>
          </div>
          <a className="towing-cta about-cta-btn" href="tel:7754068718">
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

       /* ---- About banner ---- */
.about-banner {
  position: relative;
  padding: 64px 0 54px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  border-bottom: none;
  overflow: hidden;
}

.about-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg,
    rgba(255,255,255,0.03) 0px,
    rgba(255,255,255,0.03) 34px,
    transparent 34px,
    transparent 68px
  );
}

.about-eyebrow {
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

.about-banner h1 {
  position: relative;
  margin: 0 0 14px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(40px, 5.5vw, 60px);
  font-weight: 900;
  letter-spacing: -0.6px;
  line-height: 0.95;
  color: #fff;
}

.about-crumb {
  position: relative;
  margin: 0;
  font-size: 12px;
  color: rgba(255,255,255,0.55);
}

.about-crumb span {
  margin: 0 6px;
  color: var(--orange);
}

/* ---- Story section ---- */
.about-story {
  padding: 88px 0;
  background: #fff;
}

.about-story-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-tag {
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

.about-tag::before {
  content: '';
  width: 26px;
  height: 2px;
  background: var(--orange);
}

.about-story-copy h2 {
  margin: 0 0 20px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(30px, 3.4vw, 42px);
  font-weight: 800;
  line-height: 1.05;
  color: #171717;
}

.about-story-copy p {
  margin: 0 0 16px;
  font-size: 14.5px;
  line-height: 1.8;
  color: #5c5c5c;
}

.about-story-photo {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.18);
}

.about-story-photo img {
  display: block;
  width: 100%;
  height: 380px;
  object-fit: cover;
  transition: transform 500ms ease;
}

.about-story-photo:hover img {
  transform: scale(1.04);
}

.about-story-tag {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  border-left: 3px solid var(--orange);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
}

/* ---- Stats strip ---- */
.about-stats {
  background: linear-gradient(135deg, var(--orange), #ff7a2e);
  padding: 42px 0;
}

.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.about-stat {
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
}

.about-stat:last-child {
  border-right: none;
}

.about-stat strong {
  display: block;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  color: #fff;
}

.about-stat span {
  display: block;
  margin-top: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: rgba(255,255,255,0.9);
}

/* ---- Values grid ---- */
.about-values {
  padding: 88px 0;
  background: #fafafa;
}

.about-values-title {
  margin: 0 0 44px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: clamp(28px, 3.4vw, 38px);
  font-weight: 800;
  color: #171717;
}

.about-values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.about-value-card {
  padding: 30px 24px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 10px;
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
}

.about-value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  border-color: var(--orange);
}

.about-value-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-bottom: 18px;
  border-radius: 10px;
  background: rgba(255, 97, 8, 0.12);
  color: var(--orange);
}

.about-value-card h3 {
  margin: 0 0 10px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #171717;
}

.about-value-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: #666;
}

/* ---- CTA strip ---- */
.about-cta {
  background: #171717;
  padding: 54px 0;
  border-top: none;
}

.about-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.about-cta h2 {
  margin: 0 0 6px;
  font-family: "Barlow Condensed", Impact, sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
}

.about-cta p {
  margin: 0;
  font-size: 13px;
  color: rgba(255,255,255,0.65);
}

.about-cta-btn {
  padding: 0 26px;
  min-height: 46px;
  font-size: 12.5px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(255, 97, 8, 0.35);
}
        @media (max-width: 620px) {
          .towing-shell {
            width: min(100% - 42px, 680px);
          }

          .towing-nav-inner {
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

          .towing-nav-inner {
            flex-wrap: wrap;
            justify-content: center;
            padding: 4px 0 8px;
          }

          .towing-phone {
            margin-left: 0;
            font-size: 22px;
          }

          .about-values-grid {
            grid-template-columns: 1fr;
          }

          .about-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
     `}</style>
          <Footer />
        </main>
   
  );
}
