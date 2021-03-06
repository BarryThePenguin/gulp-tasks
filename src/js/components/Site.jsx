import React from 'react';
import '../../css/main';
import {Header} from './Header';
import {MainMenu} from './MainMenu';
import {Footer} from './Footer';

import content from '../content';

export class Site extends React.Component {
	constructor(props) {
		super(props);
		this.state = {mainmenu: content.mainmenu};
	}
	render() {
		return (
				<div>
					<Header>
						<a href="/"><div className="logo"></div></a>
						<div className="mobile-menu text-uppercase"><h3><a href="/blog">Client</a><a href="#how">Visitor</a></h3></div>
						<MainMenu {...this.state.mainmenu}></MainMenu>
					</Header>
					{this.props.children}
					<div className="search-overlay text-uppercase">
						<div className="search-title"><h2>Search menu</h2><div><i className="fa fa-times-circle fa-2x"></i></div></div>
						<form>
							<div className="form-group">
								<input type="search" name="search" className="form-control search" placeholder="Search..." />
								<span className="form-control submit"><i className="fa fa-search fa-lg"></i></span>
							</div>
						</form>
						<div className="search-results">
							<div className="results-title"><h3>Results</h3><div><i className="fa fa-times-circle fa-lg"></i></div></div>
							<div className="results-content"><ul className="list-unstyled"><li>result 1</li><li>result 2</li><li>result 3</li></ul></div>
							<div className="search-nav small">

								<p>more</p>
							</div>
						</div>
						<div className="search-menu">
							<ul className="list-unstyled">
								<li><a href="/blog">News</a></li>
								<li><a href="/support">Support</a></li>
								<li><a href="/documentation">Documentation</a></li>
								<li><a href="">Contact</a></li>
							</ul>
						</div>
					</div>
					<Footer></Footer>
				</div>
		);
	}
}
