import './notification.css'
import { useState, createContext, useContext } from 'react'


const Notification = ({ message, severity, otherClass}) => {

    const notificationStyles = {
      position: 'absolute',
      top: 300,
      right: 400,
      display: 'flex',
      justifyContext: 'center',
      alignItems: 'center',
      width: '500px',
      height: 'auto',
      padding: '10px 20px 10px 20px',
      color: 'white',
      borderRadius: '10px',
      border: "solid 2px white",
    }
  
    if(message === '') {
        return null
    }

    const config = true ?
    {
        style: notificationStyles,
        className: `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`
    } : {}

    return(
      <div {...config}>
        {message}
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')
    const [otherClass, setOtherClass] = useState()

    const setNotification = (sev, msg, cls) => {
        setMessage(msg)
        setSeverity(sev)
        setOtherClass(cls)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity} otherClass={otherClass}/>
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotification = () => {
    return useContext(NotificationContext)
}

