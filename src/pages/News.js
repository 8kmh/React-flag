import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const News = () => {
  return (
    <div className="news-container">
      <Navigation />
      <Logo />
      <h1>News</h1>

      <form>
        <input type="text" placeholder="Nom" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      <ul></ul>
    </div>
  );
};

export default News;
