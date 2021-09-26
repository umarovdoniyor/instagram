import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

export default function Suggestion({ userId, following, loggedInUserDocId }) {
  const [profiles, setProfile] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfile(response);
    }

    if (userId) {
      suggestedProfiles();
    }
    console.log('profiles', profiles);
  }, [userId]);

  return !profiles ? (
    <Skeleton count={1} height={150} className='mt-5' />
  ) : profiles.length > 0 ? (
    <div className='flex rounded flex-col'>
      <div className='text-sm flex items-center atign-items justify-between mb-2 '>
        <p className='font-bold text-gray-base'>Suggestions for you</p>
      </div>
      <div className='mt-4 grid gap-5'>
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestion.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string,
};
