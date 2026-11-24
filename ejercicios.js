// Video base de "Teoría Única" por materia
const VIDEOS_TEORIA = {
    python: "https://www.youtube.com/watch?v=Kp4Mvapo5kc&t=5985s",
    java: "https://www.youtube.com/watch?v=JOAqpdM36wI&t=7352s",
    bash: "https://www.youtube.com/watch?v=ABgLEKFhlZE&t=372s",
    redes: "https://www.youtube.com/watch?v=OLSKCWjI778&t=701s",
    ingles: "https://www.youtube.com/watch?v=Z6GGAQOMX8c",
    frances: "https://www.youtube.com/watch?v=z9dz3AthW6U",
    italiano: "https://www.youtube.com/watch?v=jiGKy4w2aio",
    aritmetica: "https://www.youtube.com/watch?v=6NgEgPD82Zo",
    algebra: "https://www.youtube.com/watch?v=V0-KwaX8GvY",
    logica: "https://www.youtube.com/watch?v=bgugRWRArL8"
};

// Estructura de cada ejercicio:
// { titulo, explicacion, seg }  --> "seg" es el segundo exacto dentro del video de Teoria Unica (ej. 920)
const bancoEjercicios = {
    redes: [
        {
            titulo: "Identificar clases de direcciones IP (A, B, C)",
            explicacion: "Las direcciones IPv4 con direccionamiento por clases se identifican observando el primer octeto (en decimal):\n\n• Clase A: 1 a 126 (máscara por defecto /8, 255.0.0.0).\n• Clase B: 128 a 191 (máscara por defecto /16, 255.255.0.0).\n• Clase C: 192 a 223 (máscara por defecto /24, 255.255.255.0).\n\nPráctica: Clasifica las siguientes IPs e indica su máscara por defecto: 10.20.30.1, 172.16.5.10, 192.168.1.50 y 128.10.0.1.",
            seg: 701
        },
        {
            titulo: "Mascaras por defecto y notacion CIDR",
            explicacion: "La notación CIDR (/n) indica la cantidad de bits encendidos (en 1) dedicados a la porción de red dentro de los 32 bits de una dirección IPv4.\n\nPráctica: Convierte las máscaras 255.255.255.0, 255.255.0.0 y 255.0.0.0 a notación CIDR, y haz el proceso inverso para /28 y /20.",
            seg: null
        },
        {
            titulo: "Calculo de direccion de red y broadcast simples",
            explicacion: "En una subred con máscara /24 (255.255.255.0), los primeros 24 bits corresponden a la red y los últimos 8 bits corresponden a hosts.\n\nPráctica: Dada la IP 192.168.10.45/24, determina la dirección de red, la dirección de broadcast y el rango de hosts utilizables.",
            seg: null
        },
        {
            titulo: "Subnetting basico /24 a /26",
            explicacion: "Al pasar de /24 a /26 tomas prestados 2 bits de host para crear subredes (2^2 = 4 subredes), dejando 6 bits de host (2^6 - 2 = 62 hosts válidos por subred).\n\nPráctica: Divide el bloque 192.168.5.0/24 en subredes /26 y anota el rango de cada una.",
            seg: null
        },
        {
            titulo: "Comando ping y analisis de respuestas RTT",
            explicacion: "El comando ping envía paquetes ICMP Echo Request y mide el RTT (Round-Trip Time) o latencia de ida y vuelta en milisegundos (ms), además de reportar pérdida de paquetes y TTL.\n\nPráctica: Ejecuta ping hacia tu gateway y hacia 8.8.8.8; compara los tiempos RTT y explica qué indica un TTL cercano a 64 o 128.",
            seg: null
        },
        {
            titulo: "Uso de traceroute/tracert para mapear saltos",
            explicacion: "traceroute (Linux/macOS) o tracert (Windows) rastrea la ruta que siguen los paquetes hasta un destino incrementando en 1 el valor TTL en cada envío.\n\nPráctica: Traza la ruta hacia un dominio o IP pública e identifica cada salto (hop) y dónde aparecen tiempos más altos o asteriscos (*).",
            seg: null
        },
        {
            titulo: "Inspeccion de tabla ARP con arp -a",
            explicacion: "El protocolo ARP (Address Resolution Protocol) asocia direcciones IPv4 con direcciones físicas MAC dentro de la red local.\n\nPráctica: Consulta tu tabla ARP con arp -a (o ip neigh) e identifica la dirección MAC de tu puerta de enlace predeterminada.",
            seg: null
        },
        {
            titulo: "Analisis de comandos ipconfig / ifconfig / ip a",
            explicacion: "Estos comandos muestran las interfaces de red, su estado (UP/DOWN), dirección MAC, dirección IP asignada, máscara de subred y ruta por defecto.\n\nPráctica: Inspecciona tu interfaz activa y diferencia entre la dirección IP local/privada y la dirección física (MAC).",
            seg: null
        },
        {
            titulo: "Subnetting medio /16 a /22",
            explicacion: "Trabajar con prefijos entre /16 y /22 implica mover la frontera de red dentro del segundo y tercer octeto.\n\nPráctica: A partir de 172.20.0.0/16, calcula cuántas subredes /22 obtienes y cuántos hosts utilizables tiene cada una.",
            seg: null
        },
        {
            titulo: "VLSM: Subneteo de red para 3 departamentos distintos",
            explicacion: "VLSM (Variable Length Subnet Mask) consiste en asignar primero las subredes más grandes para optimizar direcciones IP y evitar desperdicio.\n\nPráctica: Con el bloque 192.168.100.0/24, asigna direcciones para 100 hosts, 50 hosts y 20 hosts indicando máscara, red y broadcast de cada uno.",
            seg: null
        },
        {
            titulo: "Identificacion de puertos TCP/UDP comunes (22, 80, 443, 53)",
            explicacion: "Los puertos identifican procesos o servicios específicos en un host: SSH (22/TCP), DNS (53/UDP y TCP), HTTP (80/TCP) y HTTPS (443/TCP).\n\nPráctica: Indica qué protocolo de transporte (TCP o UDP) usa cada puerto y explica la diferencia entre tráfico sin cifrar (80) y cifrado (443).",
            seg: null
        },
        {
            titulo: "Captura basica de trafico con Wireshark",
            explicacion: "Wireshark captura y analiza tramas/paquetes que circulan por una interfaz de red, permitiendo filtrar por protocolo o IP.\n\nPráctica: Filtra tráfico DNS o HTTP/ICMP en Wireshark e inspecciona las cabeceras de capa 2 (Ethernet), capa 3 (IP) y capa 4 (TCP/UDP).",
            seg: null
        },
        {
            titulo: "Configuracion manual de VLANs en Cisco CLI",
            explicacion: "Las VLANs (IEEE 802.1Q) segmentan lógicamente una red de capa 2 en distintos dominios de broadcast dentro de uno o más switches.\n\nPráctica: Escribe los comandos en modo de configuración global para crear la VLAN 10 (Ventas) y la VLAN 20 (Sistemas) y asignarles nombre.",
            seg: null
        },
        {
            titulo: "Configuracion de puertos de acceso y Trunk (802.1Q)",
            explicacion: "Los puertos de acceso (access) pertenecen a una sola VLAN sin etiqueta; los puertos troncales (trunk) transportan tráfico de múltiples VLANs etiquetadas con 802.1Q.\n\nPráctica: Configura un puerto como access en VLAN 10 y otro enlace hacia otro switch como trunk permitiendo las VLANs 10 y 20.",
            seg: null
        },
        {
            titulo: "Enrutamiento Estatico en Routers",
            explicacion: "En el enrutamiento estático, el administrador define manualmente las rutas hacia redes remotas indicando red destino, máscara y siguiente salto (next-hop) o interfaz de salida.\n\nPráctica: Redacta una ruta estática para alcanzar la red 10.10.20.0/24 a través del siguiente salto 192.168.1.2.",
            seg: null
        },
        {
            titulo: "Configuracion de Servidor y Relay DHCP",
            explicacion: "DHCP asigna automáticamente IP, máscara, gateway y servidor DNS a los clientes; cuando el servidor está en otra subred, se usa DHCP Relay (ip helper-address).\n\nPráctica: Define los parámetros básicos de un pool DHCP (red, máscara, default-router, dns-server y exclusiones) y explica cuándo se requiere relay.",
            seg: null
        },
        {
            titulo: "Escaneo de red y puertos con Nmap",
            explicacion: "Nmap permite descubrir hosts activos y evaluar el estado de puertos (open, closed, filtered) en un rango o dirección objetivo.\n\nPráctica: Identifica para qué sirven los escaneos de descubrimiento de hosts (-sn), puertos comunes y detección de servicios (-sV) en un entorno autorizado.",
            seg: null
        },
        {
            titulo: "Configuracion de Enrutamiento Dinamico (RIP v2 / OSPF)",
            explicacion: "Los protocolos dinámicos intercambian información de rutas automáticamente y convergen ante cambios en la topología (RIP v2 usa conteo de saltos; OSPF usa costo basado en ancho de banda).\n\nPráctica: Compara RIP v2 y OSPF en criterio de métrica, convergencia y escalabilidad, y plantea un escenario de configuración básica.",
            seg: null
        },
        {
            titulo: "Listas de Control de Acceso (ACLs) estandar y extendidas",
            explicacion: "Las ACLs filtran paquetes según reglas secuenciales (permit/deny): las estándar filtran principalmente por IP origen; las extendidas filtran por origen, destino, protocolo y puertos.\n\nPráctica: Diseña una regla para bloquear el acceso HTTP (puerto 80) desde una subred hacia un servidor específico permitiendo el resto del tráfico.",
            seg: null
        },
        {
            titulo: "Analisis de paquetes TCP Three-Way Handshake en depuracion",
            explicacion: "TCP establece conexiones confiables mediante el apretón de manos de tres vías: SYN -> SYN-ACK -> ACK, y cierra mediante FIN/ACK o RST.\n\nPráctica: Explica el propósito de las banderas SYN y ACK en cada uno de los 3 pasos y qué indica ver muchos paquetes SYN sin respuesta SYN-ACK.",
            seg: null
        }
    ],
    python: [
        { titulo: "Hola Mundo y variables basicas", explicacion: "Aprende a declarar variables en Python sin tipado explícito y a mostrar salida por consola con print().\n\nPráctica: Crea variables para nombre, edad y lenguaje favorito, e imprímelas en una sola frase.", seg: 5985 },
        { titulo: "Operaciones aritmeticas simples", explicacion: "Practica suma (+), resta (-), multiplicación (*), división real (/), división entera (//), módulo (%) y potencia (**).\n\nPráctica: Pide dos números y muestra su suma, división entera y residuo.", seg: null },
        { titulo: "Condicional if/else de edad", explicacion: "Evalúa expresiones booleanas con if, elif y else utilizando operadores de comparación.\n\nPráctica: Clasifica una edad ingresada en menor de edad, adulto o adulto mayor.", seg: null },
        { titulo: "Determinar par o impar", explicacion: "El operador módulo (%) devuelve el residuo de una división; un número es par si n % 2 == 0.\n\nPráctica: Escribe la lógica para determinar si un entero es par o impar.", seg: null },
        { titulo: "Bucle for del 1 al 100", explicacion: "Usa range(inicio, fin + 1) para recorrer secuencias numéricas de forma controlada.\n\nPráctica: Imprime los números del 1 al 100 y suma únicamente los múltiplos de 5.", seg: null },
        { titulo: "Tabla de multiplicar dinamica", explicacion: "Combina entrada de datos y ciclos para generar tablas de multiplicar de cualquier número y límite.\n\nPráctica: Genera la tabla del 1 al 12 para el número indicado por el usuario.", seg: null },
        { titulo: "Bucle while con contador", explicacion: "Un bucle while se ejecuta mientras la condición se mantenga verdadera; es clave actualizar el contador para evitar bucles infinitos.\n\nPráctica: Implementa un contador regresivo desde 10 hasta 0.", seg: null },
        { titulo: "Manipulacion de cadenas y slicing", explicacion: "Las cadenas (str) son inmutables y permiten indexación y rebanado con [inicio:fin:paso].\n\nPráctica: Dada una palabra o frase, obtén su versión invertida y extrae los primeros y últimos caracteres.", seg: null },
        { titulo: "Funcion que calcula el area de un circulo", explicacion: "Define funciones con def, parámetros y return para encapsular lógica reutilizable.\n\nPráctica: Crea una función area_circulo(radio) que valide que el radio no sea negativo.", seg: null },
        { titulo: "Trabajar con Listas y metodos (.append, .pop)", explicacion: "Las listas son colecciones ordenadas y mutables que permiten agregar, insertar y eliminar elementos.\n\nPráctica: Agrega 4 elementos con append(), elimina el último con pop() y muestra la lista resultante.", seg: null },
        { titulo: "Buscar el numero mayor en una lista", explicacion: "Recorre una lista comparando cada elemento con un máximo inicial (o usa max() tras comprender el recorrido manual).\n\nPráctica: Encuentra el valor mayor y su posición (índice) dentro de una lista de números.", seg: null },
        { titulo: "Eliminar duplicados de una lista con conjuntos", explicacion: "Los conjuntos (set) almacenan elementos únicos sin duplicados.\n\nPráctica: Convierte una lista con elementos repetidos en una estructura sin duplicados y regrésala a lista.", seg: null },
        { titulo: "Diccionarios: Contar frecuencia de palabras", explicacion: "Los diccionarios guardan pares clave: valor; el método .get(clave, 0) facilita contar ocurrencias.\n\nPráctica: Dada una oración en minúsculas, cuenta cuántas veces aparece cada palabra.", seg: null },
        { titulo: "Lectura de archivos .txt simples", explicacion: "Usa el gestor de contexto with open('archivo.txt', 'r', encoding='utf-8') para leer archivos cerrándolos de forma segura.\n\nPráctica: Lee un archivo de texto línea por línea y cuenta el total de líneas no vacías.", seg: null },
        { titulo: "Escritura y append en archivos locales", explicacion: "El modo 'w' sobrescribe el archivo, mientras que 'a' (append) agrega contenido al final sin borrar lo existente.\n\nPráctica: Guarda registros de notas o eventos en un archivo usando el modo 'a'.", seg: null },
        { titulo: "Manejo de excepciones try/except", explicacion: "Captura errores en tiempo de ejecución (como ValueError o ZeroDivisionError) para que el programa falle de forma controlada.\n\nPráctica: Protege una división entre dos números ingresados por el usuario.", seg: null },
        { titulo: "Funciones Lambda y map/filter", explicacion: "Las funciones lambda son funciones anónimas breves útiles junto con map() para transformar y filter() para filtrar.\n\nPráctica: Filtra los números pares de una lista y elévalos al cuadrado.", seg: null },
        { titulo: "Programacion Orientada a Objetos: Clase Vehiculo", explicacion: "Modela entidades con class, __init__, atributos de instancia y métodos.\n\nPráctica: Crea la clase Vehiculo con marca, modelo y velocidad, y métodos acelerar() y frenar().", seg: null },
        { titulo: "Algoritmo de ordenamiento Bubblesort manual", explicacion: "Bubble sort compara pares adyacentes e intercambia elementos desordenados en pasadas sucesivas.\n\nPráctica: Ordena una lista de menor a mayor implementando el intercambio manual de elementos.", seg: null },
        { titulo: "Recursividad: Resolver la Torre de Hanoi", explicacion: "Una función recursiva se llama a sí misma reduciendo el problema hasta llegar a un caso base.\n\nPráctica: Implementa la solución recursiva para mover N discos entre tres torres siguiendo las reglas.", seg: null }
    ],
    java: [
        { titulo: "Hola Mundo y estructura de clase Main en Java", explicacion: "Todo programa en Java reside dentro de una clase y el punto de entrada estándar es el método main.\n\nPráctica: Crea una clase principal que imprima un mensaje de bienvenida en consola.", seg: 7352 },
        { titulo: "Declaracion de tipos primitivos y Scanner", explicacion: "Java es fuertemente tipado (int, double, boolean, char) y utiliza java.util.Scanner para leer entradas desde consola.\n\nPráctica: Lee el nombre y edad del usuario y muéstralos formateados.", seg: null },
        { titulo: "Condicionales if-else y operador ternario", explicacion: "Usa if / else if / else para bifurcaciones y el operador ternario (condicion ? valorSiTrue : valorSiFalse) para asignaciones breves.\n\nPráctica: Evalúa si un alumno aprueba (>= 6) o reprueba usando ambas formas.", seg: null },
        { titulo: "Estructura switch-case para menus", explicacion: "switch selecciona entre múltiples casos constantes de forma ordenada.\n\nPráctica: Crea un menú de opciones (1 al 3) que ejecute distintas acciones según la selección.", seg: null },
        { titulo: "Bucle for tradicional y for-each", explicacion: "El for tradicional usa índice de control; el for-each (:) recorre directamente elementos de arreglos o colecciones.\n\nPráctica: Recorre un arreglo de calificaciones e imprime cada valor.", seg: null },
        { titulo: "Bucle while y do-while", explicacion: "while evalúa la condición antes de ejecutar el bloque; do-while garantiza al menos una ejecución.\n\nPráctica: Solicita un número positivo repitiendo la lectura mientras el valor sea inválido.", seg: null },
        { titulo: "Arreglos unidimensionales (Arrays) y recorrido", explicacion: "Un arreglo en Java tiene tamaño fijo y se accede a sus elementos mediante índices base 0 (.length).\n\nPráctica: Carga 5 números en un arreglo y calcula su promedio.", seg: null },
        { titulo: "Arreglos bidimensionales (Matrices)", explicacion: "Las matrices (tipo[][]) representan filas y columnas y se recorren con bucles anidados.\n\nPráctica: Crea una matriz 3x3 e imprime la suma de su diagonal principal.", seg: null },
        { titulo: "Creacion de metodos estaticos y paso de parametros", explicacion: "Los métodos permiten modularizar código recibiendo parámetros y retornando un valor o void.\n\nPráctica: Escribe un método que calcule el área de un rectángulo dados base y altura.", seg: null },
        { titulo: "Programacion Orientada a Objetos: Creacion de Clases y Objetos", explicacion: "Una clase es la plantilla y un objeto es una instancia creada con new.\n\nPráctica: Define una clase CuentaBancaria con titular y saldo, e instancia dos objetos.", seg: null },
        { titulo: "Encapsulamiento (Getters y Setters)", explicacion: "Oculta los atributos con private y controla el acceso mediante métodos públicos get y set con validación.\n\nPráctica: Evita que el saldo de una cuenta pueda asignarse con valores negativos en su setter.", seg: null },
        { titulo: "Constructores y sobrecarga de constructores", explicacion: "El constructor inicializa el estado del objeto; la sobrecarga permite múltiples constructores con distintos parámetros.\n\nPráctica: Crea un constructor por defecto y otro parametrizado para una clase Producto.", seg: null },
        { titulo: "Herencia y superclases en Java", explicacion: "Con extends una subclase hereda atributos y métodos de una superclase y puede invocar super().\n\nPráctica: Crea la clase base Empleado y una subclase Desarrollador con atributos propios.", seg: null },
        { titulo: "Polimorfismo y sobreescritura de metodos (@Override)", explicacion: "Permite que una referencia de tipo superclase ejecute la implementación específica de la subclase (@Override).\n\nPráctica: Sobrescribe un método calcularSalario() en distintas subclases de Empleado.", seg: null },
        { titulo: "Clases abstractas e interfaces", explicacion: "Las clases abstractas pueden combinar código y métodos abstractos; las interfaces definen contratos de comportamiento (implements).\n\nPráctica: Define una interfaz Pagable e impleméntala en dos clases distintas.", seg: null },
        { titulo: "Manejo de excepciones (try-catch-finally y throws)", explicacion: "Gestiona errores controladamente con try y catch, liberando recursos en finally o declarando excepciones con throws.\n\nPráctica: Maneja NumberFormatException al convertir texto a entero.", seg: null },
        { titulo: "Uso de Colecciones (ArrayList y HashMap)", explicacion: "ArrayList ofrece listas dinámicas redimensionables; HashMap almacena pares clave-valor de búsqueda rápida.\n\nPráctica: Guarda nombres en un ArrayList y asocia nombres con correos en un HashMap.", seg: null },
        { titulo: "Lectura y escritura de archivos con FileReader/FileWriter", explicacion: "Permite persistir información en archivos de texto y leerla desde disco.\n\nPráctica: Escribe una lista de tareas en un archivo .txt y luego léela para mostrarla.", seg: null },
        { titulo: "Programacion funcional basica con Streams y Lambdas", explicacion: "Los Streams y expresiones lambda (->) permiten filtrar, mapear y reducir colecciones de forma declarativa.\n\nPráctica: Filtra números mayores a 10 de una lista usando .stream().filter().", seg: null },
        { titulo: "Estructura de datos avanzada: Implementacion de Lista Enlazada propia", explicacion: "Consiste en nodos enlazados mediante referencias al siguiente nodo en lugar de un bloque contiguo en memoria.\n\nPráctica: Implementa una clase Nodo y una lista enlazada básica con inserción e impresión.", seg: null }
    ],
    bash: [
        { titulo: "Script basico con echo y variables", explicacion: "Todo script inicia con el shebang #!/usr/bin/env bash y define variables sin espacios alrededor del signo =.\n\nPráctica: Crea un script que muestre el usuario actual ($USER) y la fecha con echo.", seg: 372 },
        { titulo: "Captura de argumentos ($1, $2)", explicacion: "Los parámetros posicionales $1, $2... reciben argumentos pasados al ejecutar el script, y $# indica cuántos llegaron.\n\nPráctica: Haz un script que reciba un nombre y un rol como argumentos y los imprima.", seg: null },
        { titulo: "Condicional if que valida si un archivo existe", explicacion: "Usa pruebas como -f (archivo regular) o -e (existe) dentro de [ ... ] o [[ ... ]].\n\nPráctica: Verifica si un archivo pasado por argumento existe antes de intentar leerlo.", seg: null },
        { titulo: "Validacion de permisos de lectura/escritura", explicacion: "Las pruebas -r y -w comprueban si el usuario tiene permisos de lectura o escritura sobre una ruta.\n\nPráctica: Comprueba si un archivo es legible y escribible e informa el resultado.", seg: null },
        { titulo: "Bucle for sobre una lista de directorios", explicacion: "Itera sobre rutas o elementos y verifica si cada uno es un directorio (-d).\n\nPráctica: Recorre una lista de carpetas y muestra cuántos archivos contiene cada una.", seg: null },
        { titulo: "Bucle while leedor de lineas", explicacion: "El patrón while IFS= read -r linea < archivo lee cada línea preservando espacios y caracteres especiales.\n\nPráctica: Lee un archivo de texto línea por línea y numera cada salida.", seg: null },
        { titulo: "Renombrar multiples archivos en lote", explicacion: "Combina bucles y expansión de parámetros de Bash para cambiar nombres o extensiones masivamente.\n\nPráctica: Agrega un prefijo o fecha a todos los archivos .txt de un directorio de prueba.", seg: null },
        { titulo: "Uso de grep para buscar patrones en /etc/passwd", explicacion: "grep filtra líneas que coinciden con un patrón o expresión regular.\n\nPráctica: Busca en /etc/passwd los usuarios que tienen /bin/bash como shell por defecto.", seg: null },
        { titulo: "Filtrado de texto con awk y cut", explicacion: "cut extrae campos por delimitador (-d ':' -f 1); awk permite procesar columnas y condiciones con mayor flexibilidad.\n\nPráctica: Extrae el nombre de usuario y el shell de /etc/passwd usando cut o awk.", seg: null },
        { titulo: "Creacion de un script de Backup comprimido con tar y date", explicacion: "tar -czf crea un archivo comprimido y $(date +%F) genera una marca de fecha limpia (YYYY-MM-DD).\n\nPráctica: Comprime una carpeta de respaldo en un archivo con la fecha actual en su nombre.", seg: null },
        { titulo: "Uso de sed para reemplazar texto automaticamente", explicacion: "sed 's/buscar/reemplazar/g' sustituye patrones en un flujo de texto o archivo.\n\nPráctica: Reemplaza una palabra o parámetro en un archivo de configuración de prueba.", seg: null },
        { titulo: "Monitoreo de procesos activos con ps y kill", explicacion: "Permite localizar procesos en ejecución y enviar señales (como SIGTERM o SIGKILL) de forma controlada.\n\nPráctica: Busca un proceso por nombre y muestra su PID y comando.", seg: null },
        { titulo: "Script con menu interactivo usando select", explicacion: "La estructura select presenta un menú numerado en terminal y lee la elección del usuario.\n\nPráctica: Crea un menú con opciones para ver fecha, espacio en disco o salir.", seg: null },
        { titulo: "Automatizacion de limpieza de logs de mas de 30 dias", explicacion: "find con -type f y -mtime +30 localiza archivos antiguos de forma segura.\n\nPráctica: Prueba primero listando con find los archivos .log de más de 30 días antes de borrarlos.", seg: null },
        { titulo: "Comprobar conectividad de IPs con ping en bucle", explicacion: "ping -c 1 -W 1 envía un paquete con espera corta y devuelve código de salida 0 si responde.\n\nPráctica: Recorre una lista de IPs e indica cuáles responden y cuáles no.", seg: null },
        { titulo: "Descarga y extraccion automatizada con curl y tar", explicacion: "Permite descargar recursos desde la red y descomprimirlos en un flujo automatizado.\n\nPráctica: Estructura un script que descargue un paquete, verifique el código de salida y lo extraiga.", seg: null },
        { titulo: "Script ejecutable como servicio systemd", explicacion: "Un unit file en /etc/systemd/system/ define ExecStart, Restart y WantedBy para gestionar el script como servicio.\n\nPráctica: Redacta la plantilla básica de un servicio systemd para ejecutar un script continuo.", seg: null },
        { titulo: "Lectura e iteracion de JSON usando jq", explicacion: "jq es una herramienta CLI especializada en consultar, filtrar y transformar datos JSON.\n\nPráctica: Extrae un campo específico o recorre un arreglo de objetos desde un JSON con jq.", seg: null },
        { titulo: "Script de auditoria de seguridad del sistema", explicacion: "Reúne comprobaciones rápidas del sistema (usuarios con UID 0, puertos abiertos, permisos sensibles, actualizaciones).\n\nPráctica: Crea un script que genere un reporte resumen de estado y seguridad básica del host.", seg: null },
        { titulo: "Implementacion de una interfaz TUI usando dialog o whiptail", explicacion: "whiptail o dialog muestran cuadros de diálogo, menús y casillas en la terminal.\n\nPráctica: Construye un cuadro de diálogo de confirmación o menú sencillo con whiptail.", seg: null }
    ],
    ingles: [
        { titulo: "Verb To Be and basic greetings", explicacion: "Practice affirmative, negative, and question forms of am / is / are along with common introductions.\n\nPráctica: Write 4 sentences introducing yourself, your role, and your current status using To Be.", seg: null },
        { titulo: "Present Simple vs Present Continuous", explicacion: "Use Present Simple for routines, habits, and facts; use Present Continuous for actions happening right now or temporary situations.\n\nPráctica: Contrast both tenses in pairs of sentences (e.g., 'I usually study at night' vs 'Right now I am reviewing notes').", seg: null },
        { titulo: "Past Simple with regular verbs", explicacion: "Regular verbs form the past tense with -ed (watch -> watched), while negatives and questions use did / didn't + base verb.\n\nPráctica: Describe three tasks you completed yesterday using regular verbs in affirmative and negative.", seg: null },
        { titulo: "Irregular verbs categorization", explicacion: "Irregular verbs change form unpredictably across base, past simple, and past participle (e.g., go / went / gone).\n\nPráctica: Group 10 irregular verbs by pattern (same form, vowel change, or different participle) and write 3 examples.", seg: null },
        { titulo: "Future with Will and Going to", explicacion: "Use 'be going to' for prior plans and visible evidence; use 'will' for spontaneous decisions, promises, or predictions.\n\nPráctica: Write two sentences with going to (a plan) and two with will (an instant decision or prediction).", seg: null },
        { titulo: "Comparative and Superlative adjectives", explicacion: "Short adjectives take -er / -est (faster, fastest); longer adjectives use more / the most (more efficient, the most efficient).\n\nPráctica: Compare two tools, languages, or devices using both comparative and superlative forms.", seg: null },
        { titulo: "Modal verbs: Can, Could, Must, Should", explicacion: "Modals express ability (can/could), obligation/necessity (must), and advice/recommendation (should).\n\nPráctica: Write one sentence for each modal verb applied to a study or work situation.", seg: null },
        { titulo: "Countable and Uncountable nouns (Much/Many)", explicacion: "Countable nouns have singular/plural forms (many/few); uncountable nouns are treated as singular mass concepts (much/little).\n\nPráctica: Complete phrases with much, many, a lot of, or few/little and explain why.", seg: null },
        { titulo: "Present Perfect with Just, Already, Yet", explicacion: "Formed with have/has + past participle to connect past actions with the present (just = very recently, already = before now, yet = in negatives/questions).\n\nPráctica: Write three sentences using just, already, and yet about tasks in progress.", seg: null },
        { titulo: "First and Second Conditionals", explicacion: "First conditional (If + present, will + verb) states real/likely future results; second conditional (If + past, would + verb) states hypothetical/unlikely situations.\n\nPráctica: Write one First Conditional and one Second Conditional sentence.", seg: null },
        { titulo: "Passive Voice: Present and Past", explicacion: "Focuses on the action or receiver rather than the agent: be (am/is/are/was/were) + past participle.\n\nPráctica: Rewrite two active sentences into passive voice in present and past.", seg: null },
        { titulo: "Reported Speech basics", explicacion: "Reports what someone said, typically shifting tenses back when the reporting verb is in the past (say -> said).\n\nPráctica: Convert two direct statements into reported speech.", seg: null },
        { titulo: "Relative Clauses (Who, Which, That)", explicacion: "Relative pronouns connect extra or identifying information to a noun: who for people, which/that for things.\n\nPráctica: Combine two short sentences into one using who, which, or that.", seg: null },
        { titulo: "Phrasal Verbs in technical context", explicacion: "Phrasal verbs combine a verb with a particle (up, out, off, down) changing its meaning (e.g., set up, figure out, shut down).\n\nPráctica: Use three technical phrasal verbs in context sentences.", seg: null },
        { titulo: "Third Conditional and Mixed Conditionals", explicacion: "Third conditional (If + had + participle, would have + participle) reflects on unreal past outcomes.\n\nPráctica: Describe an alternative past outcome using the third conditional.", seg: null },
        { titulo: "Advanced Connectors (Furthermore, Nevertheless)", explicacion: "Connectors structure formal writing: furthermore adds information, whereas nevertheless introduces contrast despite a concession.\n\nPráctica: Link two ideas using furthermore and contrast two ideas using nevertheless.", seg: null },
        { titulo: "Inversion after negative adverbials", explicacion: "Placing negative/restrictive adverbials at the start (Never, Rarely, Not only) triggers auxiliary inversion.\n\nPráctica: Rewrite a standard sentence starting with 'Never' or 'Not only' with proper inversion.", seg: null },
        { titulo: "Writing a formal professional email", explicacion: "Requires clear subject line, polite greeting, concise purpose, call to action, and formal sign-off.\n\nPráctica: Draft a short professional email requesting technical details or scheduling a meeting.", seg: null },
        { titulo: "Technical text translation and terminology analysis", explicacion: "Requires preserving accurate technical terms rather than translating word-for-word when standard industry terms exist.\n\nPráctica: Translate a short technical paragraph into Spanish and note key terms.", seg: null },
        { titulo: "Essay writing: Argumentative synthesis", explicacion: "Organizes a clear thesis, supporting arguments with evidence, counterargument/rebuttal, and conclusion.\n\nPráctica: Outline and write a short argumentative paragraph defending a clear position.", seg: null }
    ],
    frances: [
        { titulo: "Les salutations et l'alphabet", explicacion: "Pratique les formules de salutation formelles et informelles ainsi que la prononciation des lettres et accents en français.\n\nPráctica: Écris un court dialogue de salutation et présentation.", seg: null },
        { titulo: "Les articles définis et indéfinis", explicacion: "Définis : le, la, l', les ; indéfinis : un, une, des. Le choix dépend du genre, du nombre et de la spécificité.\n\nPráctica: Complète 6 noms courants avec l'article défini ou indéfini approprié.", seg: null },
        { titulo: "Les verbes Être et Avoir", explicacion: "Verbes essentiels et irréguliers au présent (je suis, tu es, il est... / j'ai, tu as, il a...).\n\nPráctica: Rédige 4 phrases combinant être et avoir.", seg: null },
        { titulo: "Présent de l'indicatif (Verbes du 1er groupe -ER)", explicacion: "Les verbes réguliers en -er prennent les terminaisons -e, -es, -e, -ons, -ez, -ent sur le radical.\n\nPráctica: Conjugue un verbe en -er à toutes les personnes et fais deux phrases.", seg: null },
        { titulo: "La négation simple (Ne... pas)", explicacion: "Encadre le verbe conjugué avec ne... pas (ou n'... pas devant une voyelle/h muet).\n\nPráctica: Transforme trois phrases affirmatives au présent en forme négative.", seg: null },
        { titulo: "Les adjectifs possessifs", explicacion: "S'accordent avec l'objet possédé (mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs).\n\nPráctica: Écris quatre phrases montrant l'appartenance au singulier et au pluriel.", seg: null },
        { titulo: "Le Futur Proche (Aller + Infinitif)", explicacion: "Exprime une action future proche ou prévue : aller au présent + verbe à l'infinitif.\n\nPráctica: Indique trois choses que tu vas faire aujourd'hui ou demain.", seg: null },
        { titulo: "Le Passé Composé avec Avoir", explicacion: "Formé avec l'auxiliaire avoir au présent + participe passé (parler -> parlé, finir -> fini).\n\nPráctica: Raconte deux actions passées avec l'auxiliaire avoir.", seg: null },
        { titulo: "Le Passé Composé avec Être (Accord)", explicacion: "Utilisé avec les verbes de mouvement/état (aller, venir, partir, arriver...) et les pronominaux; le participe s'accorde en genre et en nombre.\n\nPráctica: Écris deux phrases au passé composé avec être au féminin ou au pluriel.", seg: null },
        { titulo: "L'Imparfait de l'indicatif", explicacion: "Exprime des habitudes passées, des descriptions ou un contexte continu (radical de nous au présent + -ais, -ais, -ait, -ions, -iez, -aient).\n\nPráctica: Décris comment était ta routine ou ton environnement avant.", seg: null },
        { titulo: "Les pronoms COD et COI", explicacion: "COD (le, la, les) remplace l'objet direct; COI (lui, leur) remplace l'objet indirect introduit par à + personne.\n\nPráctica: Remplace le complément d'objet dans deux phrases simples.", seg: null },
        { titulo: "Le Conditionnel Présent", explicacion: "Sert à formuler des demandes polies, des souhaits ou des hypothèses (infinitif ou radical du futur + terminaisons de l'imparfait).\n\nPráctica: Formule une demande polie et une hypothèse au conditionnel présent.", seg: null },
        { titulo: "Les pronoms y et en", explicacion: "y remplace souvent un lieu ou une chose introduite par à ; en remplace une quantité ou un complément introduit par de.\n\nPráctica: Réponds brièvement à deux questions en utilisant y et en.", seg: null },
        { titulo: "Le Subjonctif Présent", explicacion: "Employé après des expressions de nécessité, souhait, doute ou émotion (que + subjonctif).\n\nPráctica: Écris deux phrases avec « Il faut que... » au subjonctif présent.", seg: null },
        { titulo: "Le Plus-que-parfait", explicacion: "Exprime une action antérieure à une autre action passée : imparfait de avoir/être + participe passé.\n\nPráctica: Relie deux événements passés en montrant lequel s'est produit avant.", seg: null },
        { titulo: "La voix passive en français", explicacion: "Formée avec être conjugué + participe passé accordé avec le sujet, souvent suivie de par.\n\nPráctica: Mets une phrase active simple à la voix passive.", seg: null },
        { titulo: "Les propositions relatives (Qui, Que, Où, Dont)", explicacion: "Qui = sujet, que = COD, où = lieu/temps, dont = complément introduit par de.\n\nPráctica: Complète quatre phrases avec qui, que, où et dont.", seg: null },
        { titulo: "Expression d'hypotèse (Si + imparfait...)", explicacion: "La structure « Si + imparfait, conditionnel présent » exprime une hypothèse non réalisée dans le présent.\n\nPráctica: Rédige deux phrases hypothétiques suivant cette structure.", seg: null },
        { titulo: "Analyse d'un article technique en français", explicacion: "Identifie l'idée principale, les termes clés et la structure argumentative d'un court texte.\n\nPráctica: Résume en français ou en espagnol les points essentiels d'un paragraphe technique.", seg: null },
        { titulo: "Rédaction d'une lettre de motivation officielle", explicacion: "Structure formelle : coordonnées, objet, formule d'appel, présentation/motivation, disponibilité et formule de politesse.\n\nPráctica: Rédige une courte lettre de motivation pour un stage ou poste technique.", seg: null }
    ],
    italiano: [
        { titulo: "Alfabeto e pronuncia", explicacion: "Esercitati con la pronuncia delle vocali, delle consonanti dolci/dure (c, g) e dei digrammi (gl, gn, sc) in italiano.\n\nPráctica: Scrivi parole di esempio con suoni duri e dolci di C e G.", seg: null },
        { titulo: "Articoli determinativi e indeterminativi", explicacion: "Determinativi (il, lo, l', la, i, gli, le) e indeterminativi (un, uno, una, un') variano in base a genere, numero e lettera iniziale.\n\nPráctica: Inserisci l'articolo corretto davanti a sei nomi italiani.", seg: null },
        { titulo: "Presente indicativo: Essere e Avere", explicacion: "Verbi fondamentali e irregolari al presente (sono, sei, è, siamo, siete, sono / ho, hai, ha, abbiamo, avete, hanno).\n\nPráctica: Scrivi quattro frasi usando essere e avere.", seg: null },
        { titulo: "Verbi regolari in -are, -ere, -ire", explicacion: "Ogni coniugazione ha desinenze proprie al presente indicativo (inclusi i verbi in -ire con -isc-).\n\nPráctica: Coniuga un verbo per ciascuna delle tre coniugazioni.", seg: null },
        { titulo: "I sostantivi e il plurale", explicacion: "I sostantivi cambiano desinenza al plurale (-o -> -i, -a -> -e, -e -> -i) con eccezioni e parole invariabili.\n\nPráctica: Trasforma sei sostantivi singolari al plurale spiegando la regola.", seg: null },
        { titulo: "Gli aggettivi possessivi", explicacion: "Concordano in genere e numero con la cosa posseduta e sono preceduti dall'articolo (tranne casi specifici come i nomi di parentela singolari).\n\nPráctica: Scrivi tre frasi con aggettivi possessivi di prima e terza persona.", seg: null },
        { titulo: "Preposizioni semplici e articolate", explicacion: "Le preposizioni semplici (di, a, da, in, su) si combinano con l'articolo determinativo formando quelle articolate (nel, sulla, del...).\n\nPráctica: Completa quattro frasi scegliendo tra preposizione semplice o articolata.", seg: null },
        { titulo: "Passato Prossimo con Avere e Essere", explicacion: "Si forma con il presente di avere o essere + participio passato (che concorda con il soggetto quando l'ausiliare è essere).\n\nPráctica: Scrivi due frasi con avere e due con essere al passato prossimo.", seg: null },
        { titulo: "I verbi modali (Dovere, Potere, Volere)", explicacion: "Accompagnano un infinito e prendono l'ausiliare del verbo all'infinito nei tempi composti.\n\nPráctica: Scrivi tre frasi con dovere, potere e volere al presente o passato.", seg: null },
        { titulo: "L'Imperfetto indicativo", explicacion: "Indica azioni abituali nel passato, descrizioni o azioni in svolgimento contemporaneo (-avo/-evo/-ivo...).\n\nPráctica: Descrivi una situazione o abitudine del passato all'imperfetto.", seg: null },
        { titulo: "Pronomi diretti e indiretti", explicacion: "Diretti (mi, ti, lo, la, ci, vi, li, le) rispondono a chi/che cosa; indiretti (mi, ti, gli, le, ci, vi, gli) rispondono a chi/a che cosa.\n\nPráctica: Sostituisci il complemento oggetto in due frasi.", seg: null },
        { titulo: "Futuro semplice e composto", explicacion: "Il futuro semplice esprime azioni future o previsioni; il futuro composto indica un'azione futura anteriore a un'altra.\n\nPráctica: Scrivi due frasi al futuro semplice e una al futuro composto.", seg: null },
        { titulo: "Il Condizionale presente", explicacion: "Si usa per richieste gentili, desideri o ipotesi (radice del futuro + -erei, -eresti, -erebbe, -eremmo, -ereste, -erebbero).\n\nPráctica: Formula una richiesta cortese e un desiderio al condizionale presente.", seg: null },
        { titulo: "Il Congiuntivo presente", explicacion: "Esprime soggettività, dubbio, desiderio o necessità in frasi subordinate introdotte da verbi o espressioni come 'penso che', 'è importante che'.\n\nPráctica: Completa due frasi con il congiuntivo presente.", seg: null },
        { titulo: "Il Congiuntivo imperfetto e trapassato", explicacion: "Si usano in correlazione con tempi passati o in ipotesi e desideri riferiti al passato.\n\nPráctica: Scrivi una frase con il congiuntivo imperfetto.", seg: null },
        { titulo: "Periodo ipotetico della realtà e della possibilità", explicacion: "Il periodo della realtà usa l'indicativo; quello della possibilità usa spesso congiuntivo imperfetto nella protasi e condizionale presente nell'apodosi.\n\nPráctica: Costruisci un esempio per ciascuno dei due tipi.", seg: null },
        { titulo: "La forma passiva e il si impersonale", explicacion: "Il passivo si forma con essere o venire + participio passato; il si impersonale generalizza l'azione senza un soggetto esplicito.\n\nPráctica: Scrivi una frase passiva e una con 'si' impersonale.", seg: null },
        { titulo: "Pronomi combinati (Glielo, Ce l'ho)", explicacion: "Combinano un pronome indiretto con uno diretto o con 'ne' (glielo, gliela, glieli, gliele, ce l'ho).\n\nPráctica: Trasforma una frase con doppio pronome usando una forma combinata.", seg: null },
        { titulo: "Traduzione di documentazione tecnica in italiano", explicacion: "Richiede precisione terminologica e chiarezza sintattica evitando calchi letterali poco naturali.\n\nPráctica: Traduci un breve testo tecnico in spagnolo o italiano mantenendo i concetti chiave.", seg: null },
        { titulo: "Composizione di un saggio argomentativo articolato", explicacion: "Struttura l'argomentazione in introduzione con tesi, sviluppo con esempi/argomenti e conclusione coerente.\n\nPráctica: Scrivi un breve testo argomentativo su un tema tecnologico o formativo.", seg: null }
    ],
    aritmetica: [
        { titulo: "Sumas y restas de numeros enteros con signos", explicacion: "Signos iguales se suman y conservan su signo; signos distintos se restan y toman el signo del valor absoluto mayor.\n\nPráctica: Resuelve -14 + 9, -6 - 11 y 23 - (-8).", seg: null },
        { titulo: "Multiplicacion y division de enteros", explicacion: "En multiplicación y división: signos iguales dan resultado positivo (+), y signos distintos dan resultado negativo (-).\n\nPráctica: Calcula (-7)(-5), (-48)/6 y 84/(-4).", seg: null },
        { titulo: "Jerarquia de operaciones basica", explicacion: "Orden estándar: 1) Paréntesis/agrupaciones, 2) Potencias y raíces, 3) Multiplicaciones y divisiones (izquierda a derecha), 4) Sumas y restas.\n\nPráctica: Evalúa 18 + 6 / 3 * 2 - (4 + 5).", seg: null },
        { titulo: "Fracciones equivalentes y simplificacion", explicacion: "Dos fracciones son equivalentes si representan la misma proporción; simplificar es dividir numerador y denominador por su MCD.\n\nPráctica: Simplifica 36/48 a su fracción irreducible y escribe dos fracciones equivalentes a 2/3.", seg: null },
        { titulo: "Suma y resta de fracciones con distinto denominador", explicacion: "Se busca un denominador común (usualmente el MCM de los denominadores), se convierten las fracciones y se operan los numeradores.\n\nPráctica: Calcula 3/4 + 5/6 - 1/2.", seg: null },
        { titulo: "Multiplicacion y division de fracciones", explicacion: "Multiplicar es numerador por numerador y denominador por denominador; dividir es multiplicar por el recíproco (producto cruzado).\n\nPráctica: Resuelve (2/5) * (15/8) y (3/7) / (9/14).", seg: null },
        { titulo: "Conversion de fracciones a decimales y viceversa", explicacion: "Para pasar de fracción a decimal se divide numerador entre denominador; de decimal exacto a fracción se usa potencia de 10 y se simplifica.\n\nPráctica: Convierte 7/8 a decimal y 0.75 a fracción irreducible.", seg: null },
        { titulo: "Operaciones con decimales periodicos", explicacion: "Los decimales periódicos repiten una o más cifras indefinidamente y pueden expresarse como fracción generatriz.\n\nPráctica: Expresa 0.333... (0.3 periódico) como fracción y súmalo a 1/6.", seg: null },
        { titulo: "Leyes de los exponentes (Multiplicacion y division)", explicacion: "Con la misma base: a^m * a^n = a^(m+n) y a^m / a^n = a^(m-n).\n\nPráctica: Simplifica (2^4 * 2^3) / 2^5.", seg: null },
        { titulo: "Potencias con exponente negativo y cero", explicacion: "Para a != 0: a^0 = 1 y a^(-n) = 1 / a^n.\n\nPráctica: Evalúa 5^0 + 2^(-3) y reescribe 3^(-2) sin exponente negativo.", seg: null },
        { titulo: "Radicacion y simplificacion de radicales", explicacion: "La raíz n-ésima busca el valor que elevado a la n da el radicando; se simplifica extrayendo factores con exponente múltiplo del índice.\n\nPráctica: Simplifica sqrt(72) y evalúa cbrt(27).", seg: null },
        { titulo: "Minimo Comun Multiplo (MCM)", explicacion: "Es el menor múltiplo positivo común a dos o más números; se obtiene tomando factores primos comunes y no comunes con su mayor exponente.\n\nPráctica: Calcula el MCM de 12, 18 y 30.", seg: null },
        { titulo: "Maximo Comun Divisor (MCD)", explicacion: "Es el mayor divisor positivo común a dos o más números; se toma el producto de factores primos comunes con su menor exponente.\n\nPráctica: Calcula el MCD de 48, 60 y 84.", seg: null },
        { titulo: "Razones y Proporciones simples", explicacion: "Una razón compara dos cantidades (a/b); una proporción es la igualdad de dos razones (a/b = c/d).\n\nPráctica: Si la razón entre hombres y mujeres es 3:2 y hay 18 hombres, ¿cuántas mujeres hay?", seg: null },
        { titulo: "Regla de tres simple directa e inversa", explicacion: "Directa: al aumentar una magnitud aumenta la otra proporcionalmente; inversa: al aumentar una disminuye la otra en proporción inversa.\n\nPráctica: Resuelve un caso directo (costo vs unidades) y uno inverso (velocidad vs tiempo).", seg: null },
        { titulo: "Regla de tres compuesta", explicacion: "Relaciona tres o más magnitudes analizando si cada variable es directa o inversamente proporcional respecto a la incógnita.\n\nPráctica: Si 4 máquinas hacen 120 piezas en 6 horas, ¿cuántas piezas harán 6 máquinas en 8 horas?", seg: null },
        { titulo: "Calculo de Porcentajes e interes simple", explicacion: "Un porcentaje es una fracción de 100; el interés simple se calcula con I = C * i * t (con tasa y tiempo en unidades compatibles).\n\nPráctica: Calcula el 18% de 450 y el interés simple de $2,000 al 5% anual durante 3 años.", seg: null },
        { titulo: "Reparto proporcional", explicacion: "Divide una cantidad total en partes directamente (o inversamente) proporcionales a ciertos índices.\n\nPráctica: Reparte $1,200 de forma directamente proporcional a 2, 3 y 5.", seg: null },
        { titulo: "Problemas de aplicacion con MCM y MCD", explicacion: "MCM suele aparecer en encuentros o ciclos coincidentes; MCD en divisiones en partes iguales del mayor tamaño posible.\n\nPráctica: Plantea y resuelve un problema de intervalos coincidentes (MCM) y otro de agrupación equitativa (MCD).", seg: null },
        { titulo: "Fracciones continuas y criterios avanzados de divisibilidad", explicacion: "Las fracciones continuas representan números como expansiones anidadas; los criterios modulares permiten comprobar divisibilidad rápidamente.\n\nPráctica: Evalúa una fracción continua finita de 3 niveles y verifica la divisibilidad por 7 y 11 de un número dado.", seg: null }
    ],
    algebra: [
        { titulo: "Lenguaje algebraico y reduccion de terminos semejantes", explicacion: "Traduce enunciados a expresiones con variables y reduce términos que comparten exactamente la misma parte literal.\n\nPráctica: Simplifica 5x + 3y - 2x + 7y - x.", seg: null },
        { titulo: "Suma y resta de polinomios", explicacion: "Agrupa y suma o resta coeficientes de términos del mismo grado y variable (cuidando el signo menos ante paréntesis).\n\nPráctica: Suma (3x^2 - 4x + 1) y (2x^2 + 6x - 5).", seg: null },
        { titulo: "Multiplicacion de monomios y polinomios", explicacion: "Multiplica coeficientes y aplica leyes de exponentes en bases iguales; en polinomios aplica propiedad distributiva.\n\nPráctica: Desarrolla 2x(3x^2 - 5x + 4).", seg: null },
        { titulo: "Productos notables: Binomio al cuadrado", explicacion: "(a + b)^2 = a^2 + 2ab + b^2 y (a - b)^2 = a^2 - 2ab + b^2.\n\nPráctica: Desarrolla (x + 5)^2 y (2a - 3b)^2.", seg: null },
        { titulo: "Productos notables: Binomios conjugados", explicacion: "El producto de binomios conjugados da una diferencia de cuadrados: (a + b)(a - b) = a^2 - b^2.\n\nPráctica: Resuelve (x + 7)(x - 7) y (3x + 2)(3x - 2).", seg: null },
        { titulo: "Factorizacion por factor comun", explicacion: "Extrae el máximo factor común numérico y literal presente en todos los términos.\n\nPráctica: Factoriza 12x^3 - 18x^2 + 6x.", seg: null },
        { titulo: "Factorizacion de diferencia de cuadrados", explicacion: "a^2 - b^2 se factoriza como (a + b)(a - b).\n\nPráctica: Factoriza x^2 - 49 y 16y^2 - 25.", seg: null },
        { titulo: "Factorizacion de trinomios x^2 + bx + c", explicacion: "Busca dos números que multiplicados den c y sumados den b: (x + m)(x + n).\n\nPráctica: Factoriza x^2 + 7x + 12 y x^2 - 2x - 15.", seg: null },
        { titulo: "Factorizacion de trinomios ax^2 + bx + c", explicacion: "Cuando a != 1, se descompone el término central o se usan factores para reescribir como producto de binomios.\n\nPráctica: Factoriza 2x^2 + 7x + 3.", seg: null },
        { titulo: "Despeje de variables e inecuaciones de 1er grado", explicacion: "Aísla la variable aplicando operaciones inversas; en inecuaciones, si multiplicas o divides por un negativo, se invierte el sentido de la desigualdad.\n\nPráctica: Despeja t en d = v * t y resuelve 3x - 5 > 10.", seg: null },
        { titulo: "Ecuaciones de primer grado con 1 incognita", explicacion: "Reduce términos semejantes a ambos lados y despeja la incógnita manteniendo la igualdad.\n\nPráctica: Resuelve 4(x - 2) + 3 = 2x + 7.", seg: null },
        { titulo: "Sistemas de ecuaciones 2x2 (Sustitucion/Reduccion)", explicacion: "Encuentra el par (x, y) que satisface dos ecuaciones lineales simultáneamente.\n\nPráctica: Resuelve x + y = 10 y 2x - y = 5.", seg: null },
        { titulo: "Ecuaciones de 2do grado por formula general", explicacion: "Para ax^2 + bx + c = 0 con a != 0: x = [-b +- sqrt(b^2 - 4ac)] / (2a).\n\nPráctica: Resuelve x^2 - 5x + 6 = 0 usando la fórmula general.", seg: null },
        { titulo: "Simplificacion de fracciones algebraicas", explicacion: "Factoriza numerador y denominador antes de cancelar factores comunes (indicando restricciones del dominio).\n\nPráctica: Simplifica (x^2 - 9) / (x^2 + 6x + 9).", seg: null },
        { titulo: "Suma y resta de fracciones algebraicas", explicacion: "Usa el mínimo común múltiplo de los denominadores algebraicos y simplifica el resultado.\n\nPráctica: Efectúa 2/(x - 1) + 3/(x + 1).", seg: null },
        { titulo: "Sistemas de ecuaciones 3x3 por determinantes (Cramer)", explicacion: "La regla de Cramer resuelve sistemas lineales usando cocientes de determinantes cuando el determinante principal es distinto de cero.\n\nPráctica: Plantea el determinante del sistema para un sistema 3x3 y calcula el valor de una incógnita.", seg: null },
        { titulo: "Logaritmos y sus propiedades", explicacion: "log_b(x) = y equivale a b^y = x; cumple producto -> suma, cociente -> resta y potencia -> factor.\n\nPráctica: Evalúa log_2(32) y expande log(x^2 * y / z).", seg: null },
        { titulo: "Ecuaciones exponenciales y logaritmicas", explicacion: "Igualando bases o aplicando logaritmos/exponenciales se despeja la incógnita cuidando el dominio de argumentos positivos.\n\nPráctica: Resuelve 2^(x+1) = 16 y log_3(x) = 4.", seg: null },
        { titulo: "Divisibilidad de polinomios y Teorema del Residuo", explicacion: "Al dividir P(x) entre (x - a), el residuo es exactamente P(a); si el residuo es 0, (x - a) es factor.\n\nPráctica: Calcula el residuo de dividir x^3 - 4x + 6 entre x - 2.", seg: null },
        { titulo: "Eliminacion de Gauss-Jordan para matrices NxN", explicacion: "Transforma una matriz aumentada mediante operaciones elementales de fila hasta obtener la forma escalonada reducida (identidad a la izquierda).\n\nPráctica: Aplica eliminación de Gauss en un sistema 3x3 para obtener una forma escalonada.", seg: null }
    ],
    logica: [
        { titulo: "Definicion de Proposiciones y conectivos logicos", explicacion: "Una proposición es un enunciado declarativo con valor de verdad definido (V o F); los conectivos enlazan proposiciones (negación, conjunción, disyunción, implicación, bicondicional).\n\nPráctica: Identifica cuáles enunciados son proposiciones y simboliza dos oraciones compuestas.", seg: null },
        { titulo: "Tablas de verdad: Conjuncion (AND) y Disjuncion (OR)", explicacion: "AND (p ^ q) solo es V si ambas son V; OR inclusivo (p v q) es V si al menos una es V (solo F si ambas son F).\n\nPráctica: Construye las tablas de verdad de p ^ q y p v q para todas las combinaciones.", seg: null },
        { titulo: "Tablas de verdad: Condicional (IF) y Bicondicional", explicacion: "El condicional (p -> q) solo es F cuando p es V y q es F; el bicondicional (p <-> q) es V cuando ambos tienen el mismo valor.\n\nPráctica: Completa las tablas de verdad de p -> q y p <-> q.", seg: null },
        { titulo: "Determinacion de Tautologia, Contradiccion y Contingencia", explicacion: "Tautología: siempre V; contradicción: siempre F; contingencia: combina valores V y F.\n\nPráctica: Clasifica la expresión (p v ~p) y (p ^ ~p).", seg: null },
        { titulo: "Negacion de proposiciones compuestas", explicacion: "Negar una proposición invierte su valor de verdad; hay que aplicar reglas precisas a conjunciones, disyunciones e implicaciones.\n\nPráctica: Escribe la negación de 'Estudio y practico' y de 'Si llueve, salgo'.", seg: null },
        { titulo: "Leyes de De Morgan", explicacion: "~(p ^ q) <=> (~p v ~q) y ~(p v q) <=> (~p ^ ~q).\n\nPráctica: Aplica las leyes de De Morgan para simplificar ~(x > 0 ^ y > 0).", seg: null },
        { titulo: "Equivalencias logicas fundamentales", explicacion: "Dos fórmulas son lógicamente equivalentes si tienen la misma tabla de verdad (por ejemplo, p -> q <=> ~p v q).\n\nPráctica: Demuestra mediante tabla de verdad que p -> q es equivalente a ~q -> ~p (contrapositiva).", seg: null },
        { titulo: "Modus Ponens y Modus Tollens", explicacion: "Modus Ponens: de (p -> q) y p se concluye q; Modus Tollens: de (p -> q) y ~q se concluye ~p.\n\nPráctica: Formula un ejemplo válido de Modus Ponens y otro de Modus Tollens.", seg: null },
        { titulo: "Silogismo Hipotetico y Disyuntivo", explicacion: "Silogismo hipotético: (p -> q) y (q -> r) implican (p -> r); silogismo disyuntivo: (p v q) y ~p implican q.\n\nPráctica: Aplica silogismo hipotético a tres proposiciones encadenadas.", seg: null },
        { titulo: "Formalizacion del lenguaje natural al simbolico", explicacion: "Define variables proposicionales claras y traduce conectores del español ('si... entonces', 'a menos que', 'ni... ni...') a símbolos lógicos.\n\nPráctica: Formaliza un párrafo corto de dos o tres oraciones.", seg: null },
        { titulo: "Cuantificadores: Universal (forall) y Existencial (exists)", explicacion: "Para todo x (forall x) indica que se cumple en todo el dominio; existe al menos un x (exists x) indica que se cumple en algún caso.\n\nPráctica: Simboliza 'Todos los números pares son divisibles por 2' y 'Existe algún número primo par'.", seg: null },
        { titulo: "Negacion de cuantificadores", explicacion: "~(forall x P(x)) <=> exists x ~P(x) y ~(exists x P(x)) <=> forall x ~P(x).\n\nPráctica: Niega 'Todos los archivos están cifrados' y 'Algún servidor está caído'.", seg: null },
        { titulo: "Arboles de decision logica", explicacion: "Ramifican asignaciones de verdad para evaluar satisfacibilidad o validez de fórmulas de forma visual.\n\nPráctica: Evalúa si una fórmula sencilla es satisfacible ramificando sus variables.", seg: null },
        { titulo: "Algebra de Boole: Operaciones basicas", explicacion: "Trabaja sobre valores binarios {0, 1} con operaciones AND (producto), OR (suma) y NOT (complemento).\n\nPráctica: Evalúa A*(B + C') para A=1, B=0 y C=1.", seg: null },
        { titulo: "Simplificacion de expresiones booleanas con identidades", explicacion: "Usa identidades como idempotencia, absorción, distributiva y De Morgan para reducir expresiones a su forma mínima.\n\nPráctica: Simplifica A + A*B y A*(A + B).", seg: null },
        { titulo: "Representacion de puertas logicas (AND, OR, NOT, NAND, NOR)", explicacion: "Cada compuerta implementa una función booleana básica; NAND y NOR son compuertas universales.\n\nPráctica: Escribe la expresión booleana y tabla para una compuerta NAND y una NOR de 2 entradas.", seg: null },
        { titulo: "Mapas de Karnaugh para 3 variables", explicacion: "Agrupa 1s adyacentes en potencias de 2 (grupos de 1, 2, 4 u 8) usando código Gray para simplificar funciones de 3 variables.\n\nPráctica: Ubica unos minitérminos en un mapa de K de 3 variables y forma los grupos válidos.", seg: null },
        { titulo: "Mapas de Karnaugh para 4 variables", explicacion: "Extiende la agrupación adyacente (incluyendo bordes envolventes) para 16 celdas y obtener la suma de productos mínima.\n\nPráctica: Identifica grupos de 4 y 2 adyacentes en un mapa de 4 variables y escribe el término simplificado.", seg: null },
        { titulo: "Demostracion formal mediante deduccion natural", explicacion: "Deriva una conclusión paso a paso a partir de premisas aplicando reglas de inferencia y equivalencia justificadas.\n\nPráctica: Deduce r a partir de p -> q, q -> r y p anotando cada regla usada.", seg: null },
        { titulo: "Demostracion por contradiccion (Reductio ad absurdum)", explicacion: "Asume la negación de lo que se quiere demostrar y deduce una contradicción lógica (X ^ ~X) para validar la conclusión.\n\nPráctica: Explica los pasos de una prueba por contradicción y aplícala a un argumento lógico simple.", seg: null }
    ]
};
