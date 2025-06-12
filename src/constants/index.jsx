import { BadgeDollarSign, BotMessageSquare, Gem, Handshake } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user5.jpg";

export const navItems = [
  { label: "Features", href: "#featuresect" },
  { label: "About", href: "#aboutsect" },
  { label: "History", href: "#hist" },
  { label: "Pricing", href: "#priceplans" },
  { label: "Testimonials", href: "#" },
];

export const contactInfo = [
  {
  Mail: "neoglobalsolutions@gmail.com" ,
  phone: "0244125987"
  },
];


export const testimonials = [
  {
    user: "William Maxwell",
    company: "Stellar Solutions",
    image: user1,
    text: "Completing transactions when I'm on my travels has never been easier. Responsive, professional, and delivered results beyond my expectations.",
  },
 
  
  {
    user: "Patrick Ngonzi",
    company: "Trader",
    image: user2,
    text: "Management of my expenditure has improved drastically with help from Neopay. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BadgeDollarSign />,
    text: "Cross-border Payments",
    description:
      "Initiate and complete your transactions regardless of where you may find yourself.",
  },
  {
    icon: <Fingerprint />,
    text: "User Security",
    description:
      "Secure sign in options from passcodes to fingerprint scans to protect your account.",
  },
  {
    icon: <ShieldHalf />,
    text: "Two factor Authentication",
    description:
      "Further security provided on every transaction with two-factor authentication, ensuring your transactions are safe and secure.",
  },
  {
    icon: <Handshake />,
    text: "Seamless integration",
    description:
      "Smoothly complete payments for your bills and subscriptions with Mobile Money and Bank Transfers ",
  },
  {
    icon: <Gem />,
    text: "User Friendly",
    description:
      "A concise and easy to navigate interface that allows you to focus on what matters most - your transactions.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "A detailed breakdown of your transaction history to help you keep track of your spending and income.",
  },
];

export const checklistItems = [


  {
    title: " Neo Global Solutions Ltd",
    description:
      "is a fintech startup that offers cross-border payments, including financial brokerage - fiat and stablecoins. Our platform utilizes cutting-edge technology to provide seamless, secure, and personalized experiences for our users. ",
  },
  
  {
    title: "Our mission",
    description:
      "By offering creative, locally-tailored solutions and utilizing technology to enhance trade and finance, we hope to make international trade payments easier for African businesses.",
  },
  

];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "$20,000 transfer limit on a single transaction",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Premium",
    price: "$10",
    features: [
      "$50,000 transfer limit on a single transaction ",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Executive",
    price: "$50",
    features: [
      "Unlimited transfer limits on transactions",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
