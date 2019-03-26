import React,{ Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'

export default class Home extends Component{

  render(){
    return (
      <div style={{minHeight:'100%'}}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }

}