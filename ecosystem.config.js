module.exports = {
  apps: [{
    name: 'web-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-18-216-187-7.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/web-server.pem',
      ref: 'origin/master',
      repo: 'git@github.com:stormhaul/NodeWebsite.git',
      path: '/home/ec2-user/web-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
