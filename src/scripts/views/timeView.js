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
		this.back = setInterval(this.yearBack, 500)
	},
	yearForward: function(){
		this.state.yearDisplayed += 1
		this.setState({
			yearDisplayed: this.state.yearDisplayed
		})
	},
	startForward: function(){
		this.start = setInterval(this.yearForward, 500)
	},
	yearStop: function(){
		clearInterval(this.start)
		clearInterval(this.back)
	},
	render: function(){
		return(
			<div className="outterDiv">
				<h1>Time Machine</h1>
				<div className="counter">
					<h1 className='yearText'>{this.state.yearDisplayed}</h1>
				</div>
				<button className='back' onClick ={this.startBackward}>BACK</button>
				<button className='stop' onClick = {this.yearStop}>STOP</button>
				<button className ='start' onClick ={this.startForward}>START</button>
			</div>
			)
	}
})

export default TimeMachine
