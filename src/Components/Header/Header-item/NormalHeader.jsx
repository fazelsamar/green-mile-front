import React, { Component } from 'react'
import Profile from '../../Profile';
import { AddCocitionDiv, BtnLinkHeader, Headerdiv, IconMenuMobile, IconMenuMobilePr, IconSearch, SearchBox, SearchInput, UserDiv, UserLoginDiv } from '../HeaderElements';


class NormalHeader extends Component {
    state = {  } 
    render() { 
      
        return (
            <Headerdiv>
                {localStorage.getItem("token") ?<UserDiv>
                    <Profile />
                    <BtnLinkHeader to="">{localStorage.getItem("last_name")}</BtnLinkHeader>
                  </UserDiv> : <UserLoginDiv to='/login' >
                    ورود
                  </UserLoginDiv> }
            
  
            <SearchBox>
              <SearchInput placeholder="جستجو ...." />
              <IconSearch />
            </SearchBox>
  
            <AddCocitionDiv>
              <BtnLinkHeader  to="/addLocition"> اضافه کردن مکان </BtnLinkHeader>
            </AddCocitionDiv>
            <IconMenuMobilePr onClick={this.props.clickMenu} >
              <IconMenuMobile />
            </IconMenuMobilePr>
          </Headerdiv>

        );
    }
}
 
export default NormalHeader;