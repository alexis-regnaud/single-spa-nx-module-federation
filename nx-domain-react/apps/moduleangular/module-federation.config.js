module.exports = {
  name: 'moduleangular',
  exposes: {
    './Module': './src/app/app.single-spa.ts',
    './Parcel': './src/app/parcel.single-spa.ts',
  },
};
