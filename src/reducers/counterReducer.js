const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      }
    case 'ADD_NUMBER':
      return {
        counter: state.counter + payload,
      }
    default:
      return state
  }
}

export default counterReducer
