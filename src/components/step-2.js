import React from 'react'


class StepTwo extends React.Component {

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                    className="form-control"
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="Enter email"
                    value={this.props.userName} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}
export default StepTwo