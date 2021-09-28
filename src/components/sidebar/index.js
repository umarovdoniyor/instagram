import { useContext } from 'react';
import User from './user';
import Suggestion from './suggestion';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const { user: { docId = '', fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);
  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestion
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
