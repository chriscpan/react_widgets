import React from 'react';

class Clock extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			time: JSON.stringify(new Date())
		}
	}

	componentDidMount() {
		this.timer = setInterval(this.tick.bind(this), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick() {
		this.setState({
			time: JSON.stringify(new Date())
		})
	}

	render() {
		return (
			<div className='clock'>
				<h1>This is a clock</h1>
				<span>{this.state.time}</span>
			</div>
		)
	}
}

export default Clock;