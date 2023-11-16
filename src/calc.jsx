import React, { Component } from 'react';

class Calc extends Component {
    state = {
        result: 0,
      }  
   
    render() {
          const {result} = this.state;
          const {input1, setInput1,input2,setInput2} = this.props
        return (
            <div>
     <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)}/>
     <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)}/>
                <h1>{result}</h1>
                <button onClick={()=>{
                    this.setState({result: +input1 + +input2})
                   }}>+</button>
                   <button onClick={()=>{
                    this.setState({result: +input1 - +input2})
                   }}>-</button>
                   <button onClick={()=>{
                    this.setState({result: +input1 * +input2})
                   }}>*</button>
                   <button onClick={()=>{
                    this.setState({result: +input1 / +input2})
                   }}>/</button>
                   <button onClick={()=>{
                    this.setState({result: (+input1) ** (+input2)})
                   }}>степень</button>
                   <button onClick={()=>{
                    this.setState({result: Math.pow(input1,1/input2)})
                   }}>корень</button>
                
            </div>
        );
    }
}

export default Calc;
