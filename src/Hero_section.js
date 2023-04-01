import React from "react";
import hero_img from "./images/hero-girl.png"
import hero_design from "./images/hero-waves.png"
import hero_dots from "./images/hero-dots.png"



export default function Hero_section() {
    return (
        <section className="hero--section">
             <article className="left-side">
                <h1 className="hero-title">The Best Store To Shop Online <span>ALL IN ONE</span></h1>
                <p className="hero-pa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis</p>
                <button className="hero-btn">Shop Now</button>


             </article>
             <article className="right-side">
                <img className="hero-img" src={hero_img} alt="girl"/>
             </article>
            <img className="hero-design-img" src={hero_design} />
            <img className="hero-dots-1 hero-dots" src={hero_dots} />
            <img className="hero-dots-2 hero-dots" src={hero_dots} />
            <img className="hero-dots-3 hero-dots" src={hero_dots} />
            <img className="hero-dots-4 hero-dots" src={hero_dots} />
            <img className="hero-dots-5 hero-dots" src={hero_dots} />
            <img className="hero-dots-6 hero-dots" src={hero_dots} />
        </section>
    )
}