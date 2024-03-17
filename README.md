# Servidor Tropical World

Este repositorio contiene el código fuente del servidor Tropical World.

## Instrucciones de Instalación

👉 Clona este repositorio utilizando el siguiente comando:



👉1-git clone https://github.com/NTO-H/servidorTropicalWorld.git

👉2-cd servidorTropicalWorld

👉3-npm install

👉4-npm run dev



## Instrucciones en peticion esp32

modificar para realizar pruebas con tu direccion ip 
=>   *url = "http://servidortropicalworld-1.onrender.com/dispositivos/estadoLed/led"; /

ejemplo :http://localhost:4000/dispositivos/estadoLed/led



##/---------------------------------------------------------
##/--------------En--Esp32-------------------
##/---------------------------------------------------------
```cpp

#include <WiFi.h>
#include <HTTPClient.h>

const char *ssid = "red";//tu red ,aqui lo modificas
const char *password = "password";//tu password,aqui igual 
const char *url = "http://servidortropicalworld-1.onrender.com/dispositivos/estadoLed/led"; // Endpoint para consultar el estado del LED

// Pin del LED
const int pinLed = 2;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando al WiFi...");
  }

  Serial.println("Conexión exitosa al WiFi");

  // Configurar el pin del LED como salida
  pinMode(pinLed, OUTPUT);
}

void loop() {
  // Realizar la solicitud HTTP para obtener el estado del LED desde el servidor
  HTTPClient http;
  http.begin(url);

  int respuesta = http.GET();
  
  if (respuesta == HTTP_CODE_OK) {
    // Leer el cuerpo de la respuesta (el estado del LED)
    String respuestaServidor = http.getString();
    int estadoLed = respuestaServidor.toInt();

    // Actualizar el estado del LED
    if (estadoLed == 1) {
      // Encender el LED
      digitalWrite(pinLed, HIGH);
      Serial.println("LED encendido");
    } else {
      // Apagar el LED
      digitalWrite(pinLed, LOW);
      Serial.println("LED apagado");
    }
  } else {
    Serial.print("Error al obtener el estado del LED desde el servidor. Código de respuesta: ");
    Serial.println(respuesta);
  }

  http.end();

  delay(5000); // Esperar 5 segundos antes de realizar la próxima consulta
}
