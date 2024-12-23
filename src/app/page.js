import Image from "next/image";
import bg from "../../public/background/home-background.jpg"
import RenderModel from "./components/RenderModel";
import SoftwareModel from "./components/models/3DModel";
import Navigation from "./components/navigation";
import DipModel from "./components/models/Diploma";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">

      <Image src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-25" />
      <div className="w-full h-screen">
        <Navigation></Navigation>
        <RenderModel>
          <SoftwareModel />
          
          
        </RenderModel>
      </div>
    </main>
  );
}
