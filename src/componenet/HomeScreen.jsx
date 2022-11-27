import React, { Component } from 'react';


class HomeScreen extends Component {
    state={
        number:(Math.random()).toFixed(2)*100
    }
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "black",
                color: "white",
                fontSize: "50px",
                flexDirection: "column"  
            }}>
                <h1> {this.state.number}</h1>
                <button onClick={()=>{
                    this.setState({
                        number:(Math.random()).toFixed(2)*100
                    })
                }}>
                press me To generate a Random Number
            </button>
            </div>  

           
        );
    }
}
export default HomeScreen;