export interface IFuction {
    id: number;
    name: string;
    returnType: string;
    status: string;
    parameters: IParameter[];
  }
  
  export interface IParameter {
    id: number;
    name: string;
    returnType: string; 
    status: string;
    parameters: IParameter[];
  }
  

  const funciones: IFuction[] = [
    {
      id: 1,
      name: 'Funcion1',
      returnType: 'void',
      status: 'activa',
      parameters: []
    },
    {
      id: 2, 
      name: 'Funcion2',
      returnType: 'string',
      status: 'inactiva',
      parameters: [
        { 
          id: 1,
          name: 'parametro1',
          returnType: 'number',
          status: 'requerido',
          parameters: []  
        }
      ]
    },
    {
      id: 3,
      name: 'Funcion3',
      returnType: 'boolean',
      status: 'activa',
      parameters: [
        {
          id: 1,
          name: 'parametro1',
          returnType: 'string',
          status: 'opcional',
          parameters: []
        },
        {
          id: 2,
          name: 'parametro2',
          returnType: 'number',
          status: 'requerido',
          parameters: []
        } 
      ]
    }
  ];



function desactivarFuncion(
    funciones: IFuction[], 
    id: number,
    callback: (funcion: IFuction) => void
  ) {
  
    funciones.forEach(funcion => {
      if (funcion.id === id) {
        funcion.status = 'inactivo';
        callback(funcion); 
      }
    });
  
  }
  
  desactivarFuncion(funciones, 2, funcionEliminada => {
    console.log('Función eliminada:', funcionEliminada); 
  });
