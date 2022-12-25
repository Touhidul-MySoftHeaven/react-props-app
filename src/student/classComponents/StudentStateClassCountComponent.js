import React, { Component } from "react";

class StudentStateClassCountComponent extends Component {

     
     constructor(){
        super();
        this.state={
            count:1
        }
    }

    updateCoiunt()
    {
        let countAdd=this.state.count+1;
             alert(countAdd);
        this.setState({
            count:countAdd
        })
    }

    render() {
        return (

            <div className="App">

                <div style={{ backgroundColor: "yellowgreen", padding: "50px" }}>
                   
                  <div>{this.state.count}</div>
                  <button onClick={()=>this.updateCoiunt()}>Click ME</button>
                </div>
            </div>
        )
    }
}

export default StudentStateClassCountComponent;