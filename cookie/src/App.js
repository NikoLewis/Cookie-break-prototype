var React = require('react');
var ReactDOM = require('react-dom');
//var $ = require('jQuery');
import Hero from './heroarea'
import './App.css';
import FortuneCookie from './cookie'

var App= React.createClass({
  getInitialState: function(){
  	return {fortune: ''}
  },
  getNewFortune: function(){
  	var request = new XMLHttpRequest();
	request.open('GET', 'http://fortunecookieapi.com/v1/cookie', true);
	var self = this;
	request.onload = function() {
  		if (request.status >= 200 && request.status < 400) {
  			var response = JSON.parse(request.responseText);
  			console.log('RESPONSE', response);
  			console.log('RESPONSE FORTUNE', response[0].fortune);
  			console.log('RESPONSE LESSON', response[0].lesson);
  			console.log('RESPONSE LOTTO', response[0].lotto);
  			var fortune = response[0].fortune.message;
  			var lesson = response[0].lesson.pronunciation + ' = ' + response[0].lesson.english;
  			
  			var lotto = response[0].lotto.numbers;
    		console.log(response[0]);
    		self.setState({fortune:fortune, lesson:lesson,lotto:lotto});
  		} else {
  			console.log('error')
  		}
  	}
  	request.onerror = function() {
  		// There was a connection error of some sort
	};
	request.send();
  },
  render: function() {
    return (
      <div >
        
        <Hero />
        <h1 id="heroheader">Cookie &lt;br/&gt; </h1>

        <center><button onClick={this.getNewFortune}> Get Fortune </button></center>
        <FortuneCookie fortune={this.state.fortune} lesson={this.state.lesson} lotto={this.state.lotto} />
        
      </div>
    )
  }
})



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
