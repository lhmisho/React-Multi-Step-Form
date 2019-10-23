import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class UserDetails extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        firstNameError: false,
        lastNameError: false,
        emailError: false
    }

    // methods for handle inputs
    handleFirstName = e =>{
        // console.log(e.target.value)
        this.setState({
            firstName: e.target.value,
            firstNameError: false
        })
    }
    handleLastName = e => {
        this.setState({
            lastName: e.target.value,
            lastNameError: false
        })
    }
    emailHanlde = e =>{
        this.setState({
            email: e.target.value,
            emailError: false
        })
    }

    // handling the submit
    submitHandler = e =>{
        e.preventDefault()
        // first checking the validation than else condition doing submit procidure
        if(this.state.firstName.length < 1){
            this.setState({
                firstNameError: true
            })
        }if(this.state.lastName.length < 1){
            this.setState({
                lastNameError: true
            })
        }else{
            let userDetail = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            }
            if(this.props.userDetailsHandle){
                this.props.userDetailsHandle(userDetail)
                this.props.nextStep()
                console.log("data sended")
            }
        }
    }
    // saveAndContinue = (e) => {
    //     e.preventDefault()
    //     this.props.nextStep()
    // }
    render() {
        const { values } = this.props
        return (
            <Form onSubmit={this.submitHandler.bind(this)}>
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        placeholder='First Name' 
                        name='firstName' 
                        onChange={this.handleFirstName.bind(this)} 
                        defaultValue={values.firstName} 
                    />
                    {this.state.firstNameError && <p className="text-danger">First Name is required</p>}
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        onChange={this.handleLastName.bind(this)}
                        defaultValue={values.lastName}
                    />
                    {this.state.lastNameError && <p className="text-danger">Last Name is required</p>}
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        onChange={this.emailHanlde.bind(this)}
                        defaultValue={values.email}
                    />
                </Form.Field>
                <Button type="submit">Save And Continue </Button>
            </Form>
        )
    }
}
export default UserDetails