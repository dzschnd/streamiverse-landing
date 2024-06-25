import logo from "../../assets/images/community/logo.svg";
import orbit1Guy from "../../assets/images/community/orbit-2-guy.svg";
import orbit1HeadphonesGuy from "../../assets/images/community/orbit-1-headphones-guy.svg";
import orbit1Girl from "../../assets/images/community/orbit-1-girl.svg";
import orbitDot from "../../assets/images/community/orbit-1-dot.svg";
import orbit2RedGirl from "../../assets/images/community/orbit-2-red-girl.svg";
import orbit2BlondeGirl from "../../assets/images/community/orbit-2-blonde-girl.svg";
import orbit3Guy from "../../assets/images/community/orbit-3-guy.svg";
import orbit3GlassesGuy from "../../assets/images/community/orbit-3-glasses-guy.svg";

import './ImageOrbit.css'
function ImageOrbit() {
    return (
        <div className={'image-orbit-wrapper'}>
            <div id={'orbit-logo'}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={'orbit backwards'} id={'orbit-empty'}/>
            <div className={'orbit forwards'} id={'orbit-1'}>
                <img className={'planet backwards'} id={'orbit-1-guy'} src={orbit1Guy} alt={''}/>
                <img className={'planet backwards'} id={'orbit-1-headphones-guy'} src={orbit1HeadphonesGuy} alt={''}/>
                <img className={'planet backwards'} id={'orbit-1-girl'} src={orbit1Girl} alt={''}/>
                <img className={'planet backwards'} id={'orbit-dot-1'} src={orbitDot} alt={''}/>
                <img className={'planet backwards'} id={'orbit-dot-2'} src={orbitDot} alt={''}/>
                <img className={'planet backwards'} id={'orbit-dot-3'} src={orbitDot} alt={''}/>
            </div>
            <div className={'orbit backwards'} id={'orbit-2'}>
                <img className={'planet forwards'} id={'orbit-2-red-girl'} src={orbit2RedGirl} alt={''}/>
                <img className={'planet forwards'} id={'orbit-2-blonde-girl'} src={orbit2BlondeGirl} alt={''}/>
            </div>
            <div className={'orbit forwards'} id={'orbit-3'}>
                <img className={'planet backwards'} id={'orbit-3-guy'} src={orbit3Guy} alt={''}/>
                <img className={'planet backwards'} id={'orbit-3-glasses-guy'} src={orbit3GlassesGuy} alt={''}/>
            </div>
        </div>
    )
}

export default ImageOrbit;