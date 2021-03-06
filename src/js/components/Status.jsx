import React from 'react';

export class Status extends React.Component {

	render() {
		return (
			<div className="site-wrapper">
				<h1>System Status</h1>
				<div><p>The following is a list of our systems and their current status - if there is a problem with one of your systems or website that is not listed here, please contact us via the <a href="/support">support request form</a></p></div>
				<dl className="dl-horizontal">
					<dt>Application name</dt><dd>Application status</dd>
					<dt>Application name</dt><dd>Application status</dd>
					<dt>Application name</dt><dd>Application status</dd>
					<dt>Application name</dt><dd>Application status</dd>
					<dt>Application name</dt><dd>Application status</dd>
				</dl>
			</div>
		);
	}
}
