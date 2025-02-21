import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HeroPage from "./pages/heropage";
import Category from "./pages/category/category";
import Service from "./pages/services/service";
import Destinations from "./pages/Destinatios/Destinations";
import Destinations2 from "./pages/Destinations2/Destinations2";
import Page4 from "./pages/page4/page4";
import Testimonials from "./pages/Testimonials/Testimonials";
import Partners from "./pages/Partners/Partners";
import Subscribe from "./pages/Subscribe/subscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <Category />
      <Service />
      <Destinations />
      <Destinations2 />
      <Page4 />
      <Testimonials />
      <Partners />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
