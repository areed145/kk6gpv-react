import React from "react";
import {
  CardDeck,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table
} from "reactstrap";
import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

import yaesu from "../assets/images/yaesu.jpg";
import baofeng from "../assets/images/baofeng.jpg";
import qsl from "../assets/images/qsl.png";
import igate from "../assets/images/igate.jpeg";

const AprsInfo = () => {
  return (
    <div>
      <div className="mainframe">
        <CardDeck className="carddeck">
          <CardCell
            title="APRS"
            text={[
              "My main interest in amateur radio has to do with APRS (Automatic Packet Reporting System), an amateur radio-based system for realtime tactical digital communications of information of immediate value in the local area.",
              "Pages in this section are generated from data reported from APRS beaconing, typically while driving and flying.",
              "aprs.fi maintains historical daily logs of points and tracks."
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5>Bakersfield Area HAM Frequencies</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody">
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <td>Frequency</td>
                    <td>Offset</td>
                    <td>Tone</td>
                    <td>Location</td>
                    <td>Comment</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>145.150</td>
                    <td>-</td>
                    <td>100.0</td>
                    <td>Breckenridge Mt.</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>146.910</td>
                    <td>-</td>
                    <td>100.0</td>
                    <td>Grapevine Pk.</td>
                    <td>Temporary Antenna - Storm Damage</td>
                  </tr>
                  <tr>
                    <td>224.060</td>
                    <td>-</td>
                    <td>100.0</td>
                    <td>Breckenridge Mt.</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>443.900</td>
                    <td>+</td>
                    <td>100.0</td>
                    <td>Low level North of Town</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="column-1">52.780</td>
                    <td class="column-2">-</td>
                    <td class="column-3">82.5</td>
                    <td class="column-4">Grapevine Pk.</td>
                    <td class="column-5">Off the Air - Storm Damage</td>
                  </tr>
                  <tr>
                    <td class="column-1">147.210</td>
                    <td class="column-2">+</td>
                    <td class="column-3">100.0</td>
                    <td class="column-4">Mt. Adelaide</td>
                    <td class="column-5">KC6EOC</td>
                  </tr>
                  <tr>
                    <td class="column-1">145.050</td>
                    <td class="column-2"></td>
                    <td class="column-3"></td>
                    <td class="column-4">Packet @ County EOC</td>
                    <td class="column-5">PBBS: KC6EOC-1</td>
                  </tr>
                  <tr>
                    <td class="column-1">147.150</td>
                    <td class="column-2">+</td>
                    <td class="column-3">100.0</td>
                    <td class="column-4"></td>
                    <td class="column-5">ARRG Echo Link 56555</td>
                  </tr>
                  <tr>
                    <td class="column-1">224.520</td>
                    <td class="column-2">-</td>
                    <td class="column-3">100.0</td>
                    <td class="column-4"></td>
                    <td class="column-5">ARRG</td>
                  </tr>
                  <tr>
                    <td class="column-1">444.425</td>
                    <td class="column-2">+</td>
                    <td class="column-3">100.0</td>
                    <td class="column-4">Tehachapi</td>
                    <td class="column-5">ARRG</td>
                  </tr>
                  <tr>
                    <td class="column-1">51.880</td>
                    <td class="column-2">-</td>
                    <td class="column-3">114.8</td>
                    <td class="column-4"></td>
                    <td class="column-5">ARRG</td>
                  </tr>
                  <tr>
                    <td class="column-1">146.670</td>
                    <td class="column-2">-</td>
                    <td class="column-3">100.0</td>
                    <td class="column-4">Mt. Adelaide</td>
                    <td class="column-5">IRLP 3714, Echo Link 983970</td>
                  </tr>
                  <tr>
                    <td class="column-1">444.750</td>
                    <td class="column-2">+</td>
                    <td class="column-3">141.3</td>
                    <td class="column-4">Mt. Adelaide</td>
                    <td class="column-5">IRLP 3901</td>
                  </tr>
                  <tr>
                    <td class="column-1">447.040</td>
                    <td class="column-2">-</td>
                    <td class="column-3">136.5</td>
                    <td class="column-4">Frazier Mt.</td>
                    <td class="column-5">IRLP 7814</td>
                  </tr>
                  <tr>
                    <td class="column-1">52.525</td>
                    <td class="column-2">simplex</td>
                    <td class="column-3"></td>
                    <td class="column-4">Mt. Adelaide</td>
                    <td class="column-5">linked to 444.750</td>
                  </tr>
                  <tr>
                    <td class="column-1">29.600</td>
                    <td class="column-2">simplex</td>
                    <td class="column-3"></td>
                    <td class="column-4">Mt. Adelaide</td>
                    <td class="column-5">linked to 444.750</td>
                  </tr>
                  <tr>
                    <td class="column-1">144.390</td>
                    <td class="column-2"></td>
                    <td class="column-3"></td>
                    <td class="column-4"></td>
                    <td class="column-5">
                      N American APRS reporting frequency
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell title="KK6GPV-10 I-Gate" img={igate} />
          <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5>HAM Equipment</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody">
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <td width="30%">Item</td>
                    <td width="30%">Description</td>
                    <td>Image</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://www.yaesu.com/indexVS.cfm?cmd=DisplayProducts&amp;ProdCatID=111&amp;encProdID=4A66D869E574453F343581B53E9FAB40"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Yaesu FT-2DR
                      </a>
                    </td>
                    <td>Dual band, APRS, touchscreen</td>
                    <td>
                      <img src={yaesu} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="https://baofengradio.us/uv-5r-v2-2nd-gen/baofeng-uv5rv2-black-220.html"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Baofeng UV-5R
                      </a>
                    </td>
                    <td>Cheap, easy to use</td>
                    <td>
                      <img src={baofeng} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={qsl} target="_blank" rel="noreferrer noopener">
                        QSL Card
                      </a>
                    </td>
                    <td>
                      <p>
                        <a href="http://aprs.fi/info/a/KK6GPV">
                          aprs.fi Station Data
                        </a>
                      </p>
                      <p>
                        <a href="http://www.findu.com/cgi-bin/find.cgi?call=kk6gpv">
                          findu Station Data
                        </a>
                      </p>
                      <p>
                        <a href="http://www.qrz.com/db/kk6gpv">QRZ Lookup</a>
                      </p>
                    </td>
                    <td>
                      <p align="center">
                        <a href="static/images/qsl.png">
                          <img src={qsl} alt="" width="100%"></img>
                        </a>
                      </p>
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

export default AprsInfo;
