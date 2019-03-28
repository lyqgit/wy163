import React,{ Component } from 'react'
import './content.scss'

interface State {
  selectedTab:number,
  selectName:Array<string>
}

export default class Content extends Component<any,State>{

  constructor(props:any){
    super(props)
    this.state = {
      selectedTab:0,
      selectName:['推荐音乐','热歌榜','搜索']
    }
  }

  public onClick= (index:number):void =>{
    this.setState({
      selectedTab:index
    })
  }

  render(){
    return(
      <div className="contentContainer">
        <nav className='contentTab'>
          {this.state.selectName.map((item,index)=>
            <a
              key={index}
              className={index === this.state.selectedTab?'selected':''}
              onClick={()=>this.onClick(index)}
            >
              <div>
                <span>{item}</span>
              </div>
            </a>
          )}
        </nav>
        <div className='tabItem'>
            <div className="tabHome">
              <div className="remdTl">
                推荐歌单
              </div>
              <ul className="remdSongs">
                <li className='remdSongLi'>
                  <div className="remdImg">
                    <img src="http://p2.music.126.net/YmY_CKCZR2qOQ6s5fnLOUA==/109951163940946013.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" className="uImg"/>
                    <span className="remdLnum uEarp">270.8万</span>
                  </div>
                  <p className='remdText'>「惊艳电子·旋律控」一听倾心 爱不释耳❷</p>
                </li>
                <li className='remdSongLi'>
                  <div className="remdImg">
                    <img src="http://p2.music.126.net/DtRdjDWSHXo834y_YUwwZA==/109951163929210366.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" className="uImg"/>
                    <span className="remdLnum uEarp">270.8万</span>
                  </div>
                  <p className='remdText'>「惊艳电子·旋律控」一听倾心 爱不释耳❷</p>
                </li>
                <li className='remdSongLi'>
                  <div className="remdImg">
                    <img src="http://p2.music.126.net/pf_aA5_g-bmNrRvYwOJ2Vg==/109951163764630194.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" className="uImg"/>
                    <span className="remdLnum uEarp">270.8万</span>
                  </div>
                  <p className='remdText'>「惊艳电子·旋律控」一听倾心 爱不释耳❷</p>
                </li>
              </ul>
              <ul className="remdSongs">
                <li className='remdSongLi'>
                  <div className="remdImg">
                    <img src="http://p2.music.126.net/YmY_CKCZR2qOQ6s5fnLOUA==/109951163940946013.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" className="uImg"/>
                    <span className="remdLnum uEarp">270.8万</span>
                  </div>
                  <p className='remdText'>「惊艳电子·旋律控」一听倾心 爱不释耳❷</p>
                </li>
                <li className='remdSongLi'>
                  <div className="remdImg">
                    <img src="http://p2.music.126.net/DtRdjDWSHXo834y_YUwwZA==/109951163929210366.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" className="uImg"/>
                    <span className="remdLnum uEarp">270.8万</span>
                  </div>
                  <p className='remdText'>「惊艳电子·旋律控」一听倾心 爱不释耳❷</p>
                </li>
                <li className='remdSongLi'>
                  <div className="remdImg">
                    <img src="http://p2.music.126.net/pf_aA5_g-bmNrRvYwOJ2Vg==/109951163764630194.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" className="uImg"/>
                    <span className="remdLnum uEarp">270.8万</span>
                  </div>
                  <p className='remdText'>「惊艳电子·旋律控」一听倾心 爱不释耳❷</p>
                </li>
              </ul>
              <div className="remdTl">
                最新音乐
              </div>
              <div className="sglst">
                <a className="sgitem">
                  <div className="sgchfl">
                    <div className="fThide sgchflTop">
                      别让我走远
                      <span className='sgalia'>
                        电视剧《我们与恶的距离》主题曲
                      </span>
                    </div>
                    <div className="fThide sgchflBottom">
                      <i className='uHmsprt sghot'></i>
                      林宥嘉-别让我走远
                    </div>
                  </div>
                  <div className="sgchfr">
                    <span className='uHmsprt sgchply'></span>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}