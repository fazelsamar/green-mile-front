import React, { Component } from "react";
import { DivStates, StatesLink, StatesPr } from "./HomePageElements";

class Home extends Component {
 
  render() {
  

    return (
    <>
    <h2 style={{textAlign:'center'}}> استان مورد نظر را انتخاب کنید </h2>
      <DivStates>
      
      {this.props.states.map(states=>{
return(
        <StatesPr>
        <StatesLink to ="/posts">
        {states}
        </StatesLink>
      </StatesPr>
      )
      })}
      
     
      </DivStates>
      </>)
    }
  }
export default Home;
