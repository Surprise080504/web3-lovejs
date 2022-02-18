import React from 'react'
import AdminNavbar from '../../../components/AdminNavbar'
  const data = [
    {
        id: 1,
        name: "User 1",
        discord: "user1#6969",
        opensea: "https://opensea.io/user1",
        role: "user",
        wallet: "9kc0a4f9vk30ga03uvkz93",
        createAt: "16/05",
    },
    {
        id: 2,
        name: "User 2",
        discord: "user2#6969",
        opensea: "https://opensea.io/user2",
        role: "user",
        wallet: "9kc0a4f9vk30ga03uvkz93",
        createAt: "16/05",
    },
    {
        id: 3,
        name: "User 3",
        discord: "user3#6969",
        opensea: "https://opensea.io/user3",
        role: "user",
        wallet: "9kc0a4f9vk30ga03uvkz93",
        createAt: "16/07",
    },
    {
        id: 4,
        name: "User 4",
        discord: "4#6969",
        opensea: "https://opensea.io/user4",
        role: "user",
        wallet: "9kc0a4f9vk30ga03uvkz93",
        createAt: "16/05",
    }
]
const index = () => {
    return (
        <section className="admin_main-container">
            {/* <NavbarAdmin/> */}
            <div className="main-container">
                <div className="submain-container">
                    <AdminNavbar/>
                    <div className="user-navigation">
                        <div className="user-navigation_info">
                            <h3>Users</h3>
                            <div className="users-pagination">
                                <button className="user-previous">Previous</button>
                                <button className="user-next">Next</button>
                            </div>
                            <div className="users-search-btn_container">
                                <input placeholder="Search.." className="users-search-btn" type="text"/>
                            </div>
                        </div>
                        <a className="user_a" href="#">#{data[0].id} - {data[0].name}</a>
                        <a className="user_a" href="#">#{data[1].id} - {data[1].name}</a>
                        <a className="user_a" href="#">#{data[2].id} - {data[2].name}</a>
                        <a className="user_a" href="#">#{data[3].id} - {data[3].name}</a>
                </div>
                </div>
                <div className="user-info">
                    <div className="info-container">

                        <h2 className="user-data user-data user-name">NAME: <label>{data[0].name}</label></h2>
                        <h3 className="user-data user-id">ID: <label>{data[0].id}</label></h3>
                        <p className="user-data user-discord">DISCORD: <label>{data[0].discord}</label></p>
                        <p className="user-data user-opensea">OPENSEA: <label>{data[0].opensea}</label></p>
                        <p className="user-data user-role">ROLE: <label>{data[0].role}</label></p>
                        <p className="user-data user-wallet">WALLET: <label>{data[0].wallet}</label></p>
                        <p className="user-data user-createAt">ACCOUNT CREATED AT: <label>{data[0].createAt}</label></p>
                        <button className="user-data ban-btn" id="ban">BAN</button>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default index