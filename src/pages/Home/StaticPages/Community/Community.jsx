import './Community.css'
import ImageOrbit from "./ImageOrbit";
function Community({openWidget}) {
    return (
        <div className={'section-wrapper'}>
            <h1 className={'section-header'}>
                Join our community
            </h1>
           <div className={'community-content'}>
              <ImageOrbit/>
               <div className={'cta'}>
                   <h2 className={'section-subheader'}>
                       Join the universe<br/>of streamers
                   </h2>
                   <button className={'button button-gradient community-button button-shrinkable'} onClick={openWidget}>
                        <span>
                            Join the Waitlist
                        </span>
                   </button>
               </div>
           </div>
        </div>
    )
}

export default Community;