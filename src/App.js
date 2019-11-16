import React, { Component } from "react";
import Header from "./components/header";
import FeaturedStory from "./components/featuredStories";
import TrendingStory from "./components/trendingStories";
import BangladeshStories from "./components/bangladeshStories";
import Entertainment from "./components/entertainment";
import OpinionSection from "./components/opinionSection";
import BottomLineStories from "./components/bottomLineStories";
import EconomicsStories from "./components/economicsStories";
import PhotoGallery from "./components/photoGallery";
import MyFavoriteStories from "./components/myFavotireStories";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <FeaturedStory />
        <TrendingStory />
        <BangladeshStories />
        <MyFavoriteStories />
        <Entertainment />
        <OpinionSection />
        <EconomicsStories />
        <PhotoGallery />
        <BottomLineStories />
        <Footer />
      </div>
    </div>
  );
}

export default App;
