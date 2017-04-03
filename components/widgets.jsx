import React from 'react';
import Clock from './clock';
import Weather from './weather';

class Widgets extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<span>Hello from widgets</span>
				<Clock />
				<Weather />
			</div>
		)
	}
}

export default Widgets;