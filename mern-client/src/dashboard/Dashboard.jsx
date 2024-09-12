// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       Dashboard

//     </div>
//   )
// }

// export default Dashboard




import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthProvider'; // Adjust the import based on your context path
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [recentActivity, setRecentActivity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recent activity for the user
    // Replace this with your actual API call or data fetching logic
    const fetchRecentActivity = async () => {
      try {
        // Simulating an API call
        const activities = [
          { id: 1, action: 'Logged in', date: '2024-09-01' },
          { id: 2, action: 'Updated profile', date: '2024-09-02' },
          // Add more activities here
        ];
        setRecentActivity(activities);
      } catch (error) {
        console.error('Failed to fetch recent activity:', error);
      }
    };

    fetchRecentActivity();
  }, []);

  const handleLogout = () => {
    logout().then(() => {
      navigate('/login'); // Redirect to login page after logout
    }).catch((error) => {
      console.error('Logout error:', error.message);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">My Dashboard</h1>
            <div className="py-6">
              <div className="mb-6">
                <h2 className="text-xl font-medium">Profile Summary</h2>
                <div className="mt-4">
                  <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
                  <p><strong>Email:</strong> {user.email || 'N/A'}</p>
                  {/* Add more profile details as needed */}
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-medium">Recent Activity</h2>
                <ul className="mt-4">
                  {recentActivity.length > 0 ? (
                    recentActivity.map((activity) => (
                      <li key={activity.id} className="border-b py-2">
                        <p>{activity.action}</p>
                        <span className="text-gray-500 text-sm">{activity.date}</span>
                      </li>
                    ))
                  ) : (
                    <p>No recent activity.</p>
                  )}
                </ul>
              </div>
              {/* <div className="flex space-x-4">
                <Link to="/profile" className="bg-blue-500 text-white rounded-md px-6 py-2 text-center">Edit Profile</Link>
                <button onClick={handleLogout} className="bg-red-500 text-white rounded-md px-6 py-2">Log Out</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
