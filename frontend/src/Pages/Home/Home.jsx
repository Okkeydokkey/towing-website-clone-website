import { useEffect, useState } from "react";
import { TowingHomeTop } from "../../components/TowingHomeTop";
import { getServices } from "../../services/serviceApi";
import { submitContact } from "../../services/contactApi";
import { Link } from "react-router-dom";
import "./Home.css";
import { blogsData } from "../../data/blogsData";
import { Footer } from "../../components/Footer";

import { getBlogs } from "../../services/blogApi";
import truckImg from "../../assets/rightside.png";
import logoImg from "../../assets/logo.png";
import hoursIcon from "../../assets/24-hours-service.png";
import fastIcon from "../../assets/fast-response.png";
import googleIcon from "../../assets/google-reviews.png";
import Blogtwo from "../../assets/blog2.png";
import Blogthree from "../../assets/blog3.png";

import whyTruckImg from "../../assets/rightside.png";  
import TruckImg1 from "../../assets/2.1.png"; 
import whyDispatchImg from "../../assets/rightside.png";
import emergencyTowingImg from "../../assets/3.1.jpeg"; 
import roadsideAssistanceImg from "../../assets/3.2.jpeg"; 
import carLockoutImg from "../../assets/3.3.jpeg"; 
import longDistanceImg from "../../assets/3,4.jpeg"; 
import accidentRecoveryImg from "../../assets/3.5.jpeg";
import motorcycleTowingImg from "../../assets/3.6.jpeg"; 
import TruckImg from "../../assets/4.jpeg"; 
import FaqImg from "../../assets/faq.jpeg"; 


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
  { name: "Oak Park, IL", query: "Oak Park, IL" },
];
const testimonials = [
  {
    text: "I was stranded on I-13 at midnight after blowout. Rapidtow had driver me under 25 minutes. Professional, calm, & had my car loaded safely in no time. Worth every penny & more. Saved from a very scary.",
    name: "KATHLEEN B.",
    location: "Miami, Florida",
    avatarColor: "#8e44ad",
  },
  {
    text: "Locked my keys in car grocery store with my groceries inside on a 95-degree day. Called Rapidtow and they had someone there 20 minutes. Friendly driver, got the door open without a scratch.",
    name: "MICHEL L.",
    location: "Houston, Texas",
    avatarColor: "#2980b9",
  },
  {
    text: "Used Rapidtow to transport my class 1969 Mustang from Dallas. The driver was knowledgeable about handling classic cars, used an enclosed flatbed, sent me photos during transport.",
    name: "STUART H.",
    location: "Dallas, Texas",
    avatarColor: "#8a6d3b",
  },
  {
    text: "Called at 3 AM when my truck broke down on the highway. Dispatcher was calm and helpful, driver arrived faster than promised and got me home safe.",
    name: "AMANDA R.",
    location: "Austin, Texas",
    avatarColor: "#c0392b",
  },
  {
    text: "Needed my car moved across state for a relocation. Scheduled it a week ahead, driver was on time and kept me updated the whole trip.",
    name: "DAVID K.",
    location: "San Antonio, Texas",
    avatarColor: "#16a085",
  },
  {
    text: "Fast, professional, and honestly cheaper than I expected. Would recommend Rapidtow to anyone stuck on the road.",
    name: "PRIYA N.",
    location: "Fort Worth, Texas",
    avatarColor: "#d35400",
  },
];
const faqs = [
  {
    question: "HOW MUCH DOES A TOW TRUCK COST?",
    answer:
      "A: Towing rates vary by distance, vehicle type, and time of day. Local tows (under 10 miles) typically range from $75–$125. Long-distance tows are priced per mile.",
  },
  {
    question: "HOW QUICKLY CAN YOU GET TO ME?",
    answer:
      "A: Our average response time is 30 minutes across the Dallas metro area. Dispatch is live 24/7, so a driver is assigned the moment you call.",
  },
  {
    question: "DO YOU OFFER 24-HOUR TOWING?",
    answer:
      "A: Yes, we operate 24 hours a day, 365 days a year — including holidays, weekends, and overnight emergencies.",
  },
  {
    question: "WILL TOWING DAMAGE MY CAR?",
    answer:
      "A: No. Our drivers are trained and use the correct flatbed or wheel-lift equipment for your specific vehicle to avoid any damage during transport.",
  },
  {
    question: "DOES MY INSURANCE COVER TOWING?",
    answer:
      "A: Many insurance policies include roadside assistance coverage. We work directly with most major insurance and roadside programs — just have your policy details ready when you call.",
  },
  {
    question: "CAN YOU TOW MY CAR TO ANY REPAIR SHOP?",
    answer:
      "A: Yes, we can tow your vehicle to any repair shop, dealership, or location of your choice within our service area.",
  },
];

