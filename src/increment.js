import React,{Component} from 'react';
class Increment extends Component{
	constructor(){
		super();
		this.state={
			count:0
		}
	}
	
	 decrement=()=>{
	 	var res=this.state.count
		this.setState({
			count:this.state.count>0?res-1:0

		})
	}
	increment=()=>{
		this.setState({
			count:this.state.count+1
		})
	}
	render(){
		return(
			<div>
			<p>value:{this.state.count}</p>
			<input type="button" value="inc" onClick={this.increment}/>
			<input type="button" value="dec" onClick={this.decrement}/>

			</div>
			)
	}

}
export default Increment