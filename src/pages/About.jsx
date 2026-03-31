import { contactInfo } from '../data/contactInfo';
import { workspaceInfo } from '../data/techStack';
import SectionHeading from '../components/SectionHeading';
import { FiCpu, FiCompass, FiMonitor, FiBookOpen, FiFilm, FiCoffee, FiHeadphones, FiGlobe, FiLayers, FiSearch, FiSliders } from 'react-icons/fi';
import { FaWindows, FaMemory, FaGamepad, FaHdd } from 'react-icons/fa';
import { SiIntel, SiNvidia } from 'react-icons/si';

export default function About() {
  const calculateYears = () => {
    const start = new Date('2024-03-01');
    const now = new Date();
    const diffTime = Math.abs(now - start);
    return Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)));
  };
  const yearsExp = calculateYears();

  return (
    <div className="page">
      <h2 className="page-title">Digital Identity</h2>
      <div className="page-underline" />

      {/* The Narrative */}
      <p className="bio-text">
        I&apos;m {contactInfo.name}, a {contactInfo.title} based in {contactInfo.location}. 
        I build intelligent systems that bridge the gap between research and production, from 
        automated training pipelines and model monitoring to semantic search engines and 
        recommendation systems.
      </p>
      <p className="bio-text">
        With hands-on experience across the full ML lifecycle, data preprocessing, model 
        development, deployment, and drift detection, my projects range from NLP-powered job 
        matching systems to AI-driven crop recommendation platforms, all built with a focus 
        on real-world impact and scalable architecture.
      </p>

      {/* Sleek Highlight Ribbon */}
      <div className="highlight-ribbon">
        <div className="ribbon-item" style={{ animationDelay: '100ms' }}>
          <span className="ribbon-value primary-gradient">+{yearsExp}</span>
          <span className="ribbon-label">Years Experience</span>
        </div>
        <div className="ribbon-divider" />
        <div className="ribbon-item" style={{ animationDelay: '200ms' }}>
          <span className="ribbon-value secondary-gradient">+6</span>
          <span className="ribbon-label">Systems Shipped</span>
        </div>
        <div className="ribbon-divider" />
        <div className="ribbon-item" style={{ animationDelay: '300ms' }}>
          <span className="ribbon-value accent-gradient">BSc</span>
          <span className="ribbon-label">Computer Science & Eng.</span>
        </div>
      </div>

      {/* Operating Principles */}
      <SectionHeading 
        title="Operating Principles" 
        style={{ marginTop: 40 }}
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1="12" y1="2" x2="12" y2="8.5" />
          </svg>
        }
      />

      <p className="section-subtitle">
        Convictions shaped by both research and production experience with enough on-call time to consistently prioritize resilience over hype.      
      </p>
      
      <div className="principles-grid">
        <div className="principle-card" style={{ animationDelay: '100ms' }}>
          <div className="card-header-inline">
            <span className="principle-number">01</span>
            <h4 className="principle-title">Reproducibility is non-negotiable</h4>
          </div>
          <p className="principle-desc">A result you can't reproduce isn't a result, it's an anecdote. Every experiment is versioned: data, code, config, seed. If I can't rerun it in 6 months, it doesn't count.
          </p>
          <div className="principle-tags">
            <span className="principle-tag">DVC / MLflow</span>
            <span className="principle-tag">Lineage</span>
            <span className="principle-tag">Provenance</span>
          </div>
        </div>

        <div className="principle-card" style={{ animationDelay: '175ms' }}>
          <div className="card-header-inline">
            <span className="principle-number">02</span>
            <h4 className="principle-title">Data quality over model complexity</h4>
          </div>
          <p className="principle-desc">A boring model on clean data outperforms a clever one trained on garbage. I spend disproportionate time on data pipelines, labeling heuristics, and distribution audits, because the ceiling is always data.</p>
          <div className="principle-tags">
            <span className="principle-tag">Data-Centric AI</span>
            <span className="principle-tag">Validation</span>
            <span className="principle-tag">Drift Detection</span>
          </div>
        </div>

        <div className="principle-card" style={{ animationDelay: '250ms' }}>
          <div className="card-header-inline">
            <span className="principle-number">03</span>
            <h4 className="principle-title">Ship a baseline first</h4>
          </div>
          <p className="principle-desc">A linear model or heuristic goes live before anything complex. It flushes out plumbing bugs and sets the performance floor.</p>
          <div className="principle-tags">
            <span className="principle-tag">Baselines</span>
            <span className="principle-tag">Iterative Delivery</span>
            <span className="principle-tag">YAGNI</span>
          </div>
        </div>

        <div className="principle-card" style={{ animationDelay: '325ms' }}>
          <div className="card-header-inline">
            <span className="principle-number">04</span>
            <h4 className="principle-title">Deploy with epistemic humility</h4>
          </div>
          <p className="principle-desc">Every deployment is a hypothesis. Shadow modes, canary rollouts, and circuit breakers are first-class requirements, not afterthoughts.</p>
          <div className="principle-tags">
            <span className="principle-tag">Shadow Deploy</span>
            <span className="principle-tag">Observability</span>
            <span className="principle-tag">Kill Switches</span>
          </div>
        </div>

        <div className="principle-card" style={{ animationDelay: '400ms' }}>
          <div className="card-header-inline">
            <span className="principle-number">05</span>
            <h4 className="principle-title">Optimize for the outcome</h4>
          </div>
          <p className="principle-desc">Validation loss and F1 are proxies, not the mission. The downstream business or user metric stays visible at all times.</p>
          <div className="principle-tags">
            <span className="principle-tag">Metric Hierarchy</span>
            <span className="principle-tag">Product KPIs</span>
            <span className="principle-tag">A/B Testing</span>
          </div>
        </div>

        <div className="principle-card" style={{ animationDelay: '475ms' }}>
          <div className="card-header-inline">
            <span className="principle-number">06</span>
            <h4 className="principle-title">System includes the Users</h4>
          </div>
          <p className="principle-desc">The real system includes the UI, feedback loops, and the users who adapt to it. Design for the full sociotechnical stack.</p>
          <div className="principle-tags">
            <span className="principle-tag">RLHF</span>
            <span className="principle-tag">Human-in-the-Loop</span>
            <span className="principle-tag">Feedback Systems</span>
          </div>
        </div>
      </div>

      {/* The Workspace */}
      <SectionHeading 
        title="The Workspace" 
        style={{ marginTop: 40 }}
        icon={<FiMonitor size={20} />}
      />

      <p className="section-subtitle">
        The hardware stack powering local inference and aggressive prototyping. Because waiting on cloud compute to test a hypothesis is a waste of time.
      </p>

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
          <FaHdd />
          <div className="workspace-item-info">
            <span className="workspace-item-label">Storage</span>
            <span className="workspace-item-value">{workspaceInfo.storage}</span>
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

      {/* Current Trajectory */}
      <SectionHeading 
        title="Currently Exploring" 
        style={{ marginTop: 40 }}
        icon={<FiCompass size={20} />}
      />

      <p className="section-subtitle">
        Active research areas. Stress-testing new paradigms to see if they hold up outside of toy examples and vendor benchmarks.
      </p>

      <div className="trajectory-grid">
        <div className="trajectory-card" style={{ animationDelay: '100ms' }}>
          <div className="card-header-inline">
            <div className="trajectory-icon-wrapper"><FiLayers /></div>
            <h4 className="trajectory-title">Retrieval-Augmented Generation</h4>
          </div>
          <p className="trajectory-desc">Combining retrieval pipelines with generative models for grounded, context-aware outputs.</p>
        </div>
        <div className="trajectory-card" style={{ animationDelay: '200ms' }}>
          <div className="card-header-inline">
            <div className="trajectory-icon-wrapper"><FiSearch /></div>
            <h4 className="trajectory-title">Vector Search & Embeddings</h4>
          </div>
          <p className="trajectory-desc">Semantic search pipelines using embedding models and vector databases for intelligent retrieval.</p>
        </div>
        <div className="trajectory-card" style={{ animationDelay: '300ms' }}>
          <div className="card-header-inline">
            <div className="trajectory-icon-wrapper"><FiSliders /></div>
            <h4 className="trajectory-title">LLM Fine-Tuning</h4>
          </div>
          <p className="trajectory-desc">Parameter-efficient fine-tuning to adapt large language models for domain-specific tasks.</p>
        </div>
      </div>

      {/* Beyond the Code */}
      <SectionHeading 
        title="Beyond the Code" 
        style={{ marginTop: 40 }}
        icon={<FiCoffee size={20} />}
      />

      <p className="section-subtitle">
        Off the clock. The stories, music, and hardware tangents that keep me balanced when the laptop is finally closed.
      </p>

     <div className="hobbies-grid">
  <div className="hobby-card" style={{ animationDelay: '100ms' }}>
    <div className="card-header-inline">
      <div className="hobby-icon-wrapper"><FiBookOpen /></div>
      <h4 className="hobby-title">Books & Literature</h4>
    </div>
    <p className="hobby-desc">
      Humayun Ahmed is a 150+ book obsession. Beyond that Tagore, Nazrul,
      Dostoevsky, Nietzsche, Tolkien, GRRM. The shelf spans Bangla classics,
      philosophy, high fantasy, and whatever math-logic rabbit hole I'm
      currently down.
    </p>
  </div>

  <div className="hobby-card" style={{ animationDelay: '175ms' }}>
    <div className="card-header-inline">
      <div className="hobby-icon-wrapper hobby-icon-secondary"><FiBookOpen /></div>
      <h4 className="hobby-title">Manga, Comics & Light Novels</h4>
    </div>
    <p className="hobby-desc">
      170,000+ chapters across manga, manhwa, manhua. 
      15,000+ issues of comics fill whatever gaps are left. 
      And when the panels run out, light novels pick up the slack; 
      sprawling, meticulously constructed worlds with protagonists who play by their own rules 
      and authors who aren't afraid to go dark and stay there.
    </p>
  </div>

  <div className="hobby-card" style={{ animationDelay: '275ms' }}>
    <div className="card-header-inline">
      <div className="hobby-icon-wrapper hobby-icon-accent"><FiFilm /></div>
      <h4 className="hobby-title">Film, TV & Anime</h4>
    </div>
    <p className="hobby-desc">
      Tracked 3,000+ movies, 1,500+ TV shows across Letterboxd, Serializd & IMDB. 
      1,900+ anime entries on MAL & AniList.
      A sucker for rich world-building and fantasy, equally drawn to brilliant, unhinged protagonists 
      and great storytelling. Spans film, TV, and anime with equal obsession.
    </p>
  </div>

  <div className="hobby-card" style={{ animationDelay: '350ms' }}>
    <div className="card-header-inline">
      <div className="hobby-icon-wrapper"><FaGamepad /></div>
      <h4 className="hobby-title">Gaming</h4>
    </div>
    <p className="hobby-desc">
      Witcher 3, Arkham City, Assassin's Creed II — open worlds with weight behind them. 
      Plus a completely unapologetic gacha habit for any IP I already love: One Piece, DBZ, Bleach. 
      No regrets.
    </p>
  </div>

  <div className="hobby-card" style={{ animationDelay: '425ms' }}>
    <div className="card-header-inline">
      <div className="hobby-icon-wrapper hobby-icon-accent"><FiHeadphones /></div>
      <h4 className="hobby-title">Music</h4>
    </div>
    <p className="hobby-desc">
      Somewhere between Bangla rock poetry and American heavy metal,
      with detours through Japanese, Hindi, Urdu, and anything else that earns the play. 
      A deep, chaotic library held together by one rule: it has to hit.
    </p>
  </div>

  <div className="hobby-card" style={{ animationDelay: '500ms' }}>
    <div className="card-header-inline">
      <div className="hobby-icon-wrapper hobby-icon-secondary"><FiGlobe /></div>
      <h4 className="hobby-title">Language Learning</h4>
    </div>
    <p className="hobby-desc">
      Currently studying Japanese — partly to read manga raws before the
      scanlation catches up, partly because understanding human language
      gives better ground truth for working with NLP.
    </p>
  </div>
</div>

    </div>
  );
}
