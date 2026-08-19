import TruckImg from "../assets/4.jpeg";
import Blogtwo from "../assets/blog2.png";
import Blogthree from "../assets/blog3.png";
const authorAvatar1 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop";
const authorAvatar2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop";
const authorAvatar3 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop";
export const blogsData = [
  {
    slug: "car-breaks-down-highway",
    image: TruckImg,
    authorAvatar: authorAvatar1,
    author: "Autumn Phillips",
    date: "Apr 22, 2026",
    category: "DESIGN",
    title: "What To Do When Your Car Breaks Down On The Highway",
    content:
      "If your car breaks down on the highway, the first thing to do is stay calm and get as far onto the shoulder as possible, ideally past the white line. Turn on your hazard lights immediately so approaching traffic can see you from a distance. If it's safe to do so, exit from the passenger side away from moving traffic, and stand well behind a guardrail rather than next to your vehicle. Call for towing or roadside assistance right away and give them your exact mile marker or nearest exit number. While you wait, keep your seatbelt on if you're staying inside the car, and avoid standing directly behind or in front of your vehicle. A small emergency kit with a flashlight, reflective triangles, and a phone charger can make a big difference in how safe and comfortable this wait feels.",
  },
  {
    slug: "flatbed-vs-wheel-lift",
    image: Blogtwo,
    authorAvatar: authorAvatar2,
    author: "Paula Mora",
        date: "Apr 14, 2026",
    category: "DESIGN",
    title: "Flatbed Vs. Wheel-Lift Towing: Which Is Better For Your Car?",
    content:
      "Flatbed towing loads your entire vehicle onto a flat trailer bed, so none of your wheels touch the road during transport. This makes it the safest option for all-wheel-drive cars, lowered vehicles, and any car with existing damage, since there's zero stress on the drivetrain or suspension. Wheel-lift towing, on the other hand, lifts just the front or rear wheels off the ground while the other set stays on the road, making it faster to hook up and better suited for short-distance tows of standard two-wheel-drive vehicles. If you're unsure which one your car needs, it's worth asking the dispatcher when you call — most towing companies will recommend flatbed automatically for luxury, electric, or all-wheel-drive vehicles to avoid any risk of transmission damage.",
  },
  {
    slug: "tow-truck-cost-2026",
    image: Blogthree,
    authorAvatar: authorAvatar3,
    author: "Katie Sims",
    date: "Apr 28, 2026",
    category: "DESIGN",
    title: "How Much Does A Tow Truck Cost In 2026? Real Numbers",
    content:
      "Local tows under 10 miles typically range from $75 to $125, while most companies also charge a base hook-up fee that covers the first few miles before a per-mile rate kicks in. Long-distance towing is usually priced per mile, often between $3 and $7 depending on vehicle size and trailer type, so a 100-mile tow could reasonably cost several hundred dollars. Late-night, holiday, or emergency same-hour requests often carry a surcharge of 20 to 50 dollars on top of the standard rate, since they require pulling a driver in outside normal hours. Many insurance policies and roadside assistance memberships cover part or all of these costs, so it's always worth checking your policy limits before paying out of pocket — some plans cover up to 100 miles of towing per incident at no extra charge.",
  },
];