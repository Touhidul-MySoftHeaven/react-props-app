import React, {Component} from "react";

class StudentStateClassComponent extends Component{
 
    constructor(){
        super();
        this.state={
            firstname:'Touhidul Islam',
            lastname:'touhid vai'
        }
    }
    changeName()
    {
        alert();
        this.setState({
            firstname:'Touhidul Islam Modified',
            lastname:'touhid vai modified'
        })
    }
   render(){
    return (
        
        <div className="App">

                <div style={{backgroundColor: "#E5FFCC",padding:"50px"}}>
                    <div>{this.state.firstname}</div>
                    <div>{this.state.lastname}</div>
                    <button onClick={()=>this.changeName()}>Click Me</button>
                </div>
        </div>
    )
   }
     
}

export default StudentStateClassComponent;