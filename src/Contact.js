import React, { Component } from 'react'

export class Contact extends Component {
    state={name:'',age:'',todolist:[],status:false}
    getName=(event)=>
    {
        this.setState({name:event.target.value})

    }
    getAge=(event)=>
    {
        this.setState({age:event.target.value})
    }
    data1=[];
    addList=()=>
    {
       let data={name:this.state.name,age:this.state.age}
       this.data1.push(data);
      this.setState({todolist:this.data1});
      this.state.name="";
      this.state.age="";
    
    }
    upList=(ind)=>
    {
        //alert("hii")
        this.setState({name:this.data1[ind].name});
        this.setState({age:this.data1[ind].age});
        this.setState({status:true});
    }
    removeList=(ind)=>
    {
       let conf=window.confirm("Do u want to delete");
       if(conf)
       {
        this.data1.splice(ind,1);
        this.setState({todolist:this.data1});
       }
    
    }
    render() {
        return (
            <div>
                <h1>ToDo List</h1>
            <form>
        Name : <input type="text" onChange={this.getName} value={this.state.name}/><br/>
        Age  : <input type="text" onChange={this.getAge} value={this.state.age}/><br/>
        {this.state.status?
           <input type="button" value="Update List" onClick={this.updateList}/>:<input type="button" value="Add List" onClick={this.addList}/>}
           
            </form>
    {this.state.todolist.length>0?
    <table border={1}>
        <thead>
       <tr>
           <th>S.no</th>
           <th>Name</th>
           <th>Age</th>
           <th>Delete</th>
           <th>Update</th>
       </tr>
       </thead>
       <tbody>
       {this.state.todolist.map((res,index)=>
        <tr>
            <td>{index+1}</td>
            <td>{res.name}</td>
            <td>{res.age}</td>
            <td><input type="button" value="Delete" onClick={()=>this.removeList(index)}/></td>
            <td><input type="button" value="Update" onClick={()=>this.upList(index)}/></td>
        </tr>)}
        </tbody>
    </table>:null}
            </div>
        )
    }
}

export default Contact
