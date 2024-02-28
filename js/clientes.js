const listaClientes=[];
faker.locale='es';
const cargarClientes=()=>{
    for (let i=0;i<=10;i++){
        const nuevoCliente={
            id:i,
            nombre:faker.name.findName(),
            edad:Math.floor(Math.random*30)+18,
            email: faker.internet.email()
        };
        listaClientes.push(nuevoCliente);
    }
}
cargarClientes()
console.log(listaClientes)

const crearCliente=()=>{
    const nombreInput=document.getElementById('nombreCliente');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');

    const nombre=nombreInput.value;
    const edad=edadInput.value;
    const email=emailInput.value;

    const nuevoCliente={
        id:listaClientes.length,
        nombre:nombre,
        edad: edad,
        email: email
    }

    listaClientes.push(nuevoCliente);

    nombreInput.value='';
    edadInput.value='';
    emailInput.value='';

    alert('Cliente creado con éxito!');
    
    return nuevoCliente;

}

const mostrarListado=()=>{
    const clientesForm = document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');
    
  
    
    clientesForm.style.display='none';
    listadoClientes.style.display='block';

    const ul=document.createElement('ul');

    for(const cliente of listaClientes){
        const li=document.createElement('li');
        li.textContent= `ID: ${cliente.id}, Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Email: ${cliente.email}`;
        ul.appendChild(li);


    }

    listadoClientes.innerHTML='';
    listadoClientes.appendChild(ul);



    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormulario);
    listadoClientes.appendChild(volverButton);
    
}

const volverFormulario=()=>{
    const clientesForm=document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');

    listadoClientes.style.display='none';
    clientesForm.style.display='block';
    
}




