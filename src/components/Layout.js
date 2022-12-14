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
        background-color: rgb(239, 239, 239);
        // background-color: black;
        overflow-x: hidden;
    }

    a{
        color: rgb(183, 5, 5);
        text-decoration: none;
        list-style: none;
        font-size: 20px;
    }

    #text{
        color:rgb(196, 51, 51); 
    }

    h1, h2, h3, h4, h5, h6, p{
        color:rgb(196, 51, 51);
    }

    button{
        background-color: rgb(183, 5, 5);
        border: 2px solid rgb(183, 5, 5);
        border-radius: 8px;
        width: 200px;
        height: 5vh;
        font-size: 25px;
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