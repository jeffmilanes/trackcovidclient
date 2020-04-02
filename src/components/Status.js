import React from 'react';

import Card from './Cards';

import Cases from '../assets/images/Group 43@2x.png';
import Recover from '../assets/images/Group 37@2x.png';
import Mortality from '../assets/images/Group 38@2x.png';

export default function Status({ data }) {
    return (
        <div className="container status">
       
                <Card 
                    image={Cases} 
                    title={'cases_icon'}
                    numbers={data.confirmed} 
                    description={'Confirmed Cases'}
                />
                <Card 
                    image={Recover}
                    title={'recover_icon'}
                    numbers={data.recovered}
                    description={'Recovered'}
                />
                <Card 
                    image={Mortality} 
                    title={'mortality_icon'}
                    numbers={data.deaths}
                    description={'Deaths'}
                />
            </div>
    )
}
