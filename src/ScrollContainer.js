import React, { Component, useEffect, useState } from 'react'

import ScrollComponent from './ScrollComponent';

class ScrollContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            scroll: 10
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }
  
    handleScroll(evt) {
        console.log(evt.srcElement.body)
        console.log(evt.srcElement.body.scrollTop)
        this.setState({scroll: evt.srcElement.body.scrollTop})
    }
    render() {
        return (
            <div>
                <ScrollComponent scrollValue={this.state.scroll} onScroll={this.handleScroll}/>
            </div>
        )
    }
}

export default ScrollContainer

// export default function ScrollContainer() {
//     const [scroll, setScroll] = useState(0)

//     useEffect(() => {
//         window.onscroll = () => {
//             console.log(window.pageYOffset)
//             setScroll(window.pageYOffset)
//         }
//     }, [])
//     return (
//         <div>
//             <ScrollComponent scrollValue={scroll}/>
//         </div>
//     )
// }