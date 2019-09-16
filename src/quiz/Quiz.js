import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';

export default class Quiz extends Component {

    state = {
        Quiz:[
            {id:1,'title':'Learn Angular','description':'This is Quiz Angular','image':'/images/angular.svg'},
            {id:2,'title':'Learn Java','description':'This is Quiz Java','image':'/images/java.png'},
            {id:3,'title':'Learn Python','description':'This is Quiz Python','image':'/images/python.png'},
            {id:4,'title':'Learn React','description':'This is Quiz React','image':'/images/react.png'},
            {id:5,'title':'Learn PHP','description':'This is Quiz PHP','image':'/images/php.png'},
            {id:6,'title':'Learn Javascript','description':'This is Quiz Javascript','image':'/images/javascript.png'},
        ]
    }



    render() {
        const Quiz=this.state.Quiz.map(qi=>{
            return <div className="card-block  col-md-3" style={{width: '18rem'}}>
            <img src={qi.image} className="card-img-top" alt="..." width="100" height="100" />
            <div className="card-body">
            <h5 className="card-title">{qi.title}</h5>
                <p className="card-text">{qi.description}</p>
            </div>
         
         </div>
        })
        return (
            <div>
                <Navbar /> 
                <div className="container">
                   <h2><center>List Quiz</center></h2>
                   <div className="card-deck">{Quiz}</div>
                   </div>

                   
            </div>
        )
    }
}
