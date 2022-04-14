import React, { Component } from 'react';
import { BoxItemMenus, CloseMenu, DivIconSearch, IconSearch, ItemMenu, MobileMneu, SearchInput, SearchMobile } from '../HeaderElements';

class MobileMenu extends Component {
    state = { valueInput:'' } 
    reloadPage=()=>{
      window.location.replace(`/search=${this.state.valueInput}`)
      this.props.toggelMenuFun()
    }
    setValue=(e)=>{
      this.setState({valueInput:e.target.value})
      
    }
    render() { 
        return (
            <MobileMneu toggelMenu= {this.props.toggel}>
            <CloseMenu onClick={this.props.toggelMenuFun}  />
            <SearchMobile> 
              <SearchInput value={this.state.valueInput} onChange={this.setValue} placeholder="جستجو ...." />
              <DivIconSearch onClick = {this.reloadPage} >
              <IconSearch />
              </DivIconSearch>
            </SearchMobile> 
            <BoxItemMenus>
              <ItemMenu to=""> اضافه کردن مکان </ItemMenu>
            </BoxItemMenus>
            <BoxItemMenus>
              <ItemMenu to=""> لیست استان ها </ItemMenu>
            </BoxItemMenus>
            
          </MobileMneu>
        );
    }
}
 
export default MobileMenu;