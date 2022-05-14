import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  console.log(BookMark)
  const bookMarks = (textClass = '') => (
    <i className={'bi bi-check-circle' + textClass}></i>
  )

  return (
    <>
      <button onClick={() => rest.onClick(rest.id)}>
        {status ? bookMarks('-fill') : bookMarks()}
      </button>
    </>
  )
}

BookMark.propTypes = {
  status: PropTypes.bool
}

export default BookMark
