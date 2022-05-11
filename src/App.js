import React, { useEffect, useState } from 'react'
import api from './api/index'
import Users from './components/users'

const App = () => {
  const [users, setUsers] = useState()

  useEffect(async () => {
    const response = await api.users.fetchAll()
    setUsers(response)
  }, [])

  if (!users) return <h2>Загружаем...</h2>

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (id) => {
    const arrayOfUsers = users.filter((user) => {
      if (user._id === id) {
        user.bookmark = !user.bookmark
        return user
      }
      return user
    })

    setUsers(arrayOfUsers)
  }

  return (
    <div>
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </div>
  )
}

export default App
