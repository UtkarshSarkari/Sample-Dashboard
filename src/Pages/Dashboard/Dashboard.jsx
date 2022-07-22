import React from 'react';
import BarGraph from '../../components/Charts/BarGraph';
import Chart from '../../components/Charts/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import NewJoined from '../../components/NewJoined/NewJoined';
import NewPosts from '../../components/NewPosts/NewPosts';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <FeaturedInfo />
            <div className="chartdata">
                <Chart />
                <BarGraph />
            </div>
            <div className="newData">
                <NewJoined />
                <NewPosts />
            </div>
        </div>
    );
}
