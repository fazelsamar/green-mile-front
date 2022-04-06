import React, { Component } from 'react';
import { BoxItemMenus, CloseMenu, IconSearch, ItemMenu, MobileMneu, SearchInput, SearchMobile } from '../HeaderElements';

class MobileMenu extends Component {
    state = {  } 
    render() { 
        return (
            <MobileMneu toggelMenu= {this.props.toggel}>
            <CloseMenu onClick={this.props.toggelMenuFun}  />
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
        );
    }
}
 
export default MobileMenu;