/**
 * Created by Amitav Roy on 21/2/15.
 */

Meteor.publish("deviceRegistration", function () {
    if (Roles.userIsInRole(this.userId, ['superadmin', 'manager'])) {
        console.log('device registration published');
        return DeviceRegistration.find({}, {sort: {created: -1}});
    } else {
        this.stop();
        return;
    }
});

Meteor.methods({
    registerDevice: function (mobileNumber, regId, deviceId) {

        var id = DeviceRegistration.insert({
            mobileNumber: mobileNumber,
            regId: regId,
            deviceId: deviceId,
            created: new Date()
        });

        return id;
    },
    updateDispName: function (mobileNumber, displayName) {
        DeviceRegistration.update({mobileNumber: mobileNumber}, {$set: {displayName: displayName}});
    },
    removeDeviceById: function(id) {
        if (Meteor.user()) {
            DeviceRegistration.remove(id);
        }
    }
});