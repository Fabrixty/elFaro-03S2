// 1. RELOJ EN VIVO
function actualizarReloj() {
    const relojElemento = document.getElementById('reloj-en-vivo');
    const ahora = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    relojElemento.textContent = ahora.toLocaleDateString('es-ES', opciones) + ' hrs';
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// 2. CONTADORES DINÁMICOS
function actualizarContadores() {
    const secciones = ['inicio', 'deporte', 'negocios'];
    secciones.forEach(id => {
        const cantidad = document.querySelectorAll(`#tabla-${id} .articulo-item`).length;
        document.getElementById(`contador-${id}`).textContent = cantidad;
    });
}
actualizarContadores();

// 3. AGREGAR ARTÍCULO
const formArticulo = document.getElementById('form-nuevo-articulo');

formArticulo.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('input-titulo').value;
    const seccion = document.getElementById('input-seccion').value;
    const descripcion = document.getElementById('input-descripcion').value;

    const nuevaFila = document.createElement('tr');
    nuevaFila.className = 'articulo-item';
    nuevaFila.innerHTML = `
        <td>
            <span class="noticia-titulo">${titulo}</span>
            <span class="noticia-categoria">Categoría: Nueva Publicación</span>
            <span class="noticia-texto">${descripcion}</span>
        </td>
    `;

    const tbody = document.querySelector(`#tabla-${seccion} tbody`);
    tbody.insertBefore(nuevaFila, tbody.firstChild);

    formArticulo.reset();
    actualizarContadores();
});

// 4. FORMULARIO DE CONTACTO
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Tu mensaje ha sido recibido.");
    this.reset();
});