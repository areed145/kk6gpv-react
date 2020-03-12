import React from "react";
import {
  CardDeck,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table
} from "reactstrap";
// import Footer from "../components/Footer";

// import us from "../assets/flags/us.png";
// import cz from "../assets/flags/cz.png";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    images[item.replace("./", "")] = r(item);
    return "";
  });
  return images;
}

const images = importAll(
  require.context("../assets/flags", false, /\.(png|jpe?g|svg)$/)
);

const Travel = () => {
  return (
    <div>
      <div className="mainframe">
        <CardDeck className="carddeck">
          <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5>Countries Visited</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody">
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <tbody>
                  <tr>
                    <td>
                      <img src={images["us.png"]} alt="" /> USA
                    </td>
                    <td>
                      <img src={images["cz.png"]} alt="" /> Czech Republic
                    </td>
                    <td>
                      <img src={images["hr.png"]} alt="" /> Croatia
                    </td>
                    <td>
                      <img src={images["ro.png"]} alt="" /> Romania
                    </td>
                    <td>
                      <img src={images["mc.png"]} alt="" /> Monaco
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["ca.png"]} alt="" /> Canada
                    </td>
                    <td>
                      <img src={images["de.png"]} alt="" /> Germany
                    </td>
                    <td>
                      <img src={images["hu.png"]} alt="" /> Hungary
                    </td>
                    <td>
                      <img src={images["si.png"]} alt="" /> Slovenia
                    </td>
                    <td>
                      <img src={images["gi.png"]} alt="" /> Gibraltar
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["at.png"]} alt="" /> Austria
                    </td>
                    <td>
                      <img src={images["es.png"]} alt="" /> Spain
                    </td>
                    <td>
                      <img src={images["it.png"]} alt="" /> Italy
                    </td>
                    <td>
                      <img src={images["tr.png"]} alt="" /> Turkey
                    </td>
                    <td>
                      <img src={images["bs.png"]} alt="" /> Bahamas
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["ba.png"]} alt="" /> Bosnia and
                      Herzegovina
                    </td>
                    <td>
                      <img src={images["fr.png"]} alt="" /> France
                    </td>
                    <td>
                      <img src={images["me.png"]} alt="" /> Montenegro
                    </td>
                    <td>
                      <img src={images["ua.png"]} alt="" /> Ukraine
                    </td>
                    <td>
                      <img src={images["bz.png"]} alt="" /> Belize
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["ch.png"]} alt="" /> Switzerland
                    </td>
                    <td>
                      <img src={images["gb.png"]} alt="" /> Great Britain
                    </td>
                    <td>
                      <img src={images["pt.png"]} alt="" /> Portugal
                    </td>
                    <td>
                      <img src={images["va.png"]} alt="" /> Vatican
                    </td>
                    <td>
                      <img src={images["gt.png"]} alt="" /> Guatemala
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["mx.png"]} alt="" /> Mexico
                    </td>
                    <td>
                      <img src={images["ky.png"]} alt="" /> Cayman Islands
                    </td>
                    <td>
                      <img src={images["cl.png"]} alt="" /> Chile
                    </td>
                    <td>
                      <img src={images["il.png"]} alt="" /> Israel
                    </td>
                    <td>
                      <img src={images["mn.png"]} alt="" /> Myanmar
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["pa.png"]} alt="" /> Panama
                    </td>
                    <td>
                      <img src={images["vi.png"]} alt="" /> US Virgin Islands
                    </td>
                    <td>
                      <img src={images["ec.png"]} alt="" /> Ecuador
                    </td>
                    <td>
                      <img src={images["in.png"]} alt="" /> India
                    </td>
                    <td>
                      <img src={images["th.png"]} alt="" /> Thailand
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["pr.png"]} alt="" /> Puerto Rico
                    </td>
                    <td>
                      <img src={images["ar.png"]} alt="" /> Argentina
                    </td>
                    <td>
                      <img src={images["pe.png"]} alt="" /> Peru
                    </td>
                    <td>
                      <img src={images["jo.png"]} alt="" /> Jordan
                    </td>
                    <td>
                      <img src={images["vn.png"]} alt="" /> Vietnam
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["aw.png"]} alt="" /> Aruba
                    </td>
                    <td>
                      <img src={images["bo.png"]} alt="" /> Bolivia
                    </td>
                    <td>
                      <img src={images["uy.png"]} alt="" /> Uruguay
                    </td>
                    <td>
                      <img src={images["kh.png"]} alt="" /> Cambodia
                    </td>
                    <td>
                      <img src={images["pf.png"]} alt="" /> French Polynesia
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={images["br.png"]} alt="" /> Brazil
                    </td>
                    <td>
                      <img src={images["vg.png"]} alt="" /> British Virgin
                      Islands
                    </td>
                    <td>
                      <img src={images["ma.png"]} alt="" /> Morocco
                    </td>
                    <td>
                      <img src={images["la.png"]} alt="" /> Laos
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Travel;
