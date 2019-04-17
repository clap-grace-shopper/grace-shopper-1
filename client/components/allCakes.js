import React from 'react';
import {connect} from 'react-redux';
import {getCakes} from '../store/product';
import {Columns, Button} from 'react-bulma-components/full';

class AllCakes extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.retrieveCakes();
		console.log('retrieve cakes');
	}

	render() {
		let allCakes = this.props.state;

		console.log('what is this props state', this.props.state); //cakes:[]
		return allCakes.length > 0 ? (
			<div>
				<Columns style={{flexWrap: 'wrap'}} ismultiline="true">
					{allCakes.map((cake) => (
						<Columns.Column className="column is-one-third" key={cake.name}>
							<Columns>
								<img src={cake.imageUrl} className="allCakeImg" />
							</Columns>

							<Columns>
								<Columns.Column>{cake.name}</Columns.Column>
								<Columns.Column>${cake.price}</Columns.Column>
							</Columns>
							<Columns>
								<Button color="danger">Purchase</Button>
							</Columns>
						</Columns.Column>
					))}
				</Columns>
			</div>
		) : (
			'Loading'
		);
	}
}

const mapStateToProps = (state) => ({
	state: state.cakes
});

const mapDispatchToProps = (dispatch) => ({
	retrieveCakes: () => dispatch(getCakes())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCakes);
