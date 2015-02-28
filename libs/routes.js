/**
 * Created by Amitav Roy on 21/2/15.
 */

/*For post data*/
if (Meteor.isServer) {
    Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
        extended: false
    }));
}

/*HTTP.methods({
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
});*/

Router.route('/device-register', function () {
  body = this.request.body;

  var id = Meteor.call('registerDevice', body.mobileNumber, body.registrationId, body.deviceId);
  var device = DeviceRegistration.find({"_id": id}).fetch();
  var gcmRegId = device[0].regId;

  Meteor.call('sendDeviceRegisteredNotification', gcmRegId);
  this.response.end("Call served: " + id);
}, {where: 'server'});

Router.route('/update-display-name', function () {
    body = this.request.body;

    var mobileNumber = body.mobileNumber;
    var displayName = body.displayName;
    Meteor.call('updateDispName', mobileNumber, displayName);

    this.response.end("Display name updated for : " + mobileNumber);
}, {where: 'server'});

Router.route('/add-dist-list-and-members', function () {
    body = this.request.body;

    var name, creator, displayName, members;
    name = body.name;
    creator = body.creator;
    members = EJSON.parse(body.members);
    displayName = body.displayName;
    memObj = [];

    for (var i=0; i < members.length; i++) {
        memObj.push(members[i]);
    }

    var distListId = Meteor.call('createNewDistList', name, creator, displayName, memObj);

    this.response.end(distListId);
}, {where: 'server'});


Router.route('/photo-set-images', function () {
    body = this.request.body;

    var photoSetId, urls;
    photoSetId = body.photoSetId;
    urls = body.urls;
    urlObj = EJSON.parse(urls);

    Meteor.call('updatePhotoSetImages', photoSetId, urlObj);

    this.response.end(body.urls);
}, {where: 'server'});