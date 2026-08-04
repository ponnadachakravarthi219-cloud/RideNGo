import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/Welcome";
import SearchBar from "../components/SearchBar/SearchBar";
import SummaryCards from "../components/SummaryCards/SummaryCards";

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <SearchBar />
      <SummaryCards />
    </>
  );
}

export default Home;