// Add the required props
function getUserInfo(user) {
  const userEmail = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={userEmail}>
      {user.name}
    </a>
  );
}

export const UserInfo = ({ user }) => getUserInfo(user);
