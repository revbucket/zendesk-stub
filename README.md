# meteor-zendesk-stub
A stub for use in testing Meteor apps. Stubs the oauth calls and allows you to fake stub more.

##Usage:

If you are using my Zendesk packages authentication, add this package like this:

`meteor add revbucket:meteor-zendesk-stub`

Your app will no longer authenticate with Zendesk in development mode and will authenticate with
a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

Be sure to edit `Meteor.setting.public.zendeskSubdomain` to your Zendesk Subdomain, as specified in
[revbucket:zendesk](https://github.com/revbucket/zendesk)

This package is based on the similar packages by Xolvio:
[xolvio:meteor-github-stub](https://github.com/xolvio/meteor-github-stub) and
[xolvio:meteor-twitter-stub](https://github.com/xolvio/meteor-twitter-stub)
