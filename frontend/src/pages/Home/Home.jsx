import Layout from "../../components/layout/Layout";
import Hero from "../../components/Hero/Hero";
import HoverCard from "../../components/cards/HoverCard";
import airline1 from "../../assets/images/london -light.jpg";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-midnight">
        <h2 className="my-5 md:my-8">Upcoming Flights</h2>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
          <HoverCard src={airline1} text={"San Fransico to London"} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
