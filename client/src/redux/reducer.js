import { GET_COUNTRIES, GET_COUNTRY } from './actions';

const initialState = {
  countries: [],
  country: {},
  activities: [],
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Aca va tu codigo;

    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case GET_COUNTRY:
      return { ...state, country: action.payload };

    // case 'AddTodo':
    //   return [...state, action.payload];

    // case 'RemoveTodo':
    //   return state.filter((toDo) => {
    //     return toDo.id !== action.payload;
    //   });

    // case 'ToInProgress':
    //   return state.map((item) => (item.id === action.payload ? { ...item, status: 'InProgress' } : item));

    // case 'ToDone':
    //   return state.map((item) => (item.id === action.payload ? { ...item, status: 'Done' } : item));

    default:
      return state;
  }
};

export default reducer;
