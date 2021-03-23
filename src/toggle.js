import React,{Component} from 'react'
class Toggle extends Component{
	constructor(){
		super();
		this.state={
			flag:true
		}
	}
	toggle=()=>{
		this.setState({
			flag:!this.state.flag
		})
	}
	render(){
		return(
			<div>
			<p>{this.state.flag?"ON":"OFF"}</p>
			<input type="button" value="toggle" onClick={this.toggle}/>
			</div>
			)
	}
}
export default Toggle;