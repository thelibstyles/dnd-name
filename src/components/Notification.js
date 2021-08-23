
// Notification - component
// https://reactjs.org/docs/components-and-props.html

import './Notification.css';

function Notification(props) {
    return (

        <div className="notification">
            <h3>{props.icon} {props.heading}</h3>
            <p>{props.text}</p>
        </div>
        
        )
  }

  export default Notification;