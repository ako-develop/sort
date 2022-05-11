import React from 'react'
import { addClass } from '../utils/yaPlakal'
import PropTypes from 'prop-types'

const Quality = ({ color, name, _id }) => {
  return (
    <span key={_id} className={addClass(color)}>
      {name}
    </span>
  )
}

Quality.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}

export default Quality
