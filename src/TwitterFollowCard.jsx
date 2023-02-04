import { useState } from "react";

export function TwitterFollowCard({ userName, name,initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassname = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    
  }

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Avatar de Prisma"
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className="tw-follow-card-text">{text}</span>
          <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
