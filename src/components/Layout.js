import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Layout.css'


const Layout = (props) => {
    return (
        <>
        <Navbar />
        <main>
        {props.children}
        </main>      
        <Footer />            
        </>
    )
}

export default Layout
