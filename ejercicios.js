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
};

// Bloque: Idiomas (ingles, frances, italiano) para ejercicios.js
const bancoEjerciciosIdiomas = {
    ingles: [
        {
            titulo: "Sonidos de vocales, consonantes, dígrafos y estrés silábico",
            explicacion: "El inglés no es fonético y cuenta con sonidos vocálicos, consonánticos y dígrafos (ch, sh, th, ph), además del estrés en distintas sílabas.\n\nPráctica: Practica la diferencia entre sonidos vocálicos y consonánticos y el estrés silábico en palabras como understand, comfortable e information.",
            seg: 58
        },
        {
            titulo: "Reglas de escucha, lectura acompañada e imitación",
            explicacion: "Dominar la pronunciación requiere escuchar a diario, acompañar la lectura con audio e imitar lo escuchado en lugar de leer con sonidos del español.\n\nPráctica: Escucha una frase o texto corto en inglés mientras lees y repítelo imitando los sonidos que oíste.",
            seg: 480
        },
        {
            titulo: "Pronombres personales y uso neutro de 'it'",
            explicacion: "Los pronombres incluyen I, you, he, she, it, we, you/you guys y they, usando 'it' para objetos, animales, ideas o el clima.\n\nPráctica: Elige el pronombre adecuado (I, you, he, she, it, we, they) para referirte a una persona, a ti mismo y a un objeto o animal.",
            seg: 3641
        },
        {
            titulo: "Artículos indefinidos (a/an), definido (the) y 'some'",
            explicacion: "Se usa 'a' antes de sonido consonante, 'an' antes de sonido vocálico, 'the' para definido y 'some' para plurales indefinidos.\n\nPráctica: Completa frases usando a, an, the o some según el sonido inicial y si el sustantivo es singular o plural.",
            seg: 787
        },
        {
            titulo: "Demostrativos this, that, these y those",
            explicacion: "'This' y 'these' señalan lo cercano (singular y plural), mientras 'that' y 'those' señalan lo lejano (singular y plural).\n\nPráctica: Formula oraciones con this, that, these y those para describir objetos cercanos o lejanos.",
            seg: 980
        },
        {
            titulo: "Verbos en tiempo presente y forma base con 'to'",
            explicacion: "Los verbos en forma base llevan 'to' (to drink, to speak, to go), y en presente afirmativo se usa la forma base o se añade -s/-es con he, she, it.\n\nPráctica: Escribe oraciones en presente con verbos como drink, speak y go para distintos pronombres.",
            seg: 1146
        },
        {
            titulo: "Verbos en tiempo pasado (regulares e irregulares)",
            explicacion: "En pasado muchos verbos son irregulares y mantienen una forma común para todos los pronombres (como drank, spoke, went).\n\nPráctica: Transforma oraciones del presente al pasado usando formas como drank, spoke o went.",
            seg: 1351
        },
        {
            titulo: "Preguntas en presente con auxiliares do y does",
            explicacion: "Las preguntas en presente se forman con do (I, you, we, they) o does (he, she, it) manteniendo el verbo principal en forma base.\n\nPráctica: Convierte oraciones afirmativas en preguntas usando do o does al inicio.",
            seg: 1673
        },
        {
            titulo: "Preguntas negativas y negaciones con don't y doesn't",
            explicacion: "Se emplean don't (do not) y doesn't (does not) para negar o hacer preguntas negativas manteniendo el verbo principal sin conjugar.\n\nPráctica: Formula una oración negativa y una pregunta negativa usando don't y doesn't.",
            seg: 2163
        },
        {
            titulo: "Preguntas y negaciones en pasado con did y didn't",
            explicacion: "En pasado (fuera del verbo to be) se usa did para preguntar y didn't para negar, dejando el verbo principal en forma base.\n\nPráctica: Haz una pregunta con did y una respuesta corta o negativa con didn't.",
            seg: 2472
        },
        {
            titulo: "Verbo 'to be' en presente: afirmativo, preguntas y negaciones",
            explicacion: "'To be' (ser o estar) se conjuga en presente como am, are e is, invierte sujeto y verbo para preguntar y añade not/contracciones para negar.\n\nPráctica: Escribe una afirmación, una pregunta y una negación en presente usando am, are o is.",
            seg: 2702
        },
        {
            titulo: "Verbo 'to be' en pasado: was y were",
            explicacion: "En pasado, 'to be' usa was para I/he/she/it y were para you/we/they, tanto en afirmaciones como en preguntas y negaciones.\n\nPráctica: Escribe oraciones y preguntas en pasado usando was y were.",
            seg: 3622
        },
        {
            titulo: "Adjetivos posesivos: my, your, his, her, its, our, their",
            explicacion: "Los posesivos indican pertenencia según el poseedor (my, your, his, her, its, our, their) y no cambian entre singular y plural.\n\nPráctica: Completa frases indicando posesión con my, your, his, her, its, our y their.",
            seg: 3859
        },
        {
            titulo: "Verbo 'to have' como tener y 'have to' (tener que)",
            explicacion: "'Have' (has en tercera persona singular) significa tener y forma 'have to' para expresar obligación, con preguntas usando do/does/did.\n\nPráctica: Redacta una frase con have/has, otra con have to y una pregunta con do/does/did + have.",
            seg: 4478
        },
        {
            titulo: "Verbo 'to have' como haber (presente perfecto)",
            explicacion: "Con el sentido de haber, have/has + participio se usa para acciones vinculadas al pasado y al presente (como have studied o have been).\n\nPráctica: Formula oraciones en presente perfecto con have/has y un participio.",
            seg: 4796
        },
        {
            titulo: "Verbos 'to want' y 'to need' en oraciones y preguntas",
            explicacion: "'To want' (querer) y 'to need' (necesitar) permiten expresar deseos y necesidades en presente y pasado, apoyándose en do/does/did al preguntar.\n\nPráctica: Escribe oraciones y preguntas usando want y need en presente o pasado.",
            seg: 5190
        },
        {
            titulo: "Palabras interrogativas WH- (what, when, where, why, who, which, how)",
            explicacion: "Las preguntas con what, when, where, why, who, which y how colocan la palabra WH- al inicio seguida del auxiliar o del verbo correspondiente.\n\nPráctica: Elabora preguntas distintas usando what, when, where, why, who, which y how.",
            seg: 5522
        },
        {
            titulo: "Cómo consolidar lo aprendido mediante práctica en contexto",
            explicacion: "Para pasar del vocabulario pasivo al uso real se recomienda practicar leyendo y escuchando el idioma en historias y conversaciones en contexto.\n\nPráctica: Define un plan corto para aplicar las estructuras vistas en historias o conversaciones reales en inglés.",
            seg: 5878
        },
        {
            titulo: "Contracciones y distinción entre homófonos en inglés",
            explicacion: "En el habla cotidiana se usan contracciones (como I'm, don't, doesn't, didn't) y conviene distinguir palabras de sonido similar como your/you're, its/it's y their/they're.\n\nPráctica: Escribe dos pares de oraciones mostrando la diferencia de significado entre una contracción y su forma posesiva/similar.",
            seg: 2923
        },
        {
            titulo: "Repaso integral de estructuras básicas en inglés",
            explicacion: "Integra pronombres, artículos, demostrativos, presente/pasado, to be, to have, want/need y preguntas WH- en frases cotidianas.\n\nPráctica: Redacta un breve diálogo o conjunto de frases combinando to be, have/want/need y una pregunta WH-.",
            seg: 5522
        }
    ],

    frances: [
        {
            titulo: "Alfabeto francés y sonidos de diptongos",
            explicacion: "El alfabeto incluye letras como ç, e con acentos, h muda, r gutural y s intervocálica sonora, además de combinaciones vocálicas/nasales (diptongos).\n\nPráctica: Practica la pronunciación del alfabeto y de combinaciones como au/eau, ou, oi, ai/ei y nasales.",
            seg: 111
        },
        {
            titulo: "Pronombres personales y uso de 'on'",
            explicacion: "Los pronombres personales son je, tu, il, elle, on, nous, vous, ils y elles, donde 'on' se usa de forma oral/informal equivalente a 'nous'.\n\nPráctica: Conjuga o arma frases sencillas con je, tu, il, elle, on, nous, vous, ils y elles.",
            seg: 500
        },
        {
            titulo: "Verbos 'être' y 'avoir' en presente",
            explicacion: "'Être' y 'avoir' son verbos irregulares esenciales en presente (je suis, tu es, il/elle est... y j'ai, tu as, il/elle a...).\n\nPráctica: Escribe frases presentándote o indicando edad usando être y avoir en presente.",
            seg: 638
        },
        {
            titulo: "Artículos definidos e indefinidos en singular y plural",
            explicacion: "Los definidos son le, la, l' y les; los indefinidos son un, une y des, adaptándose al género y número.\n\nPráctica: Acompaña sustantivos en singular y plural con le, la, l', les, un, une o des.",
            seg: 951
        },
        {
            titulo: "Vocabulario de la familia y números del 0 al 10",
            explicacion: "Se abordan términos familiares (mère, père, parents, fille, fils, enfants, grands-parents, sœur, frère) y los números de 0 a 10.\n\nPráctica: Enumera del 0 al 10 y nombra miembros de la familia en francés.",
            seg: 1051
        },
        {
            titulo: "Grupos verbales y presente de verbos del primer grupo (-er)",
            explicacion: "Los verbos se agrupan en 1.º (-er regulares), 2.º (-ir regulares) y 3.º (irregulares); en 1.º grupo se toma el radical y se añaden -e, -es, -e, -ons, -ez, -ent.\n\nPráctica: Conjuga un verbo regular terminado en -er (como chanter o aimer) en presente.",
            seg: 1261
        },
        {
            titulo: "Vocabulario de colores en francés",
            explicacion: "Se revisan colores básicos como noir, blanc, jaune, orange, vert, rouge, bleu, violet, rose y gris.\n\nPráctica: Describe objetos o prendas mencionando al menos cuatro colores en francés.",
            seg: 1590
        },
        {
            titulo: "Presente de verbos del segundo grupo (-ir)",
            explicacion: "Los verbos regulares del 2.º grupo terminan en -ir y toman -is, -is, -it, -issons, -issez, -issent sobre el radical.\n\nPráctica: Conjuga un verbo del segundo grupo (como finir o choisir) en presente.",
            seg: 1685
        },
        {
            titulo: "Números del 11 al 20 y cómo decir la hora",
            explicacion: "Incluye los números 11–20 y la expresión de la hora con 'il est ... heure(s)', minutos, et quart, et demie y moins le quart.\n\nPráctica: Escribe tres horas distintas (incluyendo y cuarto, y media o menos cuarto) usando números del 11 al 20.",
            seg: 1867
        },
        {
            titulo: "Verbo reflexivo 's'appeler' y futuro simple",
            explicacion: "'S'appeler' permite decir cómo te llamas (je m'appelle...), y el futuro simple suele formarse sobre el infinitivo más -ai, -as, -a, -ons, -ez, -ont.\n\nPráctica: Di cómo te llamas con s'appeler y escribe dos frases en futuro simple.",
            seg: 2321
        },
        {
            titulo: "La negación: ne... pas y expresiones negativas",
            explicacion: "La negación clásica coloca 'ne' (o n') antes del verbo y 'pas' después, junto con variantes como ne... plus, ne... rien, ne... personne, ne... jamais o ne... ni... ni.\n\nPráctica: Transforma oraciones afirmativas en negativas con ne... pas y prueba otra forma como ne... plus o ne... jamais.",
            seg: 2638
        },
        {
            titulo: "Verbos irregulares 'aller' y 'dire' en presente",
            explicacion: "'Aller' (ir: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont) y 'dire' (decir: je dis, tu dis, il/elle dit, nous disons, vous dites, ils/elles disent) son irregulares.\n\nPráctica: Redacta frases de movimiento o expresión usando aller y dire en presente.",
            seg: 2934
        },
        {
            titulo: "Saludos, presentación, nacionalidad, origen, edad y profesión",
            explicacion: "Cubre saludos formales e informales (bonjour, bonsoir, salut), cómo preguntar/decir nombre y cómo presentarse con nacionalidad, ciudad/origen, edad y profesión.\n\nPráctica: Redacta una breve presentación personal con saludo, nombre, nacionalidad/origen, edad y profesión.",
            seg: 3081
        },
        {
            titulo: "Números del 20 al 100",
            explicacion: "Explica las decenas hasta 100, incluyendo las estructuras compuestas de 70–79, 80–99 y 100 (cent).\n\nPráctica: Escribe con palabras los números 21, 35, 74, 80 y 92 en francés.",
            seg: 3856
        },
        {
            titulo: "El 'passé composé': auxiliares être/avoir, concordancia y participios",
            explicacion: "Se forma con el presente de être o avoir más el participio pasado, aplicando concordancia según el auxiliar y las reglas de participios de 1.º, 2.º y 3.º grupo.\n\nPráctica: Escribe dos oraciones en passé composé, una con avoir y otra con être.",
            seg: 4215
        },
        {
            titulo: "Días de la semana y meses del año",
            explicacion: "Revisa los días de la semana (lundi a dimanche) y los meses del año (janvier a décembre).\n\nPráctica: Escribe una frase indicando un día de la semana y un mes del año.",
            seg: 5216
        },
        {
            titulo: "Cómo hacer preguntas en francés (entonación, est-ce que e inversión)",
            explicacion: "Las preguntas pueden hacerse con entonación, con 'est-ce que', mediante partículas interrogativas (comment, où, quand, pourquoi, quel, qui, que) o invirtiendo sujeto y verbo.\n\nPráctica: Formula una misma pregunta de dos maneras distintas o usa una partícula interrogativa con est-ce que.",
            seg: 5390
        },
        {
            titulo: "Adjetivos demostrativos: ce, cet, cette y ces",
            explicacion: "Se usa 'ce' ante consonante masculina singular, 'cet' ante vocal o h muda masculina singular, 'cette' en femenino singular y 'ces' en plural.\n\nPráctica: Elige ce, cet, cette o ces frente a distintos sustantivos en singular y plural.",
            seg: 5786
        },
        {
            titulo: "Concordancia y tiempos compuestos en francés básico",
            explicacion: "La concordancia en género y número afecta a adjetivos/nacionalidades, demostrativos y participios en passé composé según las reglas del idioma.\n\nPráctica: Revisa el género y número en una frase con adjetivo demostrativo y otra con passé composé.",
            seg: 4642
        },
        {
            titulo: "Repaso integral de comunicación básica en francés (A1)",
            explicacion: "Combina saludos, presentación, verbos en presente/futuro/passé composé, negación y preguntas para sostener intercambios básicos.\n\nPráctica: Escribe un breve saludo y pregunta en francés aplicando lo aprendido en el curso.",
            seg: 3081
        }
    ],

    italiano: [
        {
            titulo: "Adjetivos y expresiones de valoración (facile, importante, difficile, possibile, impossibile)",
            explicacion: "Permite construir frases básicas como 'è facile', 'è importante', 'è difficile', 'è possibile' y 'non è impossibile'.\n\nPráctica: Forma cuatro frases cortas combinando 'è' o 'non è' con facile, importante, difficile, possibile o impossibile.",
            seg: 28
        },
        {
            titulo: "Tiempo, lugar y conectores básicos (oggi, adesso/ora, qui, domani, più tardi, perché, per me/te, così, davvero, ma/però)",
            explicacion: "Integra marcadores y conectores frecuentes como oggi, adesso/ora, qui, domani, più tardi, perché, per me/te, così, davvero y ma/però.\n\nPráctica: Completa o redacta frases situando una acción en 'oggi', 'qui' o 'domani' y conectándola con 'perché' o 'ma/però'.",
            seg: 186
        },
        {
            titulo: "Expresiones de valoración adicional (perfetto, molto, necessario, fantastico, normale, bello, tutto)",
            explicacion: "Amplía las descripciones con perfetto, molto, necessario, fantastico, normale, bello y tutto.\n\nPráctica: Escribe tres frases usando 'molto', 'perfetto', 'necessario', 'fantastico', 'normale', 'bello' o 'tutto'.",
            seg: 472
        },
        {
            titulo: "Verbo 'essere' y ubicación en 'qui'",
            explicacion: "Con 'essere' y expresiones como 'qui' y 'oggi' se forman oraciones como 'è importante essere qui oggi' o 'è molto difficile essere qui oggi'.\n\nPráctica: Construye dos frases con 'essere qui' acompañadas de un adjetivo o indicador de tiempo.",
            seg: 890
        },
        {
            titulo: "Verbo 'fare' y la forma 'farlo'",
            explicacion: "Permite expresar acciones como 'fare' y 'farlo' en frases como 'è importante farlo' o 'è impossibile farlo'.\n\nPráctica: Redacta dos oraciones usando 'farlo' junto con 'è importante' o 'è impossibile'.",
            seg: 1035
        },
        {
            titulo: "Expresión 'avere bisogno di' (ho bisogno di) y su negación",
            explicacion: "Se usa 'ho bisogno di' + infinitivo para indicar necesidad y 'non ho bisogno di' para negarla (por ejemplo, 'ho bisogno di farlo oggi').\n\nPráctica: Escribe una frase con 'ho bisogno di' y su forma negativa con 'non ho bisogno di'.",
            seg: 1106
        },
        {
            titulo: "Verbo 'sapere' y cláusulas con 'se è possibile'",
            explicacion: "Combina 'sapere' con 'se è possibile' para preguntar o expresar duda/condición (como 'ho bisogno di sapere se è possibile farlo oggi').\n\nPráctica: Formula una frase usando 'sapere' y 'se è possibile'.",
            seg: 1596
        },
        {
            titulo: "Verbo 'volere' (voglio / non voglio)",
            explicacion: "Expresa deseos o intenciones con 'voglio' y su negación 'non voglio' (por ejemplo, 'voglio farlo oggi' o 'non voglio farlo così').\n\nPráctica: Escribe una oración afirmativa con 'voglio' y otra negativa con 'non voglio'.",
            seg: 1852
        },
        {
            titulo: "Verbo 'dovere' (devo / non devo)",
            explicacion: "Expresa obligación o necesidad con 'devo' y su negación 'non devo' (como 'devo uscire oggi' o 'devo farlo questa notte').\n\nPráctica: Redacta dos frases usando 'devo' o 'non devo' seguidas de un verbo en infinitivo.",
            seg: 2235
        },
        {
            titulo: "Verbo 'uscire' en frases cotidianas",
            explicacion: "Se emplea 'uscire' junto a expresiones como 'oggi', 'ora/adesso', 'più tardi' o 'questa notte/stanotte'.\n\nPráctica: Escribe dos frases con 'uscire' indicando cuándo ocurre la acción.",
            seg: 2138
        },
        {
            titulo: "Verbo 'potere' (posso / non posso)",
            explicacion: "Indica posibilidad o capacidad con 'posso' y 'non posso' (como 'posso farlo più tardi' o 'non posso essere qui domani').\n\nPráctica: Escribe una frase con 'posso' y otra con 'non posso' sobre hacer algo hoy, mañana o más tarde.",
            seg: 2625
        },
        {
            titulo: "Expresiones de gusto: 'mi piace' y 'mi piacerebbe'",
            explicacion: "Distingue entre 'mi piace' / 'non mi piace' y 'mi piacerebbe' para expresar gustos o deseos.\n\nPráctica: Redacta una frase con 'mi piace' (o 'non mi piace') y otra con 'mi piacerebbe'.",
            seg: 2770
        },
        {
            titulo: "Verbo 'leggere' y frecuencia con 'ogni giorno'",
            explicacion: "Practica 'leggere' en expresiones como 'mi piace leggere ogni giorno' o 'non mi piace leggere'.\n\nPráctica: Escribe dos oraciones con 'leggere', una con 'ogni giorno' y otra en forma negativa.",
            seg: 2790
        },
        {
            titulo: "Verbo 'nuotare' en frases de gusto y deseo",
            explicacion: "Utiliza 'nuotare' en construcciones como 'mi piace nuotare ogni giorno' o 'mi piacerebbe nuotare ogni giorno'.\n\nPráctica: Formula una frase con 'mi piace nuotare' y otra con 'mi piacerebbe nuotare'.",
            seg: 2877
        },
        {
            titulo: "Verbo 'mangiare' en contexto de lugar y tiempo",
            explicacion: "Combina 'mangiare' con 'mi piacerebbe', 'qui' y 'questa notte/stanotte' (como 'mi piacerebbe mangiare qui questa notte').\n\nPráctica: Escribe una oración con 'mangiare' indicando dónde o cuándo.",
            seg: 2954
        },
        {
            titulo: "Verbo 'parlare' con 'con te' y 'con lei'",
            explicacion: "Practica 'parlare' en estructuras como 'mi piacerebbe parlare con te' o 'mi piacerebbe parlare con lei'.\n\nPráctica: Redacta dos frases con 'parlare' dirigidas a 'con te' y a 'con lei'.",
            seg: 3113
        },
        {
            titulo: "Verbo 'lavorare' en frases con contraste y motivo",
            explicacion: "Integra 'lavorare' en frases compuestas con 'però/ma' y 'perché devo' (como 'mi piacerebbe essere qui ma non posso perché devo lavorare').\n\nPráctica: Escribe una frase conectando 'non posso' y 'perché devo lavorare'.",
            seg: 3481
        },
        {
            titulo: "Verbo 'studiare' con 'bisogno di', 'voglio', 'devo' y 'posso'",
            explicacion: "Conjuga 'studiare' con distintos verbos modales y expresiones ('ho bisogno di studiare', 'voglio studiare', 'devo studiare', 'posso studiare').\n\nPráctica: Escribe tres frases distintas usando 'studiare' con voglio, devo y posso.",
            seg: 4945
        },
        {
            titulo: "Expresiones con 'tutto' y 'questo è tutto'",
            explicacion: "Trabaja frases como 'questo è tutto', 'questo è tutto per me', 'questo è tutto per oggi', 'tutto è importante' y 'tutto è possibile qui'.\n\nPráctica: Redacta tres oraciones usando 'tutto' o 'questo è tutto'.",
            seg: 4460
        },
        {
            titulo: "Combinación de frases con 'ma/però' y 'perché'",
            explicacion: "Une deseos, posibilidades y motivos en frases conversacionales (como 'voglio farlo ma è impossibile perché non posso essere qui oggi').\n\nPráctica: Construye una frase conversacional que enlace un deseo o dificultad con 'ma/però' y 'perché'.",
            seg: 4845
        }
    ]
};
// Bloque: Matemáticas y lógica (aritmetica, algebra, logica) para ejercicios.js
const bancoEjerciciosMatematicas = {
    aritmetica: [
        {
            titulo: "Identificación de números enteros positivos, negativos y cero",
            explicacion: "Los números enteros incluyen los naturales (1, 2, 3...), el cero y los enteros negativos (-1, -2, -3...).\n\nPráctica: Ordena de menor a mayor los enteros: -5, 3, 0, -1, 7, -12.",
            seg: 31
        },
        {
            titulo: "Suma y resta secuencial de números enteros",
            explicacion: "Puedes interpretar sumas y restas sucesivas como desplazamientos (subir y bajar plantas o ganar y quitar unidades), operando paso a paso.\n\nPráctica: Calcula el resultado de 7 - 3 - 5 y de -4 + 9 - 8.",
            seg: 240
        },
        {
            titulo: "Regla de los signos en sumas y restas con paréntesis",
            explicacion: "Al eliminar paréntesis precedidos de signo, más por menos da menos (por ejemplo, 7 + (-1) equivale a 7 - 1).\n\nPráctica: Simplifica los paréntesis y resuelve: 4 + (-2) + (-5) y 7 + (-1).",
            seg: 272
        },
        {
            titulo: "Jerarquía de operaciones: multiplicación antes que suma o resta",
            explicacion: "En expresiones combinadas como 5 - 3 × 2, primero se resuelve la multiplicación y después la suma o resta.\n\nPráctica: Resuelve respetando la jerarquía de operaciones: 5 - 3 × 2 y 8 - 2 × 5.",
            seg: 565
        },
        {
            titulo: "Multiplicación de números enteros positivos y negativos",
            explicacion: "Un número positivo por uno negativo da resultado negativo, y signos iguales dan positivo.\n\nPráctica: Calcula 3 × (-1), (-4) × (-6) y 4 × (-1) + 2 × (-6).",
            seg: 666
        },
        {
            titulo: "División de números enteros y regla de los signos",
            explicacion: "Al dividir dos enteros negativos el cociente es positivo, mientras que dividir signos distintos da negativo.\n\nPráctica: Calcula (-121) ÷ (-11), (-10) ÷ (-2) y (-36) ÷ 6.",
            seg: 1209
        },
        {
            titulo: "Operaciones combinadas con números enteros",
            explicacion: "Combina sumas, restas, multiplicaciones y divisiones de enteros aplicando signos y orden de operaciones.\n\nPráctica: Resuelve: [(-121) ÷ (-11)] × [(-10) ÷ (-2)] - 10.",
            seg: 1209
        },
        {
            titulo: "Simplificación de fracciones mediante factores primos",
            explicacion: "Para simplificar una fracción se descomponen numerador y denominador en factores y se cancelan los comunes; si no los hay, la fracción es irreducible.\n\nPráctica: Verifica si 12/5 puede simplificarse y simplifica completamente 18/24.",
            seg: 1884
        },
        {
            titulo: "Suma de fracciones con distinto denominador",
            explicacion: "Para sumar fracciones como 1/2 + 3/5 se busca un denominador común y se suman los numeradores equivalentes.\n\nPráctica: Calcula 1/2 + 3/5 y 2/3 + 1/4.",
            seg: 1964
        },
        {
            titulo: "Resta de fracciones con distinto denominador",
            explicacion: "Al restar fracciones con denominadores distintos se expresan con denominador común antes de restar.\n\nPráctica: Calcula 3/4 - 2/5 y 5/6 - 1/3.",
            seg: 1964
        },
        {
            titulo: "Multiplicación y división de fracciones",
            explicacion: "Las fracciones se multiplican en línea (numerador por numerador y denominador por denominador) y se simplifican cuando es posible.\n\nPráctica: Resuelve (3/5) × (4/9) y (2/3) ÷ (4/5), simplificando el resultado.",
            seg: 1884
        },
        {
            titulo: "Potencias de base entera y leyes de exponentes",
            explicacion: "Una potencia indica multiplicar la base por sí misma tantas veces como señala el exponente; al elevar una potencia a otra se multiplican los exponentes.\n\nPráctica: Calcula (2^3)^2 y (3^2)^2 aplicando propiedades de potencias.",
            seg: 10408
        },
        {
            titulo: "Conversión entre radicales y exponentes fraccionarios",
            explicacion: "Un radical puede escribirse como potencia de exponente fraccionario: por ejemplo, la raíz cúbica de 2 es 2^(1/3) y la raíz cuadrada de 3 es 3^(1/2).\n\nPráctica: Escribe en forma de potencia con exponente fraccionario la raíz cúbica de 2 y la raíz cuadrada de 3.",
            seg: 10508
        },
        {
            titulo: "Potencia de un radical mediante exponentes fraccionarios",
            explicacion: "Al elevar un radical a una potencia se multiplican los exponentes: [2^(1/3)]^2 = 2^(2/3) y [3^(1/2)]^2 = 3.\n\nPráctica: Simplifica (√3)^2 y expresa (∛2)^2 tanto en potencia como en forma de radical.",
            seg: 10508
        },
        {
            titulo: "Producto notable: binomio al cuadrado (a - b)²",
            explicacion: "El desarrollo de (a - b)² es el cuadrado del primero menos el doble del primero por el segundo más el cuadrado del segundo: a² - 2ab + b².\n\nPráctica: Desarrolla (a - b)² y aplícalo a una diferencia de dos términos.",
            seg: 10408
        },
        {
            titulo: "Aplicación de binomio al cuadrado con radicales",
            explicacion: "Al desarrollar (∛2 - √3)² se aplica a² - 2ab + b², obteniendo ∛(2²) - 2·∛2·√3 + 3.\n\nPráctica: Desarrolla paso a paso (∛2 - √3)² simplificando cada término posible.",
            seg: 10408
        },
        {
            titulo: "Identificación de productos de radicales con distinta base y exponente",
            explicacion: "En productos como 2^(1/3) · 3^(1/2), al no coincidir ni la base ni el exponente de forma directa, se deja indicado sin agrupar incorrectamente.\n\nPráctica: Explica por qué 2^(1/3) · 3^(1/2) no se puede reducir directamente sumando exponentes ni multiplicando bases.",
            seg: 10678
        },
        {
            titulo: "Expresiones combinadas con enteros y paréntesis",
            explicacion: "Resolver expresiones con signos positivos y negativos requiere cuidado al quitar paréntesis y agrupar términos.\n\nPráctica: Calcula -6 + (-3) - (-8) + 2.",
            seg: 272
        },
        {
            titulo: "Operaciones mixtas con fracciones y simplificación",
            explicacion: "Después de sumar o restar fracciones con distinto denominador, siempre conviene verificar si el resultado es irreducible.\n\nPráctica: Resuelve 1/2 + 3/5 - 1/10 y simplifica la fracción resultante.",
            seg: 1964
        },
        {
            titulo: "Repaso integral de aritmética: enteros, fracciones y radicales",
            explicacion: "Reúne reglas de signos en enteros, operaciones con fracciones y manejo de potencias/radicales con productos notables.\n\nPráctica: Resuelve: a) 5 - 3 × (-2), b) 1/2 + 3/5, y c) simplifica (√3)^2.",
            seg: 31
        }
    ],

    algebra: [
        {
            titulo: "Lenguaje algebraico y traducción de enunciados",
            explicacion: "El álgebra representa cantidades desconocidas mediante letras (variables) y traduce relaciones verbales a expresiones algebraicas.\n\nPráctica: Traduce a expresión algebraica: 'el doble de un número aumentado en 5' y 'la tercera parte de un número menos 4'.",
            seg: 0
        },
        {
            titulo: "Identificación de términos algebraicos: coeficiente, literal y grado",
            explicacion: "Un término algebraico consta de signo, coeficiente numérico, parte literal (variables) y exponentes que determinan su grado.\n\nPráctica: Indica signo, coeficiente, parte literal y grado de los términos -7x³ y 4a²b.",
            seg: 0
        },
        {
            titulo: "Reducción de términos semejantes",
            explicacion: "Dos o más términos son semejantes si tienen exactamente las mismas variables con los mismos exponentes; se reducen sumando o restando sus coeficientes.\n\nPráctica: Simplifica: 5x + 3y - 2x + 7y - x.",
            seg: 0
        },
        {
            titulo: "Valor numérico de una expresión algebraica",
            explicacion: "El valor numérico se obtiene sustituyendo cada variable por el número asignado y realizando las operaciones indicadas.\n\nPráctica: Calcula el valor de 3x² - 2x + 4 cuando x = -2.",
            seg: 0
        },
        {
            titulo: "Suma y resta de polinomios",
            explicacion: "Para sumar o restar polinomios se eliminan paréntesis (cambiando signos si hay un menos delante) y se reducen términos semejantes.\n\nPráctica: Resuelve: (4x² - 3x + 5) - (2x² + x - 3).",
            seg: 0
        },
        {
            titulo: "Leyes de los exponentes en expresiones algebraicas",
            explicacion: "Al multiplicar potencias de igual base se suman exponentes, al dividir se restan y en potencia de potencia se multiplican.\n\nPráctica: Simplifica: (x⁴ · x³) / x² y (2a³)².",
            seg: 0
        },
        {
            titulo: "Multiplicación de monomios y polinomios",
            explicacion: "Se aplica la propiedad distributiva multiplicando coeficientes entre sí y sumando exponentes de bases iguales.\n\nPráctica: Desarrolla: 3x(2x² - 4x + 1) y (x + 3)(x - 5).",
            seg: 0
        },
        {
            titulo: "División de un polinomio entre un monomio",
            explicacion: "Se divide cada término del polinomio entre el monomio divisor aplicando ley de signos y resta de exponentes.\n\nPráctica: Resuelve: (12x⁴ - 8x³ + 4x²) ÷ (4x²).",
            seg: 0
        },
        {
            titulo: "Productos notables: binomio al cuadrado",
            explicacion: "Se cumple que (a ± b)² = a² ± 2ab + b², permitiendo desarrollar rápidamente sin multiplicar término a término.\n\nPráctica: Desarrolla: (2x + 3)² y (x - 5)².",
            seg: 0
        },
        {
            titulo: "Productos notables: binomios conjugados (diferencia de cuadrados)",
            explicacion: "El producto de dos binomios conjugados sigue la regla (a + b)(a - b) = a² - b².\n\nPráctica: Calcula: (x + 7)(x - 7) y (3m - 2n)(3m + 2n).",
            seg: 0
        },
        {
            titulo: "Factorización por factor común",
            explicacion: "Consiste en extraer el máximo factor numérico y literal que se repite en todos los términos de la expresión.\n\nPráctica: Factoriza: 6x³ + 9x² - 3x.",
            seg: 0
        },
        {
            titulo: "Factorización de diferencia de cuadrados",
            explicacion: "Una expresión de la forma a² - b² se factoriza como el producto de binomios conjugados (a + b)(a - b).\n\nPráctica: Factoriza: x² - 36 y 16a² - 25b².",
            seg: 0
        },
        {
            titulo: "Factorización de trinomios de la forma x² + bx + c",
            explicacion: "Se buscan dos números que multiplicados den c y sumados den b para escribir (x + p)(x + q).\n\nPráctica: Factoriza: x² + 7x + 12 y x² - 2x - 15.",
            seg: 0
        },
        {
            titulo: "Simplificación de fracciones algebraicas",
            explicacion: "Se factorizan numerador y denominador para cancelar factores comunes distintos de cero.\n\nPráctica: Simplifica: (x² - 9) / (x² + 6x + 9).",
            seg: 0
        },
        {
            titulo: "Ecuaciones lineales de primer grado con una incógnita",
            explicacion: "Para despejar la incógnita se agrupan términos con variable de un lado y constantes del otro manteniendo la igualdad.\n\nPráctica: Resuelve: 5x - 8 = 2x + 10.",
            seg: 0
        },
        {
            titulo: "Ecuaciones lineales con paréntesis y denominadores",
            explicacion: "Primero se eliminan paréntesis o denominadores multiplicando por el mínimo común múltiplo y luego se despeja x.\n\nPráctica: Resuelve: 3(x - 2) + 4 = 2(x + 5).",
            seg: 0
        },
        {
            titulo: "Despeje de variables en fórmulas",
            explicacion: "Despejar una variable consiste en aislarla en un miembro de la ecuación usando operaciones inversas.\n\nPráctica: Despeja t en v = d / t y despeja r en P = 2πr.",
            seg: 0
        },
        {
            titulo: "Sistemas de ecuaciones lineales 2×2",
            explicacion: "Un sistema 2×2 busca los valores de (x, y) que satisfacen simultáneamente ambas ecuaciones mediante sustitución, igualación o reducción.\n\nPráctica: Resuelve el sistema: x + y = 10 y x - y = 4.",
            seg: 0
        },
        {
            titulo: "Ecuaciones cuadráticas incompletas y por factorización",
            explicacion: "Una ecuación cuadrática ax² + bx + c = 0 puede resolverse factorizando e igualando cada factor a cero.\n\nPráctica: Resuelve: x² - 5x + 6 = 0 y x² - 49 = 0.",
            seg: 0
        },
        {
            titulo: "Ecuaciones cuadráticas mediante fórmula general",
            explicacion: "Para ax² + bx + c = 0 (con a ≠ 0), las soluciones se obtienen con x = [-b ± √(b² - 4ac)] / (2a).\n\nPráctica: Resuelve usando la fórmula general: 2x² - 5x - 3 = 0.",
            seg: 0
        }
    ],

    logica: [
        {
            titulo: "Identificación de proposiciones lógicas frente a enunciados no proposicionales",
            explicacion: "Una proposición lógica es una oración a la que se le puede asignar indiscutiblemente el valor de verdadero o falso (no preguntas, órdenes ni expresiones abiertas sin valor asignado).\n\nPráctica: Indica cuáles son proposiciones lógicas: '3 + 7 = 10', 'Cierra la puerta', 'x + 2 = 5', '¿Qué hora es?'.",
            seg: 40
        },
        {
            titulo: "Determinación del valor de verdad de proposiciones simples",
            explicacion: "Toda proposición lógica tiene un único valor de verdad: verdadera (V) o falsa (F).\n\nPráctica: Determina si es verdadera o falsa cada proposición: '5 < 8', '12 es múltiplo de 5', '3² = 9', '√16 = 5'.",
            seg: 402
        },
        {
            titulo: "Negación de proposiciones simples y desigualdades",
            explicacion: "La negación (¬p) invierte el valor de verdad de p; por ejemplo, la negación de '7 > 3' es '7 ≤ 3' (y no '7 < 3').\n\nPráctica: Niega correctamente las proposiciones: 'Hoy está lloviendo', '7 > 3' y el predicado 'x ≥ 4'.",
            seg: 776
        },
        {
            titulo: "Negación de proposiciones con cuantificadores ('todos' y 'algún')",
            explicacion: "La negación de 'Todos los estudiantes aprobaron' es 'No todos los estudiantes aprobaron' (o 'Algún estudiante suspendió'), y la de 'Algún número par es primo' es 'Ningún número par es primo'.\n\nPráctica: Escribe la negación lógica de 'Todos los estudiantes aprobaron' y de 'Algún número par es primo'.",
            seg: 900
        },
        {
            titulo: "Conjunción lógica (p ∧ q) y su criterio de verdad",
            explicacion: "La conjunción 'p y q' (p ∧ q) es verdadera únicamente cuando ambas proposiciones son verdaderas; si al menos una es falsa, la conjunción es falsa.\n\nPráctica: Evalúa el valor de verdad de: '3 + 2 = 5 y 4 < 10' y de '6 es par y 6 es primo'.",
            seg: 1396
        },
        {
            titulo: "Disyunción inclusiva (p ∨ q) y su criterio de verdad",
            explicacion: "La disyunción 'p o q' (p ∨ q) es falsa únicamente cuando ambas proposiciones son falsas; basta con que una sea verdadera para que sea verdadera.\n\nPráctica: Evalúa el valor de verdad de: '3 < 8 o 10 < 5' y de '4 > 9 o 2 > 4'.",
            seg: 1920
        },
        {
            titulo: "El condicional (p → q): antecedente, consecuente y caso falso",
            explicacion: "El condicional 'si p entonces q' (p → q) solo es falso cuando el antecedente p es verdadero y el consecuente q es falso; en todos los demás casos es verdadero.\n\nPráctica: Determina el valor de verdad de: 'Si 5 es par entonces 5 es divisible por 2' y 'Si 6 > 2 entonces 6 > 10'.",
            seg: 2383
        },
        {
            titulo: "El bicondicional (p ↔ q) y diferencia frente al condicional",
            explicacion: "El bicondicional 'p si y solo si q' (p ↔ q) es verdadero cuando p y q tienen el mismo valor de verdad (ambas V o ambas F), expresando equivalencia en ambos sentidos.\n\nPráctica: Evalúa '9 es par si y solo si 9 es divisible por 3' y explica en qué se diferencia p → q de p ↔ q.",
            seg: 2867
        },
        {
            titulo: "Formalización de enunciados compuestos al lenguaje lógico",
            explicacion: "Los enunciados cotidianos con conectores ('y', 'o', 'si... entonces', 'si y solo si') se traducen asignando letras proposicionales y conectivos.\n\nPráctica: Formaliza: 'Si el alumno entrega el trabajo (p) y aprueba el examen (q), entonces obtiene el certificado (r)'.",
            seg: 3580
        },
        {
            titulo: "Tablas de verdad de conectivos básicos (¬, ∧, ∨, →, ↔)",
            explicacion: "Las tablas de verdad enumeran todas las combinaciones posibles de V y F para determinar el valor de verdad de una proposición compuesta.\n\nPráctica: Construye las tablas de verdad de ¬p, p ∧ q, p ∨ q, p → q y p ↔ q.",
            seg: 3379
        },
        {
            titulo: "Tabla de verdad de proposiciones compuestas con tres variables",
            explicacion: "Con tres proposiciones (p, q, r) la tabla tiene 2³ = 8 filas para analizar fórmulas como (p ∧ q) → r.\n\nPráctica: Construye la tabla de verdad de (p ∧ q) → r e identifica la única fila donde resulta falsa.",
            seg: 3745
        },
        {
            titulo: "Primera ley de De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q",
            explicacion: "Negar una conjunción equivale a la disyunción de las negaciones: ¬(p ∧ q) ≡ ¬p ∨ ¬q.\n\nPráctica: Comprueba mediante tabla de verdad que ¬(p ∧ q) y ¬p ∨ ¬q tienen exactamente la misma columna de verdad.",
            seg: 4227
        },
        {
            titulo: "Segunda ley de De Morgan: ¬(p ∨ q) ≡ ¬p ∧ ¬q",
            explicacion: "Negar una disyunción equivale a la conjunción de las negaciones: ¬(p ∨ q) ≡ ¬p ∧ ¬q.\n\nPráctica: Comprueba mediante tabla de verdad la equivalencia ¬(p ∨ q) ≡ ¬p ∧ ¬q y pon un ejemplo cotidiano.",
            seg: 4299
        },
        {
            titulo: "Ley de doble negación: ¬(¬p) ≡ p",
            explicacion: "Negar dos veces una proposición recupera su valor de verdad original: ¬(¬p) ≡ p.\n\nPráctica: Demuestra con una tabla de verdad de dos filas que ¬(¬p) es lógicamente equivalente a p.",
            seg: 4400
        },
        {
            titulo: "Equivalencia del condicional: (p → q) ≡ (¬p ∨ q)",
            explicacion: "Todo condicional p → q es lógicamente equivalente a la disyunción ¬p ∨ q.\n\nPráctica: Verifica mediante tabla de verdad que p → q y ¬p ∨ q son lógicamente equivalentes.",
            seg: 4471
        },
        {
            titulo: "Aplicación cotidiana de las leyes de De Morgan",
            explicacion: "Decir 'no es cierto que tenga boli y cuaderno' equivale lógicamente a 'no tengo boli o no tengo cuaderno'.\n\nPráctica: Aplica la primera ley de De Morgan para reescribir la negación de 'Tengo llave y cartera'.",
            seg: 4591
        },
        {
            titulo: "Formalización con cuantificador universal (∀) y existencial (∃)",
            explicacion: "El cuantificador universal ∀ significa 'para todo/todos' y el existencial ∃ significa 'existe al menos uno'.\n\nPráctica: Escribe con cuantificadores: 'Todos los números pares son divisibles entre 2' y 'Existe un número natural mayor que 100'.",
            seg: 4746
        },
        {
            titulo: "Negación formal de proposiciones cuantificadas",
            explicacion: "Al negar un cuantificador universal aparece uno existencial con el predicado negado: ¬(∀x P(x)) ≡ ∃x ¬P(x), y viceversa: ¬(∃x P(x)) ≡ ∀x ¬P(x).\n\nPráctica: Niega formalmente ∀x A(x) ('Todos aprobaron') y ∃n ∈ ℕ (n > 100).",
            seg: 4960
        },
        {
            titulo: "Razonamiento deductivo válido: Modus Ponens",
            explicacion: "En el Modus Ponens, dadas las premisas p → q y p, se concluye válidamente q (por ejemplo: todos los humanos son mortales, Sócrates es humano, luego Sócrates es mortal).\n\nPráctica: Formaliza las premisas y la conclusión del razonamiento de Sócrates y justifica por qué es válido.",
            seg: 5312
        },
        {
            titulo: "Identificación de falacias: afirmación del consecuente",
            explicacion: "De 'Si llueve entonces el suelo se moja' (p → q) y 'El suelo está mojado' (q) NO es válido concluir 'Ha llovido' (p); este error se llama falacia de afirmación del consecuente.\n\nPráctica: Explica por qué 'Si llueve el suelo se moja; el suelo está mojado; luego ha llovido' es un razonamiento inválido.",
            seg: 5505
        }
    ]
};
