import React, { useEffect, useState } from "react";
import "./homepage.css";
import Intro from "./Intro";
import ImageSlider from "./ImageSlider";
import churchImage1 from "./assets/churchImage1.jpg";
import churchImage2 from "./assets/churchImage2.jpg";
import Events from "./Events";
import Footer from "./Footer";

import { useNavigate } from "react-router-dom";
import ChurchValues from "./ChurchValues";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

import Contact from "./Contact";
import Leadership from "./Leadership";
const Homepage = () => {
  const navigate = useNavigate();
  const [isHome,setIsHome]=useState(true);
  const handleClick = () => {
    navigate("/events");
  };

  const fetchSermons = async () => {
    const response = await axios.get(
      "https://script.google.com/macros/s/AKfycbzAEWCfBCEXaj5rF3kn8v0uzRfeFwxeBID5icBCYNOTy8uIYLn4y32WR0s5fhULopC6/exec"
    );
    return response.data;
  };

  const fetchValues = async () => {
    const response = await axios.get(
      "https://script.google.com/macros/s/AKfycbzxNg6_MAPewF-vEaUwEsV-K2noikhraZNCNhkHqplx8QVnPcklasGRx0MIJrAWSyuy/exec"
    );
    return response.data;
  };
  const { data: sermons, isLoading: sermonsLoading, error: sermonsError } = useQuery({
    queryKey: ["sermons"],
    queryFn: fetchSermons,
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
  });
  const { data: valuess, isLoading: valuesLoading, error: valuesError } = useQuery({
    queryKey: ["values"],
    queryFn: fetchValues,
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
  });

  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

 /*  const fetchValues = async () => {
    try {
      const response = await axios.get(
        "https://script.google.com/macros/s/AKfycbzxNg6_MAPewF-vEaUwEsV-K2noikhraZNCNhkHqplx8QVnPcklasGRx0MIJrAWSyuy/exec"
      );
      setValues(response.data);
    } catch (error) {
      console.error("Error fetching church values:", error);
    } finally {
      setLoading(false);
    }
  };
 */
 /*  useEffect(() => {
    fetchValues();
  }, []); */

  if (sermonsLoading || valuesLoading) {
    return (
     <Loader/>
    );
  }

  if (sermonsError) {
    return <p>Error loading sermons. Please try again later.</p>;
  }

  return (
    <div>
      <div className="events-btn" onClick={handleClick}>
        <button>Upcoming events</button>
      </div>
      <div>
        <Intro />
      </div>
      <div className="bg-gradient-to-b from-slate-100 to-black p-5 w-full pt-2">
        <h1 className="text-3xl font-bold text-indigo-500 text-center pb-1">
          Sermons
        </h1>
        <ImageSlider data={sermons} />
      </div>
      <div className="border-b shadow-sm border-slate-500">
        <Leadership/>
      </div>
      <div>
        <ChurchValues data={valuess} />
      </div>
      <div>
        <h1 className="text-center text-indigo-400 font-bold text-3xl">Get in Touch</h1>
        <Contact isHome={isHome}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
