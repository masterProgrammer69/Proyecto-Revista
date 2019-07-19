import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  infoArticulos=[
    {
      idArticulo:"7465837748",
      titulo:"Surrogate End Points and Patient-Reported Outcomes for Novel Oncology Drugs Approved Between 2011 and 2017",
      fecha:"24/05/2018",
      estado:"Enviado",
      resultado:null,
    },
    {
      idArticulo:"4765870890",
      titulo:"National and State Estimates of Lost Earnings From Cancer Deaths in the United States",
      fecha:"12/07/2019",
      estado:"Aceptado",
      resultado:"El estudio cumple con todos los estandares tecnicos",
    },
    {
      idArticulo:"850349859",
      titulo:"Maintenance Therapy With Panitumumab Alone vs Panitumumab Plus Fluorouracil-Leucovorin in Patients With RAS Wild-Type Metastatic Colorectal Cancer",
      fecha:"01/01/2019",
      estado:"Ajustes",
      resultado:"Tiene un error en la cita de la fuentes, debe ser corregido",
    },
    {
      idArticulo:"2142159859",
      titulo:"Assessment of the Safety of Glucocorticoid Regimens in Combination With Abiraterone Acetate",
      fecha:"24/12/2015",
      estado:"Rechazado",
      resultado:"El estudio tiene multiples errores, debe ser replanteado",
    }
  ]
  
  autores=[
    {
      primerNombre:"Walter",
      segundoNombre:"Alberto",
      primerApellido:"White",
      segundoApellido:"Rodriguez",
      telefono:"310",
      correo:"Walter@gmail.com"
    },
    {
      primerNombre:"Walter",
      segundoNombre:"Alberto",
      primerApellido:"White",
      segundoApellido:"Rodriguez",
      telefono:"311",
      correo:"Walter@gmail.com"
    },
    {
      primerNombre:"Walter",
      segundoNombre:"Alberto",
      primerApellido:"White",
      segundoApellido:"Rodriguez",
      telefono:"312",
      correo:"Walter@gmail.com"
    },
    {
      primerNombre:"Walter",
      segundoNombre:"Alberto",
      primerApellido:"White",
      segundoApellido:"Rodriguez",
      telefono:"313",
      correo:"Walter@gmail.com"
    },
    {
      primerNombre:"Walter",
      segundoNombre:"Alberto",
      primerApellido:"White",
      segundoApellido:"Rodriguez",
      telefono:"314",
      correo:"Walter@gmail.com"
    },
  ]

  articulos=[
    {
      id:"7465837748",
      titulo:"Surrogate End Points and Patient-Reported Outcomes for Novel Oncology Drugs Approved Between 2011 and 2017",
      abstract:"La Administración de Drogas y Alimentos de los Estados Unidos (FDA, por sus siglas en inglés) puede aprobar medicamentos basados ​​en puntos finales sustitutos que razonablemente predicen que un medicamento brinda un beneficio clínico. Si se aprueba a través de la vía de aprobación acelerada, la FDA puede requerir estudios posteriores a la comercialización para confirmar el beneficio clínico percibido.",
      palabrasClave:"medicina;drogas;oncologia"
    },
    {
      id:"4765870890",
      titulo:"National and State Estimates of Lost Earnings From Cancer Deaths in the United States",
      abstract:"La prevención de muertes prematuras por cáncer a través de la entrega de una prevención, detección y tratamiento eficaces del cáncer puede tener beneficios económicos para los Estados Unidos a nivel nacional y en todos los estados.",
      palabrasClave:"medicina,cancer,muerte"
    },
    {
      id:"850349859",
      titulo:"Maintenance Therapy With Panitumumab Alone vs Panitumumab Plus Fluorouracil-Leucovorin in Patients With RAS Wild-Type Metastatic Colorectal Cancer",
      abstract:" Determinar si el tratamiento de mantenimiento con panitumumab como agente único no fue inferior a panitumumab más fluorouracilo y leucovorina después de un régimen de tratamiento de inducción de 4 meses.",
      palabrasClave:"medicina,terapia,cancer"
    },
    {
      id:"2142159859",
      titulo:"Assessment of the Safety of Glucocorticoid Regimens in Combination With Abiraterone Acetate",
      abstract:"El acetato de abiraterona se combina con prednisona, 5 mg, dos veces al día para el cáncer de próstata metastásico resistente a la castración (mCRPC) y con prednisona, 5 mg, una vez al día para el cáncer de próstata sensible a la castración metastásico recién diagnosticado y de alto riesgo. Es importante comprender los efectos fisiológicos de estos y otros regímenes.",
      palabrasClave:"medicina;cancer;prostata"
    }
  ]

  resultados=[
    {
      evaluador:"Indiana Jones",
      comentario:"No se colocan los resultados en un contexto más amplio, es decir, los resultados no se relacionan con la investigación existente o bien, no explica las implicaciones para investigaciones futuras."
    },
    {
      evaluador:"Nicola Tesla",
      comentario:"Debilidades en el análisis estadístico de los resultados."
    },
    {
      evaluador:"Steve Jobs",
      comentario:"No es una contribución novedosa u oportuna."
    },
    {
      evaluador:"Bojack Horseman",
      comentario:"Cuando un manuscrito está mal estructurado se considera difícil de remediar, por lo que es importante seguir una secuencia lógica en la exposición de los conceptos y los datos, en palabras de la especialista."
    }
  ]

  buscarArticulo(id)
  {
    return this.articulos.find(a => a.id == id);
  }
  
  getListaArticulos()
  {
    return this.infoArticulos;
  }

  getListaResultados()
  {
    return this.resultados;
  }

  guardarNuevoAutor()
  {

  }
  
  constructor(/*private http:HttpClient*/) { }
}
