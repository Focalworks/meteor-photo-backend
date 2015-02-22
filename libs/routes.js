/**
 * Created by Amitav Roy on 21/2/15.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('registation');
});

Router.route('/device-listing', function () {
    this.render('registation');
});

Router.route('/device-details/:_id', function () {
    var device = DeviceRegistration.findOne({_id: this.params._id});
    console.log(device);
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

Router.route('/post', function () {
    body = this.request.body;

    var id = Meteor.call('registerDevice', body.mobileNumber, body.registrationId, body.deviceId);
    var device = DeviceRegistration.find({"_id": id}).fetch();
    var gcmRegId = device[0].regId;

    /*var ids = [];
    device.forEach(function (dev) {
        ids.push(dev.regId);
    });*/

    Meteor.call('sendDeviceRegisteredNotification', gcmRegId);
    this.response.end("Call served: " + id);
}, {where: 'server'});