const instagramPosts = [
  TruckImg,
  Blogtwo,
   Blogthree,
  FaqImg,
  whyTruckImg,
  TruckImg1,
];
const Home = () => {
  const [dbBlogs, setDbBlogs] = useState([]);

useEffect(() => {
  getBlogs()
    .then(setDbBlogs)
    .catch((err) => console.error("Blogs load nahi hue:", err));
}, []);

const allBlogs = [...blogsData, ...dbBlogs];
   
const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [services, setServices] = useState([]);
  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };
   const [contactForm, setContactForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    serviceType: "",
    vehicleInfo: "",
    vehicleCondition: "",
    message: "",
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
  e.preventDefault();
  try {
    await submitContact(contactForm);
    alert("Thanks! We received your request. Our team will call you shortly.");
    setContactForm({
      fullName: "", phone: "", address: "", serviceType: "",
      vehicleInfo: "", vehicleCondition: "", message: "",
    });
  } catch (error) {
    console.error("Contact submit failed:", error);
    alert("Sorry, something went wrong. Please call us directly.");
  }
};
   const cardsPerView = 3;

  const visibleTestimonials = [0, 1, 2].map(
    (offset) =>
      testimonials[(testimonialIndex + offset) % testimonials.length]
  );

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
 
useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <>

      <TowingHomeTop />
    
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <div className="why-header-left">
              <p className="why-eyebrow">
                <span className="eyebrow-dot"></span>WHY CHOOSE US
              </p>
              <h2 className="why-heading">
                THE TOWING COMPANY THAT SHOWS <br>
                </br>UP WHEN IT MATTERS MOST
              </h2>
            </div>

            <a href="tel:7754068718" className="why-phone-btn">
              <i className="bi bi-telephone-fill"></i> 775-406-8718
            </a>
          </div>

          {/* GRID */}
          <div className="why-grid">
            {/* CARD 1 - large */}
            <div className="why-card card1">
              <div className="card-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <h3 className="card-title">30-Minute Average Response Time</h3>
              <p className="card-text">
                We track every dispatch in real time. Our drivers are
                strategically positioned across Dallas and the surrounding area
                to minimize your wait because 30 minutes stranded on the side
                of the road feels like.
              </p>
              <div className="card-img-wrap">
                <img src={TruckImg1 } alt="Tow truck on highway" />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="why-card card2">
              <div className="card-icon">
                <i className="bi bi-alarm"></i>
              </div>
              <h3 className="card-title">24/7/365 Live Dispatch</h3>
              <p className="card-text">
                No answering machines. No voice mail systems at 3 AM.
              </p>
              <div className="card-img-wrap">
                <img src={TruckImg} alt="Roadside assistance in progress" />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="why-card card3">
              <div className="card-icon">
                <i className="bi bi-layers"></i>
              </div>
              <h3 className="card-title">Locally Owned &amp; Operated</h3>
              <p className="card-text">
                We're not a national call center that brokers jobs to random
              </p>
            </div>

            {/* CARD 4 */}
            <div className="why-card card4">
              <div className="card-icon">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="card-title">Upfront, Transparent Pricing</h3>
              <p className="card-text">
                We quote the rate before we dispatch and stick to it.
              </p>
            </div>

            {/* FULL WIDTH BOTTOM CARD */}
            <div className="why-card card-full">
              <div className="card-icon">
                <i className="bi bi-patch-check"></i>
              </div>
              <div className="full-text-wrap">
                <h3 className="card-title inline-title">Fully Licensed, Insured</h3>
                <p className="card-text">
                  We carry full liability, cargo, and workers' compensation
                  coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: SERVICES OVERVIEW
      ========================================================== */}
      <section className="services-section">
        <div className="container">
          {/* HEADER */}
          <div className="services-header">
            <p className="services-eyebrow">
              <span className="eyebrow-dot"></span>SERVICES OVERVIEW
            </p>
            <h2 className="services-heading">
              FULL-SERVICE TOWING &amp; ROADSIDE<br></br> ASSISTANCE WE HANDLE IT ALL
            </h2>
          </div>

          {/* GRID */}
          <div className="services-grid">
            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={emergencyTowingImg} alt="Emergency Towing 24/7" />
                <span className="service-icon-badge">
                  <i className="bi bi-truck-front-fill"></i>
                </span>
              </div>
              <h3 className="service-title">Emergency Towing — 24/7</h3>
              <p className="service-text">
                Whether you're stranded at the interstate at 2 AM or stuck in
                a parking garage.
              </p>
              <Link to="/services/emergency-towing-247" className="service-link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>

            {/* CARD 2 - FEATURED */}
            <div className="service-card featured">
              <div className="service-img-wrap">
                <img src={roadsideAssistanceImg} alt="Roadside Assistance" />
                <span className="service-icon-badge">
                  <i className="bi bi-tools"></i>
                </span>
              </div>
              <h3 className="service-title">Roadside Assistance</h3>
              <p className="service-text">
                Our roadside assistance technicians carry the equipment to
                get you moving.
              </p>
              <Link to="/services/roadside-assistance-tech" className="service-link featured-link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={carLockoutImg} alt="Car Lockout Service" />
                <span className="service-icon-badge">
                  <i className="bi bi-key-fill"></i>
                </span>
              </div>
              <h3 className="service-title">Car Lockout Service</h3>
              <p className="service-text">
                Locked your keys in the car? It happens to everyone. Our
                lockout technicians...
              </p>
              <Link to="/services/car-lockout-service" className="service-link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>

            {/* CARD 4 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={longDistanceImg} alt="Long-Distance & Interstate Towing" />
                <span className="service-icon-badge">
                  <i className="bi bi-signpost-split-fill"></i>
                </span>
              </div>
              <h3 className="service-title">Long-Distance &amp; Interstate</h3>
              <p className="service-text">
                Need your vehicle transported across the state — or across
                the country?
              </p>
              <Link to="/services/long-distance-interstate" className="service-link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>

            {/* CARD 5 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={accidentRecoveryImg} alt="Accident & Collision Recovery" />
                <span className="service-icon-badge">
                  <i className="bi bi-car-front-fill"></i>
                </span>
              </div>
              <h3 className="service-title">Accident &amp; Collision Recovery</h3>
              <p className="service-text">
                Accidents are traumatic enough without worrying about your
                vehicle.
              </p>
              <Link to="/services/collision-recovery" className="service-link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>

            {/* CARD 6 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={motorcycleTowingImg} alt="Motorcycle Towing" />
                <span className="service-icon-badge">
                  <i className="bi bi-scooter"></i>
                </span>
              </div>
              <h3 className="service-title">Motorcycle Towing</h3>
              <p className="service-text">
                Motorcycles require specialized equipment and care that most
                generic...
              </p>
              <Link to="/services/motorcycle-towing" className="service-link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
{/* =========================================================
    SECTION 4: EMERGENCY VS SCHEDULED TOWING
========================================================== */}
<section className="compare-section">
  <div className="container">
    {/* HEADER */}
    <div className="compare-header">
      <p className="compare-eyebrow">
        <span className="eyebrow-dot"></span>EMERGENCY VS. SCHEDULED
      </p>
     <h2 className="compare-heading">
  EMERGENCY TOWING VS. SCHEDULED TRANSPORT WHAT'S THE DIFFERENCE?
