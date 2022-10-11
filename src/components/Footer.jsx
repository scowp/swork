import styled from "styled-components"

import logo from "../img/calm-logo.png"
import twiiter from "../img/twitter.png"
import linkedin from "../img/linkedin.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import gmail from "../img/gmail.png"

export default function Footer(){

    const Footer = styled.footer`
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #F4F4F4;
        padding: 10px 0;

        .logo-area {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
        }

        .links {
            display: flex;
            gap: 20px;
        }

        .sociais {
            display: flex;
            gap: 10px;
        }

        .sociais img {
            transition: 0.2s;
        }

        .sociais img:hover {
            opacity: 0.8;
        }

        a {
            color: black;
            transition: color 0.2s;
        }

        a:hover {
            color: #0568FD;
        }

    `

    return(
        <Footer>
            <div className="logo-area">
                <a href="#"><img src={logo}/></a>
                <span>Copyright © 2022 Calm</span>
            </div>
            <ul className="links">
                <a href="#">
                    <li>Privacy policy</li>
                </a>
                <a href="#">
                    <li>Security</li>
                </a>
                <a href="#">
                    <li>Terms of service</li>
                </a>
            </ul>
            <div className="sociais">
                <a href="#"><img src={twiiter}/></a>
                <a href="#"><img src={linkedin}/></a>
                <a href="#"><img src={facebook}/></a>
                <a href="#"><img src={instagram}/></a>
                <a href="#"><img src={gmail}/></a>
            </div>
        </Footer>
    )
}