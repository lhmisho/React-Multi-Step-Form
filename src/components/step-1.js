import React from 'react'


class StepOne extends React.Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    // value={this.props.email} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}
export default StepOne