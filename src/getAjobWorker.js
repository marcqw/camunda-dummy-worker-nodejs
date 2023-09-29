const { ZBClient } = require('zeebe-node')
const config = require('./ressources/config.json');

const zbc = new ZBClient({
	camundaCloud: {
		clusterId: config.clusterId,
    	clientId: config.clientId,
    	clientSecret: config.clientSecret
	},
})

const worker = zbc.createWorker({
	taskType: 'getajob',
	taskHandler: (job) => {
		//const { message_content } = job.variables
		//worker.log(`Sending email with message content: ${message_content}`)
        worker.log('No f***ing way!')
		job.complete()
	}
})