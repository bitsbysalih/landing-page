import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Hero from "../Hero";
import Ads from "../Ads";
import Container from "@material-ui/core/Container";
import Work from "../index";
import Beyin from "../Beyin";
import Card from "../Card";
import Prices from "../Prices";
import Works from "../Works";
import Footer from "../Footer";

import * as location from "./1055-world-locations.json";
import * as success from "./1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Load() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData(json);
          setLoading(true);

          setTimeout(() => {
            setCompleted(true);
          }, 1000);
        });
    }, 1000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1}  height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions1} />
          )}
        </>
      ) : (
        <>
          <>

          <Hero />
          <Ads />
          <Work />
          <Beyin />
          <Card />
          <Prices />
          <Works />
          <Footer />
          </>


        </>
      )}
    </>
  );
}

export default Load;
