const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.sendFile('index.html', {root: '/home/ec2-user/web-server/'});
});

app.listen(3000, () => console.log('Server running on port 3000'));
