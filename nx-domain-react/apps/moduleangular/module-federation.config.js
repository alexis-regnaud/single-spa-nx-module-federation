module.exports = {
  name: 'moduleangular',
  exposes: {
    './Module': 'apps/moduleangular/src/app/app.single-spa.ts',
    './Parcel': 'apps/moduleangular/src/app/parcel.single-spa.ts',
  },
};
