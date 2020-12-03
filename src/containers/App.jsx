import React from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initialState/";

const App = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <>
      <Header />
      <Search />

      {categories.length > 0 &&
        categories.map(
          (category) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            videos[category].length > 0 && (
              <Categories title={category} key={category}>
                <Carousel>
                  {videos[category].map((video) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <CarouselItem key={video.id} {...video} />
                  ))}
                </Carousel>
              </Categories>
              // eslint-disable-next-line comma-dangle
            )
        )}

      <Footer />
    </>
  );
};

export default App;
