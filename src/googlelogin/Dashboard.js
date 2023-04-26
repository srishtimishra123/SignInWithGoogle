import React from "react";

const Dashboard = ()=>{
    const logout =()=>{
        localStorage.clear()
        window.location.reload()

    }
    return(
        <>
        <h2>Hello World</h2>

        <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard;