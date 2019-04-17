import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import {Navbar as Nav, Columns} from 'react-bulma-components/full';

const Navbar = ({handleClick, isLoggedIn}) => (
	<Nav>
		{isLoggedIn ? (
			<Nav.Brand>
				<Nav.Container>
					<Nav.Item>Home</Nav.Item>
					<Nav.Item>Logout</Nav.Item>
				</Nav.Container>
				<Nav.Container position="end">
					<Nav.Item>Hello, {username}</Nav.Item>
				</Nav.Container>
			</Nav.Brand>
		) : (
			<Nav.Menu>
				<Nav.Container>
					<Nav.Item>Login</Nav.Item>
					<Nav.Item>Sign Up</Nav.Item>
				</Nav.Container>
				<Nav.Container position="end">
					<Nav.Item>Hello, Guest</Nav.Item>
				</Nav.Container>
			</Nav.Menu>
		)}
		<hr />
	</Nav>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		isLoggedIn: !!state.user.id
	};
};

const mapDispatch = (dispatch) => {
	return {
		handleClick() {
			dispatch(logout());
		}
	};
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired
};
