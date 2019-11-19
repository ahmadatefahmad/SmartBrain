import React from "react";
import Tilt from 'react-tilt';
import brain from './Logo.svg';

const Logo = () => {
    return(
        <div className=" center ma4 mt50">
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img alt="smart brain logo" src={brain}/> </div>
            </Tilt>
        </div>
        )
}

export default Logo; 