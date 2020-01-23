
const initState = {
  Name : 'My Todo with Saga Redux',
};

const appReducer = (state = initState, action) => {
  console.log("src/App/reducer.js", state, action);
  if (action.type === 'SET_TITLE') {
    let { Name }  = state;
    Name = action.payload.Title;
    return {...state, Name };
  }
  return state;
};

export default appReducer;
