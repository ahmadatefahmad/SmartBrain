import React from 'react';
import './Imagelinkform.css'
const ImageLinkForm = ({onInputChange,onSubmit}) =>{
    return (
        <div>
            <p className="f3 cg">
                {'The Magic Brain will detect faces in your picture, Give it a try!'}
            </p>
            <div className="center">
                <div className=" center form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" placeholder="URL of an image"input="text" onChange={onInputChange}/>
                    <button className="w-30 frow f4 ml2 link ph3 pv2 dib white btn" onClick={onSubmit}>Detect!</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;