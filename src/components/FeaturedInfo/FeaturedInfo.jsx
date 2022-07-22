import React from 'react';
import './FeaturedInfo.css'

export default function FeaturedInfo() {
    return (
        <div>
            <div className="FreaturedItems">
                <span className="overview">Blog Overview</span>
                <div className="cardWrapper">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">POSTS</h6>
                            <h1 className="card-text">2,390</h1>
                            <h6 className="card-title arrowup">&uarr; 4.2%</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">PAGES</h6>
                            <h1 className="card-text">182</h1>
                            <h6 className="card-title arrowup">&uarr; 12.7%</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">COMMENTS</h6>
                            <h1 className="card-text">8,147</h1>
                            <h6 className="card-title arrowdown">&darr; 3.1%</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">NEW CUSTOMERS</h6>
                            <h1 className="card-text">29</h1>
                            <h6 className="card-title arrowdown">&darr; 8.4%</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">SUBCRIBERS</h6>
                            <h1 className="card-text">17,281</h1>
                            <h6 className="card-title arrowup">&uarr; 4.9%</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
