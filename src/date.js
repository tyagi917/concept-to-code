import React,{Component} from 'react';
class Changed extends Component{
	state={
		dates:["03-Dec-2020","09-Feb-2020","08-Apr-2021"],
		dates1:[]
}
 change=()=>
{
	var res=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Aug","Nov","Dec"];
	var res1=[];
	for(var i=0;i<this.state.dates.length;i++)
	{
		var s=String(this.state.dates[i]);
		var date=s.substring(0,2);
		var month=s.substring(3,6);
		var monthindex=res.indexOf(month)+1;
		var year=s.substring(7,11);
		var ans=date+"-"+monthindex+"-"+year;
		res1.push(ans);
	}
	this.setState({
		dates1:res1
	})
}
render()
{
	console.log(this.state.dates1);
	return(
		<div>
		<input type="button"  value="changedate" onClick={this.change}/>
		      <div>
                <ul>
                    {
                        this.state.dates1.map((data)=>(
                  <div>{data}</div>

                        ))

                    }

                </ul>
            </div>
		
		</div>


		)
}
}
export default Changed;
