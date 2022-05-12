import React from "react";
import PropTypes from "prop-types"
import User from "./user";

const UserTable = ({users, onSort, ...rest}) => {
    return <table className="table">
    <thead>
      <tr>
        <th onClick={() => onSort('name')} scope="col">Имя</th>
        <th  scope="col">Качества</th>
        <th onClick={() => onSort('profession.name')} scope="col">Профессия</th>
        <th onClick={() => onSort('completedMeetings')} scope="col">Встретился, раз</th>
        <th onClick={() => onSort('rate')} scope="col">Оценки</th>
        <th onClick={() => onSort('bookmark')} scope="col">Избранное</th>
        <th />
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
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UserTable;