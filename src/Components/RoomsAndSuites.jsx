// src/RoomsAndSuites.js
import React from 'react';
import './RoomsAndSuites.css'; 
import './Rbutton.css'; 
import image1 from '../Assets/Rooms/1.jpg'
import image2 from '../Assets/Rooms/2.jpg'
import image3 from '../Assets/Rooms/3.jpg'
import image4 from '../Assets/Rooms/4.jpg'
import image5 from '../Assets/Rooms/5.jpg'
import image6 from '../Assets/Rooms/6.jpg'
import image7 from '../Assets/Rooms/7.jpg'
import image8 from '../Assets/Rooms/8.jpg'
import image9 from '../Assets/Rooms/9.jpg'
import image10 from '../Assets/Rooms/10.jpg'
import image11 from '../Assets/Rooms/11.jpg'
import image12 from '../Assets/Rooms/12.jpg'
import image13 from '../Assets/Rooms/13.jpg'
import image14 from '../Assets/Rooms/14.jpg'
import image15 from '../Assets/Rooms/15.jpg'
import image16 from '../Assets/Rooms/16.jpg'
import image17 from '../Assets/Rooms/17.jpg'
import image18 from '../Assets/Rooms/18.jpg'
import image19 from '../Assets/Rooms/19.jpg'
import image20 from '../Assets/Rooms/20.jpg'
import image21 from '../Assets/Rooms/21.jpg'

const RoomsAndSuites = () => {
 
    const data = [
        {
            heading: "Deluxe Comfort",
            des: "Experience unparalleled comfort in our Deluxe Room.",
            rent: "$150/night",
            img: image1,
            name: "Deluxe Room"
        },
        {
            heading: "Executive Elegance",
            des: "Stay in style with our sophisticated Executive Suite.",
            rent: "$200/night",
            img: image2,
            name: "Executive Suite"
        },
        {
            heading: "Presidential Luxury",
            des: "Indulge in the ultimate luxury of our Presidential Suite.",
            rent: "$250/night",
            img: image3,
            name: "Presidential Suite"
        },
        {
            heading: "Superior Retreat",
            des: "Relax in our spacious and elegant Superior Room.",
            rent: "$180/night",
            img: image4,
            name: "Superior Room"
        },
        {
            heading: "Honeymoon Bliss",
            des: "Celebrate romance in our charming Honeymoon Suite.",
            rent: "$220/night",
            img: image5,
            name: "Honeymoon Suite"
        },
        {
            heading: "Penthouse Prestige",
            des: "Enjoy panoramic views from our luxurious Penthouse Suite.",
            rent: "$160/night",
            img: image6,
            name: "Penthouse Suite"
        },
        {
            heading: "Royal Retreat",
            des: "Feel like royalty in our opulent Royal Suite.",
            rent: "$190/night",
            img: image7,
            name: "Royal Suite"
        },
        {
            heading: "Family Comfort",
            des: "Ideal for families, our Family Suite offers ample space.",
            rent: "$170/night",
            img: image8,
            name: "Family Suite"
        },
        {
            heading: "Luxury Escape",
            des: "Experience luxury with our exclusive Luxury Suite.",
            rent: "$230/night",
            img: image9,
            name: "Luxury Suite"
        },
        {
            heading: "Standard Elegance",
            des: "Our Standard Room combines comfort and style.",
            rent: "$140/night",
            img: image10,
            name: "Standard Room"
        },
        {
            heading: "Garden Serenity",
            des: "Enjoy tranquility in our beautifully appointed Garden Suite.",
            rent: "$210/night",
            img: image11,
            name: "Garden Suite"
        },
        {
            heading: "Oceanfront Oasis",
            des: "Soak in the ocean views from our Ocean View Room.",
            rent: "$200/night",
            img: image12,
            name: "Ocean View Room"
        },
        {
            heading: "Mountain Majesty",
            des: "Take in stunning mountain views from our Mountain Suite.",
            rent: "$220/night",
            img: image13,
            name: "Mountain Suite"
        },
        {
            heading: "Corner Comfort",
            des: "Our Corner Suite offers extra space and comfort.",
            rent: "$240/night",
            img: image14,
            name: "Corner Suite"
        },
        {
            heading: "Cityscape View",
            des: "Experience the city skyline from our City View Room.",
            rent: "$150/night",
            img: image15,
            name: "City View Room"
        },
        {
            heading: "Balcony Retreat",
            des: "Relax on your private balcony in our Balcony Suite.",
            rent: "$210/night",
            img: image16,
            name: "Balcony Suite"
        },
        {
            heading: "Heritage Charm",
            des: "Discover the charm of our Heritage Suite with classic décor.",
            rent: "$230/night",
            img: image17,
            name: "Heritage Suite"
        },
        {
            heading: "Garden View Bliss",
            des: "Enjoy serene garden views from our Garden View Room.",
            rent: "$180/night",
            img: image18,
            name: "Garden View Room"
        },
        {
            heading: "Sunset Splendor",
            des: "Watch breathtaking sunsets from our Sunset Suite.",
            rent: "$220/night",
            img: image19,
            name: "Sunset Suite"
        },
        {
            heading: "Skyline Splendor",
            des: "Enjoy breathtaking skyline views from our Skyline Suite.",
            rent: "$250/night",
            img: image20,
            name: "Skyline Suite"
        },
        {
            heading: "Coastal Escape",
            des: "Unwind in our Coastal Suite with stunning sea views.",
            rent: "$190/night",
            img: image21,
            name: "Coastal Suite"
        }
    ];
    
  
  return (
    <div className="rooms-suites-container">
      <header className="header">
        <h1>Our Rooms & Suites</h1>
        <p>Explore our luxurious and comfortable rooms and suites</p>
      </header>
      <section className="rooms-list">
  {data.map((item, index) => (
    <div className="room-card" key={index}>
      <img src={item.img} alt={item.name} className="room-image" />
      <div className="room-info">
        <h2>{item.name}</h2>
        <p className="room-description">{item.des}</p>
        <p className="room-price">{item.rent}</p>
        <button className="vip-book-button">Book Now</button>
      </div>
    </div>
  ))}
</section>
    </div>
  );
};

export default RoomsAndSuites;
