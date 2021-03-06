var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'}),
    consumer = new Consumer(
        client,
        [
            { topic: 't', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

    consumer.on('message', function (message) {
        const topic = message.topic;
        const value = message.value;
        console.log('['+topic+'] '+value);
    });