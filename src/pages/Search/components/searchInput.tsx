import React, {Component, createRef, RefObject} from 'react'
import './searchInput.scss'

interface Props {
    searchValue:string,
    changeSearch:(value:string)=>void
}

export default class SearchInput extends Component<Props,any>{
    private searchInput:RefObject<HTMLInputElement>
    constructor(props:Props){
        super(props)
        this.searchInput = createRef()
    }


    searchOnChange=()=>{
        this.props.changeSearch(this.searchInput.current?this.searchInput.current.value:'')
    }

    render(){
        return(
            <div className="mInput">
                <div className="inputConver">
                    <i className="uSvg uSvgSrch"></i>
                    <input
                        onChange={this.searchOnChange}
                       ref={this.searchInput}
                        type="text"
                        name='search'
                        className='searchInput'
                        autoComplete='off'
                    />
                    <label className='searchHolder'>{this.props.searchValue?'':'搜索歌曲、歌手、专辑'}</label>
                </div>
            </div>
        )
    }
}