</h2>
    </div>

    {/* CONTENT */}
    <div className="compare-content">
      {/* LEFT IMAGE */}
      <div className="compare-img-wrap">
        <img
         src={TruckImg}
         alt="Why choose our truck?"
        />
      </div>

      {/* RIGHT TABLE */}
      <div className="compare-table">
        <div className="compare-table-head">
          <div className="head-cell head-emergency">EMERGENCY TOWING</div>
          <div className="head-cell head-scheduled">SCHEDULED TOWING</div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Available 24/7 — dispatched immediately
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Booked in advance at your preferred time
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            30-minute average response time
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Flexible scheduling: same-day, next day or future date
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            All breakdowns, accidents &amp; lockouts
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Vehicle purchases, relocation, storage moves
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Dynamic route dispatch (nearest truck)
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Dedicated driver assigned in advance
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Immediate flat-rate quote over phone
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Detailed written quote provided
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Works with all insurance roadside programs
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Ideal for non-running or inoperable vehicles
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            No appointment needed — just call
          </div>
          <div className="compare-cell">
            <i className="bi bi-check-circle-fill"></i>
            Recommended for long-distance or multi-vehicle
          </div>
        </div>

        <div className="compare-footer-note">
          Not sure which applies your situation? Just call. Our dispatchers
          will ask two quick questions &amp; get you set up correctly —
          emergency or scheduled.
        </div>
      </div>
    </div>
  </div>
