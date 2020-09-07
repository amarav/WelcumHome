import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { Collapse, CardBody, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [card1collapse, setcard1Collapse] = useState(false);
  const togglecard1 = () => setcard1Collapse(!card1collapse);

  const [card2collapse, setcard2Collapse] = useState(false);
  const togglecard2 = () => setcard2Collapse(!card2collapse);

  const [card3collapse, setcard3Collapse] = useState(false);
  const togglecard3 = () => setcard3Collapse(!card3collapse);

  const [card4collapse, setcard4Collapse] = useState(false);
  const togglecard4 = () => setcard4Collapse(!card4collapse);

  const [card5collapse, setcard5Collapse] = useState(false);
  const togglecard5 = () => setcard5Collapse(!card5collapse);

  const [card6collapse, setcard6Collapse] = useState(false);
  const togglecard6 = () => setcard6Collapse(!card6collapse);

  return (
    <div>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Legiyam</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color="primary"
              className="text-dark"
              onClick={togglecard1}
              style={{ marginBottom: "1rem" }}
            >
              Find out more
            </Button>
            <Collapse isOpen={card1collapse}>
              <Card>
                <CardBody>
                  <ul>
                    <li>Kadugu Legiyam</li>
                    <li>Poondu legiyam</li>
                    <li>Sukku legiyam</li>
                    <li>Prasava legiyam</li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Marundhu Podi</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color="primary"
              className="text-dark"
              onClick={togglecard2}
              style={{ marginBottom: "1rem" }}
            >
              Find out more
            </Button>
            <Collapse isOpen={card2collapse}>
              <Card>
                <CardBody>
                  <ul>
                    <li><Link to="/Kuzhambupodi">Kuzhambu podi</Link></li>
                    <li>Paruppu podi</li>
                    <li>Karuveppilai Podi</li>
                    <li>Kuzhiyal Podi</li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Pathiya Sapadu</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color="primary"
              className="text-dark"
              onClick={togglecard3}
              style={{ marginBottom: "1rem" }}
            >
              Find out more
            </Button>
            <Collapse isOpen={card3collapse}>
              <Card>
                <CardBody>
                  <ul>
                    <li>Milagu Podi Kuzhambu</li>
                    <li>Poondu Kuzhambu</li>
                    <li>Marundhu Kuzhambu</li>
                    <li>Pathiya Rasam</li>
                    <li>Dhriti sapadu</li>
                    <li>Vendhaya kazhi</li>
                    <li>Rubi Amla</li>
                    <li>Sitraamutti Thailam</li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Pathiya Kuzhiyal</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color="primary"
              className="text-dark"
              onClick={togglecard4}
              style={{ marginBottom: "1rem" }}
            >
              Find out more
            </Button>
            <Collapse isOpen={card4collapse}>
              <Card>
                <CardBody>
                  <ul>
                    <li>Kuzhiyal Podi</li>
                    <li>Bath procedure</li>
                    <li>After Bath procedure</li>
                    <li>Pugai Poduthal</li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Diet</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color="primary"
              className="text-dark"
              onClick={togglecard5}
              style={{ marginBottom: "1rem" }}
            >
              Find out more
            </Button>
            <Collapse isOpen={card5collapse}>
              <Card>
                <CardBody>
                  <ul>
                    <li>First 3 day diet</li>
                    <li>First 28 days diet</li>
                    <li>Foods to avoid</li>
                    <li>First 28 days Diet Chart</li>
                    <li>Breastfeeding Diet Chart</li>
                    <li>Foods to increase milk secretion</li>
                    <li>How to increase milk supply</li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Baby Care</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              color="primary"
              className="text-dark"
              onClick={togglecard6}
              style={{ marginBottom: "1rem" }}
            >
              Find out more
            </Button>
            <Collapse isOpen={card6collapse}>
              <Card >
                <CardBody>
                  <ul>
                    <li>Aarathi procedure</li>
                    <li>Dhristi kalippu for baby</li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Example;
