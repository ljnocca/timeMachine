import React from 'react'

var today = new Date();
var year = today.getFullYear();

var TimeMachine = React.createClass({
	getInitialState: function(){
		return{	
			yearDisplayed: year
			}
	},
	yearBack: function(){
		this.state.yearDisplayed -= 1
		this.setState({
			yearDisplayed: this.state.yearDisplayed
		})
	},
	startBackward: function(){
		this.back = setInterval(this.yearBack, 1000)

	},
	yearForward: function(){
		this.state.yearDisplayed += 1
		this.setState({
			yearDisplayed: this.state.yearDisplayed
		})
	},
	startForward: function(){
		this.start = setInterval(this.yearForward, 1000)

	},
	yearStop: function(){
		clearInterval(this.start)
		clearInterval(this.back)
	},
	render: function(){
		return(
			<div className="outterDiv">
				<h1>The "easy" Time Machine</h1>
				<div className="counter">
					<h1>{this.state.yearDisplayed}</h1>
				</div>
				<button className='back' onClick ={this.startBackward}></button>
				<button className='stop' onClick = {this.yearStop}></button>
				<button className ='start' onClick ={this.startForward}></button>
			</div>
			)
	}
})

export default TimeMachine
