import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
           .sendForm(
            'gmail',
            'template_131r8c6',
            form.current,
            'fP-2pHCHoTOSa7djd'
           )
           .then(
            () => {
                alert('Email sent successfully! Thank you!')
                window.location.reload(false)
            },
            () => {
                alert('Something went wrong! Please try again!')
            }
           )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        letterClass={letterClass}
                        index={15}/>
                    </h1>
                    <p>
                        I am interested in full-time, part-time, internships, and any other opportunities to grow my skillset!
                        However, if you have any other requests or questions, dont hestitate to contact me using the form below!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Danny Ramirez,
                    <br />
                    Los Angeles, CA
                    <br />
                    259 E Santa Fe Ct, 92870 <br /> 
                    <span>d.ramirezjr524@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.870508, -117.856327]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[33.870508, -117.856327]}>
                            <Popup>Where I reside :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;
