import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import mongoDBImg from './logos/mongodb.png'
import expressImg from './logos/express-js.png'
import nodeImg from './logos/node-2.png'
import reactImg from './logo.svg'

export default function SceneOne() {

    // const [state, setState] = useState()

    useEffect(() => {
        //component mounts, run this
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.scene-1', {
            scrollTrigger: {
                start: "top 0px", 
                end: "top 0px",
                // trigger: ".scene-1",
                trigger: "#scrollElement",
                endTrigger: ".title-2",
                // endTrigger: ".orange",
                scrub: 1,
                pin: true,
                // toggleActions: "restart pause reverse pause",
                // markers: true
            },
            scale: .1,
            // duration: 1
        })
    }, [])

    return(
        <div>
            <div className="scene-1">
                <h1 className="title " >Trevor J Vaughn Hauck</h1>
                <h3>Full Stack Developer</h3>
                <img className="logo" alt="MongoDB Logo" src={mongoDBImg} />
                <img className="logo" alt="ExpressJS Logo" src={expressImg} />
                <img className="logo" alt="ReactJS Logo" src={reactImg} />
                <img className="logo" alt="NodeJS Logo" src={nodeImg} />
                <br />
                <h1>Scroll Down</h1>
                <h2>🔽</h2>
                <div className="end-scene-1"></div>
            </div>
        </div>
    )
}