</section>
<section className="how-section">
  <div className="how-container">
    {/* HEADER */}
    <div className="how-header">
      <p className="how-eyebrow">
        <span className="eyebrow-dot"></span>
        How We Work
      </p>
      <h2 className="how-heading">
        Getting Help Is Easier Than You Think 5 Simple Steps
      </h2>
    </div>

    {/* STEPS */}
    <div className="how-grid">
      <div className="how-step">
        <div className="step-number-wrap">
          <span className="step-number">01</span>
        </div>
        <h3 className="step-title">Call or Request Online</h3>
        <p className="step-text">
          Call <a href="tel:7754068718" className="step-phone">775 406 8718</a> Or
          Submit Our Quick Online Form. Dispatcher Answers Immediately 24 Hours.
        </p>
      </div>

      <div className="how-step active">
        <div className="step-number-wrap">
          <span className="step-number">02</span>
        </div>
        <h3 className="step-title">Describe Your Situation</h3>
        <p className="step-text">
          Tell Your Location Vehicle Type &amp; What Happened. Our Dispatcher
          Will Ask A Few Quick Questions.
        </p>
      </div>

      <div className="how-step">
        <div className="step-number-wrap">
          <span className="step-number">03</span>
        </div>
        <h3 className="step-title">Get An Upfront Quote</h3>
        <p className="step-text">
          Before We Dispatch We Give You A Flat-Rate Quote An Accurate ETA No
          Surprise You Know.
        </p>
      </div>

      <div className="how-step">
        <div className="step-number-wrap">
          <span className="step-number">04</span>
        </div>
        <h3 className="step-title">Vehicle Delivered Safely</h3>
        <p className="step-text">
          Your Driver Arrives, Assesses The Situation, &amp; Handles The Service
          Professionally. If Towing Vehicle
        </p>
      </div>
    </div>
  </div>
</section>

