module.exports = {
  name: 'hostangular',
  exposes: {
    './App': 'apps/hostangular/src/app/app.single-spa.ts',
  },
  remotes: [
    'moduleangular1',
    'moduleangular2',
    ['modulereact', 'http://localhost:3023/remoteEntry.js'],
  ],
};
