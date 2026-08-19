import { Truck, Car, Fuel, KeyRound, Battery, LifeBuoy, Compass, Bike } from "lucide-react";

export const services = [
  {
    icon: Truck,
    code: "S-01",
    slug: "emergency-towing",
    title: "Emergency Towing",
    text: "Flatbed and wheel-lift recovery for breakdowns, accidents, or anything that won't start where it's parked.",
    longText:
      "Whether you're stranded on the interstate at 2 AM or stuck in a parking garage, our emergency towing team is dispatched immediately. We run flatbed and wheel-lift trucks equipped to handle sedans, SUVs, and light trucks without adding a scratch to your vehicle.",
    features: [
      "24/7 dispatch, no after-hours surcharges",
      "Flatbed & wheel-lift trucks for every vehicle type",
      "Average arrival time under 30 minutes in service area",
    ],
  },
  {
    icon: Car,
    code: "S-02",
    slug: "accident-recovery",
    title: "Accident Recovery",
    text: "On-scene recovery coordinated with responders — safe extraction, no further damage to the vehicle.",
    longText:
      "Accidents are stressful enough without worrying about your vehicle. Our recovery crews work directly with police and first responders on scene, using proper rigging to extract your vehicle safely without causing further structural damage.",
    features: [
      "Coordinated with police & insurance on-site",
      "Safe extraction equipment for collision damage",
      "Direct transport to body shop or storage yard",
    ],
  },
  {
    icon: Fuel,
    code: "S-03",
    slug: "fuel-delivery",
    title: "Fuel Delivery",
    text: "Ran out on the highway shoulder? We bring enough fuel to get you to the nearest station.",
    longText:
      "Running out of fuel on a busy road is dangerous. Our team brings enough fuel directly to your location to get you safely to the nearest gas station — no need to wait for a full tow.",
    features: [
      "Regular & diesel fuel delivery available",
      "Fast response on highways and interstates",
      "No need for a full tow in most cases",
    ],
  },
  {
    icon: KeyRound,
    code: "S-04",
    slug: "lockout-assistance",
    title: "Lockout Assistance",
    text: "Locked keys inside? Our techs get you back in without a scratch on the paint or the frame.",
    longText:
      "Locked out happens to everyone. Our lockout technicians use professional non-destructive entry tools to get your car open fast, protecting your paint, weather stripping, and door frame in the process.",
    features: [
      "Non-destructive entry, zero damage guarantee",
      "Works on modern and older lock systems",
      "Usually resolved in under 15 minutes",
    ],
  },
  {
    icon: Battery,
    code: "S-05",
    slug: "battery-jump-start",
    title: "Battery Jump-Start",
    text: "Dead battery diagnosis and a jump on the spot — or a swap if it won't hold charge anymore.",
    longText:
      "A dead battery doesn't always mean a tow. Our techs test your battery on the spot, give you a jump-start, and let you know if it needs a full replacement so you're not stranded again next week.",
    features: [
      "On-the-spot battery health diagnosis",
      "Jump-start with commercial-grade equipment",
      "Battery replacement available if needed",
    ],
  },
  {
    icon: LifeBuoy,
    code: "S-06",
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    text: "Flat tire, overheating, stuck in a ditch — if it stops you on the road, we're equipped for it.",
    longText:
      "From flat tires to overheating engines to a wheel stuck in a ditch, our roadside assistance vans carry the tools to handle most common breakdowns right where you are — often without needing a tow at all.",
    features: [
      "Flat tire change with your spare",
      "Basic overheating & mechanical diagnostics",
      "Ditch & mud extraction equipment on board",
    ],
  },
];

export const homeServices = [
  {
    icon: Truck,
    code: "H-01",
    slug: "emergency-towing-247",
    title: "Emergency Towing — 24/7",
    text: "Whether you're stranded at the interstate at 2 AM or stuck in a parking garage.",
    longText:
      "No matter the hour, our emergency towing team is on call. Whether you're stranded on the interstate at 2 AM or stuck in a parking garage, a truck is dispatched immediately to get you and your vehicle to safety.",
    features: [
      "24/7 dispatch, every day of the year",
      "Flatbed & wheel-lift trucks for all vehicle types",
      "Fast response even outside normal service hours",
    ],
  },
  {
    icon: LifeBuoy,
    code: "H-02",
    slug: "roadside-assistance-tech",
    title: "Roadside Assistance",
    text: "Our roadside assistance technicians carry the equipment to get you moving.",
    longText:
      "Our roadside assistance technicians arrive fully equipped to diagnose and fix common issues on the spot — from flat tires to overheating — getting you back on the road without needing a full tow.",
    features: [
      "Fully equipped service vans",
      "On-the-spot diagnostics and fixes",
      "Tow arranged automatically if repair isn't possible",
    ],
  },
  {
    icon: KeyRound,
    code: "H-03",
    slug: "car-lockout-service",
    title: "Car Lockout Service",
    text: "Locked your keys in the car? It happens to everyone. Our lockout technicians...",
    longText:
      "Locked your keys in the car? It happens to everyone. Our lockout technicians use non-destructive tools to get you back in fast, without any damage to your paint, frame, or weather stripping.",
    features: [
      "Non-destructive entry techniques",
      "Works on modern and older lock/key systems",
      "Usually resolved in under 15 minutes",
    ],
  },
  {
    icon: Compass,
    code: "H-04",
    slug: "long-distance-interstate",
    title: "Long-Distance & Interstate",
    text: "Need your vehicle transported across the state — or across the country?",
    longText:
      "Need your vehicle transported across the state — or across the country? Our long-distance towing service safely moves your vehicle over any distance, with real-time tracking along the way.",
    features: [
      "State-to-state and cross-country transport",
      "Enclosed & open trailer options available",
      "Real-time updates during transit",
    ],
  },
  {
    icon: Car,
    code: "H-05",
    slug: "collision-recovery",
    title: "Accident & Collision Recovery",
    text: "Accidents are traumatic enough without worrying about your vehicle.",
    longText:
      "Accidents are traumatic enough without worrying about your vehicle. Our collision recovery crews work on scene with responders to safely extract and transport your vehicle to a body shop or storage yard.",
    features: [
      "On-scene coordination with police & insurance",
      "Safe extraction, no additional damage",
      "Direct transport to your body shop of choice",
    ],
  },
  {
    icon: Bike,
    code: "H-06",
    slug: "motorcycle-towing",
    title: "Motorcycle Towing",
    text: "Motorcycles require specialized equipment and care that most generic...",
    longText:
      "Motorcycles require specialized equipment and care that most generic tow trucks aren't built for. We use motorcycle-specific ramps and tie-downs to transport your bike without a scratch.",
    features: [
      "Motorcycle-specific ramps & soft tie-downs",
      "No paint or frame damage guarantee",
      "Trained techs experienced with all bike types",
    ],
  },
];

export const allServices = [...services, ...homeServices];