import './index.scss'
import { useRef } from 'react'
// import LogoD from '../../../assets/images/logo-dr.png'


const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    return (
        <div className='logo-container'>
            {/* <img className='solid-logo' src={} alt='D'/> */}
        </div>
    )
}

export default Logo;