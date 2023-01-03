
export declare interface IState {
  data: IProduct;
  selectedVariant: IVariant;
}

export declare interface IAction {
  type: 'update' | 'delete';
  value: any;
  name: 'data' | 'selectedVariant';
}

const productReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'update':
      return ({
        ...state,
        [action.name]: action.value
      });
    case 'delete':
      delete state[action.name];
      return state;
    default:
      return state;
  }
};

export default productReducer;
