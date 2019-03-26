import React,{ Component } from 'react'
import './content.scss'

interface State {
  seletedTab:string
}

export default class Content extends Component<any,State>{

  private onClick= (event:any):void =>{
    console.log(event)
  }

  render(){
    return(
      <div className="contentContainer">
        <nav className='contentTab' onClick={this.onClick}>
          <a className='selected'>
            <div>
              <span>推荐音乐</span>
            </div>
          </a>
          <a>
            <div>
              <span>热歌榜</span>
            </div>
          </a>
          <a>
            <div>
              <span>搜索</span>
            </div>
          </a>
        </nav>
      </div>
    )
  }
}