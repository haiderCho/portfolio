import { techStack, workspaceInfo } from '../data/techStack';
import { FaDesktop, FaMemory, FaWindows } from 'react-icons/fa';
import { SiIntel, SiNvidia } from 'react-icons/si';

const proficiencyClass = (level) => {
  switch (level) {
    case 'Expert': return 'prof-expert';
    case 'Advanced': return 'prof-advanced';
    default: return 'prof-intermediate';
  }
};

export default function TechStack() {
  return (
    <div className="page">
      <h2 className="page-title">Tech Stack</h2>
      <div className="page-underline" />

      <p className="section-subtext">
        Bridging the gap between research and production with a focus on the full ML lifecycle.
      </p>

      <div className="ts-container">
        {techStack.map((category, idx) => (
          <section key={idx} className="ts-section">
            <div className="ts-section-header">
              <span className="ts-section-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="ts-section-text">
                <h3 className="ts-section-title">{category.category}</h3>
                {category.description && (
                  <p className="ts-section-desc">{category.description}</p>
                )}
              </div>
            </div>

            <div className="ts-skills">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className={`ts-skill-row ${skill.isAI ? 'ts-ai' : ''}`}
                  style={{ animationDelay: `${sIdx * 60}ms` }}
                >
                  <div className="ts-skill-icon">
                    <skill.icon />
                  </div>

                  <div className="ts-skill-body">
                    <div className="ts-skill-top">
                      <span className="ts-skill-name">{skill.name}</span>
                      <span className={`ts-prof-badge ${proficiencyClass(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                      <span className="ts-skill-exp">{skill.experience}</span>
                    </div>
                    <div className="ts-skill-tags">
                      {skill.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="ts-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Workspace Section */}
        <section className="ts-workspace">
          <div className="ts-section-header">
            <FaDesktop className="ts-workspace-icon" />
            <div className="ts-section-text">
              <h3 className="ts-section-title">Current Workspace</h3>
              <p className="ts-section-desc">Primary development environment specs.</p>
            </div>
          </div>
          <div className="workspace-grid">
            <div className="workspace-item">
              <FaWindows />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Operating System</span>
                <span className="workspace-item-value">{workspaceInfo.os}</span>
              </div>
            </div>
            <div className="workspace-item">
              <SiIntel />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Processor</span>
                <span className="workspace-item-value">{workspaceInfo.cpu}</span>
              </div>
            </div>
            <div className="workspace-item">
              <FaMemory />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Memory</span>
                <span className="workspace-item-value">{workspaceInfo.ram}</span>
              </div>
            </div>
            <div className="workspace-item">
              <SiNvidia />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Graphics Card</span>
                <span className="workspace-item-value">{workspaceInfo.gpu}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
