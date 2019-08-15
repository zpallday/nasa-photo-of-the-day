

import React from "react";
function Photo({imgUrl}){

    return (
        <div className="photo-of-day">
            <img style={{ maxWidth: "100%" }} src={imgUrl} alt={'Beautiful views from outer space'} />
        </div>

    );

}



export default Photo; 