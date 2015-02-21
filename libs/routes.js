/**
 * Created by Amitav Roy on 21/2/15.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('registation');
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

Router.route('/register-device', function () {
    body = this.request.body;
    Meteor.call('registerDevice', body.mobileNumber, body.registrationId, body.deviceId);
    this.response.end("Call served");
}, {where: 'server'});