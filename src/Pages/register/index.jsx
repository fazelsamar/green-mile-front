import React, { Component } from 'react'
import Inputs from './Inputs/Inputs';
import { DivFormInput, DivFormRegister, DivParentRegister, FormInput, FormRegister, LableForm, Submit } from './RegisterElement';



class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        numberPhone: '',
        username: '',
        profile: '',
    }
    changeValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    }
    formSubmit =(e)=>{
        e.preventDefault()
        let dataForm = new FormData()
        dataForm.append('firstName',this.state.firstName) 
        dataForm.append('lastName',this.state.lastName) 
        dataForm.append('numberPhone',this.state.numberPhone) 
        dataForm.append('username',this.state.username) 
        dataForm.append('profile',this.state.profile)
        console.log(dataForm); 
    }
    render() {
        return (

            <DivParentRegister>
                <h2>ثبت نام :</h2>
                <DivFormRegister>
                    <FormRegister onSubmit={this.formSubmit}>
                        <Inputs type='text' change={this.changeValue} value={this.state.firstName} name='firstName' lable='نام' />
                        <Inputs type='text' change={this.changeValue} value={this.state.lastName} name='lastName' lable='نام خانوادگی' />
                        <Inputs type='number' change={this.changeValue} value={this.state.numberPhone} name='numberPhone' lable='شماره ' />
                        <Inputs type='text' change={this.changeValue} value={this.state.username} name='username' lable='نام کاربری' />
                        <Inputs type='file' change={this.changeValue} value={this.state.profile} name='profile' lable='تصویر پروفایل ' />
                        <DivFormInput>
                            <Submit type='submit' value='ثبت نام' />
                        </DivFormInput>

                    </FormRegister>
                </DivFormRegister>
            </DivParentRegister>

        );
    }
}

export default Register;