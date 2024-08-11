import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
// import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoSlider />
      <Expertise/>
      <Services/>
      {/* <Testimonials/> */}
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default home;
