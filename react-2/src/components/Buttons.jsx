import React, { Component } from 'react';

export default class Buttons extends Component {

	render(){
		return(
			<div className="buttonBar">
				<button onClick={() => this.props.navigate(-1)} className="navButton">{"<"}Previous</button>

				<button className="editButton">Edit</button>
				<button onClick={() => this.props.delete(this.props.currentIndex)} className="editButton">Delete</button>
				<button className="editButton">New</button>

				<button onClick={() => this.props.navigate(1)} className="navButton">Next{">"}</button>
			</div>
		)
	}
}