import React from "react";
import { CardDeck } from "reactstrap";
import CardResume from "../components/CardResume";
// import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

import cvx from "../assets/resume/cvx.png";
import psa from "../assets/resume/psa.png";
import nsai from "../assets/resume/nsai.png";
import hhe from "../assets/resume/hhe.jpg";
import aas from "../assets/resume/aas.png";
import bne from "../assets/resume/bne.jpeg";
import ut from "../assets/resume/ut.png";

const Resume = () => {
  return (
    <div>
      <div className="mainframe">
        {/* <CardDeck className="carddeck">
          <CardCell />
          <CardCell />
        </CardDeck> */}
        <CardDeck className="carddeck">
          <CardResume
            className="cardresume"
            img={cvx}
            title="Engineering Data Scientist"
            company="Chevron"
            location="Houston, TX"
            dates="Jan 2020 - Present"
            // roles={["a", "b"]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={cvx}
            title="Emerging Technology - Petroleum Data Science"
            company="Chevron"
            location="Houston, TX"
            dates="Jun 2018 - Dec 2019"
            // roles={["a", "b"]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={cvx}
            title="Reservoir Engineer - Kern River"
            company="Chevron"
            location="Bakersfield, CA"
            dates="Jan 2017 - Jun 2018"
            roles={[
              "Forecasted, matured 25-pattern, 159-well steamflood development project ($27.2 mil capital budget))",
              "Proposed, coded Python tool using flow equations, geologic models, and production data to train neural network for location production prediction",
              "Proposed, executed 10 new wells to validate production prediction tool ($3.9 mil capital budget)",
              "Built custom software to help identify and rank future oil production opportunities and communicate standardized performance metrics",
              "Support future business plan scenarios with high-level project oil and spend forecasts"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={cvx}
            title="Reservoir Engineer - Cymric"
            company="Chevron"
            location="McKittrick, CA"
            dates="Jul 2013 - Jan 2017"
            roles={[
              "Conducted internal reviews of steamflood projects, executed steam injection changes (~$5.4 mil/yr OPEX savings)",
              "Monitored, oversaw, optimized steam distribution systems (~$50 mil/yr OPEX budget)",
              "Ground-up injection design of five steamflood projects (14K BSPD, 1.4K BOPD, $4 mil capital budget)",
              "Proposed, designed, executed projects fixing non-optimal injection in existing wells (~$600K/yr OPEX savings)",
              "Identified and implemented various process improvements (~$10.7 mil total benefit)",
              "Supported other engineering functions by creating and maintaining forecasts used to size future facilities",
              "Facilitated weekly meetings aligning stakeholders in thermal, plants, and subsurface around optimal use of plant and system capacities"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={cvx}
            title="Production Engineer - San Ardo Field"
            company="Chevron"
            location="San Ardo, CA"
            dates="Aug 2011 - Jul 2013"
            roles={[
              "Designed and executed workovers on 65 development wells ($22 mil capital budget)",
              "Identified, evaluated, designed, executed 30 remedial workovers ($16 mil capital budget)",
              "Evaluated 124 existing wells for sidetrack potential as part of new development ($3 mil capital budget)",
              "Identified and implemented various process improvements (~$3 mil total benefit)",
              "Coded custom tools to “manage by exception” by recognizing problematic wells, helping cut engineer response in half",
              "Assisted other assets by sharing well-work performance evaluation tool, enabling optimizations (~$1 mil benefit)",
              "Prioritized drilling, operations, and construction groups schedules to maximize economics while minimizing hazards and conflicts"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={psa}
            title="Petroleum Engineer Intern"
            company="Platt, Sparks & Associates Consulting Petroleum Engineers, Inc"
            location="Austin, TX"
            dates="Oct 2010 - Jul 2011"
            roles={[
              "Compile production and event logs for gas processing facilities",
              "Research historical industry standards",
              "Estimate permeability using pre and post-fracture data to evaluate against regulatory criteria for tight well designation",
              "Package new tight well designation applications for client to submit state regulators for tax credit",
              "Used production data provided as legal evidence with historical weather data to create pipeline throughput model"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={nsai}
            title="Reservoir Engineer Intern"
            company="Netherland Sewell & Associates, Inc"
            location="Dallas, Texas"
            dates="May 2010 - Aug 2010"
            roles={[
              "Utilized IHS and public data to locate and compile historical production data for 10000+ wells throughout the U.S.",
              "Modified in-house software / workflows to perform bulk decline curve analysis, manually refining high value leases",
              "Analyzed drilling permits to estimate future lease activity",
              "Used type curve analysis to estimate reserves for future wells in the Cotton Valley and Bossier Shale",
              "Performed Monte Carlo analysis to assess probabilistic reserves",
              "Data used to support financial forecasts and reserves audits for one the firm’s largest royalty-fund client in 1/3 the typical time"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={hhe}
            title="Drilling Engineer Intern - Nagykunság Basin"
            company="Hungarian Horizons Energy"
            location="Budapest, Hungary"
            dates="Jun 2009 - Aug 2009"
            roles={[
              "Shadowed drilling supervisor for two successful gas well completions in southeastern Hungary",
              "Developed cost estimates for various drilling scenarios",
              "Evaluated various production facility options",
              "Evaluated market alternatives for the sale of condensate and gas",
              "Created a spreadsheet model to rank new well candidates based on geologic probability of success and license expiration",
              "Created pipe tally spreadsheet for rack location and best casing orders based on depth, centralizer, and collar considerations",
              "Calculated weights for various bottom hole assemblies for placement in drilling plans"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={aas}
            title="Production Engineer Intern - Barnett Shale"
            company="Aspect Abundant Shale"
            location="Fort Worth, TX"
            dates="May 2008 - Aug 2008"
            roles={[
              "Sized, collected bids for, and ordered compressors adding up to 260 Mcf/d in production for three Barnett Shale wells",
              "Designed and optimized 14 miles of pipeline",
              "Assisted pumper in troubleshooting off-line wells",
              "Evaluated multiple configurations for gathering lines for ten new wells to minimize pressure drop and costs",
              "Developed reusable pipeline cost model based on length, crossings, and variable material costs",
              "Brought compressors and wells into city and state noise, environmental, and safety compliance"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={bne}
            title="Production / Facilities Engineering Intern - Spanish Lookout"
            company="Belize Natural Energy"
            location="San Ignacio, Belize"
            dates="Jun 2007 - Aug 2007"
            roles={[
              "Reviewed and optimized plans for a 3-phase pipeline connecting 5 wells to a central processing facility",
              "Designed a concrete pad and floating trip system for a water injection well",
              "Cut and ran seismic lines through the jungles of Belize and Guatemala",
              "Compiled MSDS binders for drilling and production chemicals",
              "Led the installation of a diesel topping plant",
              "Prepared cores for geologists"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardResume
            img={ut}
            title="Undergraduate Research Assistant"
            company="University of Texas at Austin"
            location="Austin, TX"
            dates="Jan 2007 - Jun 2007"
            roles={[
              "Part of FASTRAC student satellite team sponsored by the Air Force Research Laboratory testing on-orbit real-time GPS relative navigation solution via real-time crosslink data exchange, real-time attitude determination using a single frequency, C/A-code, reprogrammable GPS receiver, and Micro-discharge plasma thruster technologies."
            ]}
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Resume;
