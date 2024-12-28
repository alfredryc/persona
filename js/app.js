


// Array
const personas = [
    // objects
    new Persona('Robert', 'Vanderpool'),
    new Persona('Clara', 'Santiago'),
    new Persona('Yaritza', 'Frias')
];


function mostrarPersonas(){
    
    let texto = '';
    for (let persona of personas){
    
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`; // En cada bucle, mete los objetos en un li dentro de texto
    }
    document.getElementById('personas').innerHTML = texto; // Usa el id personas para agregar el contenido de texto al HTML
}

function agregarPersona(){
    const forma = document.forms['forma']; // Recupera el formulario
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if (nombre.value != '' && apellido.value != ''){ 
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona)
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion')
    }
}