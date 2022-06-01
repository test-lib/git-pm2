module.exports = {
  apps: [{
    script: 'index.js',
    exec_mode: 'cluster_mode',
    instances: 1,
  }],
  deploy: {
    production: {
      user: 'root',
      host: '13.126.13.250',
      ref: 'origin/master',
      repo: 'git@github.com:test-lib/git-pm2.git',
      path: '/var/www/test',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 reload ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
