import carouselImage1 from "@/assets/carousel/1.jpg";
import carouselImage2 from "@/assets/carousel/2.jpg";
import carouselImage3 from "@/assets/carousel/3.jpg";
import carouselImage4 from "@/assets/carousel/4.jpg";
import Image from "next/image";

const captions = [
  "Women in civic space",
  "Digital inclusion",
  "Equal rights",
  "Gender and safe guarding",
];

const imagesData = [
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4,
];

export default function CarouselSection() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div>
        {imagesData.map((imageData) => (
          <Image
            className="w-full object-center object-cover"
            key={imageData.src}
            src={imageData}
            alt="Caption Image"
          />
        ))}
      </div>

      {captions.map((caption) => (
        <p key={caption}>{caption}</p>
      ))}
    </section>
  );
}
