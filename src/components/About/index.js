import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faReact, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15} />
                    </h1>
                    <p>
                        I'm a very ambitious fullstack developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm hands on, naturally curious, and perpetually working on
                        improving my skills one problem at a time. These traits came in handy during my DevMountain schooling adventure
                        and made the experience life changing.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, partner to a beautiful girlfriend, a video game fanatic,
                        enthusiast of anime, and tech-obsessed!!
                    </p>
                    <p>
                        Feel free to navigate to my linkedIn, which is located on the left nav bar, to see my first projects made in my DevMoutain experience!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faNodeJs} color='#388E3C' />
                        </div>

                    </div>

                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About;