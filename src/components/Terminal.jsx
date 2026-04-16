import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ── Terminal colour helpers (Dracula palette) ─────────────────────────────────

const G  = ({ children }) => <span style={{ color: '#50fa7b' }}>{children}</span>;
const C  = ({ children }) => <span style={{ color: '#8be9fd' }}>{children}</span>;
const P  = ({ children }) => <span style={{ color: '#bd93f9' }}>{children}</span>;
const Y  = ({ children }) => <span style={{ color: '#f1fa8c' }}>{children}</span>;
const O  = ({ children }) => <span style={{ color: '#ffb86c' }}>{children}</span>;
const R  = ({ children }) => <span style={{ color: '#ff5555' }}>{children}</span>;
const M  = ({ children }) => <span style={{ color: '#6272a4' }}>{children}</span>;
const W  = ({ children }) => <span style={{ color: '#f8f8f2' }}>{children}</span>;
const Pk = ({ children }) => <span style={{ color: '#ff79c6' }}>{children}</span>;

// ── Prompt display ─────────────────────────────────────────────────────────────

const PromptDisplay = () => (
  <span style={{ userSelect: 'none', flexShrink: 0 }}>
    <G>khayrullo</G><W>@</W><C>portfolio</C><W>:~</W><Pk>$</Pk><W> </W>
  </span>
);

// ── Command outputs ────────────────────────────────────────────────────────────

const WELCOME = (
  <div>
    <P><pre style={{ lineHeight: 1.3, margin: 0 }}>{
`  ██╗  ██╗██╗
  ██║ ██╔╝██║
  █████╔╝ ██║
  ██╔═██╗ ██║
  ██║  ██╗██║
  ╚═╝  ╚═╝╚═╝`
    }</pre></P>
    <br />
    <W>Khayrullo Isomiddinov's Portfolio Terminal</W>
    <br />
    <M>──────────────────────────────────────────</M>
    <br />
    <W>Type </W><G>help</G><W> for available commands.</W>
    <br />
    <Y>Hint: try "sudo hire khayrullo" 👀</Y>
  </div>
);

