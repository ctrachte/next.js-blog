import momentDatepicker from 'moment-datepicker-js'
//With newer versions of React you can use and manipulate the DOM via hooks like this:
import React, { useEffect, useRef } from 'react'

const Datepicker = () => {

  const myContainer = useRef(null);

  let datepicker;

  useEffect(() => {
    // reset container and options for datepicker
    myContainer.current.innerHTML = "";
    let initialOptions = {
      containerElement: myContainer.current,
      presetMenu: true,
      singleDate: false,
      autoClose: false,
      timePicker: true,
      leadingTrailingDates: true,
      clearDates: true,
      defaults: false,
      militaryTime: false,
      // max: moment("08/14/2022"),
      // min: new Date("08/14/2021"),
      // defaults: [new Date('08/14/2023'),new Date('08/14/2023')],
      menuOptions: [{ title: 'My Birthday', values: [new Date('08/14/1993'),new Date('08/14/1993')] }],
      startDateLabel: "Reservation Start: ",
      endDateLabel: "Reservation End: ",
      onChange: function () {
          console.log("onChange:", this.dates);
      },
      onSubmit: function () {
          console.log("onSubmit:", this.dates);
      },
      onClose: function () {
          console.log("onClose:", this.dates);
      }
    }
    //initialize datepicker with options
    datepicker = initDatepicker(initialOptions);
  })

  let changeOptions = (e) => {
    //code to get and set options from UI;
  }; 

  //method to initialize datepicker
  function initDatepicker(options) {
    return new momentDatepicker(options);
  }

  return (
    <>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <h1>Datepicker</h1>
      <div ref={myContainer}></div>
    </>
  )
}

export default Datepicker
