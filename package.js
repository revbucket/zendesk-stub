Package.describe({
  name: "revbucket:zendesk-stub",
  summary: "A stub for use in testing. Stubs the oauth calls amongst other APIs",
  version: "1.0.5",
  debugOnly: true,
  documentation: 'README.md',
  git: 'https://github.com/revbucket/zendesk-stub.git'

});

Package.on_use(function (api) {
  api.use(['service-configuration@1.0.3'], ['server']);
  api.use(['xolvio:http-interceptor@0.3.0'], ['server']);
  api.use(['underscore@1.0.2', 'iron:router@1.0.6'], ['server']);
  api.add_files(['zendesk-stub-server.js'], ['server']);
  api.add_files('oauth-fake-client.js', 'client');
});