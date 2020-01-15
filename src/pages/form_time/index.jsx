import React, { Component } from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker

export default class extends Component {
    state={
        startDate: '',
        endDate: ''
    }
    onChange = value => {
        this.setState({
            startDate: value[0]._d,
            endDate:  value[1]._d
        })
    }
    disabledDate = current => {
        return current.valueOf() < moment(this.state.startDate).valueOf() || current.valueOf() > moment(this.state.endDate).valueOf()
    }

    render() {
        return (
            <div className="datePicker">
                <RangePicker
                    onChange={this.onChange}
                    disabledDate={this.disabledDate}
                />
            </div>
        )
    }
}