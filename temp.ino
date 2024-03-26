
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* ssid = "INFINITUM8F57";
const char* password = "Aa1Yu2Ee5m";
const char* serverUrl = "http://localhost:4000/dispositivos/cambiarEstadoTemperatura/guardar_datos"; // Reemplaza "tu_direccion_ip" con la dirección IP de tu servidor

const int DHTPin = 32;  // Pin donde está conectado el sensor DHT
const int DHTType = DHT11;  // Tipo de sensor DHT (DHT11, DHT21, DHT22)

DHT dht(DHTPin, DHTType);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  dht.begin();
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
  }
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    float temperatura = dht.readTemperature();
    float humedad = dht.readHumidity();

    if (isnan(temperatura) || isnan(humedad)) {
      Serial.println("Error al leer datos del sensor DHT");
      delay(2000);
      return;
    }

    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    String postData = "{\"temperatura\":" + String(temperatura) + ",\"humedad\":" + String(humedad) + "}";

    int httpCode = http.POST(postData);

    if (httpCode > 0) {
      String response = http.getString();
      Serial.println("HTTP response code: " + String(httpCode));
      Serial.println("Server response: " + response);
    } else {
      Serial.println("Error en la solicitud HTTP");
    }

    http.end();
  }

  delay(5000); // Espera 5 segundos antes de enviar los datos nuevamente
}
