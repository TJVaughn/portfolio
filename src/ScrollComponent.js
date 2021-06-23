import React from 'react'
import SceneOne from './SceneOne'
import SceneTwo from './SceneTwo'
export default function ScrollComponent() {

    return(
        <div>
            <div id="scrollElement"></div>
            <SceneOne />
            <SceneTwo />
            {/* <div>
                <p>
                    I'm really confused
                </p>
            </div> */}
            {/* scroll: {this.props.scrollValue} */}
            {/* <div className="orange"></div> */}

            {/* <div className="box blue"></div> */}
            {/* <div className="end-scene-2"></div> */}

            {/* <div className="box green"></div> */}
            {/* <div className="box yellow"></div> */}
            <div className="box marker"></div>
            {/* <div className="box purple"></div> */}
        </div>
    )
}
