import React,{ Component } from 'react'
import './content.scss'

export default class Content extends Component{
  render(){
    return(
      <div className="contentContainer">
        <nav className='contentTab'>
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