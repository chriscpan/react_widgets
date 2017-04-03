import React from 'react';

class Weather extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(navigator.geolocation, 'location');
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position, 'position');

			let request = new XMLHttpRequest();
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			console.log(lat, 'lat');
			console.log(lon, 'lon');
			let url = "api.openweathermap.org/data/2.5/weather?lat=" 
			 + lat + "&lon=" + lon + '&APPID=';

			 console.log(url);
			request.open('GET', url, true);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					console.log('success');
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
		return (
			<div>
				'This is the weather widget'
			</div>
		)
	}
}

export default Weather;