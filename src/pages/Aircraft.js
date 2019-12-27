import React from 'react';
import { CardDeck } from 'reactstrap';

import CardCell from '../components/CardCell'
import CardVideo from '../components/CardVideo'

import first_solo from '../assets/images/first_solo.jpg';
import kernville from '../assets/images/kernville.jpg';
import private_pilot from '../assets/images/private_pilot.jpg';
import extra_300 from '../assets/images/extra_300.jpg';
import super_decathlon from '../assets/images/super_decathlon.jpg';
import catalina from '../assets/images/catalina.jpg';
import mooney from '../assets/images/mooney.jpg';
import tehachapi from '../assets/images/tehachapi.jpg';
import salinas from '../assets/images/salinas.jpg';
import n5777v_mit1 from '../assets/images/n5777v_mit1.jpg';

const Aircraft = () => {
    return (
        <div>
            <CardDeck className="carddeck">
                <CardCell img={first_solo} caption="First solo" text="After a lifetime of interest in aviation, I started flying in 2011 after moving to Bakersfield." />
                <CardCell img={kernville} caption="Departing Kernville" text="Southern California's great flying weather, many fantastic destinations from the coast, central valley, high desert, and mountains, and the close-knit aviation community have made it a great hobby for the last few years." />
                <CardCell img={private_pilot} caption="Newly minted private pilot" text="The majority of my training has been at Meadows Field (BFL), with some at Mojave Air and Space Port (MHV), Tehachapi Municipal (TSP), and Shafter Municipal (EHF)." />
            </CardDeck>
            <CardDeck className="carddeck">
                <CardCell img={extra_300} caption="Aerobatics in an Extra 300" text="Most of my times is in Cessna 172s with time in a Super Decathlon, RV-6A, and Extra 300L." />
                <CardCell img={super_decathlon} caption="Completed tailwheel and aerobatics training at KMIT" text="My favorite flying experiences are checking out airport diners with friends, practicing aerobatics, and attending airshows." />
                <CardCell img={catalina} caption="On the ramp at KAVX, Catalina Island" text="One highlight was a visit to Edwards AFB in the Mojave Desert and the NASA Armstrong Flight Research Center." />
            </CardDeck>
            <CardDeck className="carddeck">
                <CardCell img={mooney} caption="Mooney M-20K with turboed TSIO-360 and GAMIs" text="My main interests are in race/performance modifications, aircraft engines, aerobatics, and experimental aircraft." />
                <CardCell img={tehachapi} caption="Inbound to KBFL from KWJF" text="Reno race fan. AOPA and EAA member. Military aviation buff. Tailwheel certified. Upset prevention & recovery and spin trained." />
                <CardCell img={salinas} caption="AOPA Salinas fly-in" text="I am currently working towards a commercial / instructor certificate, and eventually plan to instruction the side." />
            </CardDeck>
            <CardDeck className="carddeck">
                <CardCell img={n5777v_mit1} caption="N5777V on low approach, KMIT" text="In March of 2017 I co-purchased my first aircraft: Beechcraft A23-24 Super Musketeer N5777V, which is detailed on its own page." />
                <CardVideo title="superdeca" src="https://player.vimeo.com/video/163972650" caption="Video of aerobatic flying in a Super Decathlon" text="" />
            </CardDeck>
        </div>
    );
};

export default Aircraft;