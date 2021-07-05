import React from "react";
import { Loading } from "./Loading";
import Users from "./Users";

const User: React.FC<{ name?: string }> = ({ name }) => {
  if (!name) {
    return null;
  }
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

class App extends React.Component {
  state = {
    isUserLoggin: false,
    age: 88,
    loading: true,
    isError: false,
    users: [
      { name: "alonzo", age: 25, color: "blanco" },
      { name: "diego", age: 25, color: "blanco" },
      { name: "alandreaonzo", age: 25, color: "blanco" },
      { name: "mayi", age: 25, color: "blanco" },
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  addUser(user: any) {
    this.setState({ users: [...this.state.users, user] });
  }

  render() {
    const ageMessage =
      this.state.age > 50 ? `ciudadano de oro` : `adulto joven`;
    const { loading, isError, users } = this.state;
    const filteresUser = users.filter((user) => user.name !== "alonzo");

    return (
      <div className="container">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : isError ? (
          <div>
            <p>Ups! Algo salio mal</p>
          </div>
        ) : (
          <div>
            <p>Bienvenid@ a nuestro app</p>
            <p>Tipo {ageMessage}</p>
            <User name="andre" />
          </div>
        )}
        <div>
          {filteresUser.map((user, i) => (
            <Users key={i} {...user} />
          ))}
          {/* name={user.name} age={user.age} color={user.color} */}
        </div>
        <button
          onClick={() =>
            this.addUser({ name: "andrea", age: 30, color: "grey" })
          }
        >
          Load!
        </button>
      </div>
    );
  }
}

export default App;
