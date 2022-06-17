import React from 'react'

import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import muscleStone from '../images/muscle-stone.jpeg'
import Map from "../images/map.png";

function Contact() {
    return (
        <div id='contact-section'>
            <h1>CONTACT US</h1>

            <div id='contact-form'>
                <div id='contact-details'>

                    <div className='contact-header-img'>
                        <img src={muscleStone} alt="" />
                    </div>
                    <div className='detail'>
                        <ul className='detail-li'>
                            <li>Bisalpur Rd, near green park</li>
                            <li>Bareilly, Uttar Pradesh</li>
                            <li>9999999999</li>
                            <li>
                                <ul className='social-list'>
                                    <a href=""><li><BsInstagram /></li></a>
                                    <a href=""><li><BsFacebook /></li></a>
                                    <a href=""><li><BsWhatsapp /></li></a>
                                    <a href=""><li><BsTwitter /></li></a>
                                </ul>
                            </li>
                        </ul>

                        <a href="https://g.page/muscle-stone-fitness?share">
                            <img className='map' src={Map} alt="" />
                        </a>
                    </div>
                </div>


                <div id='contact'>
                    <form>
                        <input type='text' placeholder="First Name" required />
                        <input type='email' placeholder="Email" required />
                        <textarea placeholder='Write Here......' />
                        <input type='submit' value='send' />
                    </form>
                </div>
            </div>

            <hr></hr>

            <div className='copyright'>
                <h3>Copyright &copy; Soban Farooq</h3>
                <a href="https://github.com/soban09"><BsGithub/></a>
                <a href="https://github.com/soban09"><BsWhatsapp/></a>
            </div>
        </div>
    )
}
export default Contact
