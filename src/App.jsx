import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sección Hero */}
      <section
        className="
          relative flex flex-col items-center justify-center
          px-4 sm:px-6 lg:px-8
          py-16 md:py-24
          text-center
          bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500
          text-white overflow-hidden
        "
      >
        {/* Desenfoques de fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-pink-400 opacity-30 blur-[150px] rounded-full" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-400 opacity-30 blur-[150px] rounded-full" />
        </div>

        {/* Contenedor de contenido (ancho completo) */}
        <div className="relative z-10 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Mantén a tus mascotas seguras, automáticamente.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
            Nuestro sistema de seguridad inteligente con IoT detecta cuando tus mascotas se adentran en áreas restringidas, cierra puertas automáticamente y te alerta al instante. Porque la tranquilidad no debería requerir supervisión constante.
          </p>
          <a
            href="#features"
            className="
              inline-block
              px-6 sm:px-8 py-3 sm:py-4
              bg-white text-purple-600 font-semibold
              rounded-full shadow-lg
              hover:shadow-xl transition transform hover:scale-105
            "
          >
            Ver cómo funciona
          </a>
        </div>
      </section>

      {/* Sección de características */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Diseñado para conveniencia y control
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Característica 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-16 w-12 sm:w-16 text-purple-600 mb-4 sm:mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
              Detección inteligente de movimiento
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Nuestro sensor PIR detecta incluso el movimiento más pequeño, asegurando que ningún acceso no autorizado pase desapercibido—ya sea tu curioso gato o un visitante inesperado.
            </p>
          </div>

          {/* Característica 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-16 w-12 sm:w-16 text-purple-600 mb-4 sm:mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
              Cerradura automática de puertas
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Cuando se detecta movimiento, nuestro motor servo cierra la puerta en segundos—manteniendo a tus mascotas seguras y las áreas restringidas protegidas.
            </p>
          </div>

          {/* Característica 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-16 w-12 sm:w-16 text-purple-600 mb-4 sm:mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
              Notificaciones en tiempo real
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              Recibe notificaciones instantáneas en tu teléfono vía la app Blynk IoT. Sabe exactamente cuándo y dónde se detectó movimiento, para que siempre tengas el control.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Cómo Funciona */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Así es como funciona
        </h2>

        {/* Centrar todo */}
        <div className="flex flex-col items-center">
          {/* Restringir un poco el ancho para facilitar la lectura, luego centrar texto */}
          <div className="space-y-6 sm:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base max-w-3xl text-center">
            <p>
              <strong>Paso 1: Detección de movimiento</strong><br/>
              El sensor PIR monitorea continuamente el área en busca de movimiento. En cuanto tu mascota—o cualquier otro intruso—entra en la zona restringida, el sistema lo detecta inmediatamente.
            </p>
            <p>
              <strong>Paso 2: Cierre automático de puertas</strong><br/>
              Una vez detectado el movimiento, el sistema activa el motor servo para cerrar la puerta automáticamente. Esto garantiza que tu mascota se mantenga fuera de peligro mientras las áreas restringidas permanecen protegidas.
            </p>
            <p>
              <strong>Paso 3: Notificaciones instantáneas</strong><br/>
              Recibirás una notificación push en tu teléfono a través de la app Blynk IoT, alertándote del evento. La notificación incluye detalles como la hora y el lugar de la detección, para que siempre estés informado.
            </p>
            <p>
              <strong>Paso 4: Control remoto</strong><br/>
              Después del evento, la puerta puede reabrirse automáticamente tras un tiempo establecido—o puedes controlarla remotamente mediante la app. Esto te da flexibilidad total sobre tu sistema de seguridad.
            </p>
          </div>

          {/* Botón centrado */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-105"
            >
              Aprende más sobre la tecnología
            </a>
          </div>
        </div>
      </section>

      {/* Sección de llamado a la acción */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-pink-400 opacity-30 blur-[150px] rounded-full" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-400 opacity-30 blur-[150px] rounded-full" />
        </div>
        <div className="relative z-10 w-full text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Protege lo que más importa
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Ya sea manteniendo a tus mascotas fuera de la cocina o asegurando áreas sensibles, nuestro sistema IoT te brinda tranquilidad sin que tengas que mover un dedo. Simple, inteligente y seguro.
          </p>
          <a
            href="#"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Comienza a proteger hoy
          </a>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray-800 text-white text-center text-xs sm:text-sm">
        <p>&copy; 2025 Sistema de Seguridad Inteligente. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
