import React from "react";
import PropTypes from "prop-types"
import User from "./user";

const UserTable = ({users, ...rest}) => {
    return <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценки</th>
        <th scope="col">Избранное</th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
      {users.map((user) => {
        return <User key={user._id} {...user} {...rest} />
      })}
    </tbody>
  </table>
};
//массив пользователей
UserTable.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserTable;