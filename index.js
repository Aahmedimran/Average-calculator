  // Write founction and call all subject values
  function calculate() {
      let subject1Marks = document.querySelector("#subject1Marks").value;
      let subject2Marks = document.querySelector("#subject2Marks").value;
      let subject3Marks = document.querySelector("#subject3Marks").value;
      let subject4Marks = document.querySelector("#subject4Marks").value;
      let subject5Marks = document.querySelector("#subject5Marks").value;
      let subject6Marks = document.querySelector("#subject6Marks").value;
      let subject7Marks = document.querySelector("#subject7Marks").value;
      let subject8Marks = document.querySelector("#subject8Marks").value;
      let subject9Marks = document.querySelector("#subject9Marks").value;
      let subject10Marks = document.querySelector("#subject10Marks").value;
      // firstly add all subject number
      let totalMarks = parseInt(subject1Marks) + parseInt(subject2Marks) + parseInt(subject3Marks) + parseInt(subject4Marks) + parseInt(subject5Marks) + parseInt(subject6Marks) + parseInt(subject7Marks) + parseInt(subject8Marks) + parseInt(subject9Marks) + parseInt(subject10Marks);
      // Print all subject number
      document.querySelector("#totalMarks").innerHTML = `you have total Marks  ${totalMarks}`;
      //totalMarks divide of number subject calculate avarge
      let result = totalMarks / 10;

      document.querySelector("#result").innerHTML = `You have total Avarge Number is ${result}`;



  }