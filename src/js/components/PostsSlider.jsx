import React from "react";
import { Carousel } from "react-bootstrap";

export default class PostsSlider extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="slideCustom">
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://www.w3schools.com/howto/img_nature.jpg" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://www.w3schools.com/howto/img_fjords.jpg" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://www.w3schools.com/howto/img_mountains.jpg" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}