import React from "react";
import girl1 from "./images/girl1.png"
import girl2 from "./images/girl2.png"
import girl3 from "./images/girl3.png"
import dots from "./images/hero-dots.png"


export default function Ssection() {
    return (
        <section className="second-section">
            <article className="top-side">
                <h2 className="ss-title">New Collection</h2>
                <p className="ss-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis </p>
            </article>
            <article className="bottom-side">
                <div className="col-img1">
                    <img className="ss-img" src={girl1} />
                    <button className="ss-btn btn1">SWEATER</button>
                </div>
                <div className="col-img2">
                    <img className="ss-img" src={girl2} />
                    <button className="ss-btn btn2">SWEATER</button>
                </div>
                <div className="col-img3">
                    <img className="ss-img" src={girl3} />
                    <button className="ss-btn btn3">SWEATER</button>
                </div>
            </article>
            <img className="ss-img-dot" src={dots} />
        </section>
    )
}