function score() {
  let marks = document.getElementById("inputmarks").value;
  let result;

  if (marks === "" || marks === null) {
  result = "Please enter valid marks";
  } else if (marks < 35) {
    result = "Failed!"
  } else if (marks >= 35 && marks < 50) {
    result = "Just Pass!";
  } else if (marks > 50 && marks < 85){
    result = "First Class";
  } else if (marks >= 85 && marks <= 100){
    result = "Distinction";
  } else if (marks > 100){
    result = "Invalid number entered";
  }else if (typeof(marks) != "number") {
      result = "Invalid Input!! Alphabets or symbols is entered"; 
    } 
  document.getElementById('demo').innerHTML = result;
}