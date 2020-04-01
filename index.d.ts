import * as http from 'http';
import { AsyncMqttClient } from 'async-mqtt';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
    > {
    mqtt: AsyncMqttClient;
  }
}
