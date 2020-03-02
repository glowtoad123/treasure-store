import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Link from 'next/link'
import Start from './start'
import Topbar from './topbar'
import Collection from './collection'
import Treasures from './treasures'


/*const Home = () => (
    <div className="container">
      <Topbar />
      <Start  /> 


    </div>
)*/


function Home() {
  return (
    <div className="container">
      <Topbar />
      <Start  /> 

    </div>
  )
}

export default Home
