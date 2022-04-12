import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import BackHome from "../../Components/Back-home";
import Maps from "../../Components/MakerMap";
import BackTab from "../../Components/Ui/backtab";
import {
  AddLocitionc,
  AddPotoW,
  DivAddPhoto,
  DivAddwelfare,
  DivForm, SubmitFromInput,
  DivInput,
  DivInputTitle,
  DivLable,
  DivPhoto,
  DivShowPhoto,
  FormItem,
  IconClose,
  InputFile,
  InputTitle,
  LableInputForm,
  OptionSelect,
  PageAddLocition,
  ParentELement,
  SelectBox,
  ShowPhoto,
  ShowPhotoDiv,
  ShowPhotoW,
  ShowPhotoWDiv,
  SubmitInput,
  SubmitInputDiv,
  TitlePage,
  WelfareItem,
  WelfareItemImg,
  WelfareItemImgDiv,
  AddMap,
  PageAddMap,
  ShowAddres,

} from "./AddLocitionElement";
import Input from "./Inputs/Input";


const stateone = {
  openPageAdd: false,
  openPageAddMap: false,
  photoW: '',
  titleW: '',
  photo: "",
  title: '',
  caption: '',
  state: '',
  addres: '',
  typeOfArea: '',
  locition: '',
  welfareAmenities: [],
  sleep: false,
  infoAddMap :{}
};
class AddLocition extends Component {
  state = stateone
  changeValueFile = (e) => {

    this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };
  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  changeValueCheckbox = (e) => {
    this.setState({ [e.target.name]: !this.state.sleep })
  }
  submitAdd = () => {
    const image = this.state.photoW
    const titleW = this.state.titleW
    const copyState = [...this.state.welfareAmenities]
    const create = { title: titleW, img: image }
    copyState.push(create)
    this.setState({ openPageAdd: false, welfareAmenities: copyState, titleW: '', photoW: '' })
  }
  HandelPage = () => {
    const check = this.state.openPageAdd
    this.setState({ openPageAdd: !check })
  }
  closePage = () => {
    this.setState({ openPageAdd: false })
  }
  formHandel = (e) => {
    e.preventDefault()
    this.setState(stateone)
    alert('با موفقیت انجام شد')
  }
  handelAddMapPage = () => {
    this.setState({ openPageAddMap: !this.state.openPageAddMap })
  }
  setMap = (info) => {

    this.setState({infoAddMap:info ,openPageAddMap:false})

  }
  render() {

    return (
      <React.Fragment>
        {this.props.hasLogin ?
          <>
            <BackHome />
            <h2 style={{ textAlign: "center" }}> اضافه کردن مکان </h2>
            <ParentELement>

              <DivAddPhoto>
                {this.state.photo ? <DivShowPhoto>
                  {this.state.photo && <ShowPhoto src={this.state.photo} />}
                </DivShowPhoto> : null}

                <DivPhoto>
                  <DivInput>
                    <DivLable htmlFor="addPhoto">
                      <InputFile
                        onChange={this.changeValueFile}
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
              <DivForm>
                <form onSubmit={this.formHandel}>

                  <Input type='text' name='title' lable='عنوان' value={this.state.title} changeValue={this.changeValue} />

                  <Input type='text' name='typeOfArea' lable='نوع منطقه ' value={this.state.typeOfArea} changeValue={this.changeValue} />

                  <FormItem>
                    <LableInputForm htmlfor='state'>
                      استان :
                    </LableInputForm>
                    <SelectBox name="state" id="state" onChange={this.changeValue} >
                      {this.props.states.map((item, index) => {
                        return (
                          <OptionSelect value={item.provinceName} key={index}>
                            {item.provinceName}
                          </OptionSelect>
                        )
                      })}
                    </SelectBox>
                    <FormItem>
                      <LableInputForm>
                        استراحت گاه
                      </LableInputForm>
                      <input name="sleep" type="checkbox" onChange={this.changeValueCheckbox} checked={this.state.sleep} />
                    </FormItem>
                  </FormItem>

                  <LableInputForm>
                    امکانات رفاهی
                  </LableInputForm>
                  <DivAddwelfare>
                    {this.state.welfareAmenities.length !== 3 ? <AddLocitionc onClick={this.HandelPage}>
                      اضافه کردن
                    </AddLocitionc> : null}
                    {this.state.welfareAmenities.map(item => {
                      return (
                        <WelfareItem>
                          <WelfareItemImgDiv>
                            <WelfareItemImg src={item.img} />
                          </WelfareItemImgDiv>
                          <p>{item.title}</p>
                        </WelfareItem>)
                    })}
                  </DivAddwelfare>
                  <FormItem>
                    <LableInputForm>
                      اضافه کردن نقشه
                    </LableInputForm>
                    
                    <AddMap onClick={this.handelAddMapPage}> اضافه کردن </AddMap>
                    <ShowAddres>  {this.state.infoAddMap.addres ? 'ادرس : ' + this.state.infoAddMap.addres.address :null} </ShowAddres>
                  </FormItem>

                  <FormItem>
                    <LableInputForm htmlFor="caption"> اطلاعات :  </LableInputForm>
                    <textarea value={this.state.caption} onChange={this.changeValue} name="caption" id="caption" cols="30" rows="10"></textarea>
                  </FormItem>

                  <FormItem>
                    <SubmitFromInput type='submit' value='ثبت' />
                  </FormItem>


                </form>





                {this.state.openPageAdd ? <BackTab /> : null}


                <PageAddLocition open={this.state.openPageAdd}>
                  <div>
                    <IconClose onClick={this.closePage} />
                    <TitlePage>
                      امکان رفاهی را اضافه کنید
                    </TitlePage>
                  </div>
                  <ShowPhotoDiv>
                    {this.state.photoW.length !== 0 ? <ShowPhotoWDiv>
                      {this.state.photoW && <ShowPhotoW src={this.state.photoW} />}
                    </ShowPhotoWDiv> : null}

                  </ShowPhotoDiv>


                  <AddPotoW>
                    <DivInput>
                      <DivLable htmlFor="welfareAmenities">
                        <InputFile
                          onChange={this.changeValueFile}
                          accept="image/*"
                          id="photoW"
                          name="photoW"
                          type="file"
                        />
                        اضافه کردن تصویر
                      </DivLable>
                    </DivInput>

                  </AddPotoW>
                  <DivInputTitle>
                    <InputTitle name="titleW" value={this.state.titleW} onChange={this.changeValue} placeholder="عنوان" type="text" />
                  </DivInputTitle>
                  <SubmitInputDiv>
                    <SubmitInput onClick={this.submitAdd} >
                      ثبت
                    </SubmitInput>
                  </SubmitInputDiv>

                </PageAddLocition>


                {this.state.openPageAddMap ? <BackTab /> : null}

                <PageAddMap hasOpen={this.state.openPageAddMap}>
                  <IconClose onClick={this.handelAddMapPage} />
                  <TitlePage>
                    مکان مورد نظر خود را بر روی نقشه پیدا کنید
                  </TitlePage>
                  <Maps setMap={this.setMap} />

                </PageAddMap>



              </DivForm>
            </ParentELement>

          </>
          : <Navigate replace to='/login' />}
      </React.Fragment>
    );
  }
}

export default AddLocition;