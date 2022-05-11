import React, { useState, useEffect } from 'react'
import { paginate } from './../utils/paginate'
import Pagination from './pagination'
import User from './user'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()

  const pageSize = 4

  useEffect(async () => {
    const response = await api.professions.fetchAll()
    setProfessions(response)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const clearFilter = () => {
    setSelectedProf()
  }

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession.name === selectedProf.name)
    : allUsers
  const count = filteredUsers.length
  const cropUser = paginate(filteredUsers, currentPage, pageSize)

  return (
    <div className="d-flex mt-2">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onSelectItem={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Сброс
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        {count > 0 && (
          <table className="table">
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
              {cropUser.map((user) => {
                return <User key={user._id} {...user} {...rest} />
              })}
            </tbody>
          </table>
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
}

export default Users
