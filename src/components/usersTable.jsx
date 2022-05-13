import React from "react";
import PropTypes from "prop-types"
// import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark"

const UserTable = ({users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest}) => {
      const columns={
        name: {path: "name", name: "Имя"},
        qualities: { name: "Качества" },
        professions: {path: "profession.name", name: "Профессия" },
        completedMeetings: {path: "completedMeetings", name:"Встретился, раз"},
        rate:{path:"rate", name:"Оценка"},
        bookmark:{ 
          path:"bookmark", 
          name:"Избранное", 
          component: (user) => (
            <BookMark
            status={user.BookMark}
            // id={user._id}
            onClick={() => onToggleBookMark(user._id) }
            /> 
          )
        },
        delete:{ component: (user)=>(
          <button className="btn btn-danger m-2" onClick={() => onDelete(user._id)}>
          Удалить
        </button>
        ) 
      }
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
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    handleSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
};

export default UserTable;