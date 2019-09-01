import React from 'react';

export default function GifList(props) {
    return(
      <div>
      <img src={props.gif.images.original.url} alt=''/>
      </div>
    )
}
