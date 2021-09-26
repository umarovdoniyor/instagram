import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className='grid grid-cols-4 gap-4 mb-6 items-center'
    >
      <div className='flex justify-between items-center col-span-1'>
        <img
          src={`/images/avatars/${username}.jpg`}
          alt='User Photo'
          className='flex rounded-full mr-3 w-16'
        />
      </div>
      <div className='cal-span-3'>
        <p className='font-bold text-sm'>{username}</p>
        <p className='text-sm'>{fullName}</p>
      </div>
    </Link>
  );

export default memo(User);

User.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};
