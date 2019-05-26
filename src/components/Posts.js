import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/144069dc-7390-4022-aa0f-abba022d3a2f/spec.jpg?auto=compress%2Cformat" />
            </div>
        )
    }
}