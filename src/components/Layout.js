import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Hamburger from './Nav/Hamburger/Hamburger'
import Navbar from './Nav/Navbar/Navbar'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        width: 100vw;
        height: 100vh;
        text-align: center;
        margin: 0;
        font-family: 'Helvetica', sans-seriff;
    }

    a{
        color: rgb(183, 5, 5);
        text-decoration: none;
        list-style: none;
        font-size: 20px
    }

    #text{
        color:rgb(183, 5, 5); 
    }

    h1, h2, h3, h4, h5, h6, p{
        color:rgb(183, 5, 5);
    }
`


const Layout = ({ children }) => {
    return(
        <div>
            <GlobalStyle blackColor/>
            <Hamburger />
            <Navbar />
            <section>{ children }</section>
        </div>
    )
}

export default Layout