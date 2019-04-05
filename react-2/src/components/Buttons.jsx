import React, { Component } from 'react';
import '../Buttons.css';

export default class Buttons extends Component {

	render(){
		return(
			<div className="buttonBar">
				<button onClick={() => this.props.navigate(-1)} className="navButton">{"<"}Previous</button>

				<div className="blueButtons">
					<button onClick={() => this.props.toggleForm()} className="editButton">Edit</button>
					<button onClick={() => this.props.delete(this.props.currentIndex)} className="editButton">Delete</button>
					<button onClick={() => this.props.toggleForm()} className="editButton">New</button>
				</div>

				<button onClick={() => this.props.navigate(1)} className="navButton">Next{">"}</button>

			</div>
		)
	}
}