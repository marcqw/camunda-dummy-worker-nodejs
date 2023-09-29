const { ZBClient } = require('zeebe-node')
const config = require('./ressources/config.json');


void (async () => {

	const zbc = new ZBClient({
		camundaCloud: {
			clusterId: config.clusterId,
			clientId: config.clientId,
			clientSecret: config.clientSecret
		},
	})

	//await zbc.deployProcess(['../process/send-email.bpmn'])

	const result = await zbc.createProcessInstance('job-worker', {
		//message_content: 'Hello from the node.js get started',
	})

	console.log(result)
	process.exit(0)
})()