import React, {Component} from "react";
import NormalHeader from "./Header-item/NormalHeader";
import {
  AddCocitionDiv,
  BoxItemMenus,
  BtnLinkHeader,
  CloseMenu,
  Headerdiv,
  HeaderElm,
  IconMenuMobile,
  IconMenuMobilePr,
  IconSearch,
  MobileMneu,
  SearchBox,
  SearchInput,
  SearchMobile,
  UserDiv,
  ItemMenu,
} from "./HeaderElements";
import MobileMenu from "./MobileMenu/MobileMenu";

class Header extends Component {
     
  state = { 
    toggelMenu : false,
    username : 'مهرداد خندان'
 }
 toggelMenuFun = ()=>{
     this.setState({
        toggelMenu : !this.state.toggelMenu ,
       
     })
 }
  render() {
    return (
      <HeaderElm>
        <MobileMenu  toggelMenuFun= {this.toggelMenuFun} toggel = {this.state.toggelMenu} />

        
        <NormalHeader hasLogin={this.props.hasLogin} clickMenu ={this.toggelMenuFun} username={this.state.username} />
        </HeaderElm>

    );
  }
}

export default Header;
