import React from 'react';

class Tabs extends React.Component{
	constructor(props) {
		super(props)

		this.state = ({
			tabNumber: 0
		})
	}

	showTabContent(ev) {
		let innerText = ev.currentTarget.innerText;

		let tabNumber;

		this.props.panes.forEach((pane, idx) => {
			if (pane.title === innerText) {
				tabNumber = idx
				return;
			}
		})
		this.setState({tabNumber})
	}
	
	render() {
		let titles = this.props.panes.map(pane => pane.title)
		let content = this.props.panes[this.state.tabNumber].content

		return (
			<div>Hello from Tabs
				<ul>
					{ 
						titles.map((title, idx) => <li key={idx} onClick={this.showTabContent.bind(this)}>{title}</li>) 
					}
				</ul>
				<div>
					{ content }
				</div>
			</div>
		)
	}
}

export default Tabs;