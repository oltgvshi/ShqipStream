import React from "react";

function StreamerCard(props){
    return(
        <div className="card">
            <img src={props.info.thumbnail} className="thumbnail"></img>

            <div className="info">

                <p className="streamname">{props.info.streamer}</p>
                <img src="https://i.imgur.com/9f0Ndni.png" className="eye"></img>
                <p className="viewers">{props.info.viewers}</p>
            </div>
        </div>
    )
}

export default StreamerCard;