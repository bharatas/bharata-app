import React from "react";
import "../../../sass/sections.scss";
import {Jumbotron, Button} from "react-bootstrap";
import { Row, Col } from "react-materialize";

export default class Section4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section4" >
                <div className="centerDiv">
                    <Row>
                        <Col s={3} m={3} l={3} className='grid-example'>
                            <Jumbotron>
                                <h1>Hello, world!</h1>
                                <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                                <p>
                                    <Button bsStyle="primary">Learn more</Button>
                                </p>
                            </Jumbotron>;
                        </Col>
                        <Col s={3} m={3} l={3} className='grid-example'>2</Col>
                        <Col s={3} m={3} l={3} className='grid-example'>3</Col>

                    </Row>
                </div>
            </div>
        );
    }
}