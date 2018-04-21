import React from "react";
import TopHeader from "../components/TopHeader";
import MultiContent from "../components/MultiContent";
import {PageHeader} from "react-bootstrap"

export default class App extends React.Component {
    render() {
      return (
        <div>
        <TopHeader />
        <PageHeader>
          Bha Ra Ta <small>Bhava Raaga Taala</small>
        </PageHeader>
        <MultiContent />
        </div>
      );
    }
  }