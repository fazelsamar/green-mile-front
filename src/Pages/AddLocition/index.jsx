import React, { Component } from "react";
import {
  DivAddPhoto,
  DivInput,
  DivLable,
  DivPhoto,
  DivShowPhoto,
  InputFile,
  ParentELement,
  ShowPhoto,
} from "./AddLocitionElement";

class AddLocition extends Component {
  state = {
    photo: "",
  };
  changeValue = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // let data = {};
    // data[name] = value;
    // this.setState(data);
    this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };
  render() {
    return (
      <>
        <h2 style={{ textAlign: "center" }}> اضافه کردن مکان </h2>
        <ParentELement>
          <DivAddPhoto>
            <DivShowPhoto>
              {this.state.photo && <ShowPhoto src={this.state.photo} />}
            </DivShowPhoto>
            <DivPhoto>
              <DivInput>
                <DivLable htmlFor="addPhoto">
                  <InputFile
                    onChange={this.changeValue}
                    accept="image/*"
                    id="addPhoto"
                    name="photo"
                    type="file"
                  />
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
