import React from "react";
import girl from "./images/girl4.png"
import dotted from "./images/hero-dots.png"



export default function Thsection(){
    return(
        <section className="third-section">
            <article className="th-left-side">
                <img className="th-img" src={girl} />
            </article>
            <article className="th-right-side">
                <h2>Best Sell Since 2021</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis, vitae vulputate velit gravida. Sed molestie libero ut lectus accumsan aliquet. Praesent a orci at ante feugiat suscipit. Maecenas orci mi, finibus et viverra sit amet, consequat quis libero. Maecenas magna nibh, tempor non pretium id, </p>
            </article>
            <div className="stats-div">
                <div className="first">
                    <span>2019</span>
                    <p>All founded</p>
                </div>
                <div className="second">
                    <span>9090+</span>
                    <p>Product Sold</p>
                </div>
                <div className="third">
                    <span>2019</span>
                    <p>Best Reviews</p>
                </div>
            </div>
            <img className="dotted1" src={dotted} alt="dotted-img"/>
            <img className="dotted2" src={dotted} alt="dotted-img"/>
            <img className="dotted3" src={dotted} alt="dotted-img"/>
            
        </section>
    )
}