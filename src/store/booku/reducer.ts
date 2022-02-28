import { REQUEST_GET_CATEGORIES, SUCCESS_GET_CATEGORIES, ERROR_GET_CATEGORIES } from './constants';
import { BookuState, DispatchType } from './types';
const initialState: BookuState = {
  categories: [],
  loading: false,
  error: false,
  errorMsg: '',
};

const bookuReducer = (state = initialState, action: DispatchType) => {
  switch (action.type) {
    case REQUEST_GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: '',
      };
    case SUCCESS_GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        error: false,
        errorMsg: '',
        categories: action.payload.categories,
      };
    case ERROR_GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};

export default bookuReducer;
