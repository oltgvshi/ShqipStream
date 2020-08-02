import React from "react";

function StreamerCard(props){
    return(
        <div className="card">
            <img src={props.thumbnail} className="thumbnail" alt="thumbnail"></img>

            <div className="info">

                <p className="streamname">{props.streamer}</p>
                <img src="https://i.imgur.com/9f0Ndni.png" className="eye" alt="eyeicon"></img>
                <p className="viewers">{props.viewers}</p>
            </div>
        </div>
    )
}

export default StreamerCard;