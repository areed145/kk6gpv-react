import React from 'react';
import { CardDeck } from 'reactstrap';

import CardCell from '../components/CardCell'
import CardVideo from '../components/CardVideo'

// import first_solo from '../assets/images/first_solo.jpg';
import kernville from '../assets/images/kernville.jpg';
import private_pilot from '../assets/images/private_pilot.jpg';
import extra_300 from '../assets/images/extra_300.jpg';
import super_decathlon from '../assets/images/super_decathlon.jpg';
import catalina from '../assets/images/catalina.jpg';
import mooney from '../assets/images/mooney.jpg';
import tehachapi from '../assets/images/tehachapi.jpg';
import salinas from '../assets/images/salinas.jpg';
import n5777v_mit1 from '../assets/images/n5777v_mit1.jpg';

const N5777V = () => {
    return (
        <div>
            <CardDeck className="carddeck">
                <CardCell img={'https://farm3.staticflickr.com/2201/32216824984_5f81a3f854_z_d.jpg'} caption="Photos from the first trip to see N5777V and the pre-buy done during the annual" text="In early 2017 a buddy and I bought N5777V, a 1966 Beechcraft Musketeer Super III. It has a 200hp IO-360 and nearly 1000# useful load, and does 120kts at around 9gph. Our requirements were 4 seats, and the ability to carry 4 normal humans with full fuel. Many 4 seat aircraft you must take less fuel to actually carry 4 passengers. We had been looking mainly at Piper Cherokees and preferred low-wings, so when the fixed-pitch, fixed-gear, priced-right Super Mouse showed up nearby we went to give it a look over." />
                <CardCell img={'https://farm5.staticflickr.com/4305/36143564716_a69a6756c7_z_d.jpg'} caption="" text="After arriving in Bakersfield, it was already time to give it a bath at the wash rack" />
            </CardDeck>
            <CardDeck className="carddeck">
                <CardCell img={'https://farm3.staticflickr.com/2871/33377872160_ab8c8d2aa2_z_d.jpg'} caption="" text="An hour or so of transition training was all it took to get accustomed enough to the new bird. Many hours later I'm still learning new quirks of the plane" />
                <CardCell img={'https://farm5.staticflickr.com/4357/36472591390_28342818da_z_d.jpg'} caption="Completed tailwheel and aerobatics training at KMIT" text="Later in 2017 the plane was borrowed for use in a Netflix movie, and some aerial filming was done from a helicopter. No idea when the movie will be realeased though" />
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
            <div className="margin" />
        </div>
    );
};

export default N5777V;