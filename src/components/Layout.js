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
        background-color: rgb(239, 239, 239)
        overflow-x: hidden;
    }

    a{
        color: rgb(196, 51, 51);
        text-decoration: none;
        list-style: none;
        font-size: 20px
    }

    #text{
        color:rgb(196, 51, 51); 
    }

    h1, h2, h3, h4, h5, h6, p{
        color:rgb(196, 51, 51);
    }

    button{
        background-color: transparent;
        border: 2px solid rgb(196, 51, 51);
        border-radius: 8px;
        width: 25vw;
        height: 5vh
        font-size: 25px
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