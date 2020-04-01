import * as tap from 'tap';
import * as Fastify from 'fastify';
import mqttPlugin from './index';

tap.test('Async MQTT No host given', async (t) => {
  const fastify: Fastify.FastifyInstance = Fastify();
  t.rejects(fastify.register(mqttPlugin).ready, '`host` parameter is mandatory');
  
});

tap.test('Async MQTT Test', async (t) => {
  const fastify: Fastify.FastifyInstance = Fastify();
  await fastify.register(mqttPlugin, {
    host: process.env.MQTT_BROKER
  }).ready();
  
  await fastify.mqtt.subscribe('test/test/test');
  await fastify.mqtt.publish('test/test/test', 'test', {
    qos: 0,
    retain: true
  });

  await fastify.close();
});
