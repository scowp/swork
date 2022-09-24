import logo from "../img/calm-logo.png"
import twiiter from "../img/twitter.png"
import linkedin from "../img/linkedin.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import gmail from "../img/gmail.png"

export default function Footer(){

    return(
        <footer>
            <img src={logo}/>
            <span>Copyright © 2022 Calm</span>
            <ul>
                <li>Privacy policy</li>
                <li>Security</li>
                <li>Terms of service</li>
            </ul>
            <img src={twiiter}/>
            <img src={linkedin}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={gmail}/>
        </footer>
    )
}