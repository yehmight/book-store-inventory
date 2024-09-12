import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  // Redirect to login and pass the current location to the login page
  return (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;





// import React, { useContext } from 'react'
// import { AuthContext } from '../contexts/AuthProvider'
// import { Navigate, useLocation } from 'react-router-dom';
// import { Spinner } from 'flowbite-react';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);
//     const location = useLocation();

//     if (loading){
//         return <div className="text-center">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     }
//     if (user){
//         return children;
//     }
//   return (
//     <Navigate to="/login" state={{from: Location}}></Navigate>
//   )
// }

// export default PrivateRoute
