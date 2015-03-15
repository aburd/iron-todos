Meteor.startup(function() {
  if (Meteor.users.find().count() === 1) {
    Accounts.createUser({
      username: 'test1',
      email: 'test2@example.com',
      password: 'password',
      profile:{
      	name: "Joefromthefuture"
      }
    });
  }
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
