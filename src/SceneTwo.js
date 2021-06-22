import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import todoListImg from './logos/todo-list.png'
import Cloud from './Cloud'
import todoListImg2 from './logos/todo-list-2.png'

export default function SceneTwo() {

    const [fixed, setFixed] = useState(false)
    let animOptions = {
        scrollTrigger: {
            start: "center 30%", 
            end: "center 30%",
            // trigger: ".end-scene-1",
            trigger: "#scrollElement",
            endTrigger: ".third",
            // endTrigger: "#todo-list-img",
            scrub: 2,
            pin: true,
            // toggleActions: "restart pause reverse pause",
            markers: true
        },
        x:0,
        scale: 1
    }
    const animElements = [
        '.title-2', '.secondary', '.third', '#todo-list-img', '.description'
    ]
    

    useEffect(() => {
        //component mounts, run this
        gsap.registerPlugin(ScrollTrigger)
        // let fromObj = {x: -500, scale: 0}
        // let toObj = {x: 0, scale: 1}
        // let t2 = gsap.timeline(
        //     {
        //         scrollTrigger: {
        //             start: "top 80%", 
        //             end: "top 80%",
        //             onEnter: () => {
        //                 setFixed(true)
        //                 console.log(true)
        //             },
        //             onLeaveBack: () => {
        //                 setFixed(false)
        //                 console.log(false)
        //             },
                    
        //             // onLeave: () => setFixed(false),
        //             // trigger: ".end-scene-1",
        //             trigger: ".title-2",
        //             // trigger: "#scrollElement",
        //             endTrigger: ".third",
        //             // endTrigger: ".title-2",

        //             // endTrigger: "#todo-list-img",
        //             // scrub: 3,
        //             pin: true,
        //             markers: true,
        //             // toggleActions: "play none none none",
        //             pinSpacing: false
        //         },
        //         duration: 0.5,
        //         x:0,
        //         scale: 1
        //     }
        // )
        // t2.fromTo('.title-2', fromObj, toObj)
        // t2.fromTo('.secondary', fromObj, toObj)
        // t2.fromTo('.third', fromObj, toObj)
        // t2.fromTo('.image', fromObj, toObj)
        // t2.fromTo('.description', fromObj, toObj)
        // gsap.to('.image', {
        //     scrollTrigger:{
        //         pin: true,
        //         pinSpacing: false,
        //         scrub: 1,
        //         start: "top 50%", 
        //         end: "top 50%",
        //         markers: true,
        //         trigger: ".end-scene-1",
        //         endTrigger: ".white"
        //     },
        //     y: 100
        // })
        // gsap.to('.description', {
        //     scrollTrigger:{
        //         pin: true,
        //         pinSpacing: false,
        //         scrub: 1,
        //         start: "top 50%", 
        //         end: "top 50%",
        //         markers: true,
        //         trigger: ".end-scene-1",
        //         endTrigger: ".white"
        //     },
        //     y: 100
        // })
        gsap.to('.cloud', {
            scrollTrigger:{
                pin: true,
                pinSpacing: false,
                scrub: 1,
                start: "top 50%", 
                end: "top 50%",
                markers: true,
                trigger: ".end-scene-1",
                endTrigger: ".white"
            },
            y: 0,
            x: 1000
        })
        // t2.fromTo('.title-2', fromObj, animOptions)
        // t2.fromTo('.secondary', fromObj, animOptions)
        // t2.fromTo('.third', fromObj, animOptions)
        // t2.fromTo('.image', fromObj, animOptions)
        // t2.fromTo('.description', fromObj, animOptions)

                // const t2 = gsap.timeline()
        // gsap.fromTo('.title-2', fromObj, {
        //     scrollTrigger: {
        //         pin: true,
        //         scrub: 2,
        //         start: "top 30%", 
        //         end: "top 30%",
        //         markers: true,
        //         trigger: "#scrollElement",
        //         // endTrigger: "#todo-list-img-2",
        //         endTrigger: ".white",

        //     },
        //     y: 0,
        //     x: 0,
        //     scale:1
        // })
        // gsap.fromTo('.title-2', fromObj, animOptions)

        // .to('.title-2', animOptions)

        // gsap.from('.scene-2', {x: -1000})
        
        // gsap.to('.scene-2', animOptions)
        // let title = gsap.fromTo('.title-2', {x: -1000}, {
            // scrollTrigger: {
            //     scrub: 3
            // },
            // x: 0,
            // scale: 1
        // })
        

        for(let e = 0; e < animElements.length; e++){
            animOptions.scrollTrigger.scrub = e
            if(e > 0) {
                // animOptions.scrollTrigger.trigger = animElements[e -1]
                // animOptions.scrollTrigger.end = "+=1000px"
            }
            gsap.fromTo(animElements[e], {x: -1000, scale: 0}, animOptions)
        }
        // t2.tweenTo('.title-2', {
        //     ScrollTrigger: {
        //         pin: true,
        //         start: "top 30%",
        //         end:'top 70%',
        //         endTrigger: ".white",
        //         markers: true,
        //         scrub: 2
        //     },  
        //     x: 0,
        //     y: 0,
        //     scale: 1
        // })
        // gsap.to('#todo-list-img-2', {
        //     ...animOptions
            
        // })
        
    }, [])
    
    return(
        <div style={{color: "#fff"}} className="container scene-2">
            <Cloud/> 
            
            <div className="t2-title-block" >
                <h1 className="title-2">Project One</h1>
                <h2 className="secondary">To Do List Application</h2>
                <h3 className="third">MongoDB, ExpressJS, ReactJS, NodeJS</h3>
            </div>
                
            <div >
            
                <div className="grid-80-20 container">
                    <img className="image" id="todo-list-img" src={todoListImg}  />
                    <h3 className="description">Create a New Project</h3>
                </div>
                <div className="grid-80-20 container">
                    <img className="image" id="todo-list-img-2" src={todoListImg2}  />
                    <h3 className="description">Add categories and new tasks to the project</h3>
                </div>
                <div className="end-scene-2"></div>
            </div>
        </div>
    )
}