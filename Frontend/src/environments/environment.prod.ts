export const environment = {
  production: true,
  api: 'https://developgadget-backend.herokuapp.com/App',
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
