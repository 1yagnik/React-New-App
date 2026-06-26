import React from 'react'
import Display from './Score_Card.jsx'
import Moviecard from './moviecard.jsx'
import './styles.css'
import Movilist from './movielist.jsx'

export default class App extends React.Component{

  render(){
    return(
      <>
      <Movilist/>
      </>
    ) 
  }
}