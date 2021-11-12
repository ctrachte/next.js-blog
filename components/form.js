import React from 'react'

class form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      containerElement: this.props.containerElement
    }

    this.handleSingleDateChange = this.handleSingleDateChange.bind(this)
    this.handlePresetMenuChange = this.handlePresetMenuChange.bind(this)
    this.handleAutoCloseChange = this.handleAutoCloseChange.bind(this)
    this.handleMilitaryTimeChange = this.handleMilitaryTimeChange.bind(this)
    this.handleTimePickerChange = this.handleTimePickerChange.bind(this)
    this.handleleadingTrailingDates = this.handleleadingTrailingDates.bind(this)
    this.handleclearDatesChange = this.handleclearDatesChange.bind(this)
    this.handleDefaultsChange = this.handleDefaultsChange.bind(this)
    this.handleStartDateLabelChange = this.handleStartDateLabelChange.bind(this)
    this.handleEndDateLabelChange = this.handleEndDateLabelChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateDatepicker(this.state);
    console.log(this.state)
  }
  handleSingleDateChange(event) {
    this.setState({ singleDate: event.target.checked })
  }
  handlePresetMenuChange(event) {
    this.setState({ presetMenu: event.target.checked })
  }
  handleAutoCloseChange(event) {
    // console.table(this.state)
    this.setState({ autoClose: event.target.checked })
  }
  handleMilitaryTimeChange(event) {
    this.setState({ militaryTime: event.target.checked })
  }
  handleTimePickerChange(event) {
    this.setState({ timePicker: event.target.checked })
  }
  handleStartDateLabelChange(event) {
    this.setState({ startDateLabel: event.target.value })
  }
  handleEndDateLabelChange(event) {
    this.setState({ endDateLabel: event.target.value })
  }
  handleclearDatesChange(event) {
    this.setState({ clearDates: event.target.checked })
  }
  handleleadingTrailingDates(event) {
    this.setState({ leadingTrailingDates: event.target.checked })
  }
  handleDefaultsChange(event) {
    this.setState({ defaults: event.target.checked })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <p> Choose options to configure the moment-datepicker with, and click submit to configure.</p>
        <hr/>
        <label>
          <input
            type="checkbox"
            checked={this.state.singleDate}
            value={this.state.singleDate}
            onChange={this.handleSingleDateChange}
          />
          singleDate
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.presetMenu}
            value={this.state.presetMenu}
            onChange={this.handlePresetMenuChange}
          />
          presetMenu
        </label>
        <label>
          <input
            type="checkbox"
            value={this.state.autoClose}
            checked={this.state.autoClose}
            onChange={this.handleAutoCloseChange}
          />
          autoClose
        </label>
        <label>
          <input
            type="checkbox"
            value={this.state.militaryTime}
            checked={this.state.militaryTime}
            onChange={this.handleMilitaryTimeChange}
          />
          militaryTime
        </label>
        <label>
          <input
            type="checkbox"
            value={this.state.timePicker}
            checked={this.state.timePicker}
            onChange={this.handleTimePickerChange}
          />
          timePicker
        </label>
        <label>
          <input
            type="checkbox"
            value={this.state.leadingTrailingDates}
            checked={this.state.leadingTrailingDates}
            onChange={this.handleleadingTrailingDates}
          />
          leadingTrailingDates
        </label>
        <label>
          <input
            type="checkbox"
            value={this.state.clearDates}
            checked={this.state.clearDates}
            onChange={this.handleclearDatesChange}
          />
          clearDates
        </label>
        <label>
          <input
            type="checkbox"
            value={this.state.defaults}
            checked={this.state.defaults}
            onChange={this.handleDefaultsChange}
          />
          defaults
        </label>
        <hr/>
        <label>
          startDateLabel:
          <input
            type="text"
            className="formText"
            value={this.state.startDateLabel}
            onChange={this.handleStartDateLabelChange}
          />
        </label>
        <label>
          endDateLabel:
          <input
            className="formText"
            type="text"
            value={this.state.endDateLabel}
            onChange={this.handleEndDateLabelChange}
          />
        </label>
        <hr/>
        <input className="submit" type="submit" />
      </form>
    )
  }
}
export default form
