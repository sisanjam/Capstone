import React, { useState } from "react";
import "../assets/wiki.css";
import Header from "../components/header";
import Footer from "../components/footer";
import stress from "../assets/stress.jpg";

const Wiki = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchTerm.trim()) {
      // Redirect to Google search or Wikipedia
      //const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
       // searchTerm
     // )}`;
      const wikiSearchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
        searchTerm
      )}`;

 

      // Uncomment the next line to use Wikipedia search instead
     //window.open(googleSearchUrl, "_blank");
      window.open(wikiSearchUrl, "_blank");
    }
  };

  return (
    <main>
      <Header />
      <section className="wiki-intro">
        <h1>Welcome to the MindReader Wiki</h1>
        <p>
          Explore articles on mental health topics, definitions, learning about
          strategies, or to find resources
        </p>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search the wiki..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </section>

      <section className="wiki-categories">
        <h2>Wiki Categories</h2>
        <div className="categories-list">
          <article className="category">
            <i className="fas fa-brain fa-3x"></i>
            <h3>Understanding Mental Health</h3>
            <p>
              Mental Health is something that we all might face one day, so it's
              better to educate ourselves about what effects it could have on
              the human body.
            </p>
            <a href="#">
              Explore Category <i className="fas fa-arrow-right"></i>
            </a>
          </article>
          <article className="category">
            <i className="fas fa-heartbeat fa-3x"></i>
            <h3>Self-Care Strategies</h3>
            <p>
              Discover effective self-care techniques to improve your mental
              well-being and manage stress.
            </p>
            <a href="#">
              Explore Category <i className="fas fa-arrow-right"></i>
            </a>
          </article>
          <article className="category">
            <i className="fas fa-hands-helping fa-3x"></i>
            <h3>Support & Resources</h3>
            <p>
              Find support groups, helplines, and resources for getting help
              with mental health challenges.
            </p>
            <a href="#">
              Explore Category <i className="fas fa-arrow-right"></i>
            </a>
          </article>
        </div>
      </section>

      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="articles-grid">
          <article className="article-preview">
            <img src = {stress} alt="Stress Management" height="30px"/>
            <div className="article-content">
              <h3>Managing Stress</h3>
              <p>
                Learn effective techniques to manage day-to-day stress and
                improve your wellbeing.
              </p>
              <a href="#">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
          <article className="article-preview">
            <img src="../images/anxiety.jpg" alt="Understanding Anxiety" />
            <div className="article-content">
              <h3>Understanding Anxiety</h3>
              <p>
                Gain insights into the symptoms, causes, and treatments for
                anxiety disorders.
              </p>
              <a href="#">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
          <article className="article-preview">
            <img src="../images/mindfulness.jpg" alt="Mindfulness Meditation" />
            <div className="article-content">
              <h3>Mindfulness Meditation</h3>
              <p>
                Discover the benefits of mindfulness and learn how to
                incorporate it into your daily life.
              </p>
              <a href="#">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Wiki;
