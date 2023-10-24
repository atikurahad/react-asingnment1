import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <h1 id="about"> About Us </h1>
      <section className="about-dev">
        <img src="https://www.developerquotes.com.au/wp-content/uploads/2019/10/about-sub-pic-1.png"></img>
        <article>
          <p className="dev-speech">
            Think about the lifestyle we follow today we are always looking at
            the small screen and big screens, and then take a break to look at
            more giant screens. The future of software developers is safe and
            sound as long as developers keep thinking, “How can we make this
            better?” and users keep asking, “what is going to be the next big
            thing?”
          </p>
        </article>
      </section>
    </>
  );
};

export default About;
