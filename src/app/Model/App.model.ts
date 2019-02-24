export class App {
    constructor(
        public Id: string,
        public Nombre: string,
        public Link: string,
        public Logo: string,
        public Imagenes: string[],
        public DescripcionEs: string,
        public DescripcionEn: string
    ){}
}

export const Query =  {
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