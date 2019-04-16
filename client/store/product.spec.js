import chai from 'chai';
import product, {GOT_CAKES, gotCakes} from './product';
const expect = chai.expect;

const allCakes = [ {name: 'Carrot Cake'}, {name: 'Chocolate Cake'}, {name: 'Red Velvet Cake'} ];

describe('Cake Action Creator', () => {
	const setCakesAction = gotCakes(allCakes);
	it('returns a JavaScript Object', () => {
		expect(typeof setCakesAction).to.equal('object');
		expect(Object.getPrototypeOf(setCakesAction)).to.equal(Object.prototype);
	});
	it('creates an object with type and cakes', () => {
		expect(setCakesAction.type).to.equal(GOT_CAKES);
		expect(Array.isArray(setCakesAction.cakes)).to.be.true;
		expect(setCakesAction.cakes[1].name).to.equal('Chocolate Cake');
	});
});

describe('Cakes Reducer', () => {
	const initialState = {
		cakes: []
	};
	const newState = product(initialState, {type: GOT_CAKES, cakes: allCakes});
	it('returns a new state with the updated cakes', () => {
		expect(newState.cakes).to.deep.equal(allCakes);
	});
});
