import React, { Component } from "react";
import {
  CardDeck,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ButtonGroup,
  Button
} from "reactstrap";
// import Footer from "../components/Footer";

class WeatherBlips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        isLoaded: true
      },
      function() {
        document.getElementById("defaultOpen").click();
      }
    );
  }

  openTab(name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <div className="mainframe">
            <div className="center">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="margin" />
          </div>
          {/* <Footer /> */}
        </div>
      );
    } else {
      return (
        <div>
          <div className="mainframe">
            <CardDeck className="carddeck">
              <Card>
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>BLIP Options</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      id="defaultOpen"
                      className="button"
                      style={{ backgroundColor: "#8a30c5", border: 0 }}
                      onClick={this.openTab.bind(null, "tuvbs")}
                    >
                      Thermal Updraft & B/S
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#8a30c5", border: 0 }}
                      onClick={this.openTab.bind(null, "tuv")}
                    >
                      Thermal Updraft Velocity
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#8a30c5", border: 0 }}
                      onClick={this.openTab.bind(null, "thv")}
                    >
                      Thermal Height Variability
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2e43b8", border: 0 }}
                      onClick={this.openTab.bind(null, "bs")}
                    >
                      B/S Ratio
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2e43b8", border: 0 }}
                      onClick={this.openTab.bind(null, "blwsh")}
                    >
                      BL WindShear
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2e43b8", border: 0 }}
                      onClick={this.openTab.bind(null, "relhum")}
                    >
                      BL Relative Humidity
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2e91b8", border: 0 }}
                      onClick={this.openTab.bind(null, "blwsd")}
                    >
                      BL WindSpeed / Dir
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2e91b8", border: 0 }}
                      onClick={this.openTab.bind(null, "blws")}
                    >
                      BL Windspeed
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2e91b8", border: 0 }}
                      onClick={this.openTab.bind(null, "blwd")}
                    >
                      BL Wind Direction
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2eb8a6", border: 0 }}
                      onClick={this.openTab.bind(null, "blmot")}
                    >
                      BL Motion
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2eb8a6", border: 0 }}
                      onClick={this.openTab.bind(null, "blh")}
                    >
                      BL Height
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2eb8a6", border: 0 }}
                      onClick={this.openTab.bind(null, "bld")}
                    >
                      BL Depth
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2eb86c", border: 0 }}
                      onClick={this.openTab.bind(null, "cumpotcb")}
                    >
                      Cumulus Potential / Cloudbase
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2eb86c", border: 0 }}
                      onClick={this.openTab.bind(null, "cumpot")}
                    >
                      Cumulus Potential
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#2eb86c", border: 0 }}
                      onClick={this.openTab.bind(null, "cumcb")}
                    >
                      Cumulus Cloudbase
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#4eb82e", border: 0 }}
                      onClick={this.openTab.bind(null, "ovpotcb")}
                    >
                      Overcast Potential / Cloudbase
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#4eb82e", border: 0 }}
                      onClick={this.openTab.bind(null, "ovpot")}
                    >
                      Overcast Potential
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#4eb82e", border: 0 }}
                      onClick={this.openTab.bind(null, "ovcb")}
                    >
                      Overcast Cloudbase
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#93b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "cape")}
                    >
                      CAPE
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#93b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "dsurf")}
                    >
                      Surface Dewpoint
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#93b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "hcrith")}
                    >
                      Hcrit Height
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup style={{ display: "flex" }}>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#b6b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "hsurf")}
                    >
                      Surface Heating
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#b6b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "tsurf")}
                    >
                      Surface Temp
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#b6b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "topoact")}
                    >
                      Topo Actual
                    </Button>
                    <Button
                      className="button"
                      style={{ backgroundColor: "#b6b82e", border: 0 }}
                      onClick={this.openTab.bind(null, "topomod")}
                    >
                      Topo Model
                    </Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>BLIP Options</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="tuvbs" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.wfpm_woustar.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Thermal Updraft Velocity and Buoyancy/Shear Ratio
                    </figcaption>
                    <p className="card-text">
                      {" "}
                      B/S Ratio stippling (dense=0-4 sparse=4-7) overlays
                      Thermal Updraft Velocity contours to indicate wherestrong
                      thermals can be broken by vertical wind shear. See
                      "Thermal Updraft Velocity" and "Buoyancy/Shear Ratio"
                      parameter descriptions below for more information.
                    </p>
                  </div>
                  <div id="tuv" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.wfpm.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Thermal Updraft Velocity (W*)
                    </figcaption>
                    <p className="card-text">
                      Average dry thermal updraft strength near mid-BL height.
                      Subtract glider descent rate to get average vario reading
                      for cloudless thermals. Thermal strengths will be stronger
                      if convective clouds are present. W* depends upon both the
                      BL depth and the surface heating.
                    </p>
                  </div>
                  <div id="bs" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.woustar.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Buoyancy / Shear Ratio (B/S)
                    </figcaption>
                    <p className="card-text">
                      Dry thermals may be broken up by vertical wind shear (i.e.
                      wind changing with height) and unworkable if B/S ratio is
                      5 or less. If convective clouds are present, the actual
                      B/S ratio will belarger than calculated here. (This
                      parameter is truncated at 20 for plotting.)
                    </p>
                  </div>
                  <div id="blh" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.hft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Height of Boundary Layer Top (TI=0 height)
                    </figcaption>
                    <p className="card-text">
                      Height of the average dry thermal tops, or Thermal Index
                      TI=0 height. Over flat terrain maximum thermalling heights
                      will be lower due to the glider descent rate and other
                      factors. However, thermaltopswill be higher over
                      small-scale topography not resolved by the model and some
                      pilots have reported that in elevated terrain the heights
                      they can reach over local terrain features correspond
                      better with the TI=0height than with Hcrit. In the
                      presence of clouds the thermal top will increase, but the
                      maximum thermalling height will then be limited by the
                      cloud base. (This parameter is truncated at 22,000 for
                      plotting.)
                    </p>
                  </div>
                  <div id="hcrith" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.hwcritft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Hcrit Height
                    </figcaption>
                    <p className="card-text">
                      This parameter estimates the height at which the average
                      dry updraft strength drops below 225fpm and over flat
                      terrain is expected to give better quantitative numbers
                      for the maximum cloudless thermalling height than is the
                      traditional TI=0 height given above, although the
                      qualitative patterns should be similar for both
                      parameters. (Note: the present assumptions tend to
                      underpredict the max. thermalling height.) In the presence
                      of clouds the maximum thermalling height may instead be
                      limited bythe cloud base. (This parameter is truncated at
                      22,000 for plotting.)
                    </p>
                  </div>
                  <div id="thv" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.htift.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Thermal Height Variability
                    </figcaption>
                    <p className="card-text">
                      This parameter estimates the variability (uncertainty) of
                      the BL top (TI=0) height prediction which can result from
                      meteorological variations. Larger values indicate greater
                      variability and thus better thermalling over local "hot
                      spots" or small-scale topography not resolved by the
                      model. But larger values also indicate greater sensitivity
                      to error in the predicted surface temperature, so actual
                      conditions have a greater likelihood of differing from
                      those predicted.
                    </p>
                  </div>
                  <div id="blwsd" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.blwindkt_blwinddeg.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Wind Speed and Direction in the Boundary Layer
                    </figcaption>
                    <p className="card-text">
                      BL Wind Direction streamlines overlay BL Wind Speed
                      contours, See "Wind Speed in the Boundary Layer" and "Wind
                      Direction in the Boundary Layer" parameter descriptions
                      below for more information.
                    </p>
                  </div>
                  <div id="blws" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.blwindkt.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Wind Speed in the Boundary Layer
                    </figcaption>
                    <p className="card-text">
                      The speed of the vector-averaged wind in the BL. This
                      prediction can be misleading if there is a large change in
                      wind direction through the BL (for a complex wind profile,
                      any single number is not an adequate descriptor!).
                    </p>
                  </div>
                  <div id="blwd" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.blwinddeg.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Wind Direction in the Boundary Layer
                    </figcaption>
                    <p className="card-text">
                      The direction of the vector-averaged wind in the BL. This
                      prediction can be misleading if thereis a large change in
                      wind direction through the BL (for a complex wind profile,
                      any single number is not an adequate descriptor!). Note
                      that there will be a abrupt artificial gradient at the
                      "cross-over" between 0 and 360 degrees.
                    </p>
                  </div>
                  <div id="blwsh" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.blwindshearkt.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Wind Shear in the Boundary Layer
                    </figcaption>
                    <p className="card-text">
                      The magnitude of the vector wind difference between the
                      top and bottom of the BL. Note that this represents
                      vertical wind shear and does not indicate "shear lines"
                      (which are horizontal changes of windspeed / direction).
                    </p>
                  </div>
                  <div id="blmot" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.wblmaxkt.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      BL Max Up/Down Motion (BL Convergence)
                    </figcaption>
                    <p className="card-text">
                      Maximum grid-area-averaged extensive upward or downward
                      motion within the BL as created by horizontal wind
                      convergence. Positive convergence is associated with local
                      small-scale convergence lines (often called "shear lines"
                      by pilots, meaning horizontal changes of wind
                      speed/direction) - however, the actual size of such
                      features is much smaller than can be resolved by the model
                      so only stronger ones will be forecast and their
                      predictions are subject to much error. If CAPE is also
                      large, thunderstorms can be triggered. Negative
                      convergence (divergence) produces subsiding vertical
                      motion, creating low-level inversions which limit
                      thermalling heights. This parameter can be noisy, so users
                      should be wary.
                    </p>
                  </div>
                  <div id="cumpotcb" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.zsfclclft_zsfclcldifft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Cumulus Cloudbase for Cu Potential > 0
                    </figcaption>
                    <p className="card-text">
                      Cu Cloudbase Cloudbase contours are plotted only where
                      that cloudbase is theoretically expected. See
                      "CumulusPotential" and "Cumulus Cloudbase" parameter
                      descriptions below for more information. This composite is
                      useful only for locations where the actual potential
                      threshold for cumulus cloud production agrees with the
                      theoretically-predicted value of zero.
                    </p>
                  </div>
                  <div id="cumpot" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.zsfclcldifft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Cumulus Potential
                    </figcaption>
                    <p className="card-text">
                      This evaluates the potential for small, non-extensive
                      "puffy cloud" formation in the BL, beingthe height
                      difference between the surface-based LCL (see below) and
                      the BL top. Small cumulus clouds are (simply) predicted
                      when the parameter positive, but it is quite possible that
                      the threshold value isactually greater than zero for your
                      location so empirical evaluation is advised. I would be
                      interested in receiving end-of-season reports on what
                      threshold value worked for your site. Clouds can also
                      occur with negative values if the air is lifted up the
                      indicated vertical distance by flow up a small-scale ridge
                      not resolved by the model's smoothed topography. (This
                      parameter is truncated at -10,000 for plotting.)
                    </p>
                  </div>
                  <div id="cumcb" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.zsfclclft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Cumulus Cloudbase (Sfc. LCL)
                    </figcaption>
                    <p className="card-text">
                      This height estimates the cloudbase for small,
                      non-extensive "puffy" clouds in the BL, if such exist i.e.
                      if the Cumulus Potential parameter (above) is positive or
                      greater than the threshold Cumulus Potential empirically
                      determined for your site. The surface LCL (Lifting
                      Condensation Level) is the level to which humid air must
                      ascend before it cools enough to reach a dew point
                      temperature based on the surface mixing ratio and is
                      therefore relevant only to small clouds - unlike the below
                      BL-based CL which uses a BL-averaged humidity. However,
                      this parameter has a theoretical difficulty and quite
                      possibly that the actual cloudbase will be higher than
                      given here - so perhaps this should be considered a
                      minimum possible cloudbase. I would be interested in
                      receiving end-of-season reports on how well this parameter
                      worked for your site. (This parameter is truncated at
                      22,000 for plotting.)
                    </p>
                  </div>
                  <div id="ovpotcb" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.zblclft_zblcldifft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Overcast Development Cloudbase for OD Potential > 0
                    </figcaption>
                    <p className="card-text">
                      Overcast Development Cloudbase Cloudbase contours are
                      plotted only where that cloudbase is theoretically
                      expected. See "Overcast Development Potential" and
                      "Overcast Development Cloudbase" parameter descriptions
                      below for more information. This composite is useful only
                      for locations where the actual potential threshold for OD
                      cloud production agrees with the theoretically-predicted
                      value of zero.
                    </p>
                  </div>
                  <div id="ovpot" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.zblcldifft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Overcast Development Potential
                    </figcaption>
                    <p className="card-text">
                      This evaluates the potential for extensive cloud formation
                      (Overcast Development) at the BL top, being the height
                      difference between the BL CL (see below) and the BL top.
                      Extensive clouds and likely Overcast Development are
                      predicted when the parameter is positive, with Overcast
                      Development being increasingly more likely with higher
                      positive values. Overcast Development can also occur with
                      negative values if the air is lifted up the indicated
                      vertical distance by flow up a small-scale ridge not
                      resolved by the model's smoothed topography. (This
                      parameter is truncated at -10,000 for plotting.)
                    </p>
                  </div>
                  <div id="ovcb" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.zblclft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Overcast Development Cloudbase (BL CL)
                    </figcaption>
                    <p className="card-text">
                      This height estimates the cloudbase for extensive BL
                      clouds (Overcast Development), if such exist, i.e. if the
                      Overcast Development Potential parameter (above) is
                      positive. The BL CL (Condensation Level) is based upon the
                      humidity averaged through the BL and is therefore relevant
                      only to extensive clouds (Overcast Development), unlike
                      the above surface-based LCL which uses a surface humidity.
                      (This parameter is truncated at 22,000 for plotting.)
                    </p>
                  </div>
                  <div id="relhum" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.maxblrh.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      BL Max. Relative Humidity
                    </figcaption>
                    <p className="card-text">
                      This parameter provides an additional means of evaluating
                      the formation of clouds within the BL and might beused
                      either in conjunction with or instead of the other cloud
                      prediction parameters. Larger values indicate greater
                      cloud probability, but use of this parameter must be
                      empirical since no theoretical guidance is available - for
                      example, pilots must determine by actual experience the
                      percentage that correlates with formation of clouds above
                      local mountains. The cloud base height is not predicted,
                      but is expected to be below the TI=0 height.
                    </p>
                  </div>
                  <div id="cape" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RUC/CANV/FCST/previous.cape.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">CAPE</figcaption>
                    <p className="card-text">
                      Convective Available Potential Energy indicates the
                      atmospheric stability affecting deep convective cloud
                      formation above the BL. A higher value indicates greater
                      potential instability, larger updraft velocities within
                      deep convective clouds, and greater potential for
                      thunderstorm development (since a trigger is needed to
                      release that potential). Note that thunderstorms may
                      develop in regions of high CAPE and then get transported
                      downwind to regions of lower CAPE. Also, locations where
                      both convergence and CAPE values are high can be subject
                      to explosive thunderstorm development.
                    </p>
                  </div>
                  <div id="dsurf" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.sfcdewptf.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Surface Dew Point Temperature
                    </figcaption>
                    <p className="card-text">
                      This model-predicted surface dew point temperature can be
                      compared to the actual dew point temperature at 2m during
                      the day to evaluate the accuracy of model moisture
                      predictions.
                    </p>
                  </div>
                  <div id="bld" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.dft.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Boundary Layer Depth
                    </figcaption>
                    <p className="card-text">
                      Depth of the layer mixed by thermals. This parameter can
                      be useful in determining which flight directional lows
                      better thermalling conditions when average surface
                      elevations vary greatly in differing directions.
                    </p>
                  </div>
                  <div id="hsurf" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RAP/CANV/FCST/previous.qswm2.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Surface Heating
                    </figcaption>
                    <p className="card-text">
                      Heat transferred into the atmosphere due to solar heating
                      of the ground, i.e. the heating that creates thermals.
                      (This parameter is truncated at -100 and +1000 for
                      plotting.)
                    </p>
                  </div>
                  <div id="tsurf" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RUC/CANV/FCST/previous.sfctempf.21z.PNG"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Surface Temp
                    </figcaption>
                    <p className="card-text">
                      This model-predicted surface temperature can be compared
                      to the actual temperature at 2m during the day to evaluate
                      the accuracy of model heating predictions.
                    </p>
                  </div>
                  <div id="topoact" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RUC/CANV/actualtopo.png"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Actual Topographic Height
                    </figcaption>
                  </div>
                  <div id="topomod" className="tabcontent">
                    <img
                      src="http://www.drjack.info/BLIP/RUC/CANV/modeltopo.png"
                      alt=""
                      width="100%"
                    />
                    <figcaption className="figure-caption">
                      Model Topographic Height
                    </figcaption>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
            <div className="margin" />
          </div>
          {/* <Footer /> */}
        </div>
      );
    }
  }
}

export default WeatherBlips;
