import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-20">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&#39;m <br /><span className="text-accent">Hirwa</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 leading-6">
              I thrive at developing sophisticated <span className="text-accent">digital solutions</span>, backed by expertise in a range of programming languages and advanced technologies.
            </p>
            {/* CV and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="justify-center gap-2 uppercase">
                <span>Download my CV</span> <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0"><Social containerStyles="flex gap-6" iconStyles="w-10 h-10 flex items-center justify-center rounded-full border border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500" /></div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;