import React, { Component } from 'react';


class HomeScreen extends Component {
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }


    state={
        number:(Math.random()).toFixed(2)*100,
        UserInput:0,
        Counter:0,
        time:0
    }
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent:"normal",
                alignItems:"center",
                height: "300vh",
                backgroundColor: "black",
                color: "white",
                fontSize: "30px",
                flexDirection: "column"  

            }}>
                <h1> {this.state.number}</h1>
                {/* <input className="e-input" type="number"  placeholder="Enter Number" onSubmit={
                    (e) => {
                        this.setState({
                            UserInput: e.target.value
                        })
                    }
                }/> */}
                <input
                style={
                    {
                        margin: "30px",
                        width: "300px",
                        height: "50px",
                        fontSize: "30px",
                        borderRadius: "50px",
                        outline:"none",
                        border: "none",
                        backgroundColor: "white",
                        color: "black",
                        textAlign: "center",

                    }
                }
                
                onSubmit={
                    
                        (e) => {
                            this.setState({
                                Counter: this.state.Counter + 1,
                                UserInput: e.target.value
                            })
                        }
                }
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
          
          
        }
        
      }
    }
    />

    <button
    style={
        {
            margin: "30px",
            width: "300px",
            height: "50px",
            fontSize: "30px",
            borderRadius: "50px",
            outline:"none",
            border: "none",
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
        }
    }
    type="Submit"
    >
        Submit
    </button>
    
                <button onClick={()=>{
                  this.setState({
                        number:(Math.random()).toFixed(2)*100
                  })
                }}>
                press me To Restart The Game
            </button>

            <h2>
                {
                    this.state.UserInput > this.state.number ? "Its Higher" : "Its Lower"
                }
            </h2>

            <h1
                    style={
                        {
                          textShadow:"0 0 2px #00e92c,0 0 30px #00e92c,0px 0px 5px #00e92c, 0 0 150px #00e92c;color:#00e92c",
backgroundcolor:"#2E8ECE",
                        }
                    }>
                {
                    this.state.UserInput === this.state.number ? "You Won" : "You Lost"
                }
            </h1>
            <h2>
                {
                    "You Submitted " + this.state.Counter
                    
                }
            </h2>
            <h3 style={
                {
               
                }
            }>
                {
                    "Your Guess Was "+ this.state.UserInput
                }
            </h3>
            <h1>
                {
                    
                    "The time  is Running : "+ new Date(this.state.time * 1000).toISOString().slice(11, 13) + " Hours " + new Date(this.state.time  * 1000).toISOString().slice(14, 16) + " Minutes " + new Date(this.state.time * 1000).toISOString().slice(17, 19) + " Seconds "
                }
                
            </h1>
            <div>
                
            </div>
            </div>  

           
        );
    }
}
export default HomeScreen;