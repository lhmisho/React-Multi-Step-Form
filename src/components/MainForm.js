import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';


class MainForm extends Component{

    state = {
        step:1,
        userDetails:{
            firstName: null,
            lastName: null,
            email: null,
        },
        personalDetails:{
            age: null,
            city: null,
            country: null
        }
    }

    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    userDetailsHandle = e =>{
        // console.log(e.firstName)
        this.setState({
            userDetails: Object.assign(this.state.userDetails, {firstName: e.firstName}),
            userDetails: Object.assign(this.state.userDetails, {lastName: e.lastName}),
            email: Object.assign(this.state.userDetails, {email: e.email})
        })
        console.log(this.state.userDetails)
    }

    personalDetailHandle = e =>{
        this.setState({
            personalDetails: Object.assign(this.state.personalDetails, {age: e.age}),
            personalDetails: Object.assign(this.state.personalDetails, {city: e.city}),
            personalDetails: Object.assign(this.state.personalDetails, {country: e.country})
        })
    }

    handleChange = input => event => {
        this.setState({
            [input] : event.target.value 
        })
    }

    render(){
        const { step } = this.state
        const { firstName, lastName, email} = this.state.userDetails
        const { age, city, country } = this.state.personalDetails
        const values = { firstName, lastName, email, age, city, country }
        switch(step){
            case 1: 
                return <UserDetails nextStep={this.nextStep} userDetailsHandle={this.userDetailsHandle.bind(this)} values={ values }/>
            case 2:
                return <PersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} personalDetailHandle={this.personalDetailHandle.bind(this)} values={values} />
            case 3: 
                return <Confirmation nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
            case 4:
                return <Success />
        }
    }
}
export default MainForm