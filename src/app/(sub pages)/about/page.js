import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import dynamic from "next/dynamic";
import AboutDetails from "@/app/components/about";
import RenderModel from "@/app/components/RenderModel";
import DiplomaModal from "@/app/components/models/Diploma";
import SoftwareModel from "@/app/components/models/3DModel";


export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

    
      

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            Haroun Barhoumi
          </h1>
          <p className="font-light text-foreground text-lg">
            Software Engineering Student
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}