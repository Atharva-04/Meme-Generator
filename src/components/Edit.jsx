import React, { useState,createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from './Text';
import '../components/Edit.css'
import {exportComponentAsJPEG}from "react-component-export-image"
function Edit() {
  const [params] = useSearchParams();
  const [count , setCount] = useState(0);
  const addText = () => {setCount(count+1)}
  const memeRef = createRef()
  const imgStyle = {
    width: "50%" ,
    height:"35rem"
  };

  return (
    <div >
      <div ref= {memeRef} className='meme'>
      <img src={params.get("url")} style={imgStyle} />
      {
        Array(count).fill(0).map(e => <Text />)
      }
      </div>
      <button className="success-button" onClick={addText}>Add a Text</button>
      <button className="success-button" onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</button>
    </div>
  );
}

export default Edit;
