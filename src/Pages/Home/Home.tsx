import React, { useEffect } from "react";
import teamImg from "../../img/team.png";
import aboutImg from "../../img/about.png";
import macImg from "../../img/mac.png";
import g8Img from "../../img/g8.jpg";
import stairwellImg from "../../img/stairwell.png";
import booksImg from "../../img/books.png";
import { Carousel, Button} from "react-bootstrap";

import Header from "../../Components/Header";

const Home = props => {
  useEffect(() => {
  });

  return (
    <>
      <Header />
      <section className="landing-page">
        <div id="home-landing">
          <div className="container-fluid">
            <div className="row" id="hide" style={{ background: "none" }}>
              <div className="col-md-6">
                <h1 id="banner-header">
                  <span className="purple">Naija</span>Hacks
                </h1>
                <h3 id="banner-content">Community Portal.</h3>
                <h3 id="banner-content">Lorem ipsum</h3>
                <h3 id="banner-content">dolor sit amet ipsum</h3>
                <br />
                <br />
                <br />
                <br />
                <Button className="btn btn-default get-started-btn wide" href='/signup'>
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chart-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="chart-content">
                <h2>Community Portal</h2>
                <p>Create your profile and showcase area of expertise.</p>
                <br />
                <br />
                <Button className="btn btn-default get-started-btn" href='/signup'>
                  GET STARTED
                </Button>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <img src={g8Img} className="chart" alt="chart" />
            </div>
          </div>
        </div>
      </section>

      <section className="slide-container">
        <div className="container-fluid">
          <h2>Hackathons</h2>
          <br />
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <Carousel>
                <Carousel.Item>
                  <div className="item active">
                    <div className="row">
                      <div className="col-md-6">
                        <img src={aboutImg} alt="slide_1" />
                      </div>
                      <div className="col-md-6">
                        <h3>NaijaHacks</h3>
                        <h4>"Find the latest Hackathons"</h4>
                        <p>
                          Mauris a blandit turpis. Vivamus iaculis interdum
                          erat, ac fermentum dui pharetra at. In lacinia, magna
                          sed tempus consectetur, lorem arcu convallis massa,
                          vitae tempor mi elit et erat. Ut felis urna, pulvinar
                          et faucibus eget, malesuada vitae magna.
                        </p>
                        <br />
                        <Button className="btn btn-default get-started-btn" href='https://mlh.io/events'>
                           Hackathons
                        </Button>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <img src={aboutImg} alt="slide_1" />
                      </div>
                      <div className="col-md-6">
                        <h3>NaijaHacks</h3>
                        <h4>"Find the latest Hackathons"</h4>
                        <p>
                          Mauris a blandit turpis. Vivamus iaculis interdum
                          erat, ac fermentum dui pharetra at. In lacinia, magna
                          sed tempus consectetur, lorem arcu convallis massa,
                          vitae tempor mi elit et erat. Ut felis urna, pulvinar
                          et faucibus eget, malesuada vitae magna.
                        </p>
                        <br />
                        <button className="btn btn-default get-started-btn"  href='https://mlh.io/events'>
                          Hackathons
                        </button>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <img src={aboutImg} alt="slide_1" />
                      </div>
                      <div className="col-md-6">
                        <h3>NaijaHacks</h3>
                        <h4>"Find the latest Hackathons"</h4>
                        <p>
                          Mauris a blandit turpis. Vivamus iaculis interdum
                          erat, ac fermentum dui pharetra at. In lacinia, magna
                          sed tempus consectetur, lorem arcu convallis massa,
                          vitae tempor mi elit et erat. Ut felis urna, pulvinar
                          et faucibus eget, malesuada vitae magna.
                        </p>
                        <br />
                        <button className="btn btn-default get-started-btn"  href='https://mlh.io/events'>
                          Hackathons
                        </button>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="chart-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="chart-content">
                <h2>Find the right Teammate.</h2>
                <p>
                  Search all profile on the web, the right teammate is out
                  there.
                </p>
                <p>
                  Use <span className="purple">NaijaHacks</span> to get it. sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <br />
                <br />
                <button className="btn btn-default get-started-btn">
                  REGISTER
                </button>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <img src={teamImg} className="chart" alt="chart" />
            </div>
          </div>
        </div>
      </section>

      <section className="card-container">
        <div className="container-fluid center">
          <h2>What's new at NaijaHacks?</h2>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-image">
                  <img src={macImg} />
                </div>
                <div className="panel-body">
                  <h4>
                    <strong>Lorem ipsum dolor sit amet</strong>
                  </h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis felis nibh, pharetra at orci auctor, semper rhoncus
                    metus. Integer sollicitudin posuere blandit.
                  </p>
                  <button className="btn btn-default get-started-btn">
                    READ ARTICLE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-image">
                  <img src={booksImg} />
                </div>
                <div className="panel-body">
                  <h4>
                    <strong>Lorem ipsum dolor sit amet</strong>
                  </h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis felis nibh, pharetra at orci auctor, semper rhoncus
                    metus. Integer sollicitudin posuere blandit.
                  </p>
                  <button className="btn btn-default get-started-btn">
                    READ ARTICLE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-image">
                  <img src={stairwellImg} />
                </div>
                <div className="panel-body">
                  <h4>
                    <strong>Lorem ipsum dolor sit amet</strong>
                  </h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis felis nibh, pharetra at orci auctor, semper rhoncus
                    metus. Integer sollicitudin posuere blandit.
                  </p>
                  <button className="btn btn-default get-started-btn">
                    READ ARTICLE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-container">
        <div className="container-fluid">
          <h2 className="purple text-center">Testimonials</h2>
          <br />
          <div className="col-md-12 back.card">
            <Carousel>
              <Carousel.Item>
                <div className="carousel-inner testimonials-inner">
                  <div className="item">
                    <div className="row">
                      <div className="panel panel-default col-md-12 ">
                        <div className="panel-body text-center">
                          <h3>I just completed a project!</h3>
                          <p>
                            Mauris a blandit turpis. Vivamus iaculis interdum
                            erat, ac fermentum dui pharetra at. In lacinia,
                            magna sed tempus consectetur, lorem arcu convallis
                            massa, vitae tempor mi elit et erat. Ut felis urna,
                            pulvinar et faucibus eget, malesuada vitae magna.
                            lorem arcu convallis massa, vitae tempor mi elit et
                            erat.
                          </p>
                          <br />
                          <p>
                            <strong>John Doe</strong> June 14, 2019
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-inner testimonials-inner">
                <div className="item">
                  <div className="row">
                    <div className="panel panel-default col-md-12 main-card">
                      <div className="panel-body text-center">
                        <h3>My Team won the Hackathon!</h3>
                        <p>
                          Mauris a blandit turpis. Vivamus iaculis interdum
                          erat, ac fermentum dui pharetra at. In lacinia, magna
                          sed tempus consectetur, lorem arcu convallis massa,
                          vitae tempor mi elit et erat. Ut felis urna, pulvinar
                          et faucibus eget, malesuada vitae magna. lorem arcu
                          convallis massa, vitae tempor mi elit et erat.
                        </p>
                        <br />
                        <p>
                          <strong>John Doe</strong> June 14, 2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-inner testimonials-inner">
                <div className="item">
                  <div className="row">
                    <div className="panel panel-default col-md-12 main-card">
                      <div className="panel-body text-center">
                        <h3>I just got a job!</h3>
                        <p>
                          Mauris a blandit turpis. Vivamus iaculis interdum
                          erat, ac fermentum dui pharetra at. In lacinia, magna
                          sed tempus consectetur, lorem arcu convallis massa,
                          vitae tempor mi elit et erat. Ut felis urna, pulvinar
                          et faucibus eget, malesuada vitae magna. lorem arcu
                          convallis massa, vitae tempor mi elit et erat.
                        </p>
                        <br />
                        <p>
                          <strong>John Doe</strong> June 14, 2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
