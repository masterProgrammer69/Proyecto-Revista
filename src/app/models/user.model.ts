export interface userModel{
    id:string;
    primerNombre:string;
    segundoNombre:string;
    primerApellido:string;
    segundoApellido:string;
    pais:string;
    telefono:string;
    email:string;
    password:string;
    afiliacion:string;
    nivelDeFormacion:string;
    rol:string;
    emailVerified: boolean,
    user:userModel;
}