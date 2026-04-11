module.exports = {
  apps: [{
    name: 'video-ads-factory',
    script: 'panel/server.js',
    cwd: '/root/video-ads-factory',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 4895,
    },
  }],
}
