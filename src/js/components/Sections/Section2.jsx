
import React from "react";
import {PageHeader} from "react-bootstrap"
import "../../../sass/sections.scss";

export default class Section2 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section2" >
            <PageHeader>
            <small> <b>Bha</b>va <b>Ra</b>aga <b>Ta</b>ala</small>
            </PageHeader>
            </div>
        );
    } 
}