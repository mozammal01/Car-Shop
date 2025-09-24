import audi from "@/../public/vehicles/Audi.png";
import audiA4 from "@/../public/popular/AUDI-A4.png";
import audiA5 from "@/../public/popular/AUDI-A5.png";

import audi1 from "@/../public/vehicles/audi/audi1.jpg";
import audi2 from "@/../public/vehicles/audi/audi2.jpg";
import audi3 from "@/../public/vehicles/audi/audi3.jpg";
import audi4 from "@/../public/vehicles/audi/audi4.jpg";
import audi5 from "@/../public/vehicles/audi/audi6.jpg";
// 
import ford21 from "@/../public/vehicles/Ford-2021.png";
import ford211 from "@/../public/vehicles/ford21/ford1.jpg";
import ford212 from "@/../public/vehicles/ford21/ford2.jpg";
import ford213 from "@/../public/vehicles/ford21/ford3.jpg";
import ford214 from "@/../public/vehicles/ford21/ford4.jpg";
import ford215 from "@/../public/vehicles/ford21/ford5.jpg";
//
import ford23 from "@/../public/vehicles/Ford-2023.png";
import ford231 from "@/../public/vehicles/ford23/ford1.jpg";
import ford232 from "@/../public/vehicles/ford23/ford2.jpg";
import ford233 from "@/../public/vehicles/ford23/ford3.jpg";
import ford234 from "@/../public/vehicles/ford23/ford4.jpg";
import ford235 from "@/../public/vehicles/ford23/ford6.jpg";
//
import corolla from "@/../public/vehicles/Corolla.png";
import corolla1 from "@/../public/vehicles/corolla/corolla1.png";
import corolla2 from "@/../public/vehicles/corolla/corolla2.png";
import corolla3 from "@/../public/vehicles/corolla/corolla3.png";
import corolla4 from "@/../public/vehicles/corolla/corolla4.png";
import corolla5 from "@/../public/vehicles/corolla/corolla5.png";
//
import glc from "@/../public/vehicles/GLC.png";
import glc1 from "@/../public/vehicles/glc/glc1.png";
import glc2 from "@/../public/vehicles/glc/glc2.png";
import glc3 from "@/../public/vehicles/glc/glc3.png";
import glc4 from "@/../public/vehicles/glc/glc4.png";
import glc5 from "@/../public/vehicles/glc/glc5.png";
//

