import React, { Component } from 'react'
import './Component.css'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='box'>
        <h1>Question</h1>
        <p  className='no'>1 of 15</p>
        <h3>which is the only mammal that can't jump?</h3>
        <div className='content'>
        <div className='opt'>
           <p className='optn'>
               dog
           </p>
        </div>
        <div className='opt'>
           <p className='optn'>
               Elephant
           </p>
        </div>
        <div className='opt'>
           <p className='optn'>
               Goat
           </p>
        </div>
        <div className='opt'>
           <p className='optn'>
               Lion
           </p>
        </div>
       



        </div>
        
      
        <div className='butons'>
        <button className='previous btn'>Previous</button>
        <button className='next btn'>Next</button>
        <button className='quit btn'>Quit</button>
        </div>
      </div>
    )
  }
}
