export default function Skills() {
  const skills = [
    'C++', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
    'TailwindCSS', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
    'MySQL', 'Django', 'AWS', 'Three.js', 'Git', 'GitHub', 'Figma'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-spotlight" />

      <div className="skills-container">
        <h2 className="skills-title">SKILLS</h2>
        <p className="skills-subtitle">My key expertises and technical proficiencies</p>

        <div className="skills-badges">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}


