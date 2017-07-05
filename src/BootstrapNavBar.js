import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class BootstrapNavBar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/Home">ATL</Link>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="/Home">Home</Link></li>
						<li><Link to="/About">About</Link></li>
						<li><Link to="/Images">Images</Link></li>
						<li><Link to="/Weather">Weather</Link></li>
						<li><Link to="/MayorMessage">Mayor Message</Link></li>
					</ul>
				</div>
			</nav>		
		)
	}
}

export default BootstrapNavBar;