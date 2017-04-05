import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

class Widgets extends React.Component{
	constructor(props) {
		super(props)
	}


	render() {
		const Panes = [
		  {title: 'Juno', content: 'I am a Shiba'},
		  {title: 'JayJay', content: 'I am a chihuahua'},
		  {title: 'Zeus', content: 'I am a husky'}
		];
		let names = ['Juno', 'JayJay', 'Nyxie', 'Stella', 'Zeus', 'Togo', 'Miku'];
		return (
			<div>
				<span>Hello from widgets</span>
				<Clock />
				<Weather />
				<Autocomplete names={names}/>
				<Tabs panes={Panes}/>
			</div>
		)
	}
}

export default Widgets;