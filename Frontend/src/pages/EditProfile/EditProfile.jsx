import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EditProfile.css';

// Mock user data
const mockUserData = {
  id: 1,
  username: 'johndoe',
  email: 'john.doe@example.com',
  fullName: 'John Doe',
  phone: '+1 (555) 123-4567',
  location: 'New York, USA',
  bio: 'Passionate about keeping our community clean and green!',
  role: 'Citizen',
  joinDate: '2023-01-15',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
};

const EditProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [user, setUser] = useState(mockUserData);
  const [formData, setFormData] = useState({ ...mockUserData });

  // Simulate fetching user data from an API
  useEffect(() => {
    // In a real app, you would fetch this from your backend
    const fetchUserData = async () => {
      try {
        // const response = await fetch('/api/user/profile');
        // const data = await response.json();
        // setUser(data);
        // setFormData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // In a real app, you would send this to your backend
    // try {
    //   const response = await fetch('/api/user/profile', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
    //   const data = await response.json();
    //   setUser(data);
    //   setShowToast(true);
    //   setTimeout(() => setShowToast(false), 3000);
    // } catch (error) {
    //   console.error('Error updating profile:', error);
    // }
    
    // For demo purposes
    setUser(formData);
    setIsEditing(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setUser({ ...user, avatar: newAvatar });
        setFormData({ ...formData, avatar: newAvatar });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // In a real app, you would clear the auth token and user data
    // localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="edit-profile-container">
      {/* Top Navbar */}
      <header className="topbar">
        <div className="logo">🌿 CleanStreet</div>
        <nav className="menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/report-issue">Report Issue</Link>
          <Link to="/view-complaints">View Complaints</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/editprofile" className="active">Edit Profile</Link>
        </nav>
        <div className="auth-buttons">
          <button className="register-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="profile-container">
        {/* Left Section - Profile Card */}
        <div className="profile-card">
          <div className="avatar-container">
            <img 
              src={user.avatar} 
              alt={`${user.fullName}'s avatar`} 
              className="avatar"
            />
            <label className="avatar-upload">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <span style={{ color: 'white' }}>📷</span>
            </label>
          </div>
          
          <div className="user-info">
            <h2 className="user-name">{user.fullName}</h2>
            <p className="user-username">@{user.username}</p>
            <span className="user-role">{user.role}</span>
            <p className="user-bio">{user.bio}</p>
            <p className="member-since">Member since {new Date(user.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
          </div>
        </div>

        {/* Right Section - Account Information */}
        <div className="account-info">
          <div className="account-header">
            <h2 className="account-title">Account Information</h2>
            {isEditing ? (
              <button className="save-btn" onClick={handleSaveClick}>
                Save Changes
              </button>
            ) : (
              <button className="edit-btn" onClick={handleEditClick}>
                Edit Profile
              </button>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={isEditing ? '' : 'readonly'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              readOnly={!isEditing}
              rows="4"
            />
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        Profile updated successfully!
      </div>
    </div>
  );
};

export default EditProfile;
