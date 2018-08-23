import React from 'react';
import { Link } from "react-router-dom";
import { fetchList } from '../../services';
import { CNODE_TYPES } from '../../constant';
import { CNODE_TYPE } from '../../constant';
import { LocaleProvider, Pagination } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css'

moment.locale('zh-cn');

class List extends React.Component{
    constructor(){
        super();
        this.state = {
          list:[],
          page:1,
          limit:10,
        //   tab:"ask",
          tab:CNODE_TYPES[0]
        }
      }
    componentDidMount(){
        const page = this.props.match.params.page || 1;
        const limit = this.props.match.params.limit || 10;
        const tab = this.props.match.params.type || 'all';

        // console.log(this.props)

        this.fetchData({tab,page,limit});
    }
    fetchData = (params) => {
        const {tab,page,limit} = {...this.state,...params}
        // this.props.history.push(`/list/${this.state.tab}/${this.state.page}`);
        fetchList({
            tab,
            page,
            limit
        }).then((res)=>{
            // console.log(res.data)
            const data = res.data;
            this.setState({
                list:data,
                tab,
                page,
                limit
            });
            this.props.history.push(`/list/${this.state.tab}/${this.state.page}`);
            console.log(this.state.tab)
        })
    }
    onChange = (page) => {
        // console.log(page);
        this.fetchData({page:page,tab:this.state.tab,limit:this.state.limit})
        // console.log(this.state.page);
        };

    handleFilterChange = (value) => {
        // console.log(value);
        this.fetchData({page:1,tab: value});
      }
    
    render(){
        return (
            <div>
                <ul className="tab">
                    {
                        CNODE_TYPES.map(
                            filterValue => (
                                <li
                                    className={"tab-item"+(this.state.tab === filterValue ? ' active' : '')}
                                    key={filterValue}
                                    onClick = {()=>this.handleFilterChange(filterValue)}
                                >
                                    <Link to={`/list/${filterValue}/${this.state.page}`}>
                                        {CNODE_TYPE[filterValue]}
                                    </Link> 
                                </li>
                            )
                        )
                    }
                </ul>
                <ul className="list">
                    {
                        
                        this.state.list.map(item => (
                            <li key={item.id} className="list-item">
                                <Link 
                                    to={`/detail/${item.id}`}
                                >
                                    {item.title}
                                </Link>                             
                            </li>
                        ))
                    }
                </ul>
                <LocaleProvider locale={zhCN}>
                    <div>
                        <Pagination showQuickJumper defaultCurrent={1} current={this.state.page} total={500} onChange={this.onChange} />
                    </div>
                </LocaleProvider>

            </div>
        )
    }
}

export default List;