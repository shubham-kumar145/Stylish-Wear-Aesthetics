import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <img src="/hero_photo/4.webp" className="rounded-xl w-full h-[500px] object-cover" alt="Slide 4" data-value="4" />,
    <img src="/hero_photo/1.png" className="rounded-xl w-full h-[500px] object-cover" alt="Slide 1" data-value="1" />,
    <img src="/hero_photo/2.png" className="rounded-xl w-full h-[500px] object-cover" alt="Slide 2" data-value="2" />,
    <img src="/hero_photo/3.png" className="rounded-xl w-full h-[500px] object-cover" alt="Slide 3" data-value="3" />,
    <img src="/hero_photo/6.jpeg" className="rounded-xl w-full h-[500px] object-cover" alt="Slide 5" data-value="5" />,
];
const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={true}
        disableDotsControls={false}
        disableButtonsControls={true}
        items={items}
    />
);

export default MainCarousel;