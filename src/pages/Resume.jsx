import { contactInfo } from '../data/contactInfo';
import { resumeData } from '../data/resumeData';
import SectionHeading from '../components/SectionHeading';

export default function Resume() {
  return (
    <div className="page">
      <h2 className="page-title brutalist-title">Career Snapshot</h2>
      <div className="page-underline" />

      {/* Experience */}
      <SectionHeading 
        title="Experience" 
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="24" height="24" fill="none" stroke="currentColor">
            <rect x="2" y="7" width="20" height="14" />
            <path d="M16 7V5h-8v2" />
          </svg>
        }
      />

      <div className="timeline" style={{ marginTop: 16 }}>
        {resumeData.experience.map((job, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-title">{job.title}</div>
            <div className="timeline-company" style={{ color: 'var(--text)', fontWeight: 600 }}>{job.company}{job.type ? ` · ${job.type}` : ''}</div>
            <div className="timeline-date" style={{ color: 'var(--text-secondary)' }}>{job.date}</div>
            <div className="timeline-desc">{job.description}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <SectionHeading 
        title="Education" 
        style={{ marginTop: 36 }}
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="24" height="24" fill="none" stroke="currentColor">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5l6 3 6-3v-5" />
          </svg>
        }
      />

      <div className="timeline" style={{ marginTop: 16 }}>
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-title">{edu.title}</div>
            <div className="timeline-company" style={{ color: 'var(--text)', fontWeight: 600 }}>{edu.company}</div>
          </div>
        ))}
      </div>

      {/* Skills & Languages Grid */}
      <div className="resume-grid" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {/* Technical Mastery */}
        <div className="skills-section">
          <SectionHeading 
            title="Technical Mastery" 
            style={{ marginBottom: 20 }}
            icon={
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="24" height="24" fill="none" stroke="currentColor">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
          />
          {resumeData.skillsRow1.map((skill, idx) => (
            <SkillBar key={idx} name={skill.name} percent={skill.percent} />
          ))}
        </div>

        {/* Language Proficiency */}
        <div className="languages-section">
          <SectionHeading 
            title="Language Proficiency" 
            style={{ marginBottom: 20 }}
            icon={
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="24" height="24" fill="none" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            }
          />
          
          <div className="language-grid" style={{ display: 'grid', gap: 12 }}>
            {resumeData.skillsRow2.map((lang, idx) => (
              <LanguageItem key={idx} language={lang.language} level={lang.level} percent={lang.percent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ name, percent }) {
  return (
    <div className="skill-item" style={{ marginBottom: 16 }}>
      <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="skill-name" style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '1px' }}>{name}</span>
        <span className="skill-percent" style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{percent}%</span>
      </div>
      <div className="skill-bar" style={{ height: 10, border: '1px solid var(--text)', background: 'transparent' }}>
        <div className="skill-fill" style={{ width: `${percent}%`, height: '100%', background: 'var(--text)' }} />
      </div>
    </div>
  );
}

function LanguageItem({ language, level, percent }) {
  return (
    <div className="language-item" style={{ padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--text)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '1px' }}>{language}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', marginTop: 2, textTransform: 'uppercase' }}>{level}</div>
        </div>
        <div className="lang-indicator" style={{ position: 'relative', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ width: 36, height: 36 }}>
            <rect x="2" y="2" width="32" height="32" fill="transparent" stroke="var(--surface-border)" strokeWidth="1" />
            <rect x="2" width="32" fill="var(--text)" height={`${(percent / 100) * 32}px`} y={`${34 - (percent / 100) * 32}`} stroke="none" />
          </svg>
          <span style={{ position: 'absolute', fontSize: 10, fontWeight: 800, color: percent > 50 ? 'var(--bg)' : 'var(--text)' }}>{percent}</span>
        </div>
      </div>
    </div>
  );
}

