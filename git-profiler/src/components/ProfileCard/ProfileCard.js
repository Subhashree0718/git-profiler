import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
    //console.log(user.created_at);
  const joinDate = new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
//console.log('Join date:', joinDate);
  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt={`${user.login} avatar`} className="profile-avatar" />
      <div className="profile-info">
        <div className="profile-header">
          <h2>{user.name || user.login}</h2>
          <p>Joined {joinDate}</p>
        </div>
        <p className="profile-username">@{user.login}</p>
        <p className="profile-bio">{user.bio || 'This profile has no bio'}</p>
        <div className="profile-stats">
          <div>
            <p>Repos</p>
            <h3>{user.public_repos}</h3>
          </div>
          <div>
            <p>Followers</p>
            <h3>{user.followers}</h3>
          </div>
          <div>
            <p>Following</p>
            <h3>{user.following}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;