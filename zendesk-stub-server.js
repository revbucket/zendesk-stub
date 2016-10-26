const subdomain = Meteor.settings.public.zendeskSubdomain;
HttpInterceptor = Package['xolvio:http-interceptor'].HttpInterceptor;
HttpInterceptor.registerInterceptor('https://' + subdomain + '.zendesk.com', Meteor.absoluteUrl('fake.' + subdomain+ '.zendesk.com'));


Router.route('fake.' + subdomain + '.zendesk.com/oauth/authorizations/new', function () {
  this.response.writeHead(301, {'Location': Meteor.absoluteUrl('_oauth/zendesk') + '?code=a1b2c3d4e5f6g7h8i9j0' + '&state=' + this.request.query.state});
  this.response.end();
}, {where: 'server'});

Router.route('fake.'+ subdomain + '.zendesk.com/oauth/tokens', function () {
  var cannedResponse = {
    'access_token': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    'token_type': 'bearer',
    'scope': 'user:email'
  };
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});

Router.route('fake.'+ subdomain + '.zendesk.com/api/v2/users/me.json', function () {
  var cannedResponse = {user: {id: 1234567,
                               email: 'matt+foo@'+ subdomain + '.com',
                               role: 'agent',
                               url: 'https://'+ subdomain + '.zendesk.com/api/v2/users/1234567.json'}
                       };

  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});

