//Here, 'state' argument is not application state, only state
//this reducer is responsible for.
// 'state=null' is done to specify that whnever state is //undefined (like when on 1st boot of app), set it to null, //otherwise the state value will be what it is passed
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
