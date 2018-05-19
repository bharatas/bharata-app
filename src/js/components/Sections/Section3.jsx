
import React from "react";
import MultiContent from "../../components/MultiContent";
import "../../../sass/sections.scss";

export default class Section3 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section3" >
            <MultiContent />
            </div>
        );
    }
}