import { useState } from "react";

import Bottom from "../components/Home/Bottom";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";

const Home = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />

      {/* Hero Section */}
      <Hero url={url} setUrl={setUrl} />

      {/* Features Section */}
      <Features />

      {/*Bottom CTA Section */}
      <Bottom />
    </div>
  );
};

export default Home;
