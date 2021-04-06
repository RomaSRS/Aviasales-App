/* eslint-disable no-param-reassign */

const initialState = {
  all: true,
  one: true,
  two: true,
  three: true,
  without: true,
  stops: false,
};

const filter = (state = initialState, action) => {
  let { all, one, two, three, without } = state;
  
  switch (action.type) {
    case 'DISPATCH_CLICK_ON_FILTER':
      if (all && action.transfer === 'all') {
        return Object.fromEntries(Object.entries(state).map(([key, value]) => [key, value = false]));
      }
      if (!all && action.transfer === 'all') {
        return Object.fromEntries(Object.entries(state).map(([key, value]) => [key, value = true]));
      }

      if (without && action.transfer === 'without') {
        return { ...state, without: false, all: false };
      }
      if (!without && action.transfer === 'without') {
        without = true;
        if (one && two && three) {
          all = true;
        }
        return { ...state, without, all };
      }

      if (one && action.transfer === 'one') {
        return { ...state, one: false, all: false };
      }
      if (!one && action.transfer === 'one') {
        one = true;
        if (without && two && three) {
          all = true;
        }
        return { ...state, one, all };
      }

      if (two && action.transfer === 'two') {
        return { ...state, two: false, all: false };
      }
      if (!two && action.transfer === 'two') {
        two = true;
        if (without && one && three) {
          all = true;
        }
        return { ...state, two, all };
      }

      if (three && action.transfer === 'three') {
        return { ...state, three: false, all: false };
      }
      if (!three && action.transfer === 'three') {
        three = true;
        if (without && one && two) {
          all = true;
        }
        return { ...state, three, all };
      }

      return { ...state };

    default:
      return state;
  }
};

export default filter;
