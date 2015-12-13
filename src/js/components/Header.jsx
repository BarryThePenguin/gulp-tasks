/* eslint-env browser */
import React from 'react';
import classNames from 'classnames';
import throttle from 'lodash/function/throttle';

export class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleScroll = throttle(this.handleScroll.bind(this), 250);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		this.setState({pageYOffset: window.pageYOffset, innerHeight: window.innerHeight});
	}

	render() {
		const navClass = classNames({
			'nav-bar': true,
			'small': this.state.pageYOffset > this.state.innerHeight
		});

		return (
			<header className={navClass}>
				{this.props.children}
			</header>
		);
	}
}
