import React, { useEffect } from 'react'
import { store } from '../lib/store'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Container from '../UI/Container';
import UserInfo from '../UI/UserInfo';
import Registration from '../UI/Registration';
import Loading from '../UI/Loading';

const Profile = () => {
  const { currentUser, getUserInfo, isLoading } = store();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      getUserInfo(user?.uid)
    })
    return () => {
      unSub();
    }
  }, [getUserInfo]);

  return (
    <Container>
      {currentUser ? <UserInfo currentUser={currentUser} /> : <Registration />}
      {isLoading && <Loading />}
    </Container>
  )
}

export default Profile