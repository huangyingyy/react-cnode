import React from 'react';
import { Link } from "react-router-dom";

const ListGroup = arr => {
    return arr.map((val, index) => {
      return (
        <li key={index}>
          
          <Link
            to={{
              pathname: `detail/${val.id}`
            }}
          >
            {val.title}
          </Link>
        </li>
      );
    });
  };

class List extends React.Component{
    constructor(){
        super();
        this.state = {
          data:[]
        }
      }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics',{
            method:'GET'
        }).then((res) => {
            return res.json()
        }).then((res)=>{
            console.log(res.data)
            const data = res.data.map((item) =>{
            return {
                id: item.id,
                title:item.title
            };
            })
            this.setState({
            data:data
            })
            console.log(this.state.data)
            console.log(this.state.data[0].id)
        })
    }
    render(){
        let list = "";
        if(this.state.data.length > 0){
            list = ListGroup(this.state.data)
            console.log(list)
        }
        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default List;