{/* =========================================================
    SECTION 6: SERVICE AREAS (interactive map)
========================================================== */}
<section className="areas-section">
  <div className="container">
    {/* HEADER */}
    <div className="areas-header">
      <p className="areas-eyebrow">
        <span className="eyebrow-dot"></span>SERVICE AREAS
      </p>
      <h2 className="areas-heading">
        SERVING DALLAS AND THE <br></br>SURROUNDING HOUSTON AREA
      </h2>
    </div>

    {/* CITY PILLS */}
    <div className="areas-grid">
      {cities.map((city) => (
        <button
          key={city.name}
          className={`area-pill ${selectedCity.name === city.name ? "active" : ""}`}
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
     <Link to="/service-areas" className="areas-btn">
  VIEW ALL AREAS
</Link>
    </div>
  </div>
</section>
{/* =========================================================
    SECTION 7: TESTIMONIALS (carousel)
========================================================== */}
<section className="testimonials-section">
  <div className="container">
    {/* HEADER */}
    <div className="testimonials-header">
      <p className="testimonials-eyebrow">
        <span className="eyebrow-dot"></span>TESTIMONIALS
      </p>
      <h2 className="testimonials-heading">
        REAL REVIEWS FROM REAL DRIVERS <br></br>200+ 5-STAR EXPERIENCES
      </h2>
    </div>

    {/* CAROUSEL */}
    <div className="testimonials-carousel">
      <button
        className="carousel-arrow arrow-left"
        onClick={handlePrev}
        aria-label="Previous reviews"
      >
        <i className="bi bi-arrow-left"></i>
      </button>

      <div className="testimonials-track">
        {visibleTestimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-stars">{"★★★★★"}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <span
                className="author-avatar"
                style={{ backgroundColor: t.avatarColor }}
              >
                {t.name.charAt(0)}
              </span>
              <div className="author-info">
                <span className="author-name">{t.name}</span>
                <span className="author-location">{t.location}</span>
              </div>
              <span className="author-google">Google</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-arrow arrow-right"
        onClick={handleNext}
        aria-label="Next reviews"
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>

    {/* REVIEW CTA */}
    <div className="review-cta-wrap">
      <div className="review-cta">
        <h3 className="review-cta-title">REVIEW US ON GOOGLE</h3>
        <div className="review-cta-stars">★★★★★</div>
        <a href="#" className="review-cta-btn">
          LEAVE US A REVIEW
        </a>
      </div>
    </div>
  </div>
</section>
{/* =========================================================
    SECTION 8: CONTACT US
========================================================== */}
<section className="contact-section">
  <div className="container">
    {/* HEADER */}
    <div className="contact-header">
      <p className="contact-eyebrow">
        <span className="eyebrow-dot"></span>CONTACT US
      </p>
      <h2 className="contact-heading">24/7 TOWING AND RECOVERY SUPPORT</h2>
    </div>

    {/* CONTENT */}
    <div className="contact-content">
      {/* LEFT FORM CARD */}
      <div className="contact-form-card">
        <h3 className="contact-form-title">READY TO GET STARTED</h3>
        <p className="contact-form-subtitle">
          Available 24/7, 365 days a year, for emergency and scheduled
          service across Dallas and the surrounding area.
        </p>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Name *"
                value={contactForm.fullName}
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={contactForm.phone}
                onChange={handleContactChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Current Location / Address *</label>
              <input
                type="text"
                name="address"
                placeholder="Address *"
                value={contactForm.address}
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Service Type (dropdown)</label>
              <select
                name="serviceType"
                value={contactForm.serviceType}
                onChange={handleContactChange}
              >
                <option value="">Service Type *</option>
                <option value="emergency-towing">Emergency Towing</option>
                <option value="roadside-assistance">Roadside Assistance</option>
                <option value="lockout">Car Lockout</option>
                <option value="long-distance">Long-Distance Towing</option>
                <option value="accident-recovery">Accident Recovery</option>
                <option value="motorcycle-towing">Motorcycle Towing</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Vehicle Make, Model &amp; Year *</label>
              <input
                type="text"
                name="vehicleInfo"
                placeholder="Year *"
                value={contactForm.vehicleInfo}
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Vehicle Condition*</label>
              <input
                type="text"
                name="vehicleCondition"
                placeholder="Runs / Does Not Run*"
                value={contactForm.vehicleCondition}
                onChange={handleContactChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write message"
              rows="4"
              value={contactForm.message}
              onChange={handleContactChange}
            ></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">
            GET HELP NOW
          </button>
        </form>
      </div>

      {/* RIGHT IMAGE */}
      <div className="contact-img-wrap">
        <img
          src={FaqImg}
          alt="Frequently Asked Questions"
        />
      </div>
    </div>
  </div>
</section>
{/* =========================================================
    SECTION 9: FAQ
========================================================== */}
<section className="faq-section">
  <div className="container">
    <div className="faq-content">
      {/* LEFT */}
      <div className="faq-left">
        <p className="faq-eyebrow">
          <span className="eyebrow-dot"></span>FREQUENTLY ASKED QUESTIONS
        </p>
       <h2 className="faq-heading">YOUR TOWING QUESTIONS ANSWERED HONESTLY</h2>
        <p className="faq-subtitle">
          Have more questions or need a custom Towing &amp; Roadside
          Assistance? Get in touch with us &amp; we'll help you get started.
        </p>
        <a href="#contact" className="faq-btn">
          GET IN TOUCH
        </a>
      </div>

      {/* RIGHT - ACCORDION */}
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openFaqIndex === index ? "open" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <i
                className={`bi ${
                  openFaqIndex === index ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </button>

            {openFaqIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* =========================================================
    SECTION 10: BLOG
========================================================== */}
<section className="blog-section">
  <div className="container">
    {/* HEADER */}
    <div className="blog-header">
      <p className="blog-eyebrow">
        <span className="eyebrow-dot"></span>BLOG
      </p>
      <h2 className="blog-heading">
        FREE TOWING TIPS, COST GUIDES <br></br>AND ROADSIDE ADVICE
      </h2>
    </div>

    {/* GRID */}
    <div className="blog-grid">
      {allBlogs.map((post) => (
        <div className="blog-card" key={post.slug || post._id}>
          <Link to={`/blogs/${post.slug || post._id}`} className="blog-img-wrap">
            <img src={post.image} alt={post.title} />
          </Link>

          <div className="blog-meta">
            <img src={post.authorAvatar} alt={post.author} className="blog-avatar" />
            <div className="blog-meta-text">
              <span className="blog-author">{post.author}</span>
              <span className="blog-role">Author</span>
            </div>
            <span className="blog-date">
              {post.date ||
                new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
            </span>
            <span className="blog-dot">|</span>
            <span className="blog-category">{post.category}</span>
          </div>

          <Link to={`/blogs/${post.slug || post._id}`} className="blog-title-link">
            <h3 className="blog-title">{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
{/* =========================================================
    SECTION 11: FINAL CTA BANNER
========================================================== */}
<section className="cta-banner-section">
  <div className="container">
    <div className="cta-banner-content">
      {/* LEFT TEXT */}
      <div className="cta-banner-left">
        <h2 className="cta-banner-heading">
          DON'T WAIT ALONE ON THE SIDE OF THE ROAD.
        </h2>
        <p className="cta-banner-text">
          Available 24/7, 365 days a year, for emergency &amp; scheduled
          service across Dallas and the surrounding area.
        </p>
        <div className="cta-banner-buttons">
          <a href="#contact" className="cta-banner-btn-solid">
            GET HELP NOW
          </a>
          <a href="tel:9075550203" className="cta-banner-btn-outline">
            <i className="bi bi-telephone-fill"></i> (907) 555-0203
          </a>
        </div>
      </div>

      {/* RIGHT LOGO WITH RADIAL RINGS */}
      <div className="cta-banner-right">
        <div className="cta-banner-rings"></div>
        <img src={logoImg} alt="Reliable Towing & Recovery" className="cta-banner-logo" />
      </div>
    </div>
  </div>
</section>
<Footer />
    </>
  );
};


export default Home;
