import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { func } from 'prop-types';
import {
  updatedLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from '../../services/firebase';

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    await updatedLoggedInUserFollowing(loggedInUserDocId, profileId, false);

    await updateFollowedUserFollowers(userId, profileDocId, false);
  }

  return !followed ? (
    <div className='flex flex-row items-center align-items justify-between'>
      <div className='flex items-center justify-between'>
        <img
          src={`/images/avatars/${username}.jpg`}
          alt=''
          className='fles rounded-full mr-3 w-8'
        />
        <Link to={`/p/${username}`}>
          <p className='font-bold text-sm'>{username}</p>
        </Link>
      </div>
      <button
        className='text-xs font-bold text-blue-medium'
        type='button'
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
