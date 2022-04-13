import React, { Component } from 'react';
import { BoxItemMenus, CloseMenu, IconSearch, ItemMenu, MobileMneu, SearchInput, SearchMobile } from '../HeaderElements';

class MobileMenu extends Component {
    state = {  } 
    reloadPage=()=>{
      window.location.replace(`/search/${this.state.valueInput}`)
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
              <SearchInput placeholder="جستجو ...." />
              <IconSearch value={this.state.valueInput} onChange={this.setValue}  onClick={this.reloadPage} />
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
        );
    }
}
 
export default MobileMenu;