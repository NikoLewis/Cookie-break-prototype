var React = require('react');
import './App.css';

var FortuneCookie = React.createClass({
	getInitialState:function(){
		return {}
	},
	componentWillMount: function(){

	},
	render: function(){
		return (
			<div id="fortune-area">
				<div className="output">{this.props.fortune} </div>
				<div className="output">Chinese Lesson: {this.props.lesson}</div>
				<div className="output">Lotto: {this.props.lotto} </div>

			</div>
		)
	}
})

export default FortuneCookie;