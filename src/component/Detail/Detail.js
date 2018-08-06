import React from 'react';

// const getDetail = (id) => fetch(`${detailAPI}/${id}`).then((response) => response.json()); 



class Detail extends React.Component{
    constructor(){
        super();
        this.state = {
          content:""
        }
      }
    componentDidMount(){
        console.log(this.props.match.params.id)
       this.getDetail(this.props.match.params.id).then((result)=>{
            this.setState({
                content:result.data.content
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
                <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </div>
        )
    }
}

export default Detail;