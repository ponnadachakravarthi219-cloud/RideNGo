import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import SearchBar from "../../components/SearchBar/SearchBar";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
// import Services from "../../Services/Services";
import WhyChoose from "../../WhyChoose/WhyChoose";
import Fleet from "../../components/Fleet/Fleet";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <SearchBar />
      <SummaryCard />
      <Services />
      <WhyChoose />
      <Fleet />
      <Testimonials />
    </>
  );
}

export default Home;