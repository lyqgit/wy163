import React,{ Component } from 'react'
import SearchInput from './components/searchInput'
import DefalutList from './components/defalutList'

interface State {
    searchValue:string
}

export default class Search extends Component<any,State>{

    constructor(props:any){
        super(props)
        this.state = {
            searchValue:''
        }
    }


    changeSearch=(value:string)=>{
        this.setState({
            searchValue:value
        })
    }

    render(){
        return(
            <div className="tabSearch">
                <SearchInput {...this.state} changeSearch={this.changeSearch}/>
                <DefalutList/>
            </div>
        )
    }
}