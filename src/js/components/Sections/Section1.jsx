
import React from "react";
import TopHeader from "../TopHeader";
import "../../../sass/sections.scss";

export default class Section1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section1" >
            <TopHeader />
            </div>
        );
    }
}