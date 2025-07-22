// Definimos la URL base de la API RandomUser.
// Esta API nos devuelve datos aleatorios de usuarios en formato JSON.
const BASE_URL = 'https://randomuser.me/api/';

// Exportamos la función getRandomUser para poder usarla en otros archivos.
// El "export" permite que esta función sea importada en scripts.js.
export async function getRandomUser() {
    try {
        // Usamos fetch() para hacer una petición HTTP a la API.
        // fetch() devuelve una promesa, por eso usamos "await" para esperar la respuesta.
        const response = await fetch(BASE_URL);

        // Si la respuesta no es correcta (código distinto de 200 OK),
        // lanzamos un error para manejarlo en el bloque catch.
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // Convertimos la respuesta en formato JSON.
        // El método .json() también devuelve una promesa, por eso usamos "await".
        const data = await response.json();

        // La API devuelve un objeto con una propiedad "results", que es un array.
        // Pasamos el primer usuario de ese array a la función formatUser para darle forma.
        return formatUser(data.results[0]);
    } catch (error) {
        // Si ocurre algún error (de red o formato), lo mostramos en consola
        // y volvemos a lanzarlo para que pueda ser capturado por la función que llama a getRandomUser().
        console.error('Error al obtener usuario:', error);
        throw error;
    }
}

// Esta función toma los datos del usuario obtenidos de la API
// y los formatea en un objeto más simple para usar en la aplicación.
function formatUser(userData) {
    return {
        // Concatenamos el nombre y el apellido para crear un solo "fullName".
        fullName: `${userData.name.first} ${userData.name.last}`,

        // Guardamos el email que nos da la API.
        email: userData.email,

        // Guardamos el número de teléfono.
        phone: userData.phone,

        // Guardamos la URL de la foto de perfil (versión grande).
        profileImage: userData.picture.large
    };
}