export const environment = {
  production: true,
  api: '/graphql',
  query: {
    'query': `{
      GetApps{
          _id
          Nombre
          Link
          Logo
          Imagenes
          DescripcionEs
          DescripcionEn
      }
    }`
  }
};
