import React from 'react';

import ImageCard from './ImageCard';
const GifList = (props) => {
    const gifs = props.gifs.map((gif, index) => {
        return <ImageCard key={index} image={gif.images.downsized_large.url} title={gif.title} />
    })
    return (
        <div>
            {gifs}
        </div>
    )
}

export default GifList;