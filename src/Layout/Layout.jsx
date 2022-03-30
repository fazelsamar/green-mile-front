import React, {Component} from "react";
import Header from "../Components/Header";
import {Body, HtmlTag} from "./LayoutElement";

class Layout extends Component {
  state = {};
  render() {
    return (
      <HtmlTag>
        <Header />

        <Body>{this.props.children}</Body>
      </HtmlTag>
    );
  }
}

export default Layout;
