function User({ user }) {
  const { avatar_url, follower, following, public_repos, name, login } = user;
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
    </div>
  );
}

export default User;
