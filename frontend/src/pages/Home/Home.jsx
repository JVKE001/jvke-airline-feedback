import Layout from "../../components/layout/Layout";
import Hero from "../../components/Hero/Hero";
import HoverCard from "../../components/cards/HoverCard";
import airline1 from "../../assets/images/london -light.jpg";

const Home = () => {
  // Dummy flight data (could later come from API)
  const flights = [
    { id: 1, text: "San Francisco to London at 11:00 pm", src: airline1 },
    { id: 2, text: "Delhi to New York at 6:00 am", src: airline1 },
    { id: 3, text: "Tokyo to Sydney at 3:00 pm", src: airline1 },
    { id: 4, text: "Paris to Dubai at 8:30 pm", src: airline1 },
    { id: 5, text: "Berlin to Toronto at 9:15 am", src: airline1 },
    { id: 6, text: "Singapore to Los Angeles at 5:45 pm", src: airline1 },
    { id: 7, text: "London to Cape Town at 7:00 am", src: airline1 },
    { id: 8, text: "Rome to Hong Kong at 2:00 pm", src: airline1 },
  ];

  return (
    <Layout>
      <Hero />
      <section className="bg-midnight py-8">
        <h2 className="my-2">Upcoming Flights</h2>
        <figcaption className="text-center text-gray-400 mb-6">
          Dummy data
        </figcaption>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {flights.map((flight) => (
            <HoverCard key={flight.id} src={flight.src} text={flight.text} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
