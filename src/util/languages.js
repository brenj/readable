const LANGUAGES = {
  csharp: {
    displayName: 'C#',
    path: 'csharp',
    tagLine: 'Structured, imperative, object-oriented, event-driven, task-driven, functional, generic, reflective, concurrent',
  },
  go: {
    displayName: 'Go',
    path: 'go',
    tagLine: 'Go is expressive, concise, clean, and efficient',
  },
  java: {
    displayName: 'Java',
    path: 'java',
    tagLine: 'C++ with all the knives, guns, and clubs put away',
  },
  javascript: {
    displayName: 'JavaScript',
    path: 'javascript',
    tagLine: 'Any application that can be written in JavaScript will eventually be written in JavaScript',
  },
  perl: {
    displayName: 'Perl',
    path: 'perl',
    tagLine: 'The only language that looks the same before and after RSA encryption',
  },
  php: {
    displayName: 'PHP',
    path: 'php',
    tagLine: 'PHP is about as exciting as your toothbrush - Rasmus Lerdorf, creator of PHP',
  },
  python: {
    displayName: 'Python',
    path: 'python',
    tagLine: 'Build, run, and ship your pseudo-code',
  },
  ruby: {
    displayName: 'Ruby',
    path: 'ruby',
    tagLine: 'Ruby is a bad rip-off of Lisp or Smalltalk',
  },
  sql: {
    displayName: ' SQL',
    path: 'sql',
    tagLine: 'Structured Query Language',
  },
};

export function getLanguage(lang) {
  return LANGUAGES[lang];
}

export function getLanguages() {
  return Object.keys(LANGUAGES);
}

export function getLanguageOptions() {
  return getLanguages().map(key => ({
    text: getLanguage(key).displayName,
    value: key,
  }));
}
