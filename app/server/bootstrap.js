Meteor.startup(function () {
});

ServiceConfiguration.configurations.upsert(
  { service: 'meteor-developer' },
  {
    $set: {
      clientId: process.env['ACCOUNTS_METEOR_CLIENTID'],
      secret: process.env['ACCOUNTS_METEOR_SECRET'],
      loginStyle: 'popup'
    }
  }
);
