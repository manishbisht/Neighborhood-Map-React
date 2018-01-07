/**
 * Created by manish on 6/1/18.
 */
import React, {Component} from 'react';
import LocationItem from './LocationItem';

class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'locations': '',
            'query': ''
        };

        this.filterLocations = this.filterLocations.bind(this);
    }

    renderResults() {
        return (
            <LocationItem data={this.state.locations}/>
        );
    }

    filterLocations(event) {
        this.props.closeInfoWindow();
        const {value} = event.target;
        var locations = [];
        this.props.alllocations.forEach(function (location) {
            if (location.longname.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                location.marker.setVisible(true);
                locations.push(location);
            } else {
                location.marker.setVisible(false);
            }
        });

        this.setState({
            'locations': locations,
            'query': value
        });
    }

    componentWillMount() {
        this.setState({
            'locations': this.props.alllocations
        });
    }

    render() {
        var locationlist = this.state.locations.map(function (listItem, index) {
            return (
                <div>
                    <LocationItem key={index} openInfoWindow={this.props.openInfoWindow.bind(this)} data={listItem}/>
                </div>
            );
        }, this);

        return (
            <div className="search">
                <input id="search-field" className="search-field" type="text" placeholder="Filter"
                       value={this.state.query} onChange={this.filterLocations}/>
                <ul>
                    {locationlist}
                </ul>
            </div>
        );
    }
}

export default LocationList;