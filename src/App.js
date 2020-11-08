import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import Title from "./components/Title";

class App extends Component {

  state = {
    employees: [],
    search: "none",
    sort: "asc"
  };

  componentDidMount() {
    this.fetchEmployees("none",this.state.sort);
  }

  //this function retrieves the api data and then sets state to force a re-render
  fetchEmployees = (value,sort) => {
    console.log(sort)
    API.fetch(value,sort)
      .then((res) => {
        this.setState({sort:sort, search: value, employees: res.data.docs })
      })
      .catch((err) => console.log(err));
  };

  //this function controls what happends when the input field is changed to search for a name
  handleInputChange = event => {
    let value;
    const name = event.target.name;
    console.log(name)
    if (event.target.value === "") {
      value = "none"
    } else {
      value = event.target.value;
    };
    console.log(value);
    this.fetchEmployees(value);
  };

  //this function controls the button click events
  handleFormSubmit = event => {
    console.log("hi");
    event.preventDefault();
    const sort = event.target.name;
    console.log(sort);
    this.fetchEmployees(this.state.search,sort)
  };

  // Map over this.state.friends and render a FriendCard component for each
  // friend object
  render() {
    return (
      <Wrapper>
        <Title>Valinor Employee List</Title>
        <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeFriend={this.removeFriend}
            id={employee._id}
            key={employee._id}
            name={employee.name}
            race={employee.race}
            wikiUrl={employee.wikiUrl}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
