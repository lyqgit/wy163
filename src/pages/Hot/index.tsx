import React,{ Component } from 'react'
import Banner from './components/banner'
import List from './components/list'
import FooterBtn from './components/footerBtn'
import './components/banner.scss'

export default class Hot extends Component {

    render(){
        return (
            <div className='tabHot'>
                <Banner/>
                <List/>
                <FooterBtn/>
            </div>
        )
    }

}