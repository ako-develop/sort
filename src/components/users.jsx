import React, { useState, useEffect } from 'react'
import { paginate } from './../utils/paginate'
import Pagination from './pagination'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'
import UserTable from "./usersTable"
import _ from "lodash"

const Users = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({iter:"name", order: "asc"})

  const pageSize = 12

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

  const handleSort = (item) => {
      if (sortBy.iter===item){
        setSortBy((prevState)=>({...prevState, order:prevState.order==='asc' ? 'desc':'asc'}))
      }else{
        setSortBy({iter:item, order:'asc'})
      }
    
  }

  const clearFilter = () => {
    setSelectedProf()
  }

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession.name === selectedProf.name)
    : allUsers
  const count = filteredUsers.length
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
  const cropUser = paginate(sortedUsers, currentPage, pageSize)

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
            {" "}
            Сброс
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        {count > 0 && <UserTable users={cropUser} onSort={handleSort} {...rest} />}
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


