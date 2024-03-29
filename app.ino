#include <Arduino.h>

int IN1 = 22;
int IN2 = 21;
int IN3 = 19;
int IN4 = 18;

const int motor1Enable = 15;
const int motor1In1 = 2;
const int motor1In2 = 4;

const int motor2Enable = 12;
const int motor2In1 = 14;
const int motor2In2 = 27;

// Enable pins for the motor driver
int enA = 5;
int enB = 23;

// Speed variables for motors
int speedA = 255;  // Velocidad inicial para el motor A
int speedB = 255;  // Velocidad inicial para el motor B

const int trigPin = 5;
const int echoPin = 4;

bool isMoving = false;
bool wasMoving = false;

void setup() {
  Serial.begin(115200);

  // Configure motor pins
  pinMode(motor1Enable, OUTPUT);
  pinMode(motor1In1, OUTPUT);
  pinMode(motor1In2, OUTPUT);
  pinMode(motor2Enable, OUTPUT);
  pinMode(motor2In1, OUTPUT);
  pinMode(motor2In2, OUTPUT);

  // Set motors to move forward
  digitalWrite(motor1Enable, HIGH);
  digitalWrite(motor1In1, HIGH);
  digitalWrite(motor1In2, LOW);
  digitalWrite(motor2Enable, HIGH);
  digitalWrite(motor2In1, HIGH);
  digitalWrite(motor2In2, LOW);

  // Set IN pins to move forward
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

  // Configure sensor pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  // Leer la distancia del sensor
  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration / 2) / 29.1;  // Calcular la distancia en cm
|
  // Mostrar la distancia en el puerto serie
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println(" cm");

  // Verificar si la distancia es mayor que un valor específico
  if (distance > 10) {
    if (!isMoving) {
      avanzar();  // Avanzar solo si no estaba en moavanzandovimiento
      Serial.println("Avanzando");
      isMoving = true;
    }
    wasMoving = true;
  } else {
    if (wasMoving) {
      stop();  // Detener el carro solo si estaba en movimiento
      Serial.println("Detenido por objeto cercano");
      isMoving = false;
    }
    wasMoving = false;
  }

  delay(100);  // Pequeña pausa para estabilizar la lectura
}

void avanzar() {
      Serial.println("avanzando");

  // Configurar los motores para avanzar
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void stop() {
  // Detener ambos motores
  digitalWrite(motor1Enable, LOW);
  digitalWrite(motor2Enable, LOW);
}|