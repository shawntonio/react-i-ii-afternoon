import React, { Component } from 'react';
import '../Card.css';

export default class Card extends Component {

	render(){

		let person = this.props.data[this.props.currentIndex];

		return(
			<div className="card">
				<h2 className="index">{`${this.props.currentIndex + 1}/${this.props.data.length}`}</h2>
				<h2 className="name">{`${person.name.first} ${person.name.last}`}</h2>

				<p className="info"><span className="beforeColon">From: </span><span className="afterColon">{`${person.city}, ${person.country}`}</span></p>
				<p className="info"><span className="beforeColon">Job Title: </span><span className="afterColon">{person.title}</span></p>
				<p className="info"><span className="beforeColon">Employer: </span><span className="afterColon">{person.employer}</span></p>
				
				<p className="info"><span className="beforeColon">Favorite Movies: </span><ol className="favMoviesList">
					<li className="favMoviesItem">{person.favoriteMovies[0]}</li>
					<li className="favMoviesItem">{person.favoriteMovies[1]}</li>
					<li className="favMoviesItem">{person.favoriteMovies[2]}</li>
				</ol></p>

			</div>
		)
	}
}