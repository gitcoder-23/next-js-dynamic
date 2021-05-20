import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './layouts/Banner'
import About from './layouts/About'
import Service from './layouts/Service'
import Portfolio from './layouts/Portfolio'
import Blog from './layouts/Blog'
import Contact from './layouts/Contact'

export default function Home() {
  return (
    
    <>
    <Banner />

    <About />

    <Service />

    <Portfolio />

    <Blog />

    <Contact />

  
    </>
  )
}
