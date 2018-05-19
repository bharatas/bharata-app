import React from "react";
import "../../../sass/sections.scss";
import {Grid, Row, Col, NavDropdown} from "react-bootstrap";

export default class Section4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section4" >
                <div className="centerDiv">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            Yoga
                        </Col>
                        <Col xs={3} md={3}>
                            Meditation
                        </Col>
                        <Col xs={3} md={3}>
                            Poetry
                        </Col>
                    </Row>

                </Grid>
                </div>
            </div>
        );
    }
}