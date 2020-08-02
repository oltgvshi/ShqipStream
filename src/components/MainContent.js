import React from "react";
import StreamerCard from "./StreamerCard";
import data from './data.json'

function MainContent(){
    return (
        <div className="maini">
                 
                 
 {                data.map( data => 
                <div>

                <StreamerCard 
                        thumbnail={data.thumbnail} 
                        streamer={data.streamer} 
                        viewers={data.viewers} 
                />

                </div>
            
)
}
            

        </div>
        
    )
}

export default MainContent;