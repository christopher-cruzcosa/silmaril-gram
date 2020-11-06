import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
import Title from "./components/Title";

class App extends Component {

  state = {
    employees: []
  };

  componentDidMount() {
    this.fetchEmployees();
    console.log(this.state.employees)
  }

  fetchEmployees = () => {
    API.fetch()
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data.docs })
      })
      .catch((err) => console.log(err));
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id
  //   // being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each
  // friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeFriend={this.removeFriend}
            id={employee.id}
            key={employee.id}
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
