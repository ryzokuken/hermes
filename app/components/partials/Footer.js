import React from 'react';

const Footer = () =>
	<div className="footer bar">
		<ul>
			<li className="list-item"><a href="https://github.com/osdc/hermes/tags">Changelog</a></li>
			<li className="list-item"><a href="https://github.com/osdc/hermes">Github</a></li>
			<li className="list-item"><a href="https://raw.githubusercontent.com/osdc/hermes/master/AUTHORS">{ /* TODO: Add a modal-like display of contributors rather than redirecting to Github */ }Contributors</a></li>
			<li className="list-item">License: GPL-3.0</li>
		</ul>
		<span className="bar-right">Made with ❤ by <a href="https://github.com/osdc">OSDC</a></span>
	</div>;


export default Footer;
