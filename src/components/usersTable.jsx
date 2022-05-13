import React from "react";
import PropTypes from "prop-types"
// import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const UserTable = ({users, onSort, selectedSort, ...rest}) => {
      const columns={
        name: {path: "name", name: "Имя"},
        qualities: { name: "Качества" },
        professions: {path: "profession.name", name: "Профессия" },
        completedMeetings: {path: "complitedMeetings", name:"Встретился, раз"},
        rate:{path:"rate", name:"Оценка"},
        bookmark:{ path:"bookmark", name:"Избранное" },
        delete:{}
      };

    return <table className="table">
    <TableHeader {...{onSort, selectedSort, columns}}/>
    <TableBody {...{columns, data: users}}/>
    {/* <tbody>
      {users.map((user) => {
        return <User key={user._id} {...user} {...rest} />
      })}
    </tbody> */}
  </table>
};
//массив пользователей
UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};

export default UserTable;