import React, {Component} from "react";
import Profile from "../Profile";
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
        <MobileMneu toggelMenu={this.state.toggelMenu}>
          <CloseMenu onClick={this.toggelMenuFun}  />
          <SearchMobile>
            <SearchInput placeholder="جستجو ...." />
            <IconSearch />
          </SearchMobile> 
          <BoxItemMenus>
            <ItemMenu to=""> اضافه کردن مکان </ItemMenu>
          </BoxItemMenus>
          <BoxItemMenus>
            <ItemMenu to=""> لیست استان ها </ItemMenu>
          </BoxItemMenus>
          <BoxItemMenus>
            <ItemMenu to=""> درباره ما </ItemMenu>
          </BoxItemMenus>
        </MobileMneu>

        <Headerdiv>
          <UserDiv>
            <Profile />
            <BtnLinkHeader to="">{this.state.username}</BtnLinkHeader>
          </UserDiv>

          <SearchBox>
            <SearchInput placeholder="جستجو ...." />
            <IconSearch />
          </SearchBox>

          <AddCocitionDiv>
            <BtnLinkHeader to=""> اضافه کردن مکان </BtnLinkHeader>
          </AddCocitionDiv>
          <IconMenuMobilePr onClick={this.toggelMenuFun} >
            <IconMenuMobile />
          </IconMenuMobilePr>
        </Headerdiv>
      </HeaderElm>
    );
  }
}

export default Header;
