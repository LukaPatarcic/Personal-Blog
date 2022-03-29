module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6693ddaf73bcaf8e35e89d834d0bb456'),
  },
});
