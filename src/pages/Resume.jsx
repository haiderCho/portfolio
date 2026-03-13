import { contactInfo } from '../data/contactInfo';
import { resumeData } from '../data/resumeData';
import SectionHeading from '../components/SectionHeading';

export default function Resume() {
  return (
    <div className="page">
      <h2 className="page-title">Career Snapshot</h2>
      <div className="page-underline" />

      {/* Experience */}
      <SectionHeading 
        title="Experience" 
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
        }
      />

      <div className="timeline" style={{ marginTop: 16 }}>
        {resumeData.experience.map((job, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-title">{job.title}</div>
            <div className="timeline-company">{job.company}{job.type ? ` · ${job.type}` : ''}</div>
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-desc">{job.description}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <SectionHeading 
        title="Education" 
        style={{ marginTop: 36 }}
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
          </svg>
        }
      />

      <div className="timeline" style={{ marginTop: 16 }}>
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-title">{edu.title}</div>
            <div className="timeline-company">{edu.company}</div>
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
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
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
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
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
        <span className="skill-name" style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{name}</span>
        <span className="skill-percent" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{percent}%</span>
      </div>
      <div className="skill-bar" style={{ height: 6, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 3, overflow: 'hidden' }}>
        <div className="skill-fill" style={{ width: `${percent}%`, height: '100%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary-low-alpha)' }} />
      </div>
    </div>
  );
}

function LanguageItem({ language, level, percent }) {
  return (
    <div className="language-item" style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--surface-border)', borderRadius: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{language}</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{level}</div>
        </div>
        <div className="lang-indicator" style={{ position: 'relative', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ transform: 'rotate(-90deg)', width: 36, height: 36 }}>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="var(--accent)" strokeWidth="3" strokeDasharray={100} strokeDashoffset={100 - percent} />
          </svg>
          <span style={{ position: 'absolute', fontSize: 9, fontWeight: 700, color: 'var(--text)' }}>{percent}%</span>
        </div>
      </div>
    </div>
  );
}

