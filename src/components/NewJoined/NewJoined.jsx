import React from 'react';
import './NewJoined.css';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';

export default function NewJoined() {
    return (
        <div className='CardWrapper'>
            <div className="newjoined">
                <span className="newMembers">Newly Joined Members</span>
                <hr />
                <div className="cardsec">
                    <div className="one">
                        <img src={one} alt="" />
                    </div>
                    <div className="two">
                        Anna Kellar
                    </div>
                    <div className="three">View Profile</div>
                </div>
                <div className="cardsec">
                    <div className="one">
                        <img src={two} alt="" />
                    </div>
                    <div className="two">
                        Aryana Meryll
                    </div>
                    <div className="three">View Profile</div>
                </div>
                <div className="cardsec">
                    <div className="one">
                        <img src={three} alt="" />
                    </div>
                    <div className="two">
                        Katy Perry
                    </div>
                    <div className="three">View Profile</div>
                </div>
                <div className="cardsec">
                    <div className="one">
                        <img src={four} alt="" />
                    </div>
                    <div className="two">
                        Elizabeth Ruth
                    </div>
                    <div className="three">View Profile</div>
                </div>
            </div>
        </div>
    );
}
