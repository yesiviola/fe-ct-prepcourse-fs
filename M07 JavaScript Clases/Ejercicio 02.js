/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
constructor (nombre,apellido,edad,domicilio){
      this.nombre=nombre;
      this.apellido= apellido;
      this.edad=edad;
      this.domicilio= domicilio;
   }
   detalle (){
      return {
         nombre : this.nombre,
         apellido: this.apellido,
         edad: this.edad,
         domicilio: this.domicilio
      };
   }
}
const persona1 = new Persona ("Juan","Perez", 30, "calle 234");
const detallesPersona1 = persona1.detalle();
console.log (detallesPersona1);


function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
 Persona.prototype.datos = function () {
      return `${this.nombre}, ${this.edad} años`;
   };
}
function Persona(nombre, edad) {
   this.nombre = nombre;
   this.edad = edad;
}

agregarMetodo();

const persona = new Persona("Juan", 22);
console.log(persona.datos());





/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
