export default function UIMockups() {
  return (
    <div className="ui-mockups">
      {/* Trix Writing App */}
      <div className="mockup mockup-trix">
        <div className="mockup-header">
          <div className="mockup-title">trix</div>
          <div className="mockup-subtitle">Your Writing, Perfected.</div>
        </div>
        <div className="mockup-content">
          <div className="mockup-button mockup-button-green">Get Started</div>
        </div>
      </div>

      {/* AI Code Editor */}
      <div className="mockup mockup-code-editor">
        <div className="mockup-header">
          <div className="mockup-title">The AI-first Code Editor</div>
        </div>
        <div className="mockup-content">
          <div className="code-snippet">
            <div className="code-line">
              <span className="code-keyword">function</span> <span className="code-function">hello</span>() {'{'}
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-string">&quot;Hello World&quot;</span>;
            </div>
            <div className="code-line">{'}'}</div>
          </div>
        </div>
      </div>

      {/* Learning Platform */}
      <div className="mockup mockup-learning">
        <div className="mockup-header">
          <div className="mockup-title">A New Way to Learn</div>
          <div className="mockup-subtitle">Start your coding journey today</div>
        </div>
        <div className="mockup-content">
          <div className="learning-illustration">
            <div className="person-coding"></div>
          </div>
        </div>
      </div>

      {/* Skills Platform */}
      <div className="mockup mockup-skills">
        <div className="mockup-header">
          <div className="mockup-title">Skills speak louder than words</div>
        </div>
        <div className="mockup-content">
          <div className="mockup-buttons">
            <div className="mockup-button mockup-button-green">Sign up</div>
            <div className="mockup-button mockup-button-outline">Request demo</div>
          </div>
        </div>
      </div>

      {/* Component Library */}
      <div className="mockup mockup-components">
        <div className="mockup-header">
          <div className="mockup-title">Build your component library</div>
        </div>
        <div className="mockup-content">
          <div className="financial-data">
            <div className="amount">$15,231.89</div>
            <div className="change positive">+2350</div>
          </div>
          <div className="chart-placeholder"></div>
        </div>
      </div>

      {/* Terminal */}
      <div className="mockup mockup-terminal">
        <div className="mockup-header">
          <div className="mockup-title">The intelligent terminal</div>
        </div>
        <div className="mockup-content">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span> npm install
          </div>
          <div className="mockup-buttons">
            <div className="mockup-button mockup-button-green">Download for Mac</div>
            <div className="mockup-button mockup-button-outline">Request demo</div>
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="mockup mockup-linkedin">
        <div className="mockup-header">
          <div className="mockup-title">Welcome to your professional community</div>
        </div>
        <div className="mockup-content">
          <div className="mockup-buttons">
            <div className="mockup-button mockup-button-outline">Sign in with Google</div>
            <div className="mockup-button mockup-button-outline">Sign in with email</div>
          </div>
          <div className="linkedin-illustration">
            <div className="person-laptop"></div>
          </div>
        </div>
      </div>

      {/* GitHub */}
      <div className="mockup mockup-github">
        <div className="mockup-header">
          <div className="mockup-title">Let&apos;s build from here, together</div>
          <div className="mockup-subtitle">The complete developer platform to build, scale, and deliver secure software</div>
        </div>
        <div className="mockup-content">
          <div className="mockup-button mockup-button-green">Sign up for GitHub</div>
        </div>
      </div>

      {/* Music Player */}
      <div className="mockup mockup-music">
        <div className="mockup-header">
          <div className="mockup-title">groove</div>
        </div>
        <div className="mockup-content">
          <div className="music-section">
            <div className="music-title">Your Library</div>
            <div className="music-title">Groove Playlists</div>
          </div>
          <div className="song-list">
            <div className="song-item">
              <div className="album-art"></div>
              <div className="song-info">
                <div className="song-name">Call Out My Name</div>
                <div className="song-artist">The Weeknd</div>
              </div>
            </div>
            <div className="song-item">
              <div className="album-art"></div>
              <div className="song-info">
                <div className="song-name">Die for You</div>
                <div className="song-artist">The Weeknd</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Builder */}
      <div className="mockup mockup-builder">
        <div className="mockup-header">
          <div className="mockup-title">Make beautiful websites regardless of your design experience</div>
          <div className="mockup-subtitle">Beautiful, fast and modern React UI library</div>
        </div>
        <div className="mockup-content">
          <div className="mockup-button mockup-button-green">Get Started</div>
        </div>
      </div>
    </div>
  );
}
