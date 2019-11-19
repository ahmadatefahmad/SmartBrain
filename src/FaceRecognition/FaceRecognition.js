import React from 'react';
import './facerecognition.css'
const FaceRecognition =({imageUrl,box})=>{
    return(
        <div className=" ma center">
            <div className="absolute mt3 br2 mb3 shadow-2">
            <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
            <div className="box" style={{left:box.leftCol, right:box.rightCol, bottom:box.bottomRow, top:box.topRow}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;