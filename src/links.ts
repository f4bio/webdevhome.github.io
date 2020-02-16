export interface LinkItem {
  title: string
  url: string
  icon?: string
  color?: string
}

export interface LinkGroup {
  name: string
  items: LinkItem[]
}

export interface Links {
  items: LinkGroup[]
}

export const links: Links = {
  items: [
    {
      name: 'Code & Packages',
      items: [
        { title: 'GitHub', url: 'https://github.com', icon: 'GitHub', color: '#181717' },
        { title: 'GitLab', url: 'https://gitlab.com/explore', icon: 'GitLab', color: '#fca121' },
        { title: 'npm', url: 'https://npmjs.com', icon: 'NPM', color: '#cb3837' },
        { title: '30 seconds of code', url: 'https://30secondsofcode.org' },
        { title: 'BundlePhobia', url: 'https://bundlephobia.com' }
      ]
    },
    {
      name: 'Find help and discuss',
      items: [
        { title: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'Stack Overflow', color: '#fe7a16' },
        { title: 'Reddit', url: 'https://reddit.com', icon: 'Reddit', color: '#ff4500' },
        { title: 'Twitter', url: 'https://twitter.com', icon: 'Twitter', color: '#1da1f2' },
        { title: 'WhatsApp Web', url: 'https://web.whatsapp.com', icon: 'WhatsApp', color: '#25d366' },
        { title: 'Telegram Web', url: 'https://evgeny-nadymov.github.io/telegram-react/', icon: 'Telegram', color: '#2ca5e0' },
        { title: 'Slack', url: 'https://slack.com', icon: 'Slack', color: '#4A154B' }
      ]
    },
    {
      name: 'Read the docs',
      items: [
        { title: 'DevDocs', url: 'https://devdocs.io' },
        { title: 'MDN', url: 'https://developer.mozilla.org', icon: 'Mozilla', color: '#000000' },
        { title: 'Interactive Git Cheat Sheet', url: 'https://ndpsoftware.com/git-cheatsheet.html', icon: 'Git', color: '#f05032' },
        { title: 'Emmet Cheat Sheet', url: 'https://docs.emmet.io/cheat-sheet' }
      ]
    },
    {
      name: 'Best practices & conventions',
      items: [
        { title: 'OWASP Cheat Sheet Series Project', url: 'https://cheatsheetseries.owasp.org' },
        { title: 'Keep a Changelog', url: 'https://keepachangelog.com/en/1.1.0' },
        { title: 'Gitmoji', url: 'https://gitmoji.carloscuesta.me' }
      ]
    },
    {
      name: 'Fiddling around',
      items: [
        { title: 'CodePen', url: 'https://codepen.io', icon: 'CodePen', color: '#000000' },
        { title: 'CodeSandbox', url: 'https://codesandbox.io', icon: 'CodeSandbox', color: '#000000' },
        { title: 'JSFiddle', url: 'https://jsfiddle.net', icon: 'JSFiddle', color: '#0084ff' },
        { title: 'JS Bin', url: 'https://jsbin.com' }
      ]
    },
    {
      name: 'Discover & Compare',
      items: [
        { title: 'AlternativeTo', url: 'https://alternativeto.net' },
        { title: 'StackShare', url: 'https://stackshare.io', icon: 'StackShare', color: '#0690fa' }
      ]
    },
    {
      name: 'Build some UI',
      items: [
        { title: 'React', url: 'https://reactjs.org', icon: 'React', color: '#61DAFB' },
        { title: 'Gatsby', url: 'https://gatsbyjs.org', icon: 'Gatsby', color: '#663399' },
        { title: 'Next.js', url: 'https://nextjs.org', icon: 'Next.js', color: '#000000' },
        { title: 'Vue', url: 'https://vuejs.org', icon: 'Vue.js', color: '#4FC08D' },
        { title: 'Svelte', url: 'https://svelte.dev/', icon: 'Svelte', color: '#FF3E00' },
        { title: 'Angular', url: 'https://angular.io', icon: 'Angular', color: '#DD0031' }
      ]
    },
    {
      name: 'Code safe and secure',
      items: [
        { title: 'ESLint', url: 'https://eslint.org/', icon: 'ESLint', color: '#4B32C3' },
        { title: 'Jest', url: 'https://jestjs.io/', icon: 'Jest', color: '#C21325' },
        { title: 'Mocha', url: 'https://mochajs.org/', icon: 'Mocha', color: '#8D6748' }
      ]
    },
    {
      name: 'Languages & Runtimes',
      items: [
        { title: 'Sass', url: 'https://sass-lang.com', icon: 'Sass', color: '#cc6699' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'TypeScript', color: '#007acc' },
        { title: 'Babel', url: 'https://babeljs.io', icon: 'Babel', color: '#F9DC3E' },
        { title: 'Node.js', url: 'https://nodejs.org/en', icon: 'Node.js', color: '#339933' },
        { title: 'Deno', url: 'https://deno.land', icon: 'Deno', color: '#000000' },
        { title: 'Dart', url: 'https://dart.dev', icon: 'Dart', color: '#0175c2' }
      ]
    },
    {
      name: 'Browser status',
      items: [
        { title: 'Google Chrome', url: 'https://www.chromestatus.com', icon: 'Google Chrome', color: '#4285f4' },
        { title: 'Microsoft IE/Edge', url: 'https://developer.microsoft.com/en-us/microsoft-edge/platform/status', icon: 'Microsoft Edge', color: '#0078d7' },
        { title: 'Mozilla Firefox', url: 'https://platform-status.mozilla.org', icon: 'Mozilla Firefox', color: '#ff9400' },
        { title: 'WebKit', url: 'https://webkit.org/status', icon: 'Safari', color: '#000000' },
        { title: 'Timeline of Web Browsers', url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Timeline_of_web_browsers.svg' }
      ]
    },
    {
      name: 'Standards & Proposals',
      items: [
        { title: 'W3C', url: 'https://www.w3.org/', icon: 'W3C', color: '#005A9C' },
        { title: 'ECMAScript Proposals', url: 'https://github.com/tc39/proposals' },
        { title: 'Caniuse...', url: 'https://caniuse.com' },
        { title: 'ECMAScript Compatibility Table', url: 'https://kangax.github.io/compat-table/es6' },
        { title: 'Node Green', url: 'https://node.green' },
        { title: 'Is Houdini ready yet?', url: 'https://ishoudinireadyyet.com' }
      ]
    },
    {
      name: 'Software',
      items: [
        { title: 'Git', url: 'https://git-scm.com', icon: 'Git', color: '#f05032' },
        { title: 'Visual Studio Code', url: 'https://code.visualstudio.com', icon: 'Visual Studio Code', color: '#007acc' },
        { title: 'Atom', url: 'https://atom.io/', icon: 'Atom', color: '#66595C' },
        { title: 'JetBrains', url: 'https://www.jetbrains.com', icon: 'JetBrains', color: '#000000' },
        { title: 'Adobe', url: 'https://www.adobe.com', icon: 'Adobe', color: '#ff0000' },
        { title: 'Affinity', url: 'https://affinity.serif.com', icon: 'Affinity', color: '#222324' }
      ]
    },
    {
      name: 'Stay focused',
      items: [
        { title: 'YouTube', url: 'https://youtube.com', icon: 'YouTube', color: '#ff0000' },
        { title: 'YouTube Music', url: 'https://music.youtube.com' },
        { title: 'Spotify', url: 'https://spotify.com', icon: 'Spotify', color: '#1ED760' },
        { title: 'Deezer', url: 'https://www.deezer.com/', icon: 'Deezer', color: '#FEAA2D' },
        { title: 'SoundCloud', url: 'https://soundcloud.com', icon: 'SoundCloud', color: '#FF3300' },
        { title: 'Mixcloud', url: 'https://mixcloud.com', icon: 'Mixcloud', color: '#314359' }
      ]
    },
    {
      name: 'State of...',
      items: [
        { title: 'State of CSS', url: 'https://stateofcss.com/' },
        { title: 'State of JavaScript', url: 'https://stateofjs.com/' }
      ]
    },
    {
      name: 'Stay in the loop',
      items: [
        { title: 'Frontend Focus', url: 'https://frontendfoc.us', icon: 'HTML5', color: '#e34f26' },
        { title: 'JavaScript Weekly', url: 'https://javascriptweekly.com', icon: 'JavaScript', color: '#f7df1e' },
        { title: 'ES.next News', url: 'http://esnextnews.com' },
        { title: 'TypeScript Weekly', url: 'https://www.typescript-weekly.com', icon: 'TypeScript', color: '#007acc' },
        { title: 'Node Weekly', url: 'https://nodeweekly.com', icon: 'Node.js', color: '#339933' },
        { title: 'Vue.js News', url: 'https://news.vuejs.org', icon: 'Vue.js', color: '#4fc08d' },
        { title: 'React.js Newsletter', url: 'http://reactjsnewsletter.com', icon: 'React', color: '#61dafb' },
        { title: 'Svelte Status', url: 'https://www.sveltestatus.dev', icon: 'Svelte', color: '#ff3e00' },
        { title: 'Codrops Collective', url: 'https://tympanus.net/codrops/collective' }
      ]
    }
  ]
}

export function getAllLinks (): LinkItem[] {
  return links.items.flatMap(group => group.items)
}
