import React from 'react';

class ImageCard extends React.Component {
    render() {
        const { title, image } = this.props;
        return (
            <div style={{textAlign: 'center' }}>
                <img style={{ width: '30%' }} ref={this.imageRef} alt={title} src={image} />
            </div>
        )
    }
}
export default ImageCard;