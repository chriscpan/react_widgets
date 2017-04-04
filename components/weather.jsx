import React from 'react';

class Weather extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			weather: {}
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			let request = new XMLHttpRequest();
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			let url = "http://api.openweathermap.org/data/2.5/weather?lat=" 
			 + lat + "&lon=" + lon + '&APPID=' + Config.weatherKey;

			request.open('GET', url, true);
			request.onload = (resp) => {
				console.log(request.status, 'this is the status');
				if (request.status >= 200 && request.status < 400) {
					let weatherParams = JSON.parse(resp.currentTarget.response);
					this.setState({
						weather: weatherParams
					})
				} else {
					console.log('error');
				}
			}
			request.onerror = function() {
				console.log('connection error');
			}

			request.send();
		})
	}
	render() {
		if (this.state.weather.main) {
			let degrees = (this.state.weather.main.temp - 273) * 1.8 + 32
			return (
				<div>
					'This is the weather widget'
					<span>City: {this.state.weather.name}</span>
					<span>Degrees: {degrees.toFixed(2)}</span>
				</div>
			)			
		} else {
			return (
				<div>'Loading weather.. Please allow geolocation'</div>
			)
		}
	}
}

export default Weather;