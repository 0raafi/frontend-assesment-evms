
export declare interface IState {
  [key: string]: any;
}

export declare interface IAction {
  type: 'update' | 'delete';
  value: any;
  name: string;
}

const localDataReducer = (state: IState, action: IAction) => {
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

export default localDataReducer;
