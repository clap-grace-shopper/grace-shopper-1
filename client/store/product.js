import axios from 'axios';

//Action Type
export const GOT_CAKES = 'GOT_CAKES';

//Action Creator
export const gotCakes = (cakes) => {
	return {type: GOT_CAKES, cakes};
};

//Thunks
export const getCakes = () => async (dispatch) => {
	console.log('is this working??');
	const {data} = await axios.get('api/cakes'); //change depending on route
	console.log('what is data??', data);
	dispatch(gotCakes(data));
};

//State
const initialState = {
	cakes: []
};

//Reducer

export default (state = initialState, action) => {
	switch (action.type) {
		case GOT_CAKES:
			return {...state, cakes: action.cakes};
		default:
			return state;
	}
};
