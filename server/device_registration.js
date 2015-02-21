/**
 * Created by Amitav Roy on 21/2/15.
 */
Meteor.methods({
    registerDevice: function (mobileNumber, regId, deviceId) {

        console.log("Server: " + mobileNumber + regId + deviceId);

        DeviceRegistration.insert({
            mobileNumber: mobileNumber,
            regId: regId,
            deviceId: deviceId,
            created: new Date()
        });
    },
    updateDispName: function (mobileNumber, dispName) {

    }
});