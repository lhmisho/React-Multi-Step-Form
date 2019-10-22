import React from 'react'


class StepThree extends React.Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={this.props.password} // Prop: The email input data
                        onChange={this.props.handleChange} // Prop: Puts data into state
                    />
                </div>
                <button className="btn btn-success btn-block">Sign up</button>
            </React.Fragment>
        )
    }
}
export default StepThree