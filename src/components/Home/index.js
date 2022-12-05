import LogoD from '../../assets/images/logo-dr.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 'n', 'y', ',']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

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
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoD} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={22}/>
                </h1>
                <h2>FullStack Developer / React Specialtist</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    </> 
    )
}

export default Home;