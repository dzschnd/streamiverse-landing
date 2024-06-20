import './Community.css'
import communityOrbits from '../../assets/images/community-orbits.png'
function Community() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header'}>
                Join our community
            </div>
           <div className={'community-content'}>
               <img src={communityOrbits} alt={'Orbit image'}/>
               <div className={'cta'}>
                   <div className={'section-subheader'}>
                       Join universe of streamers
                   </div>
                   <button className={'button'}>
                       Get Started
                   </button>
               </div>
           </div>
        </div>
    )
}

export default Community;