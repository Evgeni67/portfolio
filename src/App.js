import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
class App extends Component {
  componentDidMount() {
    console.log(window.innerWidth);
    document.getElementById(
      "firstCol"
    ).style.height = `${window.innerHeight}px`;
    document.getElementById("firstCol").style.width = `${window.innerWidth}px`;
    document.getElementById(
      "secondCol"
    ).style.height = `${window.innerHeight}px`;
    document.getElementById("secondCol").style.width = `${window.innerWidth}px`;
    document.getElementById(
      "thirdCol"
    ).style.height = `${window.innerHeight}px`;
    document.getElementById("thirdCol").style.width = `${window.innerWidth}px`;
  }
  render() {
    return (
      <>
        <Row className="rowLaptop d-flex justify-content-center ">
          <Col sm={4} id="firstCol">
            <Row className=" d-flex justify-content-center ">
              <p className="firstName1">EVG</p>
              <p className="firstName2">ENI</p>
            </Row>
            <Row className=" d-flex justify-content-center ">
              <p className="secondName">Gyurov</p>
            </Row>
            <Row className=" d-flex justify-content-center ">
              <p className="jobTitle">Web Developer</p>
            </Row>
            <Row className=" d-flex justify-content-left mt-5">
              <FaMobileAlt className="icon " />{" "}
              <p className="infoText">(+359) 876 710 109</p>
            </Row>
            <Row className=" d-flex justify-content-left ">
              <ImLocation className="icon" />{" "}
              <p className="infoText">Sofia, Bulgaria</p>
            </Row>
            <Row className=" d-flex justify-content-left ">
              <MdEmail className="icon" />{" "}
              <p className="infoText">evgeni776@abv.bg</p>
            </Row>
            <Row className=" d-flex justify-content-left ">
              <CgWebsite className="icon" />{" "}
              <p className="infoText">www.localhost:3000.com</p>
            </Row>
          </Col>
          <Col sm={5} id="secondCol">
            {" "}
            <Row className="title d-flex justify-content-left ">Me</Row>
            <Row className="text d-flex justify-content-center">
              I am a big space fan and Ive always loved everything tech related.
              I remember visiting one of those LEGO robotic courses as a child,
              then I found my passion about coding. My other hobbies are all
              mountain related, during the winter I'll grab my ski and slice the
              powder while during the summer Id rather jump on my bike and hit
              the local downhill tracks at Vitosha.
            </Row>
            <Row className="title d-flex justify-content-left mt-5">
              Education
            </Row>
            <Row className="text d-flex justify-content-center">
              2020 - Vocational High School of Electrical Engineering and
              Automation / Computer networks /
            </Row>
            <Row className="title d-flex justify-content-left mt-5">
              Certificates
            </Row>
            <Row className="text d-flex justify-content-center mt-3">
              <Carousel className="carousel">
                <Carousel.Item className="caruselItem">
                  <img
                    className="item1"
                    src="https://softuni.bg/certificates/certificates/converttoimage/24363?code=c95af639"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="caruselItem">
                  <img
                    className="item2 "
                    src="https://softuni.bg/certificates/certificates/converttoimage/53496?code=c577c563"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="caruselItem">
                  <img
                    className="item3"
                    src="https://softuni.bg/certificates/certificates/converttoimage/53496?code=c577c563"
                    alt="Third slide"
                  />

                  <Carousel.Caption className="caption">
                    <img
                      className="loadingImg"
                      src="https://i.gifer.com/7VE.gif"
                    />
                    <h3>C# OOP ADVANCED</h3>
                    <p>On the way 🚀</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Col>
          <Col sm={3} id="thirdCol">
            <Row className="title2 d-flex justify-content-left mt-5">
              Software Skills
            </Row>
            <Row className="text2 d-flex justify-content-center">
              <Row className = "skillRow">
              <h className="skill"> C# </h> <h className="skill"> JS </h>{" "}
              <h className="skill"> JAVA </h>  <h className="skill"> TS </h>
              </Row>
            </Row>
            <Row className="title2 d-flex justify-content-left mt-5">
              Framework

            </Row>
            <Row className="text2 d-flex justify-content-center">
              <Row className = "skillRow">
              <h className="skill2"> M </h> <h className="skill2"> E </h>{" "}
              <h className="skill2"> R </h>  <h className="skill2"> N </h> 
              </Row>
            </Row>
            
            <Row className="title2 d-flex justify-content-left mt-3">
              Previous projects
            </Row>
            <Row className="text2 d-flex justify-content-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Row>
            <Row className="title2 d-flex justify-content-left mt-3">
              Lorem ipsum
            </Row>
            <Row className="text2 d-flex justify-content-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
