import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Widgets extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		let names = ['Juno', 'JayJay', 'Nyxie', 'Stella', 'Zeus', 'Togo', 'Miku'];
		return (
			<div>
				<span>Hello from widgets</span>
				<Clock />
				<Weather />
				<Autocomplete names={names}/>
			</div>
		)
	}
}

export default Widgets;