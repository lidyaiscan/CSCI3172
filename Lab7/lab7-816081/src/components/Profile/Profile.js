import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
  return (
    <div className="Profile">
      <div className="formInfo">
        <div className="info">First Name: {props.firstNameValue}</div>
        <div className="info">Last Name: {props.lastNameValue}</div>
        <div className="info">Email: {props.emailValue}</div>
        <div className="info">Favourite Season: {props.seasonValue}</div>
        <br></br>
      </div>
      <div className="footer">
        <div>Click <Link to="/dashboard">here</Link> to access the dashboard</div>
      </div>
    </div>
  );
}

export default Profile;
