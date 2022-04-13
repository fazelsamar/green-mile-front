import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Profile from '../../Profile';
import { AddCocitionDiv, BtnLinkHeader, DivIcnon, Headerdiv, IconMenuMobile, IconMenuMobilePr, IconSearch, SearchBox, SearchInput, UserDiv, UserLoginDiv } from '../HeaderElements';


class NormalHeader extends Component {
    state = {
      locition:false,
      valueInput:''
      } 
      reloadPage=()=>{
        window.location.replace(`/search/${this.state.valueInput}`)
      }
      setValue=(e)=>{
        this.setState({valueInput:e.target.value})
      }
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
              <SearchInput value={this.state.valueInput} onChange={this.setValue} placeholder="جستجو ...." />
              <DivIcnon>
            
              <IconSearch  onClick={this.reloadPage} />
              </DivIcnon>
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