module.exports = {
  name: 'moduleangular1',
  exposes: {
    './Module': 'apps/moduleangular1/src/app/remote-entry/entry.module.ts',
  },
  remotes: [['modulereact', 'http://localhost:3023/remoteEntry.js']],
};
