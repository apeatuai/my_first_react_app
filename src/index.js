import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />

          <SkillList skill="Angular,HTML,CSS,Javacript" />
        </div>
      </div>
    </div>
  );
}

// greg
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg"
      alt="avats"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Nana Greg</h1>
      <p>
        In the fast-paced world of technology, stagnation is the enemy of
        progress. Greg understands this well and is a lifelong learner. He stays
        up-to-date with the latest programming languages, frameworks, and best
        practices. Greg's commitment to continuous improvement not only keeps
        him at the forefront of his field but also elevates the projects he's
        involved in.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🙄" />
      <Skill skill="Angular" emoji="🥰" />
      <Skill skill="HTML + CSS" emoji="😉" />
      <Skill skill="TypeScript" emoji="😎" />
      <Skill skill="Googling" emoji="😙" />
      <Skill skill="Java" emoji="😁" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ color: "white" }}>
      <span>{props.skill} </span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
