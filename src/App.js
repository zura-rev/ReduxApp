import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { increment, decrement } from './actions'

function App(props) {
  console.log('props', props)
  
  return (
    <div className='App'>
      <h1>{props.counter}</h1>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  )
}

function mapStateToProps(state) {
  return state.counter
}

export default connect(mapStateToProps, { increment, decrement })(App)