const OUTPUTS = {

  help: () => (
    <div>
      <C>Available commands:</C>
      <br /><br />
      {[
        ['whoami',              'who is Khayrullo'],
        ['about',               'read the full bio'],
        ['skills',              'tech stack (JSON)'],
        ['projects',            'list of projects'],
        ['experience',          'work history'],
        ['contact',             'get in touch'],
        ['ls',                  'list directory'],
        ['cat <file>',          'read a file (try: cat about.txt)'],
        ['git log',             'recent commits'],
        ['git status',          'working tree status'],
        ['git diff',            'see what changed'],
        ['neofetch',            'system info'],
        ['history',             'command history'],
        ['pwd',                 'print working directory'],
        ['date',                'current date & time'],
        ['clear',               'clear terminal'],
      ].map(([cmd, desc]) => (
        <div key={cmd} style={{ display: 'flex' }}>
          <G><span style={{ display: 'inline-block', minWidth: '200px' }}>{cmd}</span></G>
          <M>{desc}</M>
        </div>
      ))}
      <br />
      <Y>Easter eggs: vim · hack · matrix · coffee · :(){ :|:&amp; };: · sudo hire khayrullo</Y>
    </div>
  ),

  whoami: () => (
    <div>
      <W>Khayrullo Isomiddinov</W>
      <br />
      <M>────────────────────────────────────</M>
      <br />
      <M>role       </M><C>Computer Scientist</C><br />
      <M>university </M><C>Eötvös Loránd University (ELTE)</C><br />
      <M>location   </M><C>Budapest, Hungary</C><br />
      <M>github     </M><G>github.com/khayrullo-isomiddinov</G><br />
      <M>linkedin   </M><G>linkedin.com/in/khayrullo-isomiddinov</G><br />
      <M>status     </M><G>seeking_opportunities = True</G>
    </div>
  ),

  about: () => (
    <div>
      <C># about.txt</C><br /><br />
      <W>CS student at ELTE Budapest. I care about understanding</W><br />
      <W>systems from first principles — and building software</W><br />
      <W>that actually works.</W><br /><br />
      <W>Currently:</W><br />
      {'  '}<G>→</G> <W>Teaching Java OOP to undergrads at ELTE</W><br />
      {'  '}<G>→</G> <W>Writing thesis: real-time study-group platform</W><br />
      {'  '}<G>→</G> <W>Actively seeking first full-time / internship role</W><br /><br />
      <M>↑ Scroll to #about for the full story</M>
    </div>
  ),

  skills: () => (
    <div>
      <G>{'{'}</G><br />
      {'  '}<P>"languages"</P><W>: </W><Y>["Python", "Java", "JavaScript", "C", "C#", "PHP"]</Y><W>,</W><br />
      {'  '}<P>"web"</P><W>:       </W><Y>["FastAPI", "React", "Node.js", "Laravel", "WebSockets"]</Y><W>,</W><br />
      {'  '}<P>"systems"</P><W>:   </W><Y>["Linux", "Docker", "SQL", "Distributed Systems"]</Y><W>,</W><br />
      {'  '}<P>"tools"</P><W>:     </W><Y>["Git", "REST APIs", "OOP Design Patterns", "JWT"]</Y><W>,</W><br />
      {'  '}<P>"learning"</P><W>:  </W><Y>["CCNA", "always something new"]</Y><br />
      <G>{'}'}</G>
    </div>
  ),

  projects: () => (
    <div>
      <C>drwxr-xr-x  ~/projects/</C><br /><br />
      {[
        ['PeerPrep',        'FastAPI + React  — real-time study platform + vector clocks'],
        ['Polaris LMS',     'Laravel          — full-stack learning management system'],
        ['Booklovers Hub',  'PHP + MySQL       — social reading platform'],
        ['Comment Remover', 'TypeScript        — VSCode extension (1k+ installs)'],
        ['MoodLens',        'React             — AI-powered emotion analysis'],
        ['Stargate Game',   'Vanilla JS        — multiplayer grid strategy game'],
      ].map(([name, desc]) => (
        <div key={name}>
          <G><span style={{ display: 'inline-block', minWidth: '180px' }}>{name}</span></G>
          <M>{desc}</M>
        </div>
      ))}
      <br />
      <M>↓ Scroll to #projects for interactive cards</M>
    </div>
  ),

  experience: () => (
    <div>
      <C>Work History</C><br />
      <M>────────────────────────────────────</M><br /><br />
      <G>OOP Instructor</G><M> @ </M><W>Eötvös Loránd University</W><br />
      <M>  2025 – Present  ·  Budapest, Hungary</M><br />
      <W>  Teaching Java OOP to undergrads (labs + lectures).</W><br /><br />
      <G>Frontend Engineering Intern</G><M> @ </M><W>LimeLight</W><br />
      <M>  Sep 2025 – Dec 2025  ·  Oslo, Norway</M><br />
      <W>  Built + maintained React features in production.</W>
    </div>
  ),

  contact: () => (
    <div>
      <C>Contact</C><br />
      <M>────────────────────────────────────</M><br /><br />
      <M>github    </M><G>github.com/khayrullo-isomiddinov</G><br />
      <M>linkedin  </M><G>linkedin.com/in/khayrullo-isomiddinov</G><br />
      <M>location  </M><W>Budapest, Hungary</W><br /><br />
      <W>Or scroll to the contact form ↓</W>
    </div>
  ),

  ls: (hist, rawArgs) => {
    const arg = rawArgs?.trim();
    if (arg === 'projects' || arg === 'projects/') {
      return (
        <div>
          <C>~/projects/</C><br /><br />
          {['PeerPrep/', 'polarisLMS/', 'booklovers-hub/', 'comment-remover/', 'mood-lens/', 'stargate-game/'].map(f => (
            <div key={f}><C>{f}</C></div>
          ))}
        </div>
      );
    }
    return (
      <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <M>total 42</M><br />
        {[
          ['drwxr-xr-x', 'khayrullo', '4096', 'Apr 10', 'projects/'],
          ['-rw-r--r--', 'khayrullo', '1337', 'Apr 10', 'about.txt'],
          ['-rw-r--r--', 'khayrullo', '2048', 'Apr 10', 'resume.pdf'],
          ['-rw-r--r--', 'khayrullo',  '512', 'Apr 10', 'skills.json'],
          ['-rw-r--r--', 'khayrullo',  '256', 'Apr 10', 'contact.txt'],
          ['-rw-r--r--', 'khayrullo',  '420', 'Apr 09', 'thesis-draft.pdf'],
        ].map(([perms, user, size, date, name]) => (
          <div key={name}>
            <M>{perms}  </M>
            <W><span style={{ display: 'inline-block', minWidth: '80px' }}>{user}</span></W>
            <W><span style={{ display: 'inline-block', minWidth: '40px', textAlign: 'right' }}>{size}</span></W>
            <M>  {date}  </M>
            {name.endsWith('/') ? <C>{name}</C> : <W>{name}</W>}
          </div>
        ))}
      </div>
    );
  },

  'cat about.txt':    () => OUTPUTS.about(),
  'cat skills.json':  () => OUTPUTS.skills(),
  'cat contact.txt':  () => OUTPUTS.contact(),
  'cat resume.pdf': () => (
    <R>Error: binary file — use the Download CV button in the footer instead.</R>
  ),
  'cat thesis-draft.pdf': () => (
    <div>
      <Y>thesis-draft.pdf  [work in progress]</Y><br /><br />
      <W>Title: Real-Time Study-Group Event Platform</W><br /><br />
      <W>Abstract: This thesis presents the design and implementation of a</W><br />
      <W>real-time collaborative study platform using FastAPI, WebSockets,</W><br />
      <W>and a vector-clock synchronisation algorithm for causal message</W><br />
      <W>ordering. The system includes event scheduling, gamification,</W><br />
      <W>AI-assisted content, and production-grade auth.</W><br /><br />
      <M>Status: chapter 3 / 5  ·  ETA: this semester</M>
    </div>
  ),

  'git log': () => (
    <div>
      {[
        { hash: 'a7f3d92', ref: ' (HEAD -> main, origin/main)', msg: 'feat(peerprep): vector-clock message ordering', date: 'Thu Apr 10 14:32 2026' },
        { hash: '3b8e451', ref: '', msg: 'fix(auth): switch bcrypt → argon2 for hashing', date: 'Wed Apr 09 11:15 2026' },
        { hash: 'c2d9f18', ref: '', msg: 'refactor(lms): extract grading to service layer', date: 'Mon Apr 07 09:42 2026' },
        { hash: '8a1e763', ref: '', msg: 'feat(vscode-ext): publish to marketplace', date: 'Fri Apr 04 16:55 2026' },
        { hash: '2f7b9c4', ref: '', msg: 'feat(stargate): add multiplayer WebSocket sync', date: 'Tue Apr 01 13:22 2026' },
        { hash: '9e4a231', ref: '', msg: 'chore: update README — clarify setup instructions', date: 'Mon Mar 31 10:05 2026' },
      ].map(({ hash, ref, msg, date }) => (
        <div key={hash} style={{ marginBottom: '0.55rem' }}>
          <Y>commit {hash}</Y><G>{ref}</G><br />
          <M>Date:   {date}</M><br />
          <W>    {msg}</W>
        </div>
      ))}
      <M>─── end of log ───</M>
    </div>
  ),

  'git status': () => (
    <div>
      <W>On branch </W><G>main</G><br />
      <W>Your branch is up to date with </W><G>origin/main</G><br /><br />
      <G>nothing to commit, working tree clean</G><br /><br />
      <M>  Khayrullo is clean, committed, and ready to merge.</M><br />
      <M>  (into your team)</M>
    </div>
  ),

  'git diff': () => (
    <div>
      <M>diff --git a/career.txt b/career.txt</M><br />
      <M>index 4b82e1a..9f3c01d 100644</M><br />
      <M>--- a/career.txt</M><br />
      <M>+++ b/career.txt</M><br />
      <M>@@ -1,3 +1,4 @@</M><br />
      <W> CS Student @ ELTE</W><br />
      <W> OOP Instructor @ ELTE</W><br />
      <R>-status = "looking for opportunities"</R><br />
      <G>+status = "hired at YOUR_COMPANY"  ← apply this patch</G><br /><br />
      <M>To apply: scroll to #contact ↓</M>
    </div>
  ),

  neofetch: () => (
    <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <P><pre style={{ lineHeight: 1.4, margin: 0 }}>{
`  ██╗  ██╗██╗
  ██║ ██╔╝██║
  █████╔╝ ██║
  ██╔═██╗ ██║
  ██║  ██╗██║
  ╚═╝  ╚═╝╚═╝`
      }</pre></P>
      <div>
        <G>khayrullo</G><W>@</W><G>portfolio</G><br />
        <M>─────────────────────────────────</M><br />
        <M>OS:         </M><W>PortfolioOS 2026 x86_64</W><br />
        <M>Host:       </M><W>khayrullo.com (Cloudflare Pages)</W><br />
        <M>Kernel:     </M><W>CS 4.0 @ ELTE Budapest</W><br />
        <M>Shell:      </M><C>/bin/bash</C><br />
        <M>WM:         </M><C>React + Framer Motion</C><br />
        <M>Terminal:   </M><C>this very one</C><br />
        <M>Languages:  </M><Y>Python, Java, JS, C, C#, PHP</Y><br />
        <M>CPU:        </M><W>Brain @ 3.2GHz (overclocked w/ coffee)</W><br />
        <M>Memory:     </M><G>████████░░</G><W> always learning</W><br />
        <M>Status:     </M><G>seeking_opportunities = True</G><br />
        <br />
        <span style={{ display: 'flex', gap: '4px' }}>
          {['#ff5555','#50fa7b','#f1fa8c','#8be9fd','#bd93f9','#ff79c6','#f8f8f2','#6272a4'].map(c => (
            <span key={c} style={{ background: c, width: 14, height: 14, borderRadius: 2, display: 'inline-block' }} />
          ))}
        </span>
      </div>
    </div>
  ),

  pwd: () => <W>/home/khayrullo/portfolio</W>,

  date: () => <W>{new Date().toString()}</W>,

  history: (hist) => (
    <div>
      {hist.length === 0
        ? <M>No commands yet.</M>
        : hist.map((cmd, i) => (
            <div key={i}>
              <M><span style={{ display: 'inline-block', minWidth: '32px', textAlign: 'right' }}>{i + 1}</span>  </M>
              <W>{cmd}</W>
            </div>
          ))
      }
    </div>
  ),

  // ── Easter eggs ─────────────────────────────────────────────────────────────

  'sudo hire khayrullo': () => (
    <div>
      <Y>[sudo] password for recruiter: ••••••••</Y><br />
      <W>Authenticating... </W><G>OK</G><br /><br />
      <W>Running background checks:</W><br />
      {'  '}<G>✓</G> <W>CS student:                confirmed</W><br />
      {'  '}<G>✓</G> <W>Builds real projects:      confirmed</W><br />
      {'  '}<G>✓</G> <W>Teaches programming:       confirmed</W><br />
      {'  '}<G>✓</G> <W>Speaks 4 languages:        confirmed</W><br />
      {'  '}<G>✓</G> <W>Commits to main:           confirmed</W><br />
      {'  '}<G>✓</G> <W>Ships production code:     confirmed</W><br />
      {'  '}<G>✓</G> <W>Doesn't push to prod on Friday: unverified</W><br /><br />
      <G>Access granted. khayrullo is now your employee.</G><br />
      <M>Make it official → scroll to #contact ↓</M>
    </div>
  ),

  sudo: () => <Y>sudo: what are you trying to do? Try "sudo hire khayrullo"</Y>,

  'sudo rm -rf /': () => (
    <div>
      <R>sudo: rm: permission denied.</R><br />
      <W>This portfolio runs on pure stubbornness. It cannot be deleted.</W>
    </div>
  ),

  vim: () => (
    <div>
      <M>~</M><br />
      <M>~</M><br />
      <M>~</M><br />
      <M>~</M><br />
      <W>"portfolio" [Read-Only] 1337 lines, 42069 characters</W><br /><br />
      <Y>You are inside vim.</Y><br />
      <M>Type :q! to escape. Or just close the tab. Or call for help.</M><br />
      <M>We're not judging.</M>
    </div>
  ),

  ':q!': () => <G>Escaped vim. You are now free. Go touch some grass.</G>,
  ':wq': () => <G>Portfolio saved. Wait — it was always saved. You're good.</G>,

  hack: () => (
    <div>
      <G>Initialising hack sequence</G><W>...</W><br />
      <W>[</W><G>████████░░░░░░░░░░░░</G><W>] 40%  </W><Y>bypassing firewall...</Y><br />
      <W>[</W><G>████████████░░░░░░░░</G><W>] 60%  </W><Y>injecting payload...</Y><br />
      <W>[</W><G>████████████████████</G><W>] 100% </W><R>ERROR: no target found</R><br /><br />
      <M>Hacking a portfolio doesn't really do anything, bud.</M><br />
      <W>Try </W><G>sudo hire khayrullo</G><W> for legitimate access.</W>
    </div>
  ),

  matrix: () => (
    <div>
      <G><pre style={{ margin: 0, lineHeight: 1.3, fontSize: '0.7rem' }}>{
        Array.from({ length: 6 }, () =>
          Array.from({ length: 60 }, () => (Math.random() > 0.5 ? '1' : '0')).join('')
        ).join('\n')
      }</pre></G>
      <br />
      <P>Wake up, Neo...</P><br />
      <M>The Matrix has you. But also so does a CS degree.</M>
    </div>
  ),

  coffee: () => (
    <div>
      <Y>Brewing ☕</Y><W>...</W><br />
      <W>[</W><G>████████████████████</G><W>] done</W><br /><br />
      <G>Hot coffee dispensed.</G><br />
      <M>This is why the commits happen at 2am.</M>
    </div>
  ),

  ':(){ :|:& };:': () => (
    <div>
      <R>bash: fork bomb detected.</R><br />
      <W>Nice try. This portfolio runs on Cloudflare.</W><br />
      <M>It has survived worse.</M>
    </div>
  ),

  'npm run deploy': () => (
    <div>
      <W>{'>'} portfolio@2026 predeploy</W><br />
      <W>{'>'} vite build</W><br />
      <M>vite v6.0.5 building for production...</M><br />
      <G>✓ 312 modules transformed</G><br />
      <G>✓ built in 1.42s</G><br /><br />
      <R>wait — wrong command.</R><br />
      <W>You're on Cloudflare Pages. Just push to </W><G>main</G><W> and it deploys automatically.</W><br />
      <M>npm run deploy uses gh-pages (GitHub Pages). Not what you want.</M>
    </div>
  ),

  python: () => (
    <div>
      <G>Python 3.12.0 (portfolio build, Apr 10 2026)</G><br />
      <M>Type "help", "copyright", or "license" for more information.</M><br />
      <W>{'>>>'} </W><M>_ (you're in a portfolio, not a real REPL)</M><br /><br />
      <W>{'>>>'} </W><W>print("Hello, World!")</W><br />
      <G>Hello, World!</G><br /><br />
      <W>{'>>>'} </W><W>import this</W><br />
      <C>Beautiful is better than ugly.</C><br />
      <C>Simple is better than complex.</C><br />
      <C>Readability counts.</C><br />
      <M>... (Khayrullo lives by these)</M><br /><br />
      <W>{'>>>'} </W><W>exit()</W><br />
      <Y>You can't exit. There is no exit. There is only the portfolio.</Y>
    </div>
  ),

  'python3': () => OUTPUTS.python(),

  'ls -la': (hist, args) => OUTPUTS.ls(hist, '-la'),
  'ls projects': (hist) => OUTPUTS.ls(hist, 'projects'),
  'ls projects/': (hist) => OUTPUTS.ls(hist, 'projects'),

  'uname -a': () => <W>PortfolioOS 2026.04.10 #1 SMP PREEMPT_DYNAMIC khayrullo@portfolio</W>,
  uname: () => <W>PortfolioOS</W>,

  exit: () => (
    <div>
      <R>bash: exit: cannot escape this portfolio.</R><br />
      <W>You are stuck here until you scroll to #contact.</W>
    </div>
  ),

  ':wq!': () => <G>Nothing to save. But I respect the enthusiasm.</G>,

  clear: () => 'CLEAR',
};

// ── Process a command string ───────────────────────────────────────────────────

const TAB_COMPLETIONS = [
  'about', 'cat about.txt', 'cat contact.txt', 'cat resume.pdf',
  'cat skills.json', 'cat thesis-draft.pdf', 'clear', 'coffee',
  'contact', 'date', 'exit', 'experience', 'git diff', 'git log',
  'git status', 'hack', 'help', 'history', 'ls', 'ls projects/',
  'matrix', 'neofetch', 'projects', 'pwd', 'python', 'python3',
  'skills', 'sudo hire khayrullo', 'uname -a', 'vim', 'whoami',
  ':(){ :|:& };:', 'npm run deploy',
];

const processCmd = (rawCmd, cmdHist) => {
  const cmd = rawCmd.trim();
  const lower = cmd.toLowerCase();

  if (lower === 'clear') return 'CLEAR';

  // echo
  if (lower.startsWith('echo ')) return <W>{cmd.slice(5)}</W>;

  // man
  if (lower.startsWith('man ')) {
    const topic = cmd.slice(4);
    return (
      <div><R>No manual entry for </R><W>{topic}</W><R>.</R><br /><M>This is a portfolio, not a man page server.</M></div>
    );
  }

  // history needs cmdHist
  if (lower === 'history') return OUTPUTS.history(cmdHist);

  // ls with args
  if (lower.startsWith('ls ')) {
    const args = cmd.slice(3).trim();
    return OUTPUTS.ls(cmdHist, args);
  }

  const fn = OUTPUTS[lower];
  if (fn) return typeof fn === 'function' ? fn(cmdHist, cmd.slice(lower.indexOf(' ') + 1)) : fn;

  return (
    <div>
      <R>bash: {cmd}: command not found</R><br />
      <M>Type </M><G>help</G><M> for available commands.</M>
    </div>
  );
};

// ── Styled Components ─────────────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem);
  background: #070710;
  background-image: radial-gradient(rgba(139, 92, 246, 0.07) 1px, transparent 1px);
  background-size: 26px 26px;
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
`;

const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.8rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
`;

const SectionSub = styled(motion.p)`
  margin-top: 0.65rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const TerminalWindow = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 24px 80px rgba(0, 0, 0, 0.7),
    0 0 60px rgba(139, 92, 246, 0.08);
  cursor: text;
`;

const Chrome = styled.div`
  background: #1e1e2e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const TabTitle = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  flex: 1;
  text-align: center;
`;

const Body = styled.div`
  background: #0d0d1a;
  padding: 1.25rem 1.5rem 0.75rem;
  height: 420px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  scroll-behavior: smooth;

  /* Dracula scrollbar */
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #44475a; border-radius: 4px; }

  @media (max-width: 600px) {
    height: 360px;
    font-size: 0.75rem;
    padding: 1rem;
  }
`;

const HistoryInputLine = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 0.15rem;
  gap: 0;
`;

const HistoryOutput = styled.div`
  margin-bottom: 0.85rem;
  padding-left: 0;
  color: #f8f8f2;
`;

const SystemOutput = styled.div`
  margin-bottom: 1rem;
  color: #f8f8f2;
`;

const ActiveLine = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.75rem;
`;

const TermInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #f8f8f2;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  caret-color: #50fa7b;
  min-width: 0;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const StatusBar = styled.div`
  background: #6272a4;
  padding: 0.25rem 1rem;
  display: flex;
  gap: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.85);
  user-select: none;
  flex-wrap: wrap;
`;

const StatusItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  opacity: 0.9;
`;

// ── Component ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const Terminal = () => {
  const [lines, setLines]           = useState([{ type: 'system', content: WELCOME }]);
  const [input, setInput]           = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx]       = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const focusInput = () => inputRef.current?.focus();

  const submit = () => {
    const cmd = input.trim();

    setLines(prev => [...prev, { type: 'input', cmd }]);

    if (cmd) {
      const output = processCmd(cmd, cmdHistory);
      if (output === 'CLEAR') {
        setLines([]);
      } else {
        setLines(prev => [...prev, { type: 'output', content: output }]);
      }
      setCmdHistory(prev => [...prev, cmd]);
    }

    setInput('');
    setHistIdx(-1);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      submit();
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        if (next >= 0) setInput(cmdHistory[cmdHistory.length - 1 - next]);
        return next;
      });
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = prev - 1;
        if (next < 0) { setInput(''); return -1; }
        setInput(cmdHistory[cmdHistory.length - 1 - next] ?? '');
        return next;
      });
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const match = TAB_COMPLETIONS.find(c => c.startsWith(input) && c !== input);
      if (match) setInput(match);
      return;
    }

    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
      return;
    }
  };

  return (
    <Section id="terminal">
      <Container>
        <SectionHeader>
          <SectionLabel>// terminal</SectionLabel>
          <SectionTitle
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            Interactive Shell
          </SectionTitle>
          <SectionSub
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
          >
            $ type 'help' to get started · Tab to autocomplete · ↑↓ for history
          </SectionSub>
        </SectionHeader>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          <TerminalWindow onClick={focusInput}>
            <Chrome>
              <Dot $color="#ff5f57" />
              <Dot $color="#febc2e" />
              <Dot $color="#28c840" />
              <TabTitle>bash — khayrullo@portfolio — 80×24</TabTitle>
            </Chrome>

            <Body>
              {lines.map((line, i) => {
                if (line.type === 'system') {
                  return <SystemOutput key={i}>{line.content}</SystemOutput>;
                }
                if (line.type === 'input') {
                  return (
                    <HistoryInputLine key={i}>
                      <PromptDisplay />
                      <W>{line.cmd}</W>
                    </HistoryInputLine>
                  );
                }
                return <HistoryOutput key={i}>{line.content}</HistoryOutput>;
              })}

              <ActiveLine>
                <PromptDisplay />
                <TermInput
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  aria-label="Terminal input"
                />
              </ActiveLine>

              <div ref={bottomRef} />
            </Body>

            <StatusBar>
              <StatusItem>⎇ main</StatusItem>
              <StatusItem>✓ 0 errors</StatusItem>
              <StatusItem>Python · Java · JS</StatusItem>
              <StatusItem>Budapest, HU</StatusItem>
              <StatusItem>UTF-8</StatusItem>
              <StatusItem style={{ marginLeft: 'auto' }}>khayrullo@portfolio</StatusItem>
            </StatusBar>
          </TerminalWindow>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Terminal;
