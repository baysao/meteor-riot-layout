Package.describe({
  name: 'baysao:riot-layout',
  summary: 'Layout Manager for React with SSR Support',
  version: '0.1.0-2',
  git: 'https://github.com/baysao/meteor-riot-layout.git'
});

Package.onUse(function(api) {
  configure(api);
  api.export('RiotLayout');
});

function configure(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('kadira:flow-router-ssr@3.0.0', ['client', 'server'], {weak: true});
  api.use('baysao:riotjs@2.2.4-1', ['client', 'server']);
  api.addFiles('lib/riot_layout.js', ['client', 'server']);
}
