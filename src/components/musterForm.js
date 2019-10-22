import React from 'react'
import StepOne from './step-1'
import StepTwo from './step-2'
import StepThree from './step-3'


class MusterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            userName: '',
            password: ''
        }
        // Bind new functions for next and previous
        // this._next = this._next.bind(this)
        // this._prev = this._prev.bind(this)
        // // Bind the submission to handleChange() 
        // this.handleChange = this.handleChange.bind(this)
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // Trigger an alert on form submission
    handleSubmit(event) {
        event.preventDefault()
        const { email, userName, passowrd } = this.state
        alert(
            `Your registration detail: \n 
            Email: ${email} \n 
            Username: ${userName} \n
            Password: ${passowrd}`
        )
    }

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    // the function for previous step
    previousButton() {
        let currentStep = this.state.currentStep
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null
    }
    // the function for next step
    nextButton() {
        let currentStep = this.state.currentStep
        console.log(currentStep)
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null
    }


    render() {
        console.log(this.currentStep)
        return (
            <React.Fragment>
                <h1>A Wizard Form!</h1>
                <p className="text-danger">Step {this.state.currentStep} </p>
                <form onSubmit={this.handleSubmit}>
                    <p>under form</p>
                    <StepOne currentStep={this.currentStep} handleChange={this.handleChange} email={this.state.email} />
                    <StepTwo currentStep={this.currentStep} handleChange={this.handleChange} userName={this.state.userName} />
                    <StepThree currentStep={this.currentStep} handleChange={this.handleChange} passowrd={this.state.passowrd} />
                    {this.previousButton}
                    {this.nextButton}
                </form>
            </React.Fragment>
        )
    }
}
export default MusterForm