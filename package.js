Package.describe({
  name: 'gntyu/bootstrap-monthrangepicker',
  version: '1.1.5',
  summary: 'Month & Quarter range picker component',
  git: 'https://github.com/gntyu/bootstrap-monthrangepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('momentjs:moment@2.22.1', ["client"]);
  api.use('jquery@3.3.1', ["client"]);

  api.addFiles('daterangepicker.js', ["client"]);
  api.addFiles('daterangepicker.css', ["client"]);
});
