import React, {Component} from 'react'
import './defaultList.scss'

const songNames:Array<string> = [
    '林宥嘉新歌',
    '以团之名总决赛',
    '绿色',
    '张艺兴远东韵律',
    '只是太爱你',
    '我曾',
    '最近',
    '艾薇儿新歌',
    '以团之名',
    '有一种悲伤'
]

export default class SearchInput extends Component{
    render(){
        return(
            <div className='myDefault'>
                <section className="hotList">
                    <div className="title">热门搜索</div>
                    <ul className="list">
                        {songNames.map((item,index)=>
                            <li className='item' key={index}>
                                <a className='link' href="javascript:void(0)">{item}</a>
                            </li>
                            )
                        }

                    </ul>
                </section>
            </div>
        )
    }
}