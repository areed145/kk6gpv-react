import React from 'react';
import { CardDeck } from 'reactstrap';

import CardIcon from '../components/CardIcon'

import station_weather from '../assets/icons/temperature.svg';
import us_weather from '../assets/icons/satellite.svg';
import iot from '../assets/icons/rfid.svg';
import aprs from '../assets/icons/aprs_color.svg';

import flying from '../assets/icons/paragliding.svg';
import photos from '../assets/icons/camera2.svg';
import travel from '../assets/icons/rv.svg';
import scuba from '../assets/icons/scuba.svg';

import fishing from '../assets/icons/fishing.svg';
import oilgas from '../assets/icons/pumpjack.svg';
import blog from '../assets/icons/blog.svg';
import about from '../assets/icons/id.svg';

const Home = () => {
    return (
        <div>
            <CardDeck className="carddeck">
                <CardIcon title='Station Weather' link='/station_weather' img={station_weather} bgcolor="rgb(255, 145, 172)" />
                <CardIcon title='U.S. Weather' link='/us_weather' img={us_weather} bgcolor="rgb(255, 151, 133)" />
                <CardIcon title='IoT' link='/iot' img={iot} bgcolor="rgb(255, 208, 147)" />
                <CardIcon title='APRS' link='/aprs' img={aprs} bgcolor="rgb(255, 236, 149)" />
            </CardDeck>
            <CardDeck className="carddeck">
                <CardIcon title='Flying' link='/aircraft' img={flying} bgcolor="rgb(253, 255, 153)" />
                <CardIcon title='Photos' link='/photos' img={photos} bgcolor="rgb(205, 255, 172)" />
                <CardIcon title='Travel' link='/travel' img={travel} bgcolor="rgb(152, 255, 216)" />
                <CardIcon title='Scuba' link='/scuba' img={scuba} bgcolor="rgb(159, 225, 255)" />
            </CardDeck>
            <CardDeck className="carddeck">
                <CardIcon title='Fishing' link='/fishing' img={fishing} bgcolor="rgb(159, 189, 255)" />
                <CardIcon title='Oil & Gas' link='/oilgas/map' img={oilgas} bgcolor="rgb(166, 159, 255)" />
                <CardIcon title='Blog' link='/blog' img={blog} bgcolor="rgb(226, 152, 255)" />
                <CardIcon title='About' link='/about' img={about} bgcolor="rgb(255, 152, 250)" />
            </CardDeck>
            <div className="margin" />
        </div>
    );
};

export default Home;