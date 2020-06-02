import React, { Component } from 'react';
import {RoomContext} from "../context";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {name, gretting} = this.context;
        return (
            <div>
                hello from featured room {name}
            </div>
        )
    }
}
