import './Community.css'
import ImageOrbit from "./ImageOrbit";
import WaitlistWidget from "../Header/WaitlistWidget";
import {useState} from "react";
function Community({onWidgetToggle}) {
    return (
        <div id={'community'} className={'section-wrapper'}>
            <div className={'section-header'}>
                Join our community
            </div>
           <div className={'community-content'}>
              <ImageOrbit/>
               <div className={'cta'}>
                   <div className={'section-subheader'}>
                       Join the universe<br/>of streamers
                   </div>
                   <button className={'button button-gradient community-button'} onClick={onWidgetToggle}>
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