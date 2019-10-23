import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';
import { throwStatement } from '@babel/types';

const options = [
    { value: 'Bangladesh',  label: 'Bangladesh' },
    { value: 'India',       label: 'India' },
    { value: 'Pakistan',    label: 'Pakistan' },
];

class PersonalDetails extends Component{

    state = {
        age: '',
        city: '',
        country: '',
        ageError: false,
        cityError: false,
        countryError: false
    }

    // handling input
    ageHandler = e =>{
        this.setState({
            age: e.target.value,
            ageError: false
        })
    }
    cityHandler = e => {
        this.setState({
            city: e.target.value,
            cityError: false
        })
    }
    countryHandler = e => {
        this.setState({
            country: e.target.value,
            countryError: false
        })
    }

    // handling submit
    submitHandler = e =>{
        e.preventDefault()
        if(this.state.age.length < 1){
            this.setState({
                ageError: true
            })
        }
        if(this.state.city.length < 1){
            this.setState({
                cityError: true
            })
        }
        if(this.state.country.length < 1){
            this.setState({
                countryError: true
            })
        }else{
            let personalDetails = {
                age: this.state.age,
                city: this.state.city,
                country: this.state.country
            }
            if(this.props.personalDetailHandle){
                this.props.personalDetailHandle(personalDetails)
                this.props.nextStep()
            }
        }
    }

    // saveAndContinue = (e) => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' onSubmit={this.submitHandler.bind(this)}>
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Field>
                <label>Age</label>
                <input placeholder='Age'
                onChange={this.ageHandler.bind(this)}
                defaultValue={values.age}
                />
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input placeholder='City'
                onChange={this.cityHandler.bind(this)}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>Country</label>
                {/* <input placeholder='Country'
                onChange={this.countryHandler}
                defaultValue={values.country}
                /> */}
                <select onChange={this.countryHandler} defaultValue={values.country}>
                    <option>--Select Country--</option>
                    {options.map(item => {
                        return <option key={item.value} value={item.value}>{item.label}</option>
                    })}
                </select>
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;