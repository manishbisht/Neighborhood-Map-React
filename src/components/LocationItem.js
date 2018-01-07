/**
 * Created by manish on 6/1/18.
 */
import React from 'react';

class LocationItem extends React.Component {
    render() {
        return (
            <li className="box" onClick={this.props.openInfoWindow.bind(this, this.props.data.marker)}>{this.props.data.longname}</li>
        );
    }
}

export default LocationItem;