#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char *ssid = "INFINITUM8F57";
const char *password = "Aa1Yu2Ee5m";

// Pines del motor del valancín
const int valancinPin1 = 14;   // Primer pin de dirección del motor del valancín
const int valancinPin2 = 27;   // Segundo pin de dirección del motor del valancín
const int valancinEnablePin = 2;  // Pin de habilitación del motor del valancín
int valancinSpeed = 60;  // Velocidad inicial del motor del valancín (0-255)

// Pines del motor del carrucel
const int carrucelPin1 = 25;   // Primer pin de dirección del motor del carrucel
const int carrucelPin2 = 26;   // Segundo pin de dirección del motor del carrucel
const int carrucelEnablePin = 5;  // Pin de habilitación del motor del carrucel
int carrucelSpeed = 40 ;  // Velocidad inicial del motor del carrucel (0-255)

// URLs para consultar el estado de los dispositivos
const char *urlValancin = "https://servidortropicalworld-1.onrender.com/dispositivos/obtenerEstadoValancin";
const char *urlCarrucel = "https://servidortropicalworld-1.onrender.com/dispositivos/obtenerEstadoCarrucel";
const char *urlLed = "https://servidortropicalworld-1.onrender.com/dispositivos/obtenerEstadoLed";



const char* urlTemperaturaHumedad = "https://servidortropicalworld-1.onrender.com/dispositivos/guardar_datos"; // Reemplaza "tu_direccion_ip" con la dirección IP 


// Pin del LED
const int pinLed = 4;

// Definiciones para el sensor DHT11
#define DHTPIN 13
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // Configurar pines del valancín
  pinMode(valancinPin1, OUTPUT);
  pinMode(valancinPin2, OUTPUT);
  pinMode(valancinEnablePin, OUTPUT);

  // Configurar pines del carrucel
  pinMode(carrucelPin1, OUTPUT);
  pinMode(carrucelPin2, OUTPUT);
  pinMode(carrucelEnablePin, OUTPUT);

  // Configurar pin del LED
  pinMode(pinLed, OUTPUT);

  // Iniciar comunicación serial
  Serial.begin(115200);

  // Iniciar conexión WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando al WiFi...");
  }
  Serial.println("Conexión exitosa al WiFi");

  // Inicializar sensor DHT11
  dht.begin();
}

void loop() {
  // Realizar la solicitud HTTP para obtener el estado del valancín desde el servidor
  HTTPClient httpValancin, httpCarrucel, httpLed, httpTemperatura;
  httpValancin.begin(urlValancin);
  httpCarrucel.begin(urlCarrucel);
  httpLed.begin(urlLed);
  httpTemperatura.begin(urlTemperaturaHumedad);
  
  int respuestaValancin = httpValancin.GET();
  if (respuestaValancin == HTTP_CODE_OK) {
    String responseValancin = httpValancin.getString();
    int estadoValancin = responseValancin.toInt();

    // Controlar el motor del valancín según el estado recibido
    if (estadoValancin == 1) {
      digitalWrite(valancinEnablePin, HIGH);
      digitalWrite(valancinPin1, HIGH);
      digitalWrite(valancinPin2, LOW);
      analogWrite(valancinEnablePin, valancinSpeed);
      Serial.println("Valancin encendido");
    } else {
      analogWrite(valancinEnablePin, 0);
      Serial.println("Valancin apagado");
    }
  } else {
    Serial.print("Error al obtener el estado del valancin desde el servidor. Código de respuesta: ");
    Serial.println(respuestaValancin);
  }

  httpValancin.end();

  // Realizar la solicitud HTTP para obtener el estado del carrucel desde el servidor
  int respuestaCarrucel = httpCarrucel.GET();
  if (respuestaCarrucel == HTTP_CODE_OK) {
    String responseCarrucel = httpCarrucel.getString();
    int estadoCarrucel = responseCarrucel.toInt();

    // Controlar el motor del carrucel según el estado recibido
    if (estadoCarrucel == 1) {
      digitalWrite(carrucelEnablePin, HIGH);
      digitalWrite(carrucelPin1, HIGH);
      digitalWrite(carrucelPin2, LOW);
      analogWrite(carrucelEnablePin, carrucelSpeed);
      Serial.println("Carrucel encendido");
    } else {
        analogWrite(carrucelEnablePin, 0); // Apagar el carrucel si está apagado
      Serial.println("Carrucel apagado");
    }
  } else {
    Serial.print("Error al obtener el estado del carrucel desde el servidor. Código de respuesta: ");
    Serial.println(respuestaCarrucel);
  }

  httpCarrucel.end();

  // Realizar la solicitud HTTP para obtener el estado del LED desde el servidor
  int respuestaLed = httpLed.GET();
  if (respuestaLed == HTTP_CODE_OK) {
    String responseLed = httpLed.getString();
    int estadoLed = responseLed.toInt();

    // Controlar el LED según el estado recibido
    if (estadoLed == 1) {
      digitalWrite(pinLed, HIGH);
      Serial.println("LED encendido");
    } else {
      digitalWrite(pinLed, LOW);
      Serial.println("LED apagado");
    }
  } else {
    Serial.print("Error al obtener el estado del LED desde el servidor. Código de respuesta: ");
    Serial.println(respuestaLed);
  }

  httpLed.end();


  
 if (WiFi.status() == WL_CONNECTED) {
    float temperatura = dht.readTemperature();
    float humedad = dht.readHumidity();

    if (isnan(temperatura) || isnan(humedad)) {
      Serial.println("Error al leer datos del sensor DHT");
      delay(2000);
      return;
    }

  
    httpTemperatura.addHeader("Content-Type", "application/json");

    String postData = "{\"temperatura\":\"" + String(temperatura) + "\",\"humedad\":\"" + String(humedad) + "\"}";

    int httpCode = httpTemperatura.PUT(postData); // Cambia POST por PUT para enviar la solicitud PUT

    Serial.println("temperatura=>");
    Serial.println(temperatura);
    Serial.println("humedad=>");
    Serial.println(humedad);

    if (httpCode > 0) {
      String response = httpTemperatura.getString();
      Serial.println("HTTP response code: " + String(httpCode));
      Serial.println("Server response: " + response);
    } else {
      Serial.println("Error en la solicitud HTTP");
    }

    httpTemperatura.end();
  }

  delay(2000);

}
