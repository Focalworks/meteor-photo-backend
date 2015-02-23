/**
 * Created by Amitav Roy on 21/2/15.
 */
AdminController = RouteController.extend({
  onBeforeAction: function () {
    if (Meteor.user() === null) {
      Router.go('/');
    }

    this.next();
  }
});

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/device-listing', {
  controller: 'AdminController',
  template: 'deviceDetails'
});

Router.route('/device-details/:_id', function () {
  var device = DeviceRegistration.findOne({_id: this.params._id});
  this.render('deviceDetails', {data: device});
});

HTTP.methods({
  'hello': {
    requestHeaders: function (request) {
      console.log("Req" + request);
    },
    method: function(data) {
      return EJSON.stringify({
        text: "asadadsd",
        data: ["1", "2"]
      });
    }
  }
});

if (Meteor.isServer) {
  Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
    extended: false
  }));
}

Router.route('/device-register', function () {
  body = this.request.body;

  var id = Meteor.call('registerDevice', body.mobileNumber, body.registrationId, body.deviceId);
  var device = DeviceRegistration.find({"_id": id}).fetch();
  var gcmRegId = device[0].regId;

  Meteor.call('sendDeviceRegisteredNotification', gcmRegId);
  this.response.end("Call served: " + id);
}, {where: 'server'});

Router.route('testing')