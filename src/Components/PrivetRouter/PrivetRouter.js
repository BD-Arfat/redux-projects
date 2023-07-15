import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContexProbider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {

    const {user,loding} = useContext(AuthContext) 
    const location = useLocation()
    if(user){
        return children;
    };
    if(loding){
        return <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    }
    return (
        <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    );
};

export default PrivetRouter;