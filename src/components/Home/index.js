import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','D','a', 'n', 'n', 'y',' ', 'R','a','m','i','r','e','z',',']
    const jobArray = ['a','n',' ','a','s','p','i','r','i','n','g',' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={10}/>
                </h1>
                <h2>FullStack Developer / React Specialist</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
    </> 
    )
}

export default Home;