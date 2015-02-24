/**
 * Created by Amitav Roy on 21/2/15.
 */
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
    updateDispName: function (mobileNumber, dispName) {

    },
    removeDeviceById: function(id) {
        if (Meteor.user()) {
            DeviceRegistration.remove(id);
        }
    }
});