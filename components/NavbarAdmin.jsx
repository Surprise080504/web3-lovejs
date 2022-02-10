import React from 'react';
import Link from 'next/Link'
const NavbarAdmin = () => {
  return(
    <nav>
        <Link href="/admin"><a>Home</a></Link>
        <Link href="/admin/users"><a>Users</a></Link>
        <Link href="/admin/posts/[id]"><a>Posts</a></Link>
        <Link href="/admin/posts/[id]" as={`/admin/posts/${5}`}><a>Posts N°5</a></Link>
    </nav>
  )

};

export default NavbarAdmin;
