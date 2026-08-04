import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/Welcome";
import SearchBar from "../components/SearchBar/SearchBar";
import SummaryCards from "../components/SummaryCards/SummaryCards";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Fleet from "../components/Fleet/Fleet";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <SearchBar />
      <SummaryCards />
      <Services />
      <WhyChoose />
      <Fleet />
      <Testimonials />
    </>
  );
}

export default Home;