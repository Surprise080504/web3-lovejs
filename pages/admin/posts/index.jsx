import React from 'react';
import { useRouter} from 'next/router'
import NavbarAdmin from '../../../components/NavbarAdmin'
import UserPanel from '../../../components/UserPanel'
const Post = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Post Details</h1>
      <h2>Post ID: {router.query.id} </h2>
      {/* <NavbarAdmin/>
      <UserPanel/> */}
      {/* <h1>Post Details</h1>
      <h2>Post ID: {router.query.id} </h2> */}
    </div>
      )
};

export default Post;
