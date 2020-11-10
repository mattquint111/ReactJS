const { Component } = require("react")

class PhotoList extends Component {

    render() {

        const photoItems = this.props.photos.map((photo) => {
            return (
                <li key = {photo.id} >
                    <label>{photo.title}</label>
                    <img src={photo.thumbnailUrl} ></img>
                </li>
            );
        });

        return(
            <ul>{photoItems}</ul>
        ) 
    }
}

export default PhotoList