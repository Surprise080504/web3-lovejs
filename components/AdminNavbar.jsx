import React from 'react';
import Link from 'next/Link'

const AdminNavbar = () => {
  return(
    <nav className="admin-nav">
        <ul className="admin-ul">
          <li className="admin-li"><Link href="/admin"><a className="admin-a">Users</a></Link></li>
          <li className="admin-li"><Link href="/admin/toPost"><a className="admin-a">To post</a></Link></li>
        </ul>
    </nav>
  )

};

export default AdminNavbar;
