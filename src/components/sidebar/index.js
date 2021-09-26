import useUser from '../../hooks/use-user';
import User from './user';
import Suggestion from './suggestion';

export default function Sidebar() {
  const {
    user: { fullName, username, userId, following, docId },
  } = useUser();
  // console.log('fullName, username, userId', fullName, username, userId);
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
