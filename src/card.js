export default function Card() {
  return (
    <div className="container">
      <span className="close">x</span>
      <img
        src="https://avatars.githubusercontent.com/u/10108963?v=4"
        alt="avatar"
        class="avatar"
      />
      <div className="cards">
        <p className="name"> bob</p>
        <p className="company">bob burgers</p>
        <p className="bio">who you are bio</p>
        <p className="email">email</p>
        <p className="repoLinks">
          https://github.com/jfleurimond?tab=repositories
        </p>
      </div>
    </div>
  );
}
