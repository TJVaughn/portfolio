import React, { Component } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import mongoDBImg from './logos/mongodb.png'
// import expressImg from './logos/express-js.png'
// import nodeImg from './logos/node-2.png'
// import reactImg from './logo.svg'
import SceneOne from './SceneOne'
import SceneTwo from './SceneTwo'
// export default function ScrollComponent() {

//     const [scroll, setScroll] = useState()

//     const handleScroll = (evt) => {
//         console.log(evt)
//         setScroll(evt.target)
//     }
//     useEffect(() => {
//         //component mounts, run this
//     }, [setScroll, handleScroll])
   
//     return(
//         <div onScroll={handleScroll}>
//             scroll: {scroll}
//         </div>
//     )
// }


class ScrollComponent extends Component {
    
    componentDidMount(){
        // gsap.registerPlugin(ScrollTrigger)
        // gsap.to('.scene-1', {
        //     scrollTrigger: {
        //         start: "top 200px", 
        //         end: "top 200px",
        //         trigger: ".scene-1",
        //         endTrigger: ".end-scene-1",
        //         scrub: 1,
        //         pin: true,
        //         // toggleActions: "restart pause reverse pause",
        //         markers: true
        //     },
        //     scale: .1,
        //     // duration: 1
        // })
        // gsap.to('.blue', {
        //     duration: 2, 
        //     x: 300, 
        //     rotation: 360, 
        //     repeat: 0, 
        //     repeatDelay: 2,
        //     scrollTrigger: {
        //         trigger: ".orange",
        //         endTrigger: ".green",
        //         toggleActions: "restart pause reverse pause",
        //         start: "top 20px",
        //         end: "bottom 50%",
        //         // end: () => "+=" + document.querySelector('.green').offsetWidth,
        //         markers: true

        //     }
        // })
        // gsap.to('.box', {
        //     duration: 2, 
        //     x: 0, 
        //     rotation: 0, 
        //     repeat: -1, 
        //     repeatDelay: 2, 
        //     delay: 2,
        //     // scrollTrigger: ".green"
        // })
        // gsap.to('.green', {
        // })
    }
    render(){
        return (
            <div>
                <div id="scrollElement"></div>
                <SceneOne />
                <SceneTwo />
                {/* scroll: {this.props.scrollValue} */}
                <div className="orange"></div>

                <div className="box blue"></div>
                <div className="end-scene-2"></div>

                <div className="box green"></div>
                <div className="box yellow"></div>
                <div className="box white"></div>
                <div className="box purple"></div>
            </div>
        )
    }
}

export default ScrollComponent