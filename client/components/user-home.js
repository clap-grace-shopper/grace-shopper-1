import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Columns, Table, Heading} from 'react-bulma-components/full';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
	const {email} = props;

	console.log('this is the userrrr', props.user);

	return (
		<Columns align="center">
			<Columns.Column>
				<Heading>Welcome, {props.user.firstName}!</Heading>
				<Columns.Column>
					<Heading subtitle size={6}>
						Your Profile Information
					</Heading>
					<Table size="one-half">
						<thead>
							<tr>
								<th />
								<th />
							</tr>
						</thead>

						<tbody>
							<tr>
								<th className="is-selected">Name</th>
								<td>
									{props.user.firstName} {props.user.lastName}
								</td>
							</tr>
							<tr>
								<th className="is-selected">Email</th>
								<td>{props.user.email}</td>
							</tr>
							<tr>
								<th className="is-selected">Address</th>
								<td>{props.user.address}</td>
							</tr>
							<tr>
								<th className="is-selected">Order History</th>
								<td>TBD</td>
							</tr>
						</tbody>
					</Table>
				</Columns.Column>
			</Columns.Column>
		</Columns>
	);
};

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		email: state.user.email,
		user: state.user
	};
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
	email: PropTypes.string
};
