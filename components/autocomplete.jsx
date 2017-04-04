import React from 'react';

class Autocomplete extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			searchWord: ''
		}
	}

	search(ev) {
		let searchWord = ev.currentTarget.value;

		this.setState({
			searchWord: searchWord
		});
	}

	matches() {
		let names = this.props.names;
		const matchedNames = [];

		names.forEach(name => {
			let subStr = name.slice(0, this.state.searchWord.length).toLowerCase();
			if (subStr === this.state.searchWord) {
				matchedNames.push(name);
			}
		})

		return matchedNames;
	}

	copyName(ev) {
		this.setState({
			searchWord: ev.currentTarget.innerText
		})
	}

	render() {
		let names = this.matches();
		return (
			<div>Hello from Autocomplete
				<input onChange={this.search.bind(this)} value={this.state.searchWord} type="text" placeholder="Search.." />
					<ul>
						{
							names.map((word,idx) => <li key={idx} onClick={this.copyName.bind(this)}>{word}</li>)
						}
					</ul>			
			</div>
		)
	}
}

export default Autocomplete;