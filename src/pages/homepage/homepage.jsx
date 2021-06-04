import './homepage.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Homepage = () => {
  return (
    <>
      <div className="taking">
        <div className="row">
          <div className="col-md-6 col-12-sm-12">
            <h1 className="grow">
              Get analysis of all OOH <br />
              in Nigeria on ZABUNI
            </h1>
            <p className="texti">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              iure officiis tenetur ipsam soluta ex, perferendis nemo unde
              distinctio consequatur in, ratione debitis cupiditate alias.
              Accusantium, repellat. Magni, deleniti omnis.
            </p>
            <div className="olab">
              <button className="homeb start2">
                Learn How <AiOutlineArrowRight className="obob" />
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <center>
              <img
                src="https://res.cloudinary.com/adesanza/image/upload/v1616403586/zabuni/Group_1935_lvlpjg.svg"
                alt=""
              />
            </center>
          </div>
        </div>
      </div>
      <div>
        <div className="starting">
          <h3 id="feature" className="differ">
            Start your Campaign
          </h3>
          <div className="row">
            <div className="col-md-4">
              <center>
                <img
                  src="https://res.cloudinary.com/adesanza/image/upload/v1615074243/zabuni/Group_276_srz2ti.svg"
                  alt=""
                  height="244px"
                  width="236px"
                />
                <span>
                  <p id="advert">
                    Set Your Advert Channels
                    <br />& Budget
                  </p>
                </span>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img
                  src="https://res.cloudinary.com/adesanza/image/upload/v1615074238/zabuni/Group_277_d5rlrd.svg"
                  alt=""
                  height="244px"
                  width="236px"
                />
                <span>
                  <p id="advert">
                    Our Adverts Expert <br />
                    Contacts you
                  </p>
                </span>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img
                  src="https://res.cloudinary.com/adesanza/image/upload/v1615074235/zabuni/Agreement-rafiki_mxyxgd.svg"
                  alt=""
                  height="244px"
                  width="236px"
                />
                <p id="advert">Close The Deal</p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="later">
        <center>
          <div>
            <h3 className="loader">Download ZABUNI web app</h3>
            <p className="accurate">
              Get accurate daily analysis of OOH on ZABUNI
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/adesanza/image/upload/v1615209035/zabuni/Group_1528_acbfe5.png"
              alt=""
            />
          </div>
        </center>
      </div>
      <footer className="row taking1">
        <div className="col-md-2">
          <ul>
            <h3 id="pink">COMPANY</h3>
            <li>About</li>
            <li>Press</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <h3 id="pink">CHANNELS</h3>
            <li>Taxi Tv</li>
            <li>Mobile Screens</li>
            <li>Digital Boards</li>
            <li>LED Cubes</li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <h3 id="pink">SITEMAP</h3>
            <li>Cancellation</li>
            <li>Site Map</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="col-md-6 align-self-end">
          <p className="reserved">
            Copyright @ 2021, Zabuni NG. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
