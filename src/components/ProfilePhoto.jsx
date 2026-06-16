import profilePhoto from '../assets/sai.jpeg'
import './ProfilePhoto.css'

export default function ProfilePhoto({ variant = 'hero' }) {
  return (
    <div className={`profile-photo profile-photo--${variant}`}>
      <div className="profile-photo__glow" aria-hidden="true" />
      <div className="profile-photo__ring profile-photo__ring--outer" aria-hidden="true" />
      <div className="profile-photo__ring profile-photo__ring--inner" aria-hidden="true" />
      <div className="profile-photo__frame">
        <img
          src={profilePhoto}
          alt="Prem Sai Munagala"
          className="profile-photo__img"
          width={400}
          height={400}
          loading="eager"
        />
      </div>
      {variant === 'hero' && (
        <div className="profile-photo__badge">
          <span className="profile-photo__badge-dot" />
          Available for Hire
        </div>
      )}
    </div>
  )
}
