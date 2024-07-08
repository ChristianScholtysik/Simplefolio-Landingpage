import "./Skills.css";

const Skills = () => {
  return (
    <>
      <h3 className="project-h3">Skills</h3>
      <div className="skills">
        <div className="skills-wrapper">
          <button className="skills-btn">HTML</button>
          <button className="skills-btn">CSS</button>
          <button className="skills-btn">JavaScript</button>
          <button className="skills-btn">React</button>
        </div>
        <div className="skills-wrapper">
          <button className="skills-btn">SASS</button>
          <button className="skills-btn">TailwindCSS</button>
          <button className="skills-btn">Git</button>
          <button className="skills-btn">UX/UI</button>
        </div>
        <button className="header-btn">resume</button>
      </div>
    </>
  );
};

export default Skills;
