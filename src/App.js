import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Certificate from "./certificate4.jpg";
import PinchZoomPan from "react-image-zoom-pan";
class App extends Component {
  render() {
    return (
      <>
            {" "}
            <Row  id="firstCol" className=" d-flex justify-content-center ">
        
              <Col className="d-flex justify-content-center">
              <p className="firstName1 ml-3">Evgeni</p>{" "}
              </Col>
              <Col>
              <p className="secondName d-flex justify-content-center">Gyurov</p>{" "}
              </Col>
              <Col className="d-flex justify-content-center">
              <p className="jobTitle">Web Dev</p>
              </Col>
        </Row>
             

          <Row className="infoRow mt-3 mb-5">
            <Col xs={12} lg={3}>
              <Row className = "d-flex justify-content-center">
                {" "}
                <ImLocation className="icon" />{" "}
                <p className="infoText">Sofia, Bulgarias</p>{" "}
              </Row>
            </Col>
            <Col xs={12} lg={3}>
              <Row className = "d-flex justify-content-center">
                {" "}
                <FaMobileAlt className="icon " />{" "}
                <p className="infoText"> (+359) 876 710 109</p>{" "}
              </Row>
            </Col>
            <Col xs={12} lg={3}>
              <Row className = "d-flex justify-content-center">
                {" "}
                <CgWebsite className="icon" />{" "}
                <p className="infoText">https://www.linkedin.com/</p>{" "}
              </Row>
            </Col>
            <Col xs={12} lg={3}>
              <Row className = "d-flex justify-content-center">
                {" "}
                <MdEmail className="icon" />{" "}
                <p className="infoText">evgeni.tech.uk@gmail.com</p>
              </Row>
            </Col>
          </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className="mb-3">
            <Container>
              {" "}
              <Row className="title d-flex justify-content-center ">Me</Row>
              <Row className="text d-flex justify-content-center">
                I am a big space fan and Ive always loved everything tech
                related. I remember visiting one of those LEGO robotic courses
                as a child, then I found my passion about coding. A few years
                later Ive joined Softuni and there my journey has began. After
                that I continued with Strive School and got my first FullStack
                Certificate, now I am working on my own projects, mastering my
                skills and developing new ones. In the meanwhile I am looking
                for a job requiring Mern Stack developer but all job offers are
                more than welcome
              </Row>
              <Row className="title d-flex justify-content-center mt-5">
                Education
              </Row>
              <Row className="text mb-2 mt-2">
                2015 - 81 Sou Viktor Hugo / Mathematics Class /
              </Row>
              <Row className="text ">
                2020 - Vocational High School of Electrical Engineering and
                Automation / Computer networks /
              </Row>
              <Row className="certificates  d-flex justify-content-center mt-5 mb-3">
              </Row>
              <Row className="d-flex justify-content-center ml-5 mb-5">
                <Col
                  xs={12}
                  md={12}
                  lg={6}
                  className=" d-flex justify-content-center"
                >
                  <PinchZoomPan maxScale={2} zoomButtons={false} className="">
                    <img
                      className="item1"
                      src="https://softuni.bg/certificates/certificates/converttoimage/24363?code=c95af639"
                      alt="First slide"
                    />
                  </PinchZoomPan>
                </Col>

            
                <Col
                  xs={12}
                  md={12}
                  lg={6}
                  className=" d-flex justify-content-center"
                >
                   <PinchZoomPan maxScale={2} zoomButtons={false} className="">
                    <img
                      className="item1"
                      src="https://softuni.bg/certificates/certificates/converttoimage/53496?code=c577c563"
                      alt="First slide"
                    />
                  </PinchZoomPan>
                  </Col>
              </Row>
              <Row
                  className="d-flex justify-content-center mr-5"
                >
                  <PinchZoomPan
                  maxScale={5}
                  zoomButtons={false}
                  className="fullstackPinch"
                >
                  <img src={Certificate} alt="First slide" />
                </PinchZoomPan>
                 
                </Row>
            </Container>
          </Col>
          <Col
            id="thirdCol"
            className={window.innerWidth < 410 ? "lastCol ml-4" : "ml-4 mb-4"}
          >
            <Container className = "mb-5">
              <Row className="title2 software d-flex justify-content-center ">
                Programming languages
              </Row>
              <Row className="text2 d-flex justify-content-center">
                <Row className="skillRow">
                  <h className="skill"> C# </h> <h className="skill"> JS </h>{" "}
                  <h className="skill"> JAVA </h> <h className="skill"> TS </h>
                </Row>
              </Row>
              <Row className="title2 d-flex justify-content-center mt-2">
                Framework
              </Row>
              <Row className="text2 d-flex justify-content-center">
                <Row className="skillRow">
                  <h className="skill2"> M </h> <h className="skill2"> E </h>{" "}
                  <h className="skill2"> R </h> <h className="skill2"> N </h>
                </Row>
              </Row>

              <Row className="text2 d-flex justify-content-center mt-2"></Row>
              <Row className="title2 mt-3 mb-1 d-flex justify-content-center">
                Technologies
              </Row>
              <Row className="d-flex justify-content-center">
                <Container className="mr-5 ">
                  <Row className="skillName d-flex justify-content-center">
                    React{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    Express{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    Mongo{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    Node{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    TypeScript{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    PostgreSql{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2} className="col1">
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>
                      <Col xs={2} sm={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    SCRUM{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    REDUX{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    GitHub{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                  <Row className="skillName d-flex justify-content-center">
                    Heroku{" "}
                  </Row>
                  <Row className=" d-flex justify-content-center mt-2">
                    <Row className="skillInline  mt-2">
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2} className="col1">
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>
                      <Col sm={2} xs={2}>
                        {" "}
                      </Col>{" "}
                    </Row>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
{
  /* <Carousel className="carousel1">
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

  <Carousel.Caption className="caption ">
    <img
      className="loadingImg"
      src="https://i.gifer.com/7VE.gif"
    />
    <h3>C# OOP ADVANCED</h3>
    <p>On the way 🚀</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel> */
}
