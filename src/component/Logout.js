import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Logout() {
    sessionStorage.clear();
    // LOGOUT_API= "http://localhost:8080/api/v1/logout"
    return (
        <div>
            <Redirect to="/" />
        </div>
    )
}
