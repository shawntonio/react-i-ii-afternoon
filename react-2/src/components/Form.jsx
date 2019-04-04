import React, { Component } from 'react';

export default class Form extends Component {

	state = {
		id: this.props.data.length + 1,
		name: {first: "", last: ""},
		city: "",
		country: "",
		employer: "",
		title: "",
		favoriteMovies: ["","",""]
	}

	inputHandler(prop, e){
		this.setState({[prop]: e})
	}
	
	editCardFn(){
		const card = this.state
		card.id = this.props.currentIndex + 1
		this.props.editCard(card, this.props.currentIndex)
	}

	render(){

		return (
			<div className="form">
				<div className="formInput">
					First Name:<input onChange={(e) => this.inputHandler("name",{first: e.target.value, last: this.state.name.last})} type="text" className="formInputBox"/>
				</div>
				
				<div className="formInput">
					Last Name:<input onChange={(e) => this.inputHandler("name",{first: this.state.name.first, last: e.target.value})} type="text" className="formInputBox"/>
				</div>

				<div className="formInput">
					City: <input onChange={(e) => this.inputHandler("city", e.target.value)} type="text" className="formInputBox"/>
				</div>

				<div className="formInput">
					Country: <input onChange={(e) => this.inputHandler("country",e.target.value)} type="text" className="formInputBox"/>
				</div>

				<div className="formInput">
					Employer: <input onChange={(e) => this.inputHandler("employer",e.target.value)} type="text" className="formInputBox"/>
				</div>

				<div className="formInput">
					Title: <input onChange={(e) => this.inputHandler("title",e.target.value)} type="text" className="formInputBox"/>
				</div>

				<div className="formInput moviesInput">
					Favorite Movies: 
					<input onBlur={(e) => this.inputHandler("favoriteMovies",[e.target.value, this.state.favoriteMovies[1], this.state.favoriteMovies[2]])} type="text" className="movieInputBox"/> 
					<input onBlur={(e) => this.inputHandler("favoriteMovies",[this.state.favoriteMovies[0],e.target.value,this.state.favoriteMovies[2]])} type="text" className="movieInputBox"/> 
					<input onBlur={(e) => this.inputHandler("favoriteMovies",[this.state.favoriteMovies[0],this.state.favoriteMovies[1],e.target.value])} type="text" className="movieInputBox"/>
				</div>

				<button onClick={() => this.props.addPerson(this.state)} className="addPerson">Add</button>

				<button onClick={() => this.editCardFn()} className="editCard">Edit</button>
			</div>

)
	}
}