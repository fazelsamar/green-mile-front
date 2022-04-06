import React, { Component } from 'react'
import { DivAddPhoto, DivInput, DivLable, DivPhoto, DivShowPhoto, InputFile, ParentELement, ShowPhoto } from './AddLocitionElement';


class AddLocition extends Component {
    state={
        photo : ''
    }
    changeValue = (e)=>{
        const name =e.target.name 
        const value=e.target.value 
        let data = {}
        data[name]  = value
        this.setState(data)
    }
    render() {
        return (
            <>
            <h2 style={{textAlign:'center'}}>  اضافه کردن مکان  </h2>
            <ParentELement>
            
                <DivAddPhoto>
                <DivShowPhoto>
                <ShowPhoto  src={this.state.photo} />
            </DivShowPhoto>
                <DivPhoto>
                        <DivInput>
                        <DivLable  htmlFor='addPhoto'>
                        <InputFile  onChange={this.changeValue} accept="image/png, image/gif, image/jpeg" id='addPhoto' name='photo' type='file' />
                             اضافه کردن تصویر 
                            </DivLable>
                            </DivInput>
                      
                    </DivPhoto>
                </DivAddPhoto>
            </ParentELement>
            </>

        );
    }
}

export default AddLocition;