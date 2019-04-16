import React from 'react';
import {connect} from 'react-redux';
import {getCakes} from '../store/product';
import {Columns, Button} from 'react-bulma-components/full';

class AllCakes extends React.Component {
	componentDidMount() {
		// this.props.retrieveCakes()
	}

	render() {
		const allCakes = [
			{
				name: 'Carrot Cake',
				imageUrl:
					'https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg'
			},
			{
				name: 'Chocolate Cake',
				imageUrl:
					'https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg'
			},
			{
				name: 'Red Velvet Cake',
				imageUrl:
					'https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg'
			},
			{
				name: 'I like big bundts',
				imageUrl:
					'https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg'
			},
			{
				name: 'Cake Day',
				imageUrl:
					'https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg'
			},
			{
				name: 'ABCD',
				imageUrl:
					'https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg'
			}
		];
		return (
			<div>
				<Columns style={{flexWrap: 'wrap'}} ismultiline="true">
					{allCakes.map((cake) => (
						<Columns.Column className="column is-one-third" key={cake.name}>
							<Columns>
								<img src={cake.imageUrl} className="allCakeImg" />
							</Columns>

							<Columns>
								<Columns.Column>{cake.name}</Columns.Column>
								<Columns.Column>$19.99</Columns.Column>
							</Columns>
							<Columns>
								<Button>Purchase</Button>
							</Columns>
						</Columns.Column>
					))}
				</Columns>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = () => {
	() => dispatch(getCakes());
};

export default AllCakes;
