import React from 'react'
import './MessageContainer.css'
import { useSelector } from 'react-redux'

function MessageContainer() {
  const {message, msgType, msgVisible} = useSelector(state => state.exam);
    const clsName = `${msgType} ${msgVisible ? "show" : ""}`;
  return (
    <div id="msgBox" className={clsName}>
      {message}
    </div>
  )
}

export default MessageContainer