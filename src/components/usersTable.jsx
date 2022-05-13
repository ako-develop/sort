import React from "react";
import PropTypes from "prop-types"
import User from "./user";
import TableHeader from "./tableHeader";

const UserTable = ({users, onSort, selectedSort, ...rest}) => {
      const columns={
        name:{iter:"name", name:"Имя"},
        qualities:{name:"Качества"},
        professions:{iter:"profession.name", name:"Профессия"},
        completedMeetings:{iter: "complitedMeetings", name:"Встретился, раз"},
        rate:{iter:"rate", name:"Оценка"},
        bookmark:{iter:"bookmark", name:"Избранное"},
        delete:{}
      }

    return <table className="table">
    <TableHeader {...{onSort,selectedSort, columns}}/>
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
    handleSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};

export default UserTable;