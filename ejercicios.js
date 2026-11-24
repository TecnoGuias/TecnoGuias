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
// { titulo, explicacion, seg } --> "seg" es el segundo exacto dentro del video de Teoría Única (ej. 920)
const bancoEjercicios = {
    redes: [
        {
            titulo: "Identificar clases de direcciones IP (A, B, C)",
            explicacion: "En el direccionamiento IPv4 por clases, el primer octeto (en decimal) permite identificar la clase y su máscara por defecto:\n\n• Clase A: 1 a 126 → Máscara por defecto /8 (255.0.0.0)\n• Clase B: 128 a 191 → Máscara por defecto /16 (255.255.0.0)\n• Clase C: 192 a 223 → Máscara por defecto /24 (255.255.255.0)\n\nPráctica: Clasifica las siguientes IPs e indica su máscara por defecto: 10.20.30.1, 172.16.5.10, 192.168.1.50 y 128.10.0.1.",
            seg: 701
        },
        {
            titulo: "Mascaras por defecto y notacion CIDR",
            explicacion: "La notación CIDR (/n) indica cuántos bits consecutivos en '1' forman la porción de red dentro de los 32 bits de una dirección IPv4:\n\n• /8 = 255.0.0.0\n• /16 = 255.255.0.0\n• /24 = 255.255.255.0\n\nPráctica: Convierte las máscaras 255.255.255.0, 255.255.0.0 y 255.0.0.0 a notación CIDR, y obtén la máscara decimal equivalente para /28 y /20.",
            seg: null
        },
        {
            titulo: "Calculo de direccion de red y broadcast simples",
            explicacion: "En una red /24 (255.255.255.0), los primeros 3 octetos identifican la red y el último octeto identifica los hosts. La primera IP del bloque es la dirección de red (bits de host en 0) y la última es la dirección de broadcast (bits de host en 1).\n\nPráctica: Dada la IP 192.168.10.45/24, calcula la dirección de red, la dirección de broadcast y el rango de IPs utilizables para hosts.",
            seg: null
        },
        {
            titulo: "Subnetting basico /24 a /26",
            explicacion: "Al pasar de /24 a /26 tomas prestados 2 bits de host para crear subredes (2² = 4 subredes) y conservas 6 bits de host (2⁶ - 2 = 62 hosts utilizables por subred), con saltos de 64 direcciones en el último octeto.\n\nPráctica: Divide 192.168.5.0/24 en subredes /26 y anota red, primer host, último host y broadcast de cada subred.",
            seg: null
        },
        {
            titulo: "Comando ping y analisis de respuestas RTT",
            explicacion: "El comando ping envía peticiones ICMP Echo Request y mide el RTT (Round-Trip Time) o tiempo de ida y vuelta en milisegundos (ms), además de mostrar pérdida de paquetes y el valor TTL (Time To Live).\n\nPráctica: Ejecuta ping hacia tu puerta de enlace y hacia 8.8.8.8; compara los tiempos RTT, verifica si hay pérdida y analiza el valor de TTL.",
            seg: null
        },
        {
            titulo: "Uso de traceroute/tracert para mapear saltos",
            explicacion: "traceroute (Linux/macOS) y tracert (Windows) descubren la ruta entre origen y destino enviando paquetes con TTL = 1, 2, 3... para que cada router intermedio responda con 'Time Exceeded'.\n\nPráctica: Traza la ruta hacia una IP o dominio público, anota cada salto (hop) y observa en qué tramos sube la latencia o aparecen asteriscos (*).",
            seg: null
        },
        {
            titulo: "Inspeccion de tabla ARP con arp -a",
            explicacion: "El protocolo ARP (Address Resolution Protocol) resuelve direcciones IPv4 locales a direcciones físicas MAC para poder encapsular tramas en Ethernet dentro de la LAN.\n\nPráctica: Revisa tu tabla ARP con arp -a (o ip neigh) e identifica qué dirección MAC corresponde a tu puerta de enlace predeterminada.",
            seg: null
        },
        {
            titulo: "Analisis de comandos ipconfig / ifconfig / ip a",
            explicacion: "Estos comandos permiten inspeccionar la configuración de red del sistema: interfaces activas (UP/DOWN), direcciones IPv4/IPv6, máscaras de subred y direcciones físicas MAC.\n\nPráctica: Revisa tu interfaz principal con ip a, ifconfig o ipconfig y diferencia claramente entre tu dirección IP local y tu dirección MAC.",
            seg: null
        },
        {
            titulo: "Subnetting medio /16 a /22",
            explicacion: "Cuando trabajas con prefijos entre /16 y /22, el límite entre red y host cae dentro del tercer octeto, modificando el tamaño de bloque (salto) en ese octeto.\n\nPráctica: A partir de 172.20.0.0/16, calcula cuántas subredes /22 se generan y cuántos hosts válidos soporta cada una.",
            seg: null
        },
        {
            titulo: "VLSM: Subneteo de red para 3 departamentos distintos",
            explicacion: "VLSM (Variable Length Subnet Mask) consiste en dividir un bloque IP en subredes de distintos tamaños según la demanda real de cada segmento, asignando siempre primero los bloques más grandes.\n\nPráctica: Partiendo de 192.168.100.0/24, asigna direccionamiento para 100 hosts, 50 hosts y 20 hosts indicando red, máscara y broadcast de cada bloque.",
            seg: null
        },
        {
            titulo: "Identificacion de puertos TCP/UDP comunes (22, 80, 443, 53)",
            explicacion: "Los puertos dirigen el tráfico hacia servicios específicos en un equipo:\n\n• 22/TCP: SSH (administración remota segura)\n• 53/UDP y TCP: DNS (resolución de nombres)\n• 80/TCP: HTTP (tráfico web sin cifrar)\n• 443/TCP: HTTPS (tráfico web cifrado con TLS)\n\nPráctica: Indica qué protocolo usa cada puerto y explica por qué conviene usar 443 y 22 frente a alternativas sin cifrar.",
            seg: null
        },
        {
            titulo: "Captura basica de trafico con Wireshark",
            explicacion: "Wireshark captura paquetes de la red en tiempo real y permite aislar conversaciones mediante filtros de visualización (como icmp, dns, tcp.port == 80 o ip.addr == ...).\n\nPráctica: Captura tráfico mientras haces una consulta o ping, filtra los paquetes y revisa las capas Ethernet, IP y TCP/UDP de un paquete.",
            seg: null
        },
        {
            titulo: "Configuracion manual de VLANs en Cisco CLI",
            explicacion: "Las VLANs (IEEE 802.1Q) separan dominios de broadcast en capa 2 dentro de una infraestructura conmutada, mejorando el orden, la segmentación y el control del tráfico.\n\nPráctica: Escribe los comandos en Cisco CLI para crear la VLAN 10 con nombre Ventas y la VLAN 20 con nombre Sistemas.",
            seg: null
        },
        {
            titulo: "Configuracion de puertos de acceso y Trunk (802.1Q)",
            explicacion: "Un puerto en modo access pertenece a una sola VLAN sin etiqueta 802.1Q; un puerto en modo trunk transporta tráfico de varias VLANs etiquetadas entre switches o hacia un router.\n\nPráctica: Configura una interfaz en modo access para VLAN 10 y otra en modo trunk permitiendo el paso de las VLANs 10 y 20.",
            seg: null
        },
        {
            titulo: "Enrutamiento Estatico en Routers",
            explicacion: "En el enrutamiento estático, el administrador configura manualmente las rutas hacia redes no conectadas directamente indicando red destino, máscara y siguiente salto (next-hop) o interfaz de salida.\n\nPráctica: Escribe la ruta estática para alcanzar 10.10.20.0/24 enviando el tráfico al siguiente salto 192.168.1.2.",
            seg: null
        },
        {
            titulo: "Configuracion de Servidor y Relay DHCP",
            explicacion: "DHCP automatiza la entrega de dirección IP, máscara, puerta de enlace y DNS; cuando el servidor DHCP está en otra red, se configura DHCP Relay (ip helper-address) para reenviar los broadcasts.\n\nPráctica: Define los parámetros de un pool DHCP (red, máscara, default-router, dns-server y direcciones excluidas) y explica cuándo usar relay.",
            seg: null
        },
        {
            titulo: "Escaneo de red y puertos con Nmap",
            explicacion: "Nmap permite verificar hosts activos y detectar qué puertos están abiertos, cerrados o filtrados, así como identificar servicios en ejecución.\n\nPráctica: Explica la diferencia entre un descubrimiento de hosts (-sn), un escaneo de puertos y la detección de versiones de servicio (-sV) en un entorno autorizado.",
            seg: null
        },
        {
            titulo: "Configuracion de Enrutamiento Dinamico (RIP v2 / OSPF)",
            explicacion: "Los protocolos de enrutamiento dinámico actualizan las tablas de rutas automáticamente: RIP v2 utiliza conteo de saltos (máximo 15), mientras que OSPF utiliza costo basado en el ancho de banda.\n\nPráctica: Compara RIP v2 y OSPF según su métrica, convergencia y tamaño de red recomendado, y plantea un ejemplo básico de anuncio de redes.",
            seg: null
        },
        {
            titulo: "Listas de Control de Acceso (ACLs) estandar y extendidas",
            explicacion: "Las ACLs evalúan paquetes de arriba abajo con reglas permit o deny: las estándar filtran principalmente por IP de origen; las extendidas permiten filtrar por origen, destino, protocolo y puerto.\n\nPráctica: Diseña una regla para bloquear el tráfico HTTP (puerto 80) de una subred hacia un servidor específico permitiendo el resto del tráfico.",
            seg: null
        },
        {
            titulo: "Analisis de paquetes TCP Three-Way Handshake en depuracion",
            explicacion: "TCP establece una conexión confiable en tres pasos antes de transmitir datos:\n\n1. SYN (cliente solicita sincronización)\n2. SYN-ACK (servidor acepta y sincroniza)\n3. ACK (cliente confirma recepción)\n\nPráctica: Describe qué ocurre en cada uno de los 3 pasos del handshake y qué indica ver múltiples SYN sin respuesta SYN-ACK.",
            seg: null
        }
    ],

    python: [
        {
            titulo: "Hola Mundo y variables basicas",
            explicacion: "En Python las variables se crean al asignarles un valor (=) sin declarar el tipo de dato explícitamente, y print() permite mostrar texto y variables formateadas (f-strings).\n\n• Tipos básicos: str (texto), int (entero), float (decimal), bool (booleano).\n\nPráctica: Crea variables para nombre, edad y lenguaje favorito, e imprímelas en una sola frase usando f\"...\".",
            seg: 5985
        },
        {
            titulo: "Operaciones aritmeticas simples",
            explicacion: "Python soporta los operadores aritméticos estándar y operadores específicos para división:\n\n• + (suma), - (resta), * (multiplicación), ** (potencia)\n• / (división real), // (división entera), % (módulo o residuo)\n\nPráctica: Solicita dos números con input(), conviértelos a float o int y muestra su suma, división entera y residuo.",
            seg: null
        },
        {
            titulo: "Condicional if/else de edad",
            explicacion: "Las estructuras condicionales evalúan expresiones booleanas (<, <=, >, >=, ==, !=) y ejecutan bloques indentados con 4 espacios mediante if, elif y else.\n\nPráctica: Pide la edad de un usuario y clasifícalo en menor de edad (< 18), adulto (18 a 64) o adulto mayor (65 o más).",
            seg: null
        },
        {
            titulo: "Determinar par o impar",
            explicacion: "El operador módulo (%) devuelve el residuo de una división entera. Un número entero es par si al dividirlo entre 2 su residuo es cero (n % 2 == 0).\n\nPráctica: Escribe un programa que reciba un número entero y determine si es par, impar o cero.",
            seg: null
        },
        {
            titulo: "Bucle for del 1 al 100",
            explicacion: "El bucle for recorre iterables; combinado con range(inicio, fin_exclusivo) permite generar secuencias numéricas controladas.\n\nPráctica: Imprime los números del 1 al 100 usando range(1, 101) y acumula la suma únicamente de los múltiplos de 5.",
            seg: null
        },
        {
            titulo: "Tabla de multiplicar dinamica",
            explicacion: "Combinar entrada de usuario con un ciclo for permite generar tablas dinámicas para cualquier número base y rango deseado.\n\nPráctica: Pide un número entero N y muestra su tabla de multiplicar desde N x 1 hasta N x 12 con formato limpio.",
            seg: null
        },
        {
            titulo: "Bucle while con contador",
            explicacion: "El ciclo while repite un bloque mientras su condición sea verdadera (True). Es fundamental actualizar la variable de control dentro del ciclo para evitar bucles infinitos.\n\nPráctica: Implementa un contador regresivo desde 10 hasta 0 que imprima 'Despegue' al terminar.",
            seg: null
        },
        {
            titulo: "Manipulacion de cadenas y slicing",
            explicacion: "Las cadenas (str) son secuencias inmutables indexadas desde 0 y permiten rebanado con la sintaxis cadena[inicio:fin:paso].\n\n• cadena[::-1] invierte la cadena.\n• Métodos útiles: .lower(), .upper(), .strip(), .replace().\n\nPráctica: Dada una frase, extrae sus primeros 4 caracteres, sus últimos 4 caracteres y muéstrala invertida.",
            seg: null
        },
        {
            titulo: "Funcion que calcula el area de un circulo",
            explicacion: "Las funciones se definen con def nombre(parametros): y devuelven resultados con return, permitiendo reutilizar y modularizar código.\n\nPráctica: Importa math (math.pi) y crea una función area_circulo(radio) que valide que el radio sea positivo antes de calcular π · r².",
            seg: null
        },
        {
            titulo: "Trabajar con Listas y metodos (.append, .pop)",
            explicacion: "Las listas ([]) son colecciones ordenadas y mutables que almacenan múltiples elementos y ofrecen métodos para modificarlas in-place:\n\n• .append(x) agrega al final, .insert(i, x) inserta en posición, .pop() extrae el último elemento.\n\nPráctica: Crea una lista de tareas, agrega 4 elementos con append(), elimina el último con pop() e imprime la lista final.",
            seg: null
        },
        {
            titulo: "Buscar el numero mayor en una lista",
            explicacion: "Para encontrar el máximo de una lista de forma algorítmica se toma el primer elemento como referencia y se compara contra cada elemento restante del recorrido.\n\nPráctica: Dada la lista [14, 3, 29, 8, 42, 17], encuentra el número mayor y su índice sin usar max(), y luego verifica con max().",
            seg: null
        },
        {
            titulo: "Eliminar duplicados de una lista con conjuntos",
            explicacion: "Un conjunto (set) es una colección desordenada de elementos únicos, por lo que convertir una lista a set elimina automáticamente valores repetidos.\n\nPráctica: Dada una lista con nombres o números repetidos, conviértela a set y regrésala a list mostrando cuántos duplicados se eliminaron.",
            seg: null
        },
        {
            titulo: "Diccionarios: Contar frecuencia de palabras",
            explicacion: "Los diccionarios ({clave: valor}) permiten búsquedas rápidas por clave; el método conteo.get(palabra, 0) + 1 simplifica el conteo de frecuencias.\n\nPráctica: Toma una oración, divídela con .split() y construye un diccionario que indique cuántas veces aparece cada palabra.",
            seg: null
        },
        {
            titulo: "Lectura de archivos .txt simples",
            explicacion: "El bloque with open('ruta.txt', 'r', encoding='utf-8') as f abre un archivo de texto y garantiza su cierre automático al finalizar la lectura.\n\nPráctica: Lee un archivo .txt línea por línea, elimina saltos de línea con .strip() y cuenta cuántas líneas tienen contenido.",
            seg: null
        },
        {
            titulo: "Escritura y append en archivos locales",
            explicacion: "Al abrir archivos con open(), el modo 'w' crea o sobrescribe todo el contenido, mientras que el modo 'a' (append) añade datos al final conservando lo anterior.\n\nPráctica: Crea un script que registre entradas de bitácora con fecha/texto agregándolas al final de un archivo logs.txt.",
            seg: null
        },
        {
            titulo: "Manejo de excepciones try/except",
            explicacion: "Las excepciones evitan cierres abruptos ante entradas inválidas o fallos operativos mediante bloques try, except (ValueError, ZeroDivisionError) y finally.\n\nPráctica: Pide dos números para dividirlos y captura tanto letras ingresadas por error como la división entre cero.",
            seg: null
        },
        {
            titulo: "Funciones Lambda y map/filter",
            explicacion: "Una función lambda (lambda x: expresión) define una función anónima en una sola línea, muy útil junto con filter() para seleccionar y map() para transformar elementos.\n\nPráctica: A partir de los números del 1 al 15, filtra solo los pares y obtén sus cuadrados usando filter, map y lambda.",
            seg: null
        },
        {
            titulo: "Programacion Orientada a Objetos: Clase Vehiculo",
            explicacion: "Una clase define atributos y comportamientos de un objeto mediante el constructor __init__(self, ...) y métodos de instancia.\n\nPráctica: Implementa la clase Vehiculo con marca, modelo y velocidad (iniciando en 0), además de métodos acelerar(inc) y frenar(dec).",
            seg: null
        },
        {
            titulo: "Algoritmo de ordenamiento Bubblesort manual",
            explicacion: "Bubble Sort recorre la lista comparando pares adyacentes (lista[j] > lista[j+1]) e intercambiándolos hasta que toda la colección queda ordenada.\n\nPráctica: Ordena manualmente [64, 34, 25, 12, 22, 11, 90] de menor a mayor con dos bucles anidados.",
            seg: null
        },
        {
            titulo: "Recursividad: Resolver la Torre de Hanoi",
            explicacion: "Una función recursiva resuelve un problema dividiéndolo en subproblemas más pequeños de la misma naturaleza hasta alcanzar un caso base (n == 1).\n\nPráctica: Implementa hanoi(n, origen, destino, auxiliar) e imprime cada movimiento para 3 discos.",
            seg: null
        }
    ],

    java: [
        {
            titulo: "Hola Mundo y estructura de clase Main en Java",
            explicacion: "En Java todo el código vive dentro de clases y la ejecución inicia en el método público y estático public static void main(String[] args).\n\nPráctica: Crea la clase Principal con su método main e imprime dos líneas con System.out.println().",
            seg: 7352
        },
        {
            titulo: "Declaracion de tipos primitivos y Scanner",
            explicacion: "Java exige declarar el tipo de cada variable (int, double, boolean, char, String) y utiliza java.util.Scanner(System.in) para leer datos del teclado.\n\nPráctica: Lee nombre, edad y promedio de un estudiante y muéstralos formateados en consola.",
            seg: null
        },
        {
            titulo: "Condicionales if-else y operador ternario",
            explicacion: "Usa if / else if / else para decisiones complejas y el operador ternario (condicion ? valorVerdadero : valorFalso) para asignaciones directas.\n\nPráctica: Determina si una calificación (>= 6.0) es aprobatoria usando un bloque if-else y luego exprésalo con operador ternario.",
            seg: null
        },
        {
            titulo: "Estructura switch-case para menus",
            explicacion: "La sentencia switch evalúa una variable discreta (int, char, String, enum) y salta al case coincidente usando break para evitar ejecución en cascada.\n\nPráctica: Crea un menú de 4 opciones (1. Saludar, 2. Sumar, 3. Información, 4. Salir) con manejo de opción inválida en default.",
            seg: null
        },
        {
            titulo: "Bucle for tradicional y for-each",
            explicacion: "El bucle for tradicional controla un índice (for (int i = 0; i < n; i++)), mientras que el for-each (for (Tipo item : coleccion)) recorre elementos directamente.\n\nPráctica: Recorre un arreglo de enteros con ambos tipos de bucle y calcula la suma total.",
            seg: null
        },
        {
            titulo: "Bucle while y do-while",
            explicacion: "while evalúa la condición antes de entrar al ciclo; do-while ejecuta el bloque al menos una vez antes de evaluar la condición de continuidad.\n\nPráctica: Implementa una validación de contraseña o número positivo con do-while hasta que el usuario ingrese un dato válido.",
            seg: null
        },
        {
            titulo: "Arreglos unidimensionales (Arrays) y recorrido",
            explicacion: "Un arreglo en Java tiene longitud fija definida al instanciarse (new int[5]) y se consulta su tamaño mediante la propiedad .length.\n\nPráctica: Almacena 5 temperaturas en un arreglo double[], calcula el promedio y muestra cuántas superan la media.",
            seg: null
        },
        {
            titulo: "Arreglos bidimensionales (Matrices)",
            explicacion: "Las matrices (int[][] matriz = new int[3][3]) organizan datos en filas y columnas y se procesan mediante dos ciclos for anidados.\n\nPráctica: Rellena una matriz 3x3 con valores enteros e imprime tanto la matriz tabular como la suma de su diagonal principal.",
            seg: null
        },
        {
            titulo: "Creacion de metodos estaticos y paso de parametros",
            explicacion: "Los métodos dividen un programa en tareas específicas recibiendo parámetros tipados y devolviendo un resultado (o void si no retornan valor).\n\nPráctica: Crea métodos estáticos para calcular área y perímetro de un rectángulo e invócalos desde main.",
            seg: null
        },
        {
            titulo: "Programacion Orientada a Objetos: Creacion de Clases y Objetos",
            explicacion: "Una clase define el molde (atributos y métodos) y cada objeto se crea en memoria con la palabra clave new.\n\nPráctica: Crea la clase CuentaBancaria con titular y saldo, e instancia dos cuentas realizando depósitos y consultas.",
            seg: null
        },
        {
            titulo: "Encapsulamiento (Getters y Setters)",
            explicacion: "El encapsulamiento protege los atributos declarándolos private y exponiendo métodos públicos get y set que validan las modificaciones.\n\nPráctica: Haz privados los atributos de CuentaBancaria y valida en setSaldo() que nunca se asigne un monto negativo.",
            seg: null
        },
        {
            titulo: "Constructores y sobrecarga de constructores",
            explicacion: "Un constructor lleva el mismo nombre de la clase y no tiene tipo de retorno; sobrecargarlo permite crear objetos con distintos conjuntos de datos iniciales.\n\nPráctica: Implementa un constructor vacío y otro parametrizado para una clase Producto (nombre, precio, stock).",
            seg: null
        },
        {
            titulo: "Herencia y superclases en Java",
            explicacion: "Mediante extends, una subclase hereda atributos y métodos de una superclase y puede llamar al constructor padre con super(...).\n\nPráctica: Crea la clase base Empleado y una subclase Desarrollador que añada el atributo lenguajePrincipal.",
            seg: null
        },
        {
            titulo: "Polimorfismo y sobreescritura de metodos (@Override)",
            explicacion: "El polimorfismo permite tratar objetos de distintas subclases bajo una referencia común de la superclase ejecutando su propia versión (@Override) del método.\n\nPráctica: Sobrescribe calcularBono() en distintas subclases de Empleado y recórrelas en un arreglo polimórfico.",
            seg: null
        },
        {
            titulo: "Clases abstractas e interfaces",
            explicacion: "Una clase abstracta (abstract) no se instancia directamente y puede definir métodos sin cuerpo; una interfaz (interface) establece un contrato que las clases implementan (implements).\n\nPráctica: Define una interfaz Notificable con enviarMensaje(String msg) e impleméntala en Email y SMS.",
            seg: null
        },
        {
            titulo: "Manejo de excepciones (try-catch-finally y throws)",
            explicacion: "Java maneja errores en ejecución mediante try, catch específicos (como InputMismatchException o ArithmeticException) y bloques finally de limpieza.\n\nPráctica: Protege la lectura y conversión de números desde consola capturando errores de formato y división por cero.",
            seg: null
        },
        {
            titulo: "Uso de Colecciones (ArrayList y HashMap)",
            explicacion: "ArrayList ofrece listas dinámicas sin límite fijo, mientras que HashMap asocia claves únicas con valores para acceso en tiempo constante promedio.\n\nPráctica: Administra una lista de alumnos con ArrayList<String> y sus calificaciones con HashMap<String, Double>.",
            seg: null
        },
        {
            titulo: "Lectura y escritura de archivos con FileReader/FileWriter",
            explicacion: "Las clases FileWriter, BufferedWriter, FileReader y BufferedReader permiten guardar y leer archivos de texto plano en Java.\n\nPráctica: Guarda 5 líneas en un archivo notas.txt usando try-with-resources y luego léelas para mostrarlas en consola.",
            seg: null
        },
        {
            titulo: "Programacion funcional basica con Streams y Lambdas",
            explicacion: "La API Stream y las expresiones lambda (x -> ...) permiten encadenar operaciones como filter(), map() y forEach() sobre colecciones.\n\nPráctica: Toma una lista de enteros, filtra los mayores a 15, multiplícalos por 2 e imprime el resultado con Streams.",
            seg: null
        },
        {
            titulo: "Estructura de datos avanzada: Implementacion de Lista Enlazada propia",
            explicacion: "Una lista enlazada almacena elementos en objetos Nodo donde cada nodo guarda un dato y una referencia al siguiente nodo (Nodo siguiente).\n\nPráctica: Crea la clase Nodo y una ListaEnlazada con métodos agregarAlFinal(int dato) e imprimirLista().",
            seg: null
        }
    ],

    bash: [
        {
            titulo: "Script basico con echo y variables",
            explicacion: "Todo script de Bash comienza con el shebang #!/usr/bin/env bash, asigna variables sin espacios (NOMBRE=\"Ana\") y las expande con \"$NOMBRE\".\n\nPráctica: Crea un script ejecutable (chmod +x) que salude al usuario actual ($USER) y muestre el directorio actual ($PWD).",
            seg: 372
        },
        {
            titulo: "Captura de argumentos ($1, $2)",
            explicacion: "Los argumentos pasados al ejecutar el script se reciben en $1, $2, etc., mientras que $# indica el total de argumentos recibidos.\n\nPráctica: Crea un script que reciba nombre y entorno como $1 y $2, y valide con [ $# -lt 2 ] si faltan parámetros.",
            seg: null
        },
        {
            titulo: "Condicional if que valida si un archivo existe",
            explicacion: "Las expresiones de prueba [[ -f \"$ruta\" ]] y [[ -d \"$ruta\" ]] comprueban si existe un archivo regular o un directorio respectivamente.\n\nPráctica: Recibe una ruta por argumento y muestra si es un archivo, un directorio o si no existe.",
            seg: null
        },
        {
            titulo: "Validacion de permisos de lectura/escritura",
            explicacion: "Los operadores -r (lectura), -w (escritura) y -x (ejecución) permiten comprobar permisos efectivos antes de operar sobre un archivo.\n\nPráctica: Verifica si un archivo dado tiene permisos de lectura y escritura para el usuario actual.",
            seg: null
        },
        {
            titulo: "Bucle for sobre una lista de directorios",
            explicacion: "El bucle for dir in ...; do ... done permite recorrer rutas, patrones glob (*.log) o listas de directorios.\n\nPráctica: Recorre una lista de carpetas (ej. /etc /var /tmp) y muestra cuántos elementos contiene cada una.",
            seg: null
        },
        {
            titulo: "Bucle while leedor de lineas",
            explicacion: "La construcción while IFS= read -r linea; do ... done < archivo.txt lee archivos línea por línea sin alterar espacios ni caracteres de escape.\n\nPráctica: Lee un archivo de texto línea por línea e imprime cada línea precedida por su número.",
            seg: null
        },
        {
            titulo: "Renombrar multiples archivos en lote",
            explicacion: "Combinando bucles for con expansión de parámetros (${archivo%.txt}) se pueden renombrar lotes de archivos de forma segura.\n\nPráctica: Dentro de una carpeta de prueba, renombra todos los archivos .txt agregándoles el prefijo backup_.",
            seg: null
        },
        {
            titulo: "Uso de grep para buscar patrones en /etc/passwd",
            explicacion: "grep filtra líneas que coinciden con texto o expresiones regulares; opciones útiles incluyen -i (ignorar mayúsculas), -v (invertir) y -E (regex extendida).\n\nPráctica: Busca en /etc/passwd qué usuarios tienen asignado /bin/bash o /usr/bin/zsh como intérprete.",
            seg: null
        },
        {
            titulo: "Filtrado de texto con awk y cut",
            explicacion: "cut -d ':' -f 1 extrae columnas delimitadas, mientras que awk -F ':' '{print $1, $7}' permite filtrar y formatear campos con condiciones.\n\nPráctica: Extrae el nombre de usuario (campo 1) y su directorio home (campo 6) desde /etc/passwd.",
            seg: null
        },
        {
            titulo: "Creacion de un script de Backup comprimido con tar y date",
            explicacion: "El comando tar -czf archivo.tar.gz carpeta/ empaqueta y comprime en gzip, y $(date +%Y-%m-%d) inserta la fecha actual en el nombre.\n\nPráctica: Escribe un script que respalde una carpeta de origen en un .tar.gz fechado dentro de un directorio de backups.",
            seg: null
        },
        {
            titulo: "Uso de sed para reemplazar texto automaticamente",
            explicacion: "sed 's/patron/reemplazo/g' edita flujos de texto mediante expresiones regulares (con -i modifica el archivo directamente).\n\nPráctica: Toma un archivo de configuración de prueba y reemplaza todas las apariciones de DEBUG=false por DEBUG=true.",
            seg: null
        },
        {
            titulo: "Monitoreo de procesos activos con ps y kill",
            explicacion: "ps aux (o pgrep) lista procesos con su PID, uso de CPU y memoria, mientras que kill -15 PID solicita cierre limpio y kill -9 fuerza la terminación.\n\nPráctica: Filtra procesos activos por nombre, muestra su PID y consumo de memoria, y documenta la diferencia entre SIGTERM y SIGKILL.",
            seg: null
        },
        {
            titulo: "Script con menu interactivo usando select",
            explicacion: "La estructura select opcion in \"Op1\" \"Op2\" \"Salir\"; do ... done genera automáticamente un menú numerado interactivo en terminal.\n\nPráctica: Crea un menú de administración que permita ver uso de disco (df -h), memoria (free -h), fecha o salir.",
            seg: null
        },
        {
            titulo: "Automatizacion de limpieza de logs de mas de 30 dias",
            explicacion: "find /ruta -type f -name \"*.log\" -mtime +30 localiza archivos modificados hace más de 30 días de forma precisa.\n\nPráctica: Escribe un script que primero liste los archivos .log antiguos y pida confirmación antes de eliminarlos.",
            seg: null
        },
        {
            titulo: "Comprobar conectividad de IPs con ping en bucle",
            explicacion: "Ejecutar ping -c 1 -W 1 \"$ip\" &> /dev/null evalúa conectividad rápidamente y permite revisar el código de salida ($? == 0).\n\nPráctica: Recorre una lista de 5 direcciones IP o dominios e imprime [ONLINE] u [OFFLINE] para cada uno.",
            seg: null
        },
        {
            titulo: "Descarga y extraccion automatizada con curl y tar",
            explicacion: "curl -fSL url -o archivo.tar.gz descarga recursos siguiendo redirecciones y fallando ante errores HTTP (-f).\n\nPráctica: Estructura un script que descargue un archivo comprimido, verifique que la descarga fue exitosa (&&) y lo extraiga en una carpeta destino.",
            seg: null
        },
        {
            titulo: "Script ejecutable como servicio systemd",
            explicacion: "Un archivo .service en /etc/systemd/system/ define las secciones [Unit], [Service] (ExecStart, Restart=always) e [Install] (WantedBy=multi-user.target).\n\nPráctica: Redacta el unit file para ejecutar un script de monitoreo como demonio y anota los comandos systemctl para habilitarlo e iniciarlo.",
            seg: null
        },
        {
            titulo: "Lectura e iteracion de JSON usando jq",
            explicacion: "jq permite consultar, filtrar y transformar estructuras JSON directamente desde la terminal (ej. jq '.usuarios[].nombre').\n\nPráctica: Dado un archivo JSON con una lista de servidores (nombre, ip, activo), filtra con jq solo los que tengan activo == true.",
            seg: null
        },
        {
            titulo: "Script de auditoria de seguridad del sistema",
            explicacion: "Un script de auditoría automatiza verificaciones clave: usuarios con UID 0, puertos en escucha (ss -tuln), permisos en archivos críticos y últimos inicios de sesión.\n\nPráctica: Crea un script que recopile estas comprobaciones y guarde un reporte limpio en reporte_auditoria.txt.",
            seg: null
        },
        {
            titulo: "Implementacion de una interfaz TUI usando dialog o whiptail",
            explicacion: "Herramientas como whiptail o dialog permiten construir cuadros de mensaje (--msgbox), confirmación (--yesno) y menús (--menu) en modo texto.\n\nPráctica: Diseña un asistente en terminal con whiptail que pregunte confirmación y muestre una lista seleccionable de tareas.",
            seg: null
        }
    ],

    ingles: [
        {
            titulo: "Verb To Be and basic greetings",
            explicacion: "El verbo To Be (am, is, are) se utiliza para identidad, origen, edad y estados, invirtiendo el orden sujeto-verbo para formar preguntas.\n\n• I am / You are / He-She-It is / We-They are.\n\nPráctica: Escribe 4 oraciones presentándote, indicando tu ocupación o estudios y formulando dos preguntas básicas.",
            seg: null
        },
        {
            titulo: "Present Simple vs Present Continuous",
            explicacion: "Present Simple expresa hábitos, rutinas y verdades generales (I work, she works); Present Continuous expresa acciones en progreso ahora mismo o temporales (am/is/are + -ing).\n\nPráctica: Escribe tres pares de oraciones contrastando una rutina habitual con una acción que ocurre en este momento.",
            seg: null
        },
        {
            titulo: "Past Simple with regular verbs",
            explicacion: "Los verbos regulares forman el pasado afirmativo añadiendo -ed (worked, studied), mientras que en negativas y preguntas se usa did / didn't + verbo en forma base.\n\nPráctica: Describe cuatro actividades que completaste ayer usando verbos regulares en afirmativo y negativo.",
            seg: null
        },
        {
            titulo: "Irregular verbs categorization",
            explicacion: "Los verbos irregulares no siguen la regla -ed y cambian su raíz en pasado simple y participio pasado (ej. go - went - gone, write - wrote - written).\n\nPráctica: Agrupa 9 verbos irregulares según su patrón de cambio (sin cambio, 2 formas iguales, 3 formas distintas) y escribe 3 oraciones.",
            seg: null
        },
        {
            titulo: "Future with Will and Going to",
            explicacion: "Usa 'be going to' para planes previos o predicciones con evidencia visible; usa 'will' para decisiones espontáneas, promesas u opiniones sobre el futuro.\n\nPráctica: Redacta dos planes con going to y dos decisiones espontáneas o predicciones con will.",
            seg: null
        },
        {
            titulo: "Comparative and Superlative adjectives",
            explicacion: "Los adjetivos cortos añaden -er / the -est (faster, the fastest); los adjetivos largos usan more / the most (more reliable, the most reliable).\n\nPráctica: Compara dos sistemas operativos o lenguajes de programación usando al menos dos comparativos y dos superlativos.",
            seg: null
        },
        {
            titulo: "Modal verbs: Can, Could, Must, Should",
            explicacion: "Los verbos modales van seguidos de verbo en forma base sin 'to': can/could (habilidad o posibilidad), must (obligación fuerte), should (consejo o recomendación).\n\nPráctica: Escribe una regla de seguridad con must, una recomendación de estudio con should y dos habilidades con can/could.",
            seg: null
        },
        {
            titulo: "Countable and Uncountable nouns (Much/Many)",
            explicacion: "Los sustantivos contables tienen singular y plural (many, a few); los incontables representan masas o conceptos abstractos tratados en singular (much, a little, information, traffic).\n\nPráctica: Redacta cuatro oraciones usando much, many, a few y a little con vocabulario técnico o cotidiano.",
            seg: null
        },
        {
            titulo: "Present Perfect with Just, Already, Yet",
            explicacion: "Se forma con have/has + past participle para conectar acciones pasadas con el presente:\n\n• just (acaba de ocurrir), already (ya ocurrió), yet (todavía no, en negativas y preguntas).\n\nPráctica: Escribe tres oraciones sobre avances en un proyecto utilizando just, already y yet.",
            seg: null
        },
        {
            titulo: "First and Second Conditionals",
            explicacion: "First Conditional (If + Present Simple, will + verb) expresa consecuencias reales o probables; Second Conditional (If + Past Simple, would + verb) expresa situaciones hipotéticas.\n\nPráctica: Escribe dos oraciones en First Conditional y dos en Second Conditional.",
            seg: null
        },
        {
            titulo: "Passive Voice: Present and Past",
            explicacion: "La voz pasiva (am/is/are/was/were + past participle) enfatiza la acción o el objeto afectado en lugar de quién la realiza.\n\nPráctica: Transforma tres oraciones activas (ej. 'The admin updated the server') a voz pasiva.",
            seg: null
        },
        {
            titulo: "Reported Speech basics",
            explicacion: "El estilo indirecto reporta lo que alguien dijo, retrocediendo generalmente un tiempo verbal cuando el verbo introductor está en pasado (said, told).\n\nPráctica: Convierte tres citas directas (en presente, pasado y con will/can) a Reported Speech.",
            seg: null
        },
        {
            titulo: "Relative Clauses (Who, Which, That)",
            explicacion: "Las cláusulas relativas unen ideas aportando información sobre un sustantivo: who para personas, which para cosas y that para ambos en cláusulas especificativas.\n\nPráctica: Une tres pares de oraciones simples en una sola oración usando who, which y that.",
            seg: null
        },
        {
            titulo: "Phrasal Verbs in technical context",
            explicacion: "Los phrasal verbs combinan un verbo con una partícula cambiando su significado literal (ej. set up = configurar, back up = respaldar, figure out = resolver).\n\nPráctica: Escribe cuatro oraciones en contexto informático utilizando set up, back up, shut down y look into.",
            seg: null
        },
        {
            titulo: "Third Conditional and Mixed Conditionals",
            explicacion: "Third Conditional (If + had + past participle, would have + past participle) expresa hipótesis imposibles sobre hechos pasados que ya no pueden cambiarse.\n\nPráctica: Redacta dos reflexiones sobre situaciones pasadas alternativas usando Third Conditional.",
            seg: null
        },
        {
            titulo: "Advanced Connectors (Furthermore, Nevertheless)",
            explicacion: "Los conectores formales estructuran ensayos y reportes: furthermore / moreover añaden argumentos; nevertheless / however introducen contraste.\n\nPráctica: Escribe un párrafo breve de 4 líneas conectando ideas con furthermore, however y consequently.",
            seg: null
        },
        {
            titulo: "Inversion after negative adverbials",
            explicacion: "Para dar énfasis formal, colocar adverbios negativos al inicio (Never, Rarely, Not only) invierte el auxiliar y el sujeto como en una pregunta.\n\nPráctica: Reescribe dos oraciones comenzando con 'Never before...' y 'Not only...'.",
            seg: null
        },
        {
            titulo: "Writing a formal professional email",
            explicacion: "Un correo profesional requiere asunto claro, saludo formal (Dear...), propósito directo en el primer párrafo, llamada a la acción y despedida cordial (Sincerely / Best regards).\n\nPráctica: Redacta un correo formal solicitando soporte técnico o información sobre una vacante.",
            seg: null
        },
        {
            titulo: "Technical text translation and terminology analysis",
            explicacion: "Traducir documentación técnica exige conservar la precisión conceptual y respetar anglicismos estándar de la industria sin caer en traducciones literales forzadas.\n\nPráctica: Traduce un fragmento técnico de 5 líneas sobre redes o programación e identifica 5 términos clave.",
            seg: null
        },
        {
            titulo: "Essay writing: Argumentative synthesis",
            explicacion: "Un ensayo argumentativo sólido presenta una tesis clara, argumentos respaldados por evidencia, consideración de un contraargumento y una conclusión sintética.\n\nPráctica: Redacta una síntesis argumentativa de 150 palabras sobre software libre vs. software propietario.",
            seg: null
        }
    ],

    frances: [
        {
            titulo: "Les salutations et l'alphabet",
            explicacion: "En francés se distingue el registro formal (Bonjour, Monsieur/Madame, Comment allez-vous ?) del informal (Salut, Ça va ?), además de vocales acentuadas (é, è, ê, à, ù, ç).\n\nPráctica: Escribe un breve diálogo de saludo y presentación en registro formal e informal.",
            seg: null
        },
        {
            titulo: "Les articles définis et indéfinis",
            explicacion: "Los artículos concuerdan en género y número con el sustantivo:\n\n• Definidos: le (masc.), la (fem.), l' (ante vocal/h), les (plural).\n• Indefinidos: un, une, des.\n\nPráctica: Coloca el artículo definido e indefinido correcto delante de 6 sustantivos franceses.",
            seg: null
        },
        {
            titulo: "Les verbes Être et Avoir",
            explicacion: "Être (ser/estar) y Avoir (tener/haber) son verbos irregulares esenciales que también funcionan como auxiliares en tiempos compuestos.\n\nPráctica: Conjuga ambos verbos en presente y escribe 4 oraciones combinándolos.",
            seg: null
        },
        {
            titulo: "Présent de l'indicatif (Verbes du 1er groupe -ER)",
            explicacion: "Los verbos regulares terminados en -er (parler, travailler, étudier) sustituyen -er por las terminaciones -e, -es, -e, -ons, -ez, -ent.\n\nPráctica: Conjuga 'travailler' y 'étudier' en todas las personas y redacta dos oraciones.",
            seg: null
        },
        {
            titulo: "La négation simple (Ne... pas)",
            explicacion: "La negación estándar rodea al verbo conjugado con ne ... pas (o n' ... pas delante de vocal o h muda).\n\nPráctica: Pasa cuatro oraciones afirmativas en presente a su forma negativa correcta.",
            seg: null
        },
        {
            titulo: "Les adjectifs possessifs",
            explicacion: "Los posesivos concuerdan con el objeto poseído, no con el poseedor (mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs).\n\nPráctica: Escribe cuatro oraciones indicando pertenencia en singular y plural.",
            seg: null
        },
        {
            titulo: "Le Futur Proche (Aller + Infinitif)",
            explicacion: "Expresa una acción futura cercana o planeada conjugando el verbo aller en presente + el verbo principal en infinitivo (Je vais étudier).\n\nPráctica: Escribe tres planes que vas a realizar hoy o este fin de semana usando Futur Proche.",
            seg: null
        },
        {
            titulo: "Le Passé Composé avec Avoir",
            explicacion: "Se forma con avoir en presente + participio pasado (-er → -é, -ir → -i, -re → -u) para expresar acciones pasadas puntuales y concluidas.\n\nPráctica: Redacta tres oraciones contando acciones que realizaste ayer usando el auxiliar avoir.",
            seg: null
        },
        {
            titulo: "Le Passé Composé avec Être (Accord)",
            explicacion: "Los verbos de movimiento/cambio de estado (aller, venir, arriver, partir, rester...) y los pronominales usan être, y su participio concuerda en género y número con el sujeto.\n\nPráctica: Escribe tres oraciones en Passé Composé con être aplicando concordancia femenina (-e) y plural (-s).",
            seg: null
        },
        {
            titulo: "L'Imparfait de l'indicatif",
            explicacion: "Describe hábitos pasados, estados o escenarios continuos. Se forma con la raíz de 'nous' en presente + -ais, -ais, -ait, -ions, -iez, -aient.\n\nPráctica: Describe cómo era tu rutina diaria o tu escuela hace unos años usando el Imparfait.",
            seg: null
        },
        {
            titulo: "Les pronoms COD et COI",
            explicacion: "Los pronombres COD (le, la, l', les) sustituyen al objeto directo; los COI (lui, leur) sustituyen al objeto indirecto introducido por 'à' + persona.\n\nPráctica: Reescribe tres oraciones reemplazando el complemento por el pronombre COD o COI adecuado.",
            seg: null
        },
        {
            titulo: "Le Conditionnel Présent",
            explicacion: "Sirve para expresar cortesía, deseos o hipótesis (raíz del futuro simple + terminaciones del imparfait: -ais, -ais, -ait, -ions, -iez, -aient).\n\nPráctica: Formula dos peticiones corteses y dos deseos utilizando el Conditionnel Présent.",
            seg: null
        },
        {
            titulo: "Les pronoms y et en",
            explicacion: "'y' reemplaza lugares o complementos introducidos por 'à'; 'en' reemplaza cantidades o complementos introducidos por 'de'.\n\nPráctica: Responde brevemente a cuatro preguntas sustituyendo el complemento con 'y' o con 'en'.",
            seg: null
        },
        {
            titulo: "Le Subjonctif Présent",
            explicacion: "Se emplea en subordinadas introducidas por 'que' tras expresiones de obligación, deseo, duda o emoción (Il faut que..., Je veux que...).\n\nPráctica: Redacta tres oraciones usando 'Il faut que...' y 'Je souhaite que...' en subjuntivo.",
            seg: null
        },
        {
            titulo: "Le Plus-que-parfait",
            explicacion: "Expresa una acción pasada anterior a otra acción también pasada: avoir o être en imparfait + participio pasado.\n\nPráctica: Combina dos hechos pasados mostrando cuál ocurrió primero mediante el Plus-que-parfait.",
            seg: null
        },
        {
            titulo: "La voix passive en français",
            explicacion: "Se construye con être conjugado en el tiempo correspondiente + participio pasado concordado con el sujeto + 'par' + agente.\n\nPráctica: Transforma dos oraciones activas simples a voz pasiva cuidando la concordancia del participio.",
            seg: null
        },
        {
            titulo: "Les propositions relatives (Qui, Que, Où, Dont)",
            explicacion: "Los pronombres relativos enlazan cláusulas evitando repeticiones: qui (sujeto), que (objeto directo), où (lugar o tiempo) y dont (complemento con 'de').\n\nPráctica: Completa o redacta cuatro oraciones utilizando qui, que, où y dont.",
            seg: null
        },
        {
            titulo: "Expression d'hypotèse (Si + imparfait...)",
            explicacion: "La estructura condicional hipotética en presente sigue la regla fija: Si + Imparfait, Conditionnel Présent.\n\nPráctica: Escribe tres oraciones hipotéticas completas siguiendo esta estructura.",
            seg: null
        },
        {
            titulo: "Analyse d'un article technique en français",
            explicacion: "La lectura analítica busca identificar la tesis central, los conectores lógicos y el vocabulario especializado dentro de un texto informativo.\n\nPráctica: Lee un párrafo técnico en francés y resume sus 3 ideas principales.",
            seg: null
        },
        {
            titulo: "Rédaction d'une lettre de motivation officielle",
            explicacion: "Una carta formal francesa incluye encabezado con datos, objeto, saludo (Madame, Monsieur,), exposición de motivación, disponibilidad y fórmula final de cortesía.\n\nPráctica: Redacta una carta de motivación breve (120-150 palabras) para una estancia o puesto técnico.",
            seg: null
        }
    ],

    italiano: [
        {
            titulo: "Alfabeto e pronuncia",
            explicacion: "En italiano las consonantes c y g tienen sonido suave delante de e/i (ciao, gelato) y sonido duro delante de a/o/u o h (casa, che, ghiaccio); además destacan gn, gl y sc.\n\nPráctica: Escribe dos palabras de ejemplo para cada combinación fonética (ce/ci, che/chi, ge/gi, ghe/ghi, gn, gl).",
            seg: null
        },
        {
            titulo: "Articoli determinativi e indeterminativi",
            explicacion: "Los artículos varían según género, número y sonido inicial (il/lo/l'/i/gli para masculino; la/l'/le para femenino; un/uno/una/un' para indefinidos).\n\nPráctica: Antepón el artículo determinado e indeterminado correcto a 6 sustantivos italianos.",
            seg: null
        },
        {
            titulo: "Presente indicativo: Essere e Avere",
            explicacion: "Essere (sono, sei, è, siamo, siete, sono) y Avere (ho, hai, ha, abbiamo, avete, hanno) son irregulares fundamentales y auxiliares de tiempos compuestos.\n\nPráctica: Redacta cuatro oraciones presentándote y describiendo pertenencias o estados con essere y avere.",
            seg: null
        },
        {
            titulo: "Verbi regolari in -are, -ere, -ire",
            explicacion: "Las tres conjugaciones regulares siguen patrones definidos al presente (parlare, scrivere, dormire), y un grupo de verbos en -ire intercala -isc- (capire → capisco).\n\nPráctica: Conjuga un verbo regular de cada grupo (-are, -ere, -ire y -ire con -isc-).",
            seg: null
        },
        {
            titulo: "I sostantivi e il plurale",
            explicacion: "Por regla general, los sustantivos masculinos en -o/-e pasan a -i en plural, mientras que los femeninos en -a pasan a -e y los femeninos en -e pasan a -i.\n\nPráctica: Convierte 8 sustantivos del singular al plural incluyendo casos terminados en -ca/-ga o invariables.",
            seg: null
        },
        {
            titulo: "Gli aggettivi possessivi",
            explicacion: "Concuerdan en género y número con lo poseído y llevan artículo delante (il mio, la mia, i miei, le mie), excepto con nombres de parentela en singular (mio padre).\n\nPráctica: Escribe cuatro oraciones usando posesivos con objetos y con miembros de la familia.",
            seg: null
        },
        {
            titulo: "Preposizioni semplici e articolate",
            explicacion: "Las preposiciones simples (di, a, da, in, con, su, per, tra/fra) se fusionan con el artículo determinado formando preposiciones articuladas (del, alla, nel, sullo...).\n\nPráctica: Completa cinco oraciones eligiendo entre preposición simple o articulada según corresponda.",
            seg: null
        },
        {
            titulo: "Passato Prossimo con Avere e Essere",
            explicacion: "Se forma con presente de avere o essere + participio passato (-ato, -uto, -ito). Con essere el participio concuerda en género y número con el sujeto.\n\nPráctica: Escribe dos oraciones con avere y dos con essere narrando actividades pasadas.",
            seg: null
        },
        {
            titulo: "I verbi modali (Dovere, Potere, Volere)",
            explicacion: "Los verbos modales acompañan a un infinitivo y, en tiempos compuestos, adoptan el auxiliar que exige el verbo en infinitivo.\n\nPráctica: Redacta tres oraciones usando dovere, potere y volere en presente y una en passato prossimo.",
            seg: null
        },
        {
            titulo: "L'Imperfetto indicativo",
            explicacion: "Expresa acciones habituales en el pasado, descripciones o acciones paralelas mediante las terminaciones -vo, -vi, -va, -vamo, -vate, -vano.\n\nPráctica: Describe una rutina o recuerdo de tu infancia en cuatro oraciones usando el Imperfetto.",
            seg: null
        },
        {
            titulo: "Pronomi diretti e indiretti",
            explicacion: "Los pronombres directos (mi, ti, lo, la, ci, vi, li, le) sustituyen al objeto directo; los indirectos (mi, ti, gli, le, ci, vi, gli) responden a 'a chi?'.\n\nPráctica: Reescribe cuatro oraciones sustituyendo el complemento por el pronombre directo o indirecto.",
            seg: null
        },
        {
            titulo: "Futuro semplice e composto",
            explicacion: "El futuro semplice expresa planes o suposiciones futuras; el futuro composto (avere/essere en futuro + participio) indica una acción futura anterior a otra.\n\nPráctica: Escribe dos oraciones en futuro semplice y una combinando futuro composto y semplice.",
            seg: null
        },
        {
            titulo: "Il Condizionale presente",
            explicacion: "Se emplea para expresar deseos, consejos o peticiones amables (-erei, -eresti, -erebbe, -eremmo, -ereste, -erebbero).\n\nPráctica: Formula una petición cortés y dos deseos utilizando el Condizionale presente.",
            seg: null
        },
        {
            titulo: "Il Congiuntivo presente",
            explicacion: "Expresa opinión personal, duda, deseo o necesidad en oraciones subordinadas introducidas por 'che' (Penso che..., Bisogna che...).\n\nPráctica: Completa cuatro oraciones subordinadas utilizando el Congiuntivo presente.",
            seg: null
        },
        {
            titulo: "Il Congiuntivo imperfetto e trapassato",
            explicacion: "Se utilizan en subordinadas dependientes de verbos en pasado o para formular hipótesis irreales y deseos no cumplidos.\n\nPráctica: Redacta dos oraciones empleando el Congiuntivo imperfetto.",
            seg: null
        },
        {
            titulo: "Periodo ipotetico della realtà e della possibilità",
            explicacion: "El periodo de la realidad usa indicativo (Se piove, resto a casa); el de la posibilidad usa congiuntivo imperfetto + condizionale presente (Se avessi tempo, studierei di più).\n\nPráctica: Escribe dos ejemplos para el tipo de la realidad y dos para el de la posibilidad.",
            seg: null
        },
        {
            titulo: "La forma passiva e il si impersonale",
            explicacion: "La voz pasiva se forma con essere o venire + participio passato; el 'si impersonale' generaliza una acción sin especificar sujeto (In Italia si mangia bene).\n\nPráctica: Redacta dos oraciones en forma pasiva y dos con 'si impersonale'.",
            seg: null
        },
        {
            titulo: "Pronomi combinati (Glielo, Ce l'ho)",
            explicacion: "Unen un pronombre indirecto (mi, ti, gli, ci, vi → me, te, glie-, ce, ve) con un pronombre directo (lo, la, li, le) o con 'ne'.\n\nPráctica: Transforma tres oraciones con doble complemento utilizando pronombres combinados.",
            seg: null
        },
        {
            titulo: "Traduzione di documentazione tecnica in italiano",
            explicacion: "Traducir textos técnicos requiere respetar la terminología sectorial italiana y mantener una sintaxis clara y directa.\n\nPráctica: Traduce un breve párrafo técnico sobre informática o redes identificando 5 términos clave.",
            seg: null
        },
        {
            titulo: "Composizione di un saggio argomentativo articolato",
            explicacion: "Un ensayo argumentativo organiza tesis, desarrollo con conectores lógicos (innanzitutto, inoltre, tuttavia, infine) y una conclusión sólida.\n\nPráctica: Redacta un texto argumentativo de 150 palabras sobre el impacto de la automatización.",
            seg: null
        }
    ],

    aritmetica: [
        {
            titulo: "Sumas y restas de numeros enteros con signos",
            explicacion: "Al sumar enteros: signos iguales se suman y conservan su signo; signos distintos se restan y toman el signo del número con mayor valor absoluto. Restar equivale a sumar el opuesto.\n\nPráctica: Resuelve paso a paso: -14 + 9, -6 - 11, 23 - (-8) y -15 + 27 - 12.",
            seg: null
        },
        {
            titulo: "Multiplicacion y division de enteros",
            explicacion: "Ley de signos para producto y cociente:\n\n• (+) · (+) = (+) y (-) · (-) = (+)\n• (+) · (-) = (-) y (-) · (+) = (-)\n\nPráctica: Calcula (-7)(-5), (-48) ÷ 6, 84 ÷ (-4) y (-3)(-4)(-2).",
            seg: null
        },
        {
            titulo: "Jerarquia de operaciones basica",
            explicacion: "Orden estricto de evaluación:\n\n1. Paréntesis y signos de agrupación (de adentro hacia afuera)\n2. Potencias y raíces\n3. Multiplicaciones y divisiones (de izquierda a derecha)\n4. Sumas y restas (de izquierda a derecha)\n\nPráctica: Evalúa 18 + 6 ÷ 3 × 2 - (4 + 5) y 3 × [12 - (2 + 4)² ÷ 6].",
            seg: null
        },
        {
            titulo: "Fracciones equivalentes y simplificacion",
            explicacion: "Dos fracciones son equivalentes si representan la misma razón (a/b = c/d ⇔ a·d = b·c). Simplificar consiste en dividir numerador y denominador entre su MCD hasta hacerla irreducible.\n\nPráctica: Simplifica 36/48 y 84/126 a su mínima expresión y obtén dos fracciones equivalentes a 3/5.",
            seg: null
        },
        {
            titulo: "Suma y resta de fracciones con distinto denominador",
            explicacion: "Se determina el mínimo común denominador (MCM de los denominadores), se amplifica cada fracción equivalente y se operan los numeradores.\n\nPráctica: Calcula 3/4 + 5/6 - 1/2 y 7/8 - 2/3 + 1/4 simplificando el resultado.",
            seg: null
        },
        {
            titulo: "Multiplicacion y division de fracciones",
            explicacion: "La multiplicación se realiza de forma directa (numerador por numerador y denominador por denominador); la división multiplica la primera fracción por el inverso multiplicativo de la segunda.\n\nPráctica: Resuelve (2/5) × (15/8) y (3/7) ÷ (9/14) simplificando antes o después de operar.",
            seg: null
        },
        {
            titulo: "Conversion de fracciones a decimales y viceversa",
            explicacion: "Una fracción se convierte a decimal dividiendo numerador entre denominador; un decimal exacto se escribe sobre la potencia de 10 correspondiente y se simplifica.\n\nPráctica: Convierte 7/8 y 5/16 a decimal, y expresa 0.75 y 0.125 como fracciones irreducibles.",
            seg: null
        },
        {
            titulo: "Operaciones con decimales periodicos",
            explicacion: "Un decimal periódico puro (0.333...) o mixto (0.1666...) tiene una fracción generatriz exacta usando nueves y ceros en el denominador.\n\nPráctica: Convierte 0.333... y 0.666... a fracción y calcula 0.333... + 1/6.",
            seg: null
        },
        {
            titulo: "Leyes de los exponentes (Multiplicacion y division)",
            explicacion: "Para bases iguales (a ≠ 0):\n\n• Producto: a^m · a^n = a^(m+n)\n• Cociente: a^m / a^n = a^(m-n)\n• Potencia de potencia: (a^m)^n = a^(m·n)\n\nPráctica: Simplifica (2⁴ × 2³) / 2⁵ y (3²)³ / 3⁴.",
            seg: null
        },
        {
            titulo: "Potencias con exponente negativo y cero",
            explicacion: "Para todo número real a ≠ 0: a⁰ = 1 y a^(-n) = 1 / a^n (un exponente negativo invierte la base).\n\nPráctica: Evalúa 5⁰ + 2^(-3) y expresa (3/4)^(-2) como fracción positiva.",
            seg: null
        },
        {
            titulo: "Radicacion y simplificacion de radicales",
            explicacion: "Simplificar un radical consiste en factorizar el radicando en factores primos y extraer aquellos cuyo exponente sea múltiplo del índice de la raíz.\n\nPráctica: Simplifica √72, √98 y ³√54.",
            seg: null
        },
        {
            titulo: "Minimo Comun Multiplo (MCM)",
            explicacion: "El MCM es el menor múltiplo positivo común a dos o más enteros; se calcula multiplicando todos los factores primos (comunes y no comunes) elevados a su mayor exponente.\n\nPráctica: Calcula el MCM de (12, 18, 30) y de (15, 25, 40).",
            seg: null
        },
        {
            titulo: "Maximo Comun Divisor (MCD)",
            explicacion: "El MCD es el mayor entero positivo que divide exactamente a todos los números dados; se obtiene multiplicando únicamente los factores primos comunes con su menor exponente.\n\nPráctica: Calcula el MCD de (48, 60, 84) y de (54, 90).",
            seg: null
        },
        {
            titulo: "Razones y Proporciones simples",
            explicacion: "Una razón compara dos cantidades mediante cociente (a/b); una proporción es la igualdad de dos razones (a/b = c/d) donde el producto de medios iguala al producto de extremos.\n\nPráctica: Si la razón entre aprobados y reprobados es 5:2 y aprobaron 35 estudiantes, ¿cuántos reprobaron?",
            seg: null
        },
        {
            titulo: "Regla de tres simple directa e inversa",
            explicacion: "En proporcionalidad directa ambas magnitudes crecen o decrecen juntas; en proporcionalidad inversa, al aumentar una magnitud la otra disminuye en la misma proporción.\n\nPráctica: Resuelve: (a) Si 6 cuadernos cuestan $150, ¿cuánto cuestan 15? (b) Si 4 obreros tardan 12 días, ¿cuánto tardarán 6 obreros?",
            seg: null
        },
        {
            titulo: "Regla de tres compuesta",
            explicacion: "Relaciona tres o más magnitudes comparando cada variable de forma independiente (directa o inversa) respecto a la magnitud desconocida.\n\nPráctica: Si 4 máquinas fabrican 120 piezas en 6 horas, ¿cuántas piezas fabricarán 6 máquinas trabajando 8 horas?",
            seg: null
        },
        {
            titulo: "Calculo de Porcentajes e interes simple",
            explicacion: "El porcentaje representa partes de cada 100 (p% = p/100); el interés simple se calcula mediante I = C · i · t, manteniendo tasa y tiempo en la misma unidad.\n\nPráctica: Calcula el 18% de 450 y el interés simple generado por $2,000 al 5% anual durante 3 años.",
            seg: null
        },
        {
            titulo: "Reparto proporcional",
            explicacion: "Consiste en dividir una cantidad total en partes directamente proporcionales a ciertos índices calculando primero la constante de proporcionalidad k = Total / Suma_indices.\n\nPráctica: Reparte $1,200 de forma directamente proporcional a las edades 2, 3 y 5.",
            seg: null
        },
        {
            titulo: "Problemas de aplicacion con MCM y MCD",
            explicacion: "El MCM resuelve problemas de coincidencia temporal o ciclos repetitivos; el MCD resuelve problemas de partición exacta en bloques o grupos máximos iguales.\n\nPráctica: Dos luces parpadean cada 12 s y 18 s; si coinciden ahora, ¿en cuántos segundos volverán a coincidir?",
            seg: null
        },
        {
            titulo: "Fracciones continuas y criterios avanzados de divisibilidad",
            explicacion: "Las fracciones continuas finitas se evalúan de abajo hacia arriba reduciendo cada nivel; los criterios modulares permiten verificar divisibilidad sin realizar la división larga.\n\nPráctica: Evalúa 1 + 1 / (2 + 1/3) y comprueba si 4,532 es divisible entre 11.",
            seg: null
        }
    ],

    algebra: [
        {
            titulo: "Lenguaje algebraico y reduccion de terminos semejantes",
            explicacion: "Dos o más términos son semejantes si poseen exactamente las mismas variables elevadas a los mismos exponentes, pudiendo sumarse o restarse sus coeficientes.\n\nPráctica: Traduce 'el triple de un número aumentado en el doble de otro' y simplifica 5x + 3y - 2x + 7y - x.",
            seg: null
        },
        {
            titulo: "Suma y resta de polinomios",
            explicacion: "Al restar un polinomio, el signo menos delante del paréntesis cambia el signo de todos los términos interiores antes de agrupar términos semejantes.\n\nPráctica: Efectúa (3x² - 4x + 1) + (2x² + 6x - 5) y (5x² - 2x + 4) - (3x² + 4x - 2).",
            seg: null
        },
        {
            titulo: "Multiplicacion de monomios y polinomios",
            explicacion: "Se multiplican los coeficientes y se suman los exponentes de bases iguales aplicando la propiedad distributiva término a término.\n\nPráctica: Desarrolla 2x(3x² - 5x + 4) y (x + 3)(2x - 5).",
            seg: null
        },
        {
            titulo: "Productos notables: Binomio al cuadrado",
            explicacion: "Permite expandir cuadrados sin multiplicar término a término:\n\n• (a + b)² = a² + 2ab + b²\n• (a - b)² = a² - 2ab + b²\n\nPráctica: Desarrolla (x + 5)² y (2a - 3b)².",
            seg: null
        },
        {
            titulo: "Productos notables: Binomios conjugados",
            explicacion: "El producto de la suma por la diferencia de dos términos iguales produce siempre una diferencia de cuadrados: (a + b)(a - b) = a² - b².\n\nPráctica: Calcula directamente (x + 7)(x - 7) y (3x + 2y)(3x - 2y).",
            seg: null
        },
        {
            titulo: "Factorizacion por factor comun",
            explicacion: "Consiste en extraer el MCD de los coeficientes junto con las variables comunes elevadas a su menor exponente.\n\nPráctica: Factoriza completamente 12x³ - 18x² + 6x y 8a²b - 12ab².",
            seg: null
        },
        {
            titulo: "Factorizacion de diferencia de cuadrados",
            explicacion: "Toda expresión de la forma a² - b² se descompone en el producto de dos binomios conjugados: (a + b)(a - b).\n\nPráctica: Factoriza x² - 49, 16y² - 25 y 9m⁴ - 1.",
            seg: null
        },
        {
            titulo: "Factorizacion de trinomios x^2 + bx + c",
            explicacion: "Se buscan dos números m y n tales que m + n = b y m · n = c para escribir el trinomio como (x + m)(x + n).\n\nPráctica: Factoriza x² + 7x + 12 y x² - 2x - 15.",
            seg: null
        },
        {
            titulo: "Factorizacion de trinomios ax^2 + bx + c",
            explicacion: "Cuando el coeficiente principal a ≠ 1, se busca descomponer el término central (o usar método de aspa/agrupación) para obtener dos binomios lineales.\n\nPráctica: Factoriza 2x² + 7x + 3 y 3x² - 5x - 2.",
            seg: null
        },
        {
            titulo: "Despeje de variables e inecuaciones de 1er grado",
            explicacion: "Al resolver desigualdades lineales, multiplicar o dividir ambos miembros por un número negativo invierte el sentido del signo (< pasa a >).\n\nPráctica: Despeja t en d = v · t + d₀ y resuelve la inecuación -3x + 5 > 14.",
            seg: null
        },
        {
            titulo: "Ecuaciones de primer grado con 1 incognita",
            explicacion: "Se eliminan paréntesis y denominadores, se agrupan términos con incógnita en un miembro y constantes en el otro, y se despeja la variable.\n\nPráctica: Resuelve 4(x - 2) + 3 = 2x + 7 y comprueba sustituyendo el valor hallado.",
            seg: null
        },
        {
            titulo: "Sistemas de ecuaciones 2x2 (Sustitucion/Reduccion)",
            explicacion: "Un sistema lineal 2x2 puede resolverse eliminando una variable mediante suma/resta (reducción) o despejando una variable y sustituyéndola en la otra ecuación.\n\nPráctica: Resuelve el sistema: { x + y = 10 ; 2x - y = 5 }.",
            seg: null
        },
        {
            titulo: "Ecuaciones de 2do grado por formula general",
            explicacion: "Toda ecuación cuadrática ax² + bx + c = 0 (a ≠ 0) se resuelve con x = [-b ± √(b² - 4ac)] / (2a), donde Δ = b² - 4ac indica la naturaleza de las raíces.\n\nPráctica: Resuelve x² - 5x + 6 = 0 y 2x² + 3x - 2 = 0 mediante la fórmula general.",
            seg: null
        },
        {
            titulo: "Simplificacion de fracciones algebraicas",
            explicacion: "Se factorizan completamente numerador y denominador antes de cancelar factores comunes, indicando los valores que anulan el denominador.\n\nPráctica: Simplifica (x² - 9) / (x² + 6x + 9) para x ≠ -3.",
            seg: null
        },
        {
            titulo: "Suma y resta de fracciones algebraicas",
            explicacion: "Se calcula el MCM de los denominadores polinómicos, se ajustan los numeradores y se reducen términos semejantes en el numerador resultante.\n\nPráctica: Efectúa 2/(x - 1) + 3/(x + 1).",
            seg: null
        },
        {
            titulo: "Sistemas de ecuaciones 3x3 por determinantes (Cramer)",
            explicacion: "La regla de Cramer calcula cada incógnita como el cociente entre el determinante de la matriz con la columna sustituida y el determinante principal (Δ ≠ 0).\n\nPráctica: Calcula el determinante principal Δ y el valor de x para un sistema 3x3 dado.",
            seg: null
        },
        {
            titulo: "Logaritmos y sus propiedades",
            explicacion: "Por definición, log_b(x) = y ⇔ b^y = x (con b > 0, b ≠ 1, x > 0). Cumple log(A·B) = log A + log B, log(A/B) = log A - log B y log(A^n) = n·log A.\n\nPráctica: Evalúa log₂(32) y expande log(x² · y / z).",
            seg: null
        },
        {
            titulo: "Ecuaciones exponenciales y logaritmicas",
            explicacion: "Las ecuaciones exponenciales se resuelven igualando bases o aplicando logaritmos; las logarítmicas aplicando la definición exponencial y verificando que los argumentos sean positivos.\n\nPráctica: Resuelve 2^(x+1) = 16 y log₃(2x - 1) = 2.",
            seg: null
        },
        {
            titulo: "Divisibilidad de polinomios y Teorema del Residuo",
            explicacion: "El Teorema del Residuo establece que el residuo de dividir un polinomio P(x) entre (x - a) es igual a P(a).\n\nPráctica: Calcula el residuo de dividir P(x) = x³ - 4x + 6 entre (x - 2) sin hacer la división larga.",
            seg: null
        },
        {
            titulo: "Eliminacion de Gauss-Jordan para matrices NxN",
            explicacion: "Mediante operaciones elementales de fila (intercambiar filas, multiplicar por escalar no nulo, sumar múltiplo de otra fila) se lleva la matriz aumentada a la forma escalonada reducida.\n\nPráctica: Aplica eliminación gaussiana a una matriz aumentada 3x4 para hallar la solución del sistema.",
            seg: null
        }
    ],

    logica: [
        {
            titulo: "Definicion de Proposiciones y conectivos logicos",
            explicacion: "Una proposición es un enunciado declarativo al que se le puede asignar un único valor de verdad (V o F). Los conectivos básicos son: negación (~), conjunción (^), disyunción (v), condicional (->) y bicondicional (<->).\n\nPráctica: Distingue qué frases son proposiciones lógicas y formaliza 'Si estudio y practico, entonces apruebo'.",
            seg: null
        },
        {
            titulo: "Tablas de verdad: Conjuncion (AND) y Disjuncion (OR)",
            explicacion: "La conjunción (p ^ q) es verdadera únicamente cuando ambas proposiciones son verdaderas. La disyunción inclusiva (p v q) es falsa únicamente cuando ambas son falsas.\n\nPráctica: Construye las tablas de verdad completas (4 filas) para p ^ q y p v q.",
            seg: null
        },
        {
            titulo: "Tablas de verdad: Condicional (IF) y Bicondicional",
            explicacion: "El condicional (p -> q) solo es falso cuando el antecedente p es verdadero y el consecuente q es falso. El bicondicional (p <-> q) es verdadero cuando p y q tienen el mismo valor de verdad.\n\nPráctica: Completa las tablas de verdad de p -> q y p <-> q.",
            seg: null
        },
        {
            titulo: "Determinacion de Tautologia, Contradiccion y Contingencia",
            explicacion: "Según su columna resultado final en la tabla de verdad:\n\n• Tautología: todos los valores son V.\n• Contradicción: todos los valores son F.\n• Contingencia: contiene al menos un V y un F.\n\nPráctica: Evalúa (p -> q) <-> (~p v q) y determina si es tautología, contradicción o contingencia.",
            seg: null
        },
        {
            titulo: "Negacion de proposiciones compuestas",
            explicacion: "Negar una proposición compuesta requiere transformar tanto los valores de verdad como los conectivos principales:\n\n• ~(p -> q) equivale a p ^ ~q.\n\nPráctica: Escribe la negación lógica de 'Si llueve, llevo paraguas' y de 'Es lunes o es martes'.",
            seg: null
        },
        {
            titulo: "Leyes de De Morgan",
            explicacion: "Las leyes de De Morgan distribuyen la negación intercambiando conjunción por disyunción y viceversa:\n\n• ~(p ^ q) <=> (~p v ~q)\n• ~(p v q) <=> (~p ^ ~q)\n\nPráctica: Aplica De Morgan para negar ~(x > 0 ^ y > 0) y ~(A v ~B).",
            seg: null
        },
        {
            titulo: "Equivalencias logicas fundamentales",
            explicacion: "Dos fórmulas son lógicamente equivalentes (<=>) si poseen idéntica tabla de verdad (ej. contrapositiva: p -> q <=> ~q -> ~p; doble negación: ~~p <=> p).\n\nPráctica: Comprueba mediante tabla de verdad la equivalencia entre p -> q y su contrapositiva ~q -> ~p.",
            seg: null
        },
        {
            titulo: "Modus Ponens y Modus Tollens",
            explicacion: "Reglas básicas de inferencia deductiva válida:\n\n• Modus Ponens: [ (p -> q) ^ p ] => q\n• Modus Tollens: [ (p -> q) ^ ~q ] => ~p\n\nPráctica: Construye un argumento cotidiano válido aplicando Modus Ponens y otro aplicando Modus Tollens.",
            seg: null
        },
        {
            titulo: "Silogismo Hipotetico y Disyuntivo",
            explicacion: "El silogismo hipotético encadena implicaciones: [ (p -> q) ^ (q -> r) ] => (p -> r). El silogismo disyuntivo descarta una alternativa: [ (p v q) ^ ~p ] => q.\n\nPráctica: Deriva la conclusión válida de: 'Si hay red, hay acceso; si hay acceso, descargo el archivo; hay red'.",
            seg: null
        },
        {
            titulo: "Formalizacion del lenguaje natural al simbolico",
            explicacion: "Formalizar consiste en asignar letras proposicionales (p, q, r) a enunciados atómicos y traducir expresiones como 'a menos que' (v), 'solo si' (->) y 'ni... ni...' (~p ^ ~q).\n\nPráctica: Formaliza simbolizando cada proposición: 'No saldré a menos que deje de llover y termine mi tarea'.",
            seg: null
        },
        {
            titulo: "Cuantificadores: Universal (forall) y Existencial (exists)",
            explicacion: "En lógica de predicados, el cuantificador universal (∀x) afirma que la propiedad se cumple para todos los elementos del dominio, y el existencial (∃x) afirma que se cumple para al menos uno.\n\nPráctica: Simboliza 'Todos los números primos mayores que 2 son impares' y 'Existe un número entero cuyo cuadrado es 9'.",
            seg: null
        },
        {
            titulo: "Negacion de cuantificadores",
            explicacion: "Al negar un cuantificador, este cambia al cuantificador dual y se niega el predicado:\n\n• ~(∀x P(x)) <=> ∃x ~P(x)\n• ~(∃x P(x)) <=> ∀x ~P(x)\n\nPráctica: Niega formalmente 'Todos los servidores están actualizados' y 'Algún paquete se perdió'.",
            seg: null
        },
        {
            titulo: "Arboles de decision logica",
            explicacion: "Los árboles semánticos o de decisión ramifican asignaciones de verdad (V/F) para verificar sistemáticamente si una fórmula es satisfacible o válida.\n\nPráctica: Construye el árbol de evaluación para (p ^ q) -> r explorando sus ramas.",
            seg: null
        },
        {
            titulo: "Algebra de Boole: Operaciones basicas",
            explicacion: "Opera sobre el conjunto binario {0, 1} con suma lógica OR (+), producto lógico AND (·) y complemento NOT (').\n\nPráctica: Evalúa F = A · (B + C') + B' para la combinación A = 1, B = 0, C = 1.",
            seg: null
        },
        {
            titulo: "Simplificacion de expresiones booleanas con identidades",
            explicacion: "Identidades como identidad (A+0=A, A·1=A), complemento (A+A'=1, A·A'=0) y absorción (A + A·B = A) permiten reducir circuitos lógicos.\n\nPráctica: Simplifica paso a paso F = A·B + A·B' + A'·B.",
            seg: null
        },
        {
            titulo: "Representacion de puertas logicas (AND, OR, NOT, NAND, NOR)",
            explicacion: "Cada operación booleana corresponde a una compuerta física; NAND y NOR se consideran compuertas universales porque permiten construir cualquier otra función.\n\nPráctica: Escribe la tabla de verdad de 2 entradas para las compuertas NAND y NOR.",
            seg: null
        },
        {
            titulo: "Mapas de Karnaugh para 3 variables",
            explicacion: "Organiza los 8 minitérminos usando código Gray (00, 01, 11, 10) para agrupar '1's adyacentes en potencias de 2 (grupos de 1, 2, 4 u 8) eliminando variables que cambian.\n\nPráctica: Simplifica F(A,B,C) = Σm(0, 2, 4, 6) usando un mapa de Karnaugh de 3 variables.",
            seg: null
        },
        {
            titulo: "Mapas de Karnaugh para 4 variables",
            explicacion: "Extiende la tabla a 16 celdas donde los bordes superior/inferior e izquierdo/derecho son adyacentes entre sí.\n\nPráctica: Agrupa los unos de F(A,B,C,D) = Σm(0, 1, 4, 5, 10, 11, 14, 15) y escribe la expresión mínima.",
            seg: null
        },
        {
            titulo: "Demostracion formal mediante deduccion natural",
            explicacion: "Consiste en derivar una conclusión paso a paso desde un conjunto de premisas justificando cada línea con una regla de inferencia o equivalencia.\n\nPráctica: Demuestra r a partir de las premisas: 1) p -> q, 2) q -> r, 3) ~r -> ~p, 4) p.",
            seg: null
        },
        {
            titulo: "Demostracion por contradiccion (Reductio ad absurdum)",
            explicacion: "Para demostrar una conclusión C, se asume temporalmente ~C como premisa adicional y se deduce una contradicción (X ^ ~X), probando que C debe ser verdadera.\n\nPráctica: Aplica reducción al absurdo para demostrar que de (p -> q) y (p -> ~q) se concluye ~p.",
            seg: null
        }
    ]
};
