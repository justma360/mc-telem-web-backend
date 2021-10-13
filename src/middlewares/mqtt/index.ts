import Console from '../../utils/pinoLogger';
import mqtt, { MqttClient } from 'mqtt';

class Mqtt {
  tcpClient: MqttClient;
  wsClient: MqttClient;
  tcpTopic: string;
  wsTopic: string;

  constructor() {
    this.tcpClient = mqtt.connect('tcp://14.198.73.92:1883');
    this.wsClient = mqtt.connect('ws://14.198.73.92:9001');
    this.tcpTopic = 'tcp/angle_monitor';
    this.wsTopic = 'ws/angle_monitor';
  }

  run() {
    this.tcpClient.on('connect', () => {
      Console.info('Connected to MQTT TCP Broker');

      this.tcpClient.subscribe([this.tcpTopic], () => {
        console.log(`Subscribe to topic '${this.tcpTopic}'`);
      });
    });

    /* Listen to tcpClient */
    this.tcpClient.on('message', (_, message) => {
      /* Publish whatever received from tcpClient to wsClient under specific topic */
      this.wsClient.publish(this.wsTopic, message.toString(), { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error);
        }
      });
    });
  }
}

const MqttMiddleware = new Mqtt();

export default MqttMiddleware;
