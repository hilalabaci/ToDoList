import React from "react";
import { Container } from "./styles";
function GetDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const theYear = date.getFullYear();
  const theMonth = date.getMonth();
  const theDay = date.getDay();
  return (
    <Container>
      {days[theDay]}, {months[theMonth]} {theYear}
    </Container>
  );
}
export default GetDate;
