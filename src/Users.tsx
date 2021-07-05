import React from "react";

export interface UserProps {
  name: string;
  age: number;
  color: string;
}

const Users: React.FC<UserProps> = ({ name, age, color }) => {
  return (
    <ul>
      <li>name: {name}</li>
      <li>age: {age}</li>
      <li>fav color: {color}</li>
    </ul>
  );
};

export default Users;
