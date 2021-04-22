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
    if(window.innerWidth > 400){
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
}
  render() {
    return (
      <>
        <Row className="rowLaptop d-flex justify-content-center ">
          <Col sm={4} xs = {12}id="firstCol">
            <Row className=" d-flex justify-content-center ">
              <p className="firstName1">EVG</p>
              </Row>
              <Row className=" d-flex justify-content-center ">
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
              <p className="infoText">www.localhost:22.com</p>
            </Row>
          </Col>
          <Col sm={5}  xs = {12}id="secondCol">
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
            <Row className="title certificates d-flex justify-content-left mt-5">
              Certificates
            </Row>
            <Row className=" d-flex justify-content-center mt-3">
              <Carousel className="carousel carousel1">
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
          <Col sm={3}  xs = {12}id="thirdCol">
            <Row className="title2 software d-flex justify-content-left ">
              Software Skills
            </Row>
            <Row className="text2 d-flex justify-content-center">
              <Row className="skillRow">
                <h className="skill"> C# </h> <h className="skill"> JS </h>{" "}
                <h className="skill"> JAVA </h> <h className="skill"> TS </h>
              </Row>
            </Row>
            <Row className="title2 d-flex justify-content-left mt-2">
              Framework
            </Row>
            <Row className="text2 d-flex justify-content-center">
              <Row className="skillRow">
                <h className="skill2"> M </h> <h className="skill2"> E </h>{" "}
                <h className="skill2"> R </h> <h className="skill2"> N </h>
              </Row>
            </Row>

            <Row className="title2 d-flex justify-content-left mt-3">
              Previous projects
            </Row>
            <Row className=" d-flex justify-content-center mt-2">
              <Carousel className="carousel2">
                <Carousel.Item className="carousle2Item">
                  <img
                    src="https://prikachi.net/images/R9Y2B.png"
                    className="logoProject"
                  />
                </Carousel.Item>
                <Carousel.Item className="carousle2Item">
                  <img
                    src="https://prikachi.net/images/R9Y2B.png"
                    className="logoProject"
                  />
                </Carousel.Item>
                <Carousel.Item className="carousle2Item">
                  <img
                    src="https://prikachi.net/images/RiDvl.png"
                    className="logoProject"
                  />
                </Carousel.Item>
              </Carousel>
            </Row>
            <Row className="title2 mt-3 mb-1 d-flex justify-content-left">
              Technologies
            </Row>
            <Container className = "technologyCon">
            
            <Row className="skillName d-flex justify-content-center">React </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}> </Col>
                <Col sm={2}xs = {2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">Express </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">Mongo </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col xs = {2}sm={2} className = "col1"> </Col>
                <Col xs = {2}sm={2} className = "col1"> </Col>
                <Col xs = {2}sm={2} className = "col1"> </Col>
                <Col xs = {2}sm={2} className = "col1"> </Col>
                <Col xs = {2}sm={2} className = "col1"> </Col>
                <Col xs = {2}sm={2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">Node </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">TypeScript </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2} className = "col1"> </Col>
                <Col xs = {2} sm={2} > </Col>
                <Col xs = {2} sm={2} > </Col>
                <Col xs = {2} sm={2} > </Col>
                <Col xs = {2} sm={2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">PostgreSql </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col xs = {2}  sm={2} className = "col1"> </Col>
                <Col xs = {2}  sm={2} className = "col1"> </Col>
                <Col xs = {2}  sm={2} > </Col>
                <Col xs = {2} sm={2} > </Col>
                <Col xs = {2} sm={2} > </Col>
                <Col xs = {2} sm={2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">SCRUM </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">REDUX </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">GitHub </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}className = "col1"> </Col>
                <Col sm={2} xs = {2}> </Col>{" "}
              </Row>
            </Row>
            <Row className="skillName d-flex justify-content-center">Heroku </Row>
            <Row className=" d-flex justify-content-left mt-2">
              <Row className="skillInline  mt-2">
                <Col sm={2}xs = {2} className = "col1"> </Col>
                <Col sm={2}xs = {2} className = "col1"> </Col>
                <Col sm={2}xs = {2} className = "col1"> </Col>
                <Col sm={2}xs = {2} className = "col1"> </Col>
                <Col sm={2}xs = {2} > </Col>
                <Col sm={2}xs = {2}> </Col>{" "}
              </Row>
            </Row>
            </Container>
            
            
            
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
