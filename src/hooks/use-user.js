import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user';

import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
    // return () => {
    //   cleanup;
    // };
  }, [user]);

  return { user: activeUser };
}
