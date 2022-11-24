import React from 'react';

const skills = () => {
  return (
    <section className="second__section" id="skills">
      <div className="second__title">
        <div className="second__title-container">
          <span className="second__title">Skills</span>
          <div className="second__title-line"></div>
        </div>
      </div>
      <div className="second__skill">
        <div className="second__skill-container">
          <span className="second__skill-title">Programming Languages</span>
          <div className="second__skill-list">
            <div className="skill-card">
              <i className="devicon-python-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Python</span>
            </div>
            <div className="skill-card">
              <i className="devicon-java-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Java</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-javascript-plain"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">JavaScript</span>
            </div>
            <div className="skill-card">
              <i className="devicon-kotlin-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Kotlin</span>
            </div>
            <div className="skill-card">
              <i className="devicon-c-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">C</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-cplusplus-plain"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">C++</span>
            </div>
          </div>
        </div>

        <div className="second__skill-container">
          <span className="second__skill-title">Frameworks/Libraries</span>
          <div className="second__skill-list">
            <div className="skill-card">
              <i className="devicon-django-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Django</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-threejs-original"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Three.js</span>
            </div>
            <div className="skill-card">
              <i className="devicon-react-original" id="second__skill-icon"></i>
              <span className="second__skill-name">ReactJs</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-bootstrap-plain"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Bootstrap</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-selenium-original"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Selenium</span>
            </div>
          </div>
        </div>

        <div className="second__skill-container">
          <span className="second__skill-title">Tools</span>
          <div className="second__skill-list">
            <div className="skill-card">
              <i
                className="devicon-androidstudio-plain"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Android Studio</span>
            </div>
            <div className="skill-card">
              <i className="devicon-vscode-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">VS Code</span>
            </div>
            <div className="skill-card">
              <i className="devicon-git-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Git</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-github-original"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Github</span>
            </div>
            <div className="skill-card">
              <i className="devicon-gitlab-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Gitlab</span>
            </div>
            <div className="skill-card">
              <i className="devicon-docker-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Docker</span>
            </div>
          </div>
        </div>

        <div className="second__skill-container">
          <span className="second__skill-title">UI/UX</span>
          <div className="second__skill-list">
            <div className="skill-card">
              <i className="devicon-figma-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Figma</span>
            </div>
            <div className="skill-card">
              <i className="devicon-xd-plain" id="second__skill-icon"></i>
              <span className="second__skill-name">Adobe XD</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-photoshop-plain"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Photoshop</span>
            </div>
            <div className="skill-card">
              <i
                className="devicon-blender-original"
                id="second__skill-icon"
              ></i>
              <span className="second__skill-name">Blender</span>
            </div>
            <div className="skill-card">
              <i className="devicon-sketch-line" id="second__skill-icon"></i>
              <span className="second__skill-name">Sketch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
