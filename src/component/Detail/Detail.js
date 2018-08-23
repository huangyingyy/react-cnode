import React from 'react';

// const getDetail = (id) => fetch(`${detailAPI}/${id}`).then((response) => response.json()); 



class Detail extends React.Component{
    constructor(){
        super();
        this.state = {
          content:"",
          replies:[]
        }
      }
    componentDidMount(){
        console.log(this.props.match.params.id)
       this.getDetail(this.props.match.params.id).then((result)=>{
           
           console.log('result is',result.data)
            this.setState({
                content:result.data.content,
                replies:result.data.replies
            })
        })
    }
    getDetail = (id) =>{
        return fetch(`https://cnodejs.org/api/v1/topic/${id}`).then((res)=>res.json())
       
    
    }
    render(){
        let { goBack } = this.props.history;
        return (
            <div>
                <button onClick={goBack}>后退</button>
                {/* <button>上一篇</button>
                <button>下一篇</button> */}
                <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                <ul className="replies">
                    {
                        this.state.replies.map(item=>(
                            <li className="replies-item" key={item.id} dangerouslySetInnerHTML={{ __html: item.content }}>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Detail;