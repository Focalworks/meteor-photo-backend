/**
 * Created by Amitav Roy on 21/2/15.
 */
Template.registation.helpers({
    'registrations' : function () {
        return DeviceRegistration.find();
    }
});

Template.registation.events({
    'click .notification' : function (event) {
        //Meteor.call('sendDeviceRegisteredNotification', 1);
    }
});