export const cars = [
  // 1
  {
    id: 1,
    imgSrc: ford21,
    img: [ford211, ford212, ford213, ford214, ford215],
    title: "Ford Transit – 2021",
    subTitle: "Van, Commercial",
    year: "2021",
    location: "Detroit",
    description: "4.0 D5 PowerPulse Momentum 5dr AW…",
    fullDescription:
      "The Ford Transit is the backbone of countless businesses, renowned for its rugged durability, versatile configurations, and powerful engine options. It offers a spacious, high-volume cargo area designed for maximum productivity and efficiency. With advanced driver-assist features and a comfortable interior, the Transit is built to handle the demands of the workday while ensuring a confident and connected drive.",
    meterText: "2500 miles",
    date: "Feb 13, 2021",
    views: "695 views",
    carId: "frd-tr-21",
    manufacturer: "Ford",
    model: "Transit 350 HD",
    transmission: "Automatic",
    typeOfDrive: "Rear-wheel drive",
    fuel: "Gasoline",
    engine: "3.5L V6 EcoBoost",
    enginePower: "310 horses",
    enginePower2: "231 kilowatts",
    mileage: "25,000 ml",
    features: [
      "High-Roof, Long Wheelbase",
      "Advanced Tow Technology",
      "SYNC® 4 with 12-Inch Touchscreen",
      "Pro Power Onboard™",
      "Lane-Keeping System",
    ],
    fuelText: "Diesel",
    gearText: "Manual",
    price: "$22,000",
    category: "Great Price",
    brand: "Ford",
    condition: "New",
  },
  // 2
  {
    id: 2,
    imgSrc: glc,
    img: [glc1, glc2, glc3, glc4, glc5],
    title: "New GLC - 2023",
    subTitle: "SUV, Luxury",
    year: "2023",
    location: "Stuttgart",
    description: "4.0 D5 PowerPulse Momentum 5dr AW…",
    fullDescription:
      "The Mercedes-Benz GLC combines elegant design with advanced technology for a refined and powerful driving experience. It features a sophisticated interior with premium materials, cutting-edge infotainment systems, and a suite of driver-assistance features. Whether navigating city streets or exploring the open road, the GLC delivers a comfortable, dynamic, and connected journey.",
    meterText: "50 miles",
    date: "Feb 13, 2024",
    views: "695 views",
    carId: "mb-glc-23",
    manufacturer: "Mercedes-Benz",
    model: "GLC 300 4MATIC",
    transmission: "Automatic 9G-TRONIC",
    typeOfDrive: "4MATIC® All-wheel drive",
    fuel: "Gasoline (Mild-Hybrid)",
    engine: "2.0L Turbo Inline-4 (Mild-Hybrid)",
    enginePower: "255 horses",
    enginePower2: "190 kilowatts",
    mileage: "5,500 ml",
    features: [
      "AIRMATIC Air Suspension",
      "Panoramic Sliding Sunroof",
      "DIGITAL LIGHT with projection function",
      "Active Distance Assist DISTRONIC",
      "Parking Package with 360° Camera",
    ],
    fuelText: "Petrol",
    gearText: "Automatic",
    price: "$95,000",
    category: "Low Mileage",
    brand: "Mercedes",
    condition: "New",
  },
  // 3
  {
    id: 3,
    imgSrc: audi,
    img: [audi1, audi2, audi3, audi4, audi5],
    title: "Audi A6 3.5 - New",
    subTitle: "Sedan, Luxury",
    year: "2024",
    location: "Ingolstadt",
    description: "3.5 D5 PowerPulse Momentum 5dr AW…",
    fullDescription:
      "The Audi A6 epitomizes sophisticated performance and cutting-edge technology. With its iconic design, luxurious cabin crafted with premium materials, and a powerful yet efficient engine, the A6 delivers a seamless and engaging driving experience. It is equipped with the latest digital interfaces and driver assistance systems, making every journey refined, intelligent, and dynamic.",
    meterText: "100 miles",
    date: "Feb 13, 2024",
    views: "695 views",
    carId: "aud-a6-24",
    manufacturer: "Audi",
    model: "A6 3.5",
    transmission: "Automatic",
    typeOfDrive: "Quattro® All-wheel drive",
    fuel: "Gasoline",
    engine: "Electric",
    enginePower: "340 horses",
    enginePower2: "260 kilowatts",
    mileage: "500 ml",
    features: [
      "Adaptive Air Suspension",
      "Bang & Olufsen® Sound System",
      "Digital Cockpit Plus",
      "Matrix LED Headlights",
      "Parking System Plus",
    ],
    fuelText: "Petrol",
    gearText: "Automatic",
    price: "$58,000",
    brand: "Audi",
    condition: "Used",
  },
  // 4
  {
    id: 4,
    imgSrc: corolla,
    img: [corolla1, corolla2, corolla3, corolla4, corolla5],
    title: "Corolla Altis – 2023",
    subTitle: "Sedan, Compact",
    year: "2023",
    location: "Global",
    description: "3.5 D5 PowerPulse Momentum 5dr AW…",
    fullDescription:
      "The Toyota Corolla Altis is a global benchmark for reliability, fuel efficiency, and value. Renowned for its comfortable ride, practical interior, and advanced safety features, it is designed to meet the everyday needs of drivers and families alike. It combines a timeless design with modern technology to deliver a dependable and economical driving experience.",
    meterText: "15000 miles",
    date: "Feb 13, 2024",
    views: "905 views",
    carId: "toy-ct-23",
    manufacturer: "Toyota",
    model: "Corolla Altis",
    transmission: "Automatic",
    typeOfDrive: "Front-wheel drive",
    fuel: "Petrol",
    engine: "1.8L Dynamic Force Engine",
    enginePower: "171 horses",
    enginePower2: "126 kilowatts",
    mileage: "100,000 ml",
    features: ["16-inch Alloy Wheels", "Heated seats", "Automatic Climate Control", "Leather seats", "Toyota Safety Sense™ 3.0 (TSS 3.0)"],
    fuelText: "Petrol",
    gearText: "CVT",
    price: "$45,000",
    brand: "Toyota",
    condition: "New",
  },
  // 5
  {
    id: 5,
    imgSrc: ford23,
    img: [ford231, ford232, ford233, ford234, ford235],
    title: "Ford Transit – 2023",
    subTitle: "Van, Commercial",
    year: "2023",
    location: "Detroit",
    description: "4.0 D5 PowerPulse Momentum 5dr AW…",
    fullDescription:
      "The latest Ford Transit continues to set the standard for full-size vans, blending proven capability with new levels of technology and connectivity. Designed for maximum productivity, it offers a range of powertrains, including a plug-in hybrid option, and features a modern, driver-centric interior with advanced SYNC® systems to keep your business moving efficiently and smartly.",
    meterText: "2500 miles",
    date: "Feb 13, 2023",
    views: "695 views",
    carId: "frd-tr-23",
    manufacturer: "Ford",
    model: "Transit 350 HD",
    transmission: "Automatic",
    typeOfDrive: "Rear-wheel drive",
    fuel: "Gasoline",
    engine: "3.5L V6 EcoBoost",
    enginePower: "310 horses",
    enginePower2: "231 kilowatts",
    mileage: "25,000 ml",
    features: [
      "Available Plug-In Hybrid Electric Vehicle (PHEV) Powertrain",
      "Advanced Tow Technology",
      "SYNC® 4 with 12-Inch Touchscreen",
      "Pro Power Onboard™",
      "Lane-Keeping System",
    ],
    fuelText: "Diesel",
    gearText: "Manual",
    price: "$22,000",
    category: "Great Price",
    brand: "Ford",
    condition: "New",
  },
  // 6
  {
    id: 6,
    imgSrc: audiA4,
    img: [audi1, audi2, audi3, audi4, audi5],
    title: "Audi A4",
    subTitle: "Sedan, Luxury",
    year: "2024",
    location: "Ingolstadt",
    description: "Audi A4 is a luxury car",
    fullDescription: "Audi A4 is a luxury car",
    meterText: "10000 miles",
    date: "Feb 13, 2024",
    views: "695 views",
    carId: "aud-a4-24",
    manufacturer: "Audi",
    model: "A4",
    transmission: "Automatic",
    typeOfDrive: "Quattro® All-wheel drive",
    fuel: "Gasoline",
    engine: "Electric",
    enginePower: "340 horses",
    enginePower2: "260 kilowatts",
    mileage: "500 ml",
    features: [
      "Adaptive Air Suspension",
      "Bang & Olufsen® Sound System",
      "Digital Cockpit Plus",
      "Matrix LED Headlights",
      "Parking System Plus",
    ],
    fuelText: "Petrol",
    gearText: "Automatic",
    price: "$10000",
    category: "Sale",
    brand: "Audi",
    condition: "Used",
  },
  // 7
  {
    id: 7,
    imgSrc: audiA5,
    img: [audi1, audi2, audi3, audi4, audi5],
    title: "Audi A5",
    subTitle: "Sedan, Luxury",
    year: "2024",
    location: "Ingolstadt",
    description: "Audi A5 is a luxury car",
    fullDescription: "Audi A5 is a luxury car",
    meterText: "10000 miles",
    date: "Feb 13, 2024",
    views: "695 views",
    carId: "aud-a5-24",
    manufacturer: "Audi",
    model: "A5",
    transmission: "Automatic",
    typeOfDrive: "Quattro® All-wheel drive",
    fuel: "Gasoline",
    engine: "Electric",
    enginePower: "340 horses",
    enginePower2: "260 kilowatts",
    mileage: "500 ml",
    features: [
      "Adaptive Air Suspension",
      "Bang & Olufsen® Sound System",
      "Digital Cockpit Plus",
      "Matrix LED Headlights",
      "Parking System Plus",
    ],
    fuelText: "Petrol",
    gearText: "Automatic",
    price: "$10000",
    category: "Sale",
    brand: "Audi",
    condition: "Used",
  },
];
