import React from "react";

class Lifecycle extends React.Component{

    constructor(){
        super();
        console.log('constructor method is called...');
        //for initializations

        this.state={
            count:50,
            heading:'Lifecycle Methods'
        }

    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps method is called..');
        return null;
    }
    
    componentDidMount(){
        console.log('componentDidMount method is called..');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate method is called...',nextProps,nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevPropos,prevState){
        console.log('getSnapshotBeforeUpdate method is called...',prevPropos,prevState);
        return null;
    }
    componentDidUpdate(prevPropos,prevState){
        console.log('componentDidUpdate method is called...',prevPropos,prevState);
    }


    render(){
        console.log('render method is called...');

        const handleIncrease=()=>{
            this.setState({
                count: this.state.count + 10
            })
        }
        const handleChange=()=>{
            this.setState({
                heading:'Stages in Lifecycle Methods'
            })
        }

        return(
            <>
                <div>
                    <h2>{this.state.heading}</h2>
                    {/* Stages in Lifecycle methods */}
                    <p>Count : {this.state.count}</p>
                    <button onClick={handleIncrease}>Increment</button>
                    <br />
                    <button onClick={handleChange}>Change</button>
                </div>
                {console.log("Hello user")}
            </>
        )
    }
}

class Rooster extends React.Component{
    render(){
        return(
            <>
            <h2>Rooster</h2>
            </>
        )
    }
}


export {Rooster}; //named Export
export default Lifecycle //default exoprt