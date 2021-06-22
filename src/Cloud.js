import React, { Component } from 'react'

class SingleCloud extends Component {
    render() {
        return(
            <svg className="cloud" width="313" height="200" viewBox="0 0 626 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="156.5" cy="243.5" r="156.5" fill="#DBDBDB"/>
                <circle cx="469.5" cy="243.5" r="156.5" fill="#DBDBDB"/>
                <circle cx="312.5" cy="156.5" r="156.5" fill="#DBDBDB"/>
                <rect x="156" y="243" width="313" height="157" fill="#DBDBDB"/>
            </svg>
        
        )
    }
}

class Cloud extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         clouds: [0,1,2,3,4]
    //     }
    // }

    render(){
            // let cloudMap = this.state.clouds.map((c) => {
            //     <SingleCloud className="cloud" id={`cloud-${c}`} />
            // })
        return(
            <div className="cloud-container">
                {/* {cloudMap} */}
                <SingleCloud/>
                <SingleCloud />
                <SingleCloud />
                <SingleCloud />
                <SingleCloud />
                <SingleCloud />
                <SingleCloud />
            </div>

        )
    }
}
export default Cloud