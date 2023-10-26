module.exports = {
  apps: [
    {
      name: 'cluster-app',
      script: './dist/apps/cluster-app/main.js',
      out_file: './.pm2/logs/cluster-app/out.log',
      error_file: './.pm2/logs/cluster-app/error.log',
      instances: 2,
      instance_var: 'INSTANCE_ID',
      exec_mode: 'cluster',
      time: true,
      merge_logs: true,
      env: {
        NO_COLOR: true,
      },
    },
    {
      name: 'logging-app',
      script: './dist/apps/logging-app/main.js',
      out_file: './.pm2/logs/logging-app/out.log',
      error_file: './.pm2/logs/logging-app/error.log',
      instances: 2,
      instance_var: 'INSTANCE_ID',
      exec_mode: 'cluster',
      time: true,
      merge_logs: true,
      env: {
        NO_COLOR: true,
      },
    },
  ],
};
