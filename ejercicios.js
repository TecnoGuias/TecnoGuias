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

// Bloque: Informática (redes, python, java, bash) para ejercicios.js
const bancoEjerciciosInformatica = {
    redes: [
        {
            titulo: "Nodos, medios, dispositivos (router/switch/AP) y protocolos",
            explicacion: "Una red conecta nodos (endpoints) mediante medios de transmisión y dispositivos de red como router, switch y Access Point (AP), comunicándose bajo protocolos.\n\nPráctica: Identifica el rol de un router, un switch y un Access Point y explica qué es un nodo y un protocolo de red.",
            seg: 171
        },
        {
            titulo: "Arquitecturas cliente-servidor y peer-to-peer (P2P)",
            explicacion: "En la arquitectura cliente-servidor un cliente solicita recursos o servicios a un servidor, mientras que en P2P los nodos participan de forma distribuida sin depender de un servidor central.\n\nPráctica: Explica la diferencia entre cliente-servidor y P2P y menciona un ejemplo de uso de cada modelo.",
            seg: 171
        },
        {
            titulo: "Modelo OSI y modelo TCP/IP",
            explicacion: "El modelo OSI organiza la comunicación en 7 capas de referencia y el modelo TCP/IP agrupa funciones en 4 capas prácticas utilizadas en redes actuales.\n\nPráctica: Compara las capas del modelo OSI con las del modelo TCP/IP y ubica en qué capa operan el enrutamiento y los protocolos de aplicación.",
            seg: 936
        },
        {
            titulo: "Puertos y protocolos de red comunes",
            explicacion: "Los servicios de red se asocian a puertos y protocolos como FTP, SSH, Telnet, SMTP, POP3/IMAP, HTTP/HTTPS, SMB, DNS y servicios de bases de datos.\n\nPráctica: Relaciona cada protocolo (FTP, SSH, Telnet, SMTP, POP3/IMAP, HTTP/HTTPS, SMB, DNS, bases de datos) con su función principal.",
            seg: 2694
        },
        {
            titulo: "Diferencia entre SSH y Telnet en administración remota",
            explicacion: "Tanto SSH como Telnet permiten administración remota, pero SSH cifra la comunicación mientras Telnet transmite en texto plano.\n\nPráctica: Explica por qué se prefiere SSH frente a Telnet al administrar un equipo remotamente.",
            seg: 2694
        },
        {
            titulo: "HTTP frente a HTTPS y resolución con DNS",
            explicacion: "HTTP y HTTPS corresponden al tráfico web (con cifrado en HTTPS), mientras que DNS traduce nombres de dominio a direcciones IP.\n\nPráctica: Describe qué ocurre desde que escribes un dominio hasta que carga el sitio web usando DNS y HTTP/HTTPS.",
            seg: 2694
        },
        {
            titulo: "Protocolos de correo (SMTP, POP3/IMAP) y acceso/archivos (FTP, SMB)",
            explicacion: "SMTP se usa para envío de correo, POP3/IMAP para gestión/lectura de correo, y FTP o SMB para transferencia y compartición de archivos.\n\nPráctica: Clasifica SMTP, POP3/IMAP, FTP y SMB según si corresponden a correo o a archivos.",
            seg: 2694
        },
        {
            titulo: "IPv4 e IPv6 y direcciones públicas frente a privadas",
            explicacion: "Existen versiones de direccionamiento como IPv4 e IPv6, y distinciones entre direcciones IP privadas (red local) y públicas (salida a internet).\n\nPráctica: Explica la diferencia entre una dirección IP privada y una IP pública y por qué coexisten IPv4 e IPv6.",
            seg: 3141
        },
        {
            titulo: "Funcionamiento de NAT y DHCP en una red",
            explicacion: "NAT traduce direcciones entre redes privadas y públicas, mientras DHCP asigna configuración de red de forma dinámica a los dispositivos.\n\nPráctica: Explica cómo ayudan DHCP y NAT a conectar múltiples dispositivos de una red local a internet.",
            seg: 3141
        },
        {
            titulo: "Dirección física MAC y su relación con la IP",
            explicacion: "La dirección MAC identifica la interfaz a nivel de enlace, complementando a la dirección IP que identifica al dispositivo en la red.\n\nPráctica: Explica en qué se diferencian una dirección MAC y una dirección IP.",
            seg: 3141
        },
        {
            titulo: "Montaje de laboratorio con VirtualBox, Kali Linux y Metasploitable 2",
            explicacion: "El laboratorio virtualiza máquinas en VirtualBox—como Kali Linux y Metasploitable 2—para practicar redes en un entorno aislado.\n\nPráctica: Describe el propósito de usar Kali Linux junto a Metasploitable 2 en VirtualBox dentro de un laboratorio de redes.",
            seg: 4003
        },
        {
            titulo: "Verificación de conectividad con ping",
            explicacion: "El comando ping permite comprobar si un host responde a través de la red y observar la comunicación entre máquinas del laboratorio.\n\nPráctica: Explica qué indica una respuesta exitosa o sin respuesta al ejecutar ping hacia otra máquina.",
            seg: 4003
        },
        {
            titulo: "Captura y análisis de tráfico con Wireshark",
            explicacion: "Wireshark captura paquetes en la red para inspeccionar el tráfico que circula entre los equipos del laboratorio.\n\nPráctica: Explica qué información puedes observar en Wireshark al generar tráfico entre dos máquinas.",
            seg: 4003
        },
        {
            titulo: "Escaneo de hosts y puertos con nmap",
            explicacion: "nmap permite explorar una máquina o red en el laboratorio para detectar puertos abiertos y servicios expuestos.\n\nPráctica: Explica para qué se utiliza nmap sobre un objetivo de laboratorio como Metasploitable 2.",
            seg: 4003
        },
        {
            titulo: "Comparación de tráfico y conexiones con SSH y Telnet",
            explicacion: "Al probar conexiones SSH y Telnet en el laboratorio se evidencia la diferencia de seguridad entre ambos protocolos al inspeccionar el tráfico.\n\nPráctica: Explica qué ventaja de seguridad se observa en SSH respecto a Telnet al analizar el tráfico de red.",
            seg: 4003
        },
        {
            titulo: "Encapsulación de protocolos en modelo TCP/IP",
            explicacion: "En la comunicación en red, los protocolos de aplicación, transporte y red trabajan de forma coordinada sobre el modelo TCP/IP.\n\nPráctica: Explica cómo colaboran las capas de red, transporte y aplicación al establecer una conexión hacia un servicio.",
            seg: 936
        },
        {
            titulo: "Identificación de dispositivos intermedios y finales en una LAN",
            explicacion: "Una red combina nodos finales y dispositivos intermedios (router, switch, AP) sobre medios de conexión para compartir recursos.\n\nPráctica: Clasifica los elementos de una red doméstica o de laboratorio en nodos finales, medios y dispositivos de red.",
            seg: 171
        },
        {
            titulo: "Puertos de servicios de bases de datos en servidores",
            explicacion: "Los servicios de bases de datos también operan mediante puertos y protocolos de red para atender conexiones de clientes.\n\nPráctica: Explica el rol de los puertos de red cuando un cliente se conecta a un servicio de base de datos.",
            seg: 2694
        },
        {
            titulo: "Diagnóstico básico de red en entorno virtualizado",
            explicacion: "Combinar ping, nmap y Wireshark en VirtualBox permite verificar alcance, puertos y tráfico entre Kali Linux y Metasploitable 2.\n\nPráctica: Ordena los pasos básicos para comprobar conectividad, escanear servicios y observar el tráfico en el laboratorio.",
            seg: 4003
        },
        {
            titulo: "Repaso integral de direccionamiento y protocolos",
            explicacion: "IPv4/IPv6, públicas/privadas, NAT, DHCP y MAC permiten ubicar y configurar dispositivos que se comunican mediante protocolos TCP/IP.\n\nPráctica: Resume en tus palabras cómo se identifican y comunican dos equipos dentro y fuera de su red local.",
            seg: 3141
        }
    ],

    python: [
        {
            titulo: "Entorno y extensión de Python en VS Code",
            explicacion: "Configurar el entorno e instalar la extensión de Python en VS Code prepara el editor para ejecutar y trabajar con código Python.\n\nPráctica: Configura la extensión de Python en VS Code y verifica que tu entorno ejecuta código sin errores.",
            seg: 1433
        },
        {
            titulo: "Creación y ejecución de archivos .py",
            explicacion: "Los programas en Python se escriben en archivos con extensión .py y se ejecutan desde el editor o la terminal.\n\nPráctica: Crea un archivo hola.py y ejecútalo para comprobar la salida del programa.",
            seg: 1889
        },
        {
            titulo: "Variables y tipos básicos (str, int, bool, None)",
            explicacion: "En Python las variables almacenan valores sin declaración de tipo explícita, incluyendo str, int, bool y None.\n\nPráctica: Crea variables de tipo str, int, bool y None y asígnales valores de ejemplo.",
            seg: 3390
        },
        {
            titulo: "Impresión con print() y consulta de tipo con type()",
            explicacion: "La función print() muestra valores en pantalla y type() permite consultar el tipo de dato de una variable o expresión.\n\nPráctica: Imprime distintas variables con print() y muestra el resultado de type() para cada una.",
            seg: 3663
        },
        {
            titulo: "Inspección de tipos str y int con print y type",
            explicacion: "Combinar print() y type() ayuda a distinguir cadenas de texto (str) de números enteros (int) durante las primeras pruebas.\n\nPráctica: Declara un texto y un entero e imprime ambos junto con su tipo usando type().",
            seg: 3663
        },
        {
            titulo: "Uso de valores booleanos (bool) y ausencia de valor (None)",
            explicacion: "Los tipos bool representan valores lógicos y None representa la ausencia de valor en una variable.\n\nPráctica: Crea una variable booleana y otra con valor None, y comprueba sus tipos con type().",
            seg: 3390
        },
        {
            titulo: "Organización de scripts en archivos .py",
            explicacion: "Separar pruebas en archivos .py ordenados facilita mantener y ejecutar tus prácticas iniciales en VS Code.\n\nPráctica: Crea un archivo variables.py que defina variables básicas y las imprima en consola.",
            seg: 1889
        },
        {
            titulo: "Verificación de entorno de trabajo en VS Code",
            explicacion: "Contar con la extensión de Python activa en VS Code facilita escribir y correr scripts de forma fluida.\n\nPráctica: Abre un archivo .py en VS Code y comprueba que el editor reconoce el lenguaje Python.",
            seg: 1433
        },
        {
            titulo: "Importación de módulos y uso de math",
            explicacion: "Los módulos permiten reutilizar funciones y constantes externas, como ocurre al importar el módulo math.\n\nPráctica: Importa el módulo math y accede a sus recursos matemáticos dentro de un archivo .py.",
            seg: 36177
        },
        {
            titulo: "Importación selectiva con from math import pi",
            explicacion: "Con from math import pi puedes traer directamente la constante pi sin escribir el prefijo del módulo.\n\nPráctica: Importa pi desde math e imprímelo usando print().",
            seg: 36177
        },
        {
            titulo: "Renombrado de importaciones con alias (as)",
            explicacion: "La palabra clave as permite asignar un alias a un módulo o elemento importado para referenciarlo con el nombre elegido.\n\nPráctica: Importa pi desde math con un alias usando as e imprímelo con print().",
            seg: 36177
        },
        {
            titulo: "Comparación entre importar un elemento y usar alias as",
            explicacion: "Importar directamente con from ... import ... y renombrar con as son variantes útiles para organizar nombres en un script.\n\nPráctica: Prueba importar pi con y sin alias as en un archivo .py y observa cómo cambia su uso.",
            seg: 36177
        },
        {
            titulo: "Práctica de variables y tipos en nuevo archivo .py",
            explicacion: "Crear archivos .py específicos permite probar variables str, int, bool y None de manera limpia.\n\nPráctica: Escribe un script en un archivo .py con variables de distintos tipos y revisa su salida.",
            seg: 1889
        },
        {
            titulo: "Diagnóstico rápido de tipos con type()",
            explicacion: "Llamar a type() sobre variables asignadas permite confirmar en tiempo de ejecución qué tipo de dato contiene cada una.\n\nPráctica: Evalúa con type() variables de texto, enteras, booleanas y None e imprímelas.",
            seg: 3663
        },
        {
            titulo: "Uso de constantes importadas en cálculos básicos",
            explicacion: "Importar pi desde math permite emplear su valor numérico en expresiones e imprimir el resultado con print().\n\nPráctica: Importa pi desde math y calcula su doble o su cuadrado mostrándolo con print().",
            seg: 36177
        },
        {
            titulo: "Estructura inicial de un proyecto en VS Code",
            explicacion: "Tener el entorno, la extensión de Python y archivos .py bien organizados sienta la base del curso desde cero.\n\nPráctica: Crea una carpeta de práctica con al menos dos archivos .py y ejecútalos desde VS Code.",
            seg: 1433
        },
        {
            titulo: "Asignación y reasignación de variables básicas",
            explicacion: "Las variables en Python pueden recibir distintos valores (str, int, bool, None) y comprobarse con type().\n\nPráctica: Asigna un valor a una variable, imprime su valor y su tipo, y cámbiala a otro tipo.",
            seg: 3390
        },
        {
            titulo: "Formato de salida en consola con print()",
            explicacion: "print() es la función principal para mostrar mensajes, variables y resultados al ejecutar un script.\n\nPráctica: Muestra en consola el nombre, el valor y el tipo de dos variables usando print() y type().",
            seg: 3663
        },
        {
            titulo: "Reutilización de código mediante módulos",
            explicacion: "El uso de módulos como math evita reescribir constantes o funciones ya disponibles en la librería.\n\nPráctica: Importa un elemento de math con alias as y utilízalo dentro de tu script.",
            seg: 36177
        },
        {
            titulo: "Repaso de fundamentos iniciales en Python",
            explicacion: "Desde la configuración en VS Code y archivos .py hasta variables, print/type y módulos como math, cada paso consolida las bases.\n\nPráctica: Crea un archivo .py que combine variables básicas, print(), type() y una importación de math.",
            seg: 1889
        }
    ],

    java: [
        {
            titulo: "Instalación del JDK, compilador javac y JAVA_HOME",
            explicacion: "Para desarrollar en Java se instala el JDK, se utiliza el compilador javac y se configura la variable de entorno JAVA_HOME.\n\nPráctica: Verifica que tienes instalado el JDK, comprueba javac y revisa la configuración de JAVA_HOME en tu sistema.",
            seg: 2724
        },
        {
            titulo: "Configuración de proyecto, IDE, plantillas y atajos",
            explicacion: "Preparar el proyecto en el IDE y aprovechar plantillas y atajos agiliza la escritura y organización del código Java.\n\nPráctica: Crea un proyecto en tu IDE y prueba al menos una plantilla de código y un atajo de teclado habitual.",
            seg: 3818
        },
        {
            titulo: "Estructura del método main y uso del punto y coma (;)",
            explicacion: "El punto de entrada de un programa en Java es el método main, y las sentencias finalizan con punto y coma (;).\n\nPráctica: Escribe una clase con el método main e incluye sentencias terminadas con punto y coma (;).",
            seg: 4545
        },
        {
            titulo: "Compilación y ejecución de un programa con main",
            explicacion: "Una vez configurado el JDK y escrito el método main con su sintaxis y punto y coma, el programa puede compilarse y ejecutarse.\n\nPráctica: Crea una clase con método main que imprima un mensaje y compílala/ejecútala en tu entorno.",
            seg: 4545
        },
        {
            titulo: "Lectura de datos con Scanner en ejercicios extra",
            explicacion: "En los ejercicios extra del cierre del curso se utiliza Scanner para recibir entrada de datos del usuario.\n\nPráctica: Implementa un programa con Scanner que lea datos ingresados por el usuario y los muestre.",
            seg: 31588
        },
        {
            titulo: "Uso de constantes con final en ejercicios extra",
            explicacion: "La palabra clave final permite definir constantes cuyo valor no debe reasignarse durante la ejecución.\n\nPráctica: Declara una constante con final y utilízala dentro de un ejercicio práctico.",
            seg: 31588
        },
        {
            titulo: "Generación de valores aleatorios con Random",
            explicacion: "Dentro de los ejercicios extra finales se propone utilizar Random para generar números aleatorios.\n\nPráctica: Utiliza Random para generar un número aleatorio y mostrarlo en consola.",
            seg: 31588
        },
        {
            titulo: "Programación Orientada a Objetos en ejercicios extra",
            explicacion: "El curso integra POO para modelar entidades con atributos y comportamientos dentro de clases.\n\nPráctica: Define una clase con atributos y métodos en los ejercicios extra y crea una instancia para probar su comportamiento.",
            seg: 31588
        },
        {
            titulo: "Depuración (debug) paso a paso del código Java",
            explicacion: "Practicar debug permite recorrer el código y observar el comportamiento del programa durante su ejecución.\n\nPráctica: Ejecuta tu programa en modo debug y revisa el flujo de ejecución línea por línea.",
            seg: 31588
        },
        {
            titulo: "Revisión de variables de entorno y compilación",
            explicacion: "Tener bien definido JAVA_HOME y accesible javac evita errores al compilar programas Java.\n\nPráctica: Comprueba en tu terminal que javac responde correctamente y que JAVA_HOME apunta al JDK.",
            seg: 2724
        },
        {
            titulo: "Productividad en el IDE con plantillas y atajos",
            explicacion: "Conocer plantillas y atajos del IDE reduce errores repetitivos al crear clases y métodos en Java.\n\nPráctica: Genera la estructura principal de una clase usando una plantilla o atajo de tu IDE.",
            seg: 3818
        },
        {
            titulo: "Sintaxis de sentencias y punto y coma en main",
            explicacion: "Omitir el punto y coma (;) en una sentencia en Java provoca un error de compilación o sintaxis.\n\nPráctica: Escribe varias líneas dentro de main respetando el punto y coma (;) al final de cada instrucción.",
            seg: 4545
        },
        {
            titulo: "Combinación de Scanner y final en un programa",
            explicacion: "Combinar entrada con Scanner y constantes con final permite validar o comparar datos ingresados frente a un límite fijo.\n\nPráctica: Crea un programa con una constante final y lee un valor con Scanner para compararlo.",
            seg: 31588
        },
        {
            titulo: "Práctica con Random y depuración (debug)",
            explicacion: "Generar valores con Random y ejecutar debug ayuda a observar variables cambiantes en cada prueba.\n\nPráctica: Genera un valor con Random y depura el código para inspeccionar su resultado.",
            seg: 31588
        },
        {
            titulo: "Modelado de clase con POO y pruebas",
            explicacion: "Diseñar clases con POO organiza la lógica del programa y facilita probar sus métodos desde main.\n\nPráctica: Crea una clase con comportamiento propio e invoca sus métodos desde un ejercicio de práctica.",
            seg: 31588
        },
        {
            titulo: "Organización de proyectos en el entorno de desarrollo",
            explicacion: "Mantener el proyecto bien configurado en el IDE facilita compilar, ejecutar y depurar las clases del curso.\n\nPráctica: Organiza tus clases de práctica dentro de un proyecto en tu IDE y comprueba su ejecución.",
            seg: 3818
        },
        {
            titulo: "Punto de entrada único con el método main",
            explicacion: "Java busca el método main para iniciar la ejecución del programa.\n\nPráctica: Implementa el método main dentro de una clase y muestra un mensaje inicial.",
            seg: 4545
        },
        {
            titulo: "Resolución de ejercicios extra integradores",
            explicacion: "Los ejercicios extra del final reúnen Scanner, final, Random, POO y debug para consolidar lo aprendido.\n\nPráctica: Resuelve un ejercicio extra que combine una clase POO y entrada con Scanner o generación con Random.",
            seg: 31588
        },
        {
            titulo: "Comprobación del entorno JDK antes de programar",
            explicacion: "Contar con el JDK instalado y JAVA_HOME configurado es el primer paso para compilar con javac.\n\nPráctica: Verifica la versión del JDK y de javac desde la terminal.",
            seg: 2724
        },
        {
            titulo: "Repaso general de fundamentos y POO en Java",
            explicacion: "Desde la instalación del JDK y configuración del IDE hasta main, punto y coma y los ejercicios extra con POO y debug.\n\nPráctica: Crea una clase con método main y aplica al menos dos elementos de los ejercicios extra (Scanner, final, Random, POO o debug).",
            seg: 31588
        }
    ],

    bash: [
        {
            titulo: "Diferencia entre shell y emulador de terminal",
            explicacion: "La shell es el intérprete que procesa las órdenes y el emulador de terminal es la aplicación donde interactúas con ellas.\n\nPráctica: Explica con tus palabras la diferencia entre shell y emulador de terminal y comprueba qué shell estás usando.",
            seg: 238
        },
        {
            titulo: "Uso de Warp y configuración de WSL en Windows",
            explicacion: "El curso emplea Warp como terminal moderna y muestra cómo trabajar con WSL en Windows para usar un entorno Linux.\n\nPráctica: Abre tu terminal (como Warp o WSL en Windows) y verifica que puedes ejecutar comandos básicos.",
            seg: 546
        },
        {
            titulo: "Navegación por directorios con cd .. y ~",
            explicacion: "En la terminal puedes moverte entre carpetas utilizando rutas, subiendo niveles con cd .. o volviendo al directorio home con ~.\n\nPráctica: Cambia de directorio usando ~ para ir a tu carpeta home y sube de nivel con cd ..",
            seg: 2823
        },
        {
            titulo: "Consulta de ruta actual con pwd y listado con ls -a",
            explicacion: "pwd muestra el directorio de trabajo actual y ls -a lista los elementos incluyendo los archivos o carpetas ocultos.\n\nPráctica: Ejecuta pwd para ver tu ubicación actual y usa ls -a para listar archivos visibles y ocultos.",
            seg: 2823
        },
        {
            titulo: "Visualización de archivos ocultos con ls -a",
            explicacion: "La opción -a en ls permite ver archivos ocultos (los que comienzan con punto) que no aparecen en un listado simple.\n\nPráctica: Navega a una carpeta de trabajo y ejecuta ls -a para identificar archivos ocultos.",
            seg: 2823
        },
        {
            titulo: "Rutas relativas y atajo de directorio home (~)",
            explicacion: "Combinar ~ con rutas relativas o cd .. permite desplazarte rápidamente por el sistema de archivos.\n\nPráctica: Usa cd ~ y luego cd .. verificando con pwd en cada paso dónde te encuentras.",
            seg: 2823
        },
        {
            titulo: "Entorno de trabajo en Windows con WSL",
            explicacion: "WSL permite ejecutar un entorno Linux y su shell dentro de Windows para practicar comandos de terminal.\n\nPráctica: Si usas Windows, abre WSL y ejecuta pwd y ls -a para confirmar el entorno.",
            seg: 546
        },
        {
            titulo: "Flujo de trabajo en la terminal con Warp",
            explicacion: "Warp ofrece una interfaz de terminal diseñada para escribir comandos y trabajar de forma ágil.\n\nPráctica: Prueba navegar entre carpetas en Warp y revisa tu ruta con pwd.",
            seg: 546
        },
        {
            titulo: "Identificación del intérprete (shell) activo",
            explicacion: "Distinguir entre el programa de terminal y la shell ayuda a entender qué intérprete lee tus comandos.\n\nPráctica: Revisa qué shell tienes activa y explica qué rol cumple frente al emulador de terminal.",
            seg: 238
        },
        {
            titulo: "Transición de Bash a ZSH como siguiente paso",
            explicacion: "Al cerrar el curso se plantea ZSH como evolución y siguiente paso natural tras aprender Bash y la terminal.\n\nPráctica: Explica por qué ZSH se propone como siguiente paso tras dominar los fundamentos de Bash.",
            seg: 20857
        },
        {
            titulo: "Recorrido guiado de carpetas con pwd, ls -a y cd",
            explicacion: "Practicar pwd, ls -a, cd .. y ~ en secuencia permite moverse con seguridad por el sistema de archivos.\n\nPráctica: Ejecuta pwd, lista con ls -a, entra a un subdirectorio, vuelve con cd .. y regresa a ~.",
            seg: 2823
        },
        {
            titulo: "Verificación de ubicación tras desplazarse con cd ..",
            explicacion: "Ejecutar pwd después de usar cd .. confirma exactamente a qué directorio padre te moviste.\n\nPráctica: Baja dos niveles o entra a una carpeta, ejecuta cd .. y comprueba la ruta con pwd.",
            seg: 2823
        },
        {
            titulo: "Exploración de archivos ocultos en el directorio home",
            explicacion: "Ir a ~ y ejecutar ls -a permite ver configuraciones y archivos ocultos propios del usuario.\n\nPráctica: Ve a tu directorio home con ~ y ejecuta ls -a para observar los archivos ocultos presentes.",
            seg: 2823
        },
        {
            titulo: "Fundamentos de shell y terminal al iniciar",
            explicacion: "Entender qué es la shell y qué es el emulador de terminal evita confusiones al abrir la consola.\n\nPráctica: Resume en dos frases qué hace la shell y qué hace el emulador de terminal.",
            seg: 238
        },
        {
            titulo: "Preparación del entorno en Windows o con Warp",
            explicacion: "Contar con Warp o WSL listo permite practicar los comandos del curso sin fricciones.\n\nPráctica: Verifica tu entorno de terminal (Warp, WSL o terminal del sistema) y ejecuta un comando de navegación.",
            seg: 546
        },
        {
            titulo: "Comparación conceptual entre Bash y ZSH",
            explicacion: "ZSH se presenta como el siguiente paso tras Bash para ampliar la experiencia en línea de comandos.\n\nPráctica: Anota qué aspectos de ZSH te gustaría explorar después de practicar Bash.",
            seg: 20857
        },
        {
            titulo: "Práctica de comandos básicos de navegación",
            explicacion: "Los comandos ls -a, cd .., ~ y pwd son esenciales para moverse e inspeccionar carpetas en la terminal.\n\nPráctica: Realiza un recorrido de 5 comandos usando ~, pwd, ls -a y cd ..",
            seg: 2823
        },
        {
            titulo: "Comprobación de rutas y carpetas en el sistema",
            explicacion: "pwd te da certeza de tu ruta actual antes de listar o cambiar de directorio.\n\nPráctica: Muestra tu ruta con pwd, lista con ls -a y cambia de carpeta con cd.",
            seg: 2823
        },
        {
            titulo: "Uso cotidiano de la terminal y siguientes pasos",
            explicacion: "La práctica constante en la terminal y explorar ZSH tras Bash consolidan el trabajo en línea de comandos.\n\nPráctica: Planifica una rutina corta de comandos en terminal y revisa el paso hacia ZSH.",
            seg: 20857
        },
        {
            titulo: "Repaso integral del bloque de Bash y terminal",
            explicacion: "Integra la diferencia entre shell y terminal, el entorno (Warp/WSL), la navegación (ls -a, cd .., ~, pwd) y el paso a ZSH.\n\nPráctica: Ejecuta un flujo completo de navegación con pwd, ls -a, cd .. y ~ y anota qué sigue con ZSH.",
            seg: 2823
        }
    ]
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
