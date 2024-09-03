"use client"
import SimpleImageSlider from "react-simple-image-slider"

const images = [
  { url: "/titans.jpg" },
  { url: "/group-pic1.jpg" },
  { url: "/group-pic2.jpg" },
];

export default function Slideshow() {
  return (
    <SimpleImageSlider
    width={400}
    height={250}
    images={images}
    showBullets={true}
    showNavs={false}
    autoPlay={true}
    autoPlayDelay={5}
    bgColor={"#00000000"}
    />
  )
}
