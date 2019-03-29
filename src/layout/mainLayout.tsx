import React,{ Component } from 'react'
import Home from "../pages/Home";
import Hot from "../pages/Hot";
import Search from "../pages/Search";
import './mainLayout.scss'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

interface State {
    selectedTab:number,
    selectName:Array<string>,
    routers:Array<string>
}

export default class main extends Component<any,State>{

    constructor(props:any){
        super(props)
        this.state = {
            selectedTab:0,
            selectName:['推荐音乐','热歌榜','搜索'],
            routers:['/','/hot','/search']
        }
    }

    onClick= (index:number):void =>{
        this.setState({
            selectedTab:index
        })
    }

    render(){
        return (
            <div className="contentContainer">
                <Router>
                    <nav className='contentTab'>
                        {this.state.selectName.map((item,index)=>
                            <Link
                                key={index}
                                className={this.state.routers[index] === window.location.pathname?'selected':''}
                                onClick={()=>this.onClick(index)}
                                to={this.state.routers[index]}
                            >
                                <div>
                                    <span>{item}</span>
                                </div>
                            </Link>
                        )}
                    </nav>
                    <div className='tabItem'>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/hot' component={Hot}></Route>
                        <Route path='/search' component={Search}></Route>
                    </div>
                </Router>
            </div>
        )
    }

}