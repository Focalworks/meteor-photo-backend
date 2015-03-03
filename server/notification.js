/**
 * Created by Amitav Roy on 21/2/15.
 */
Meteor.methods({
    sendDeviceRegisteredNotification: function (id) {
        HTTP.call("POST", "https://android.googleapis.com/gcm/send", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'key=AIzaSyCpUi3tlnOZ01kcMkzLF5_mHreJrLxABo8'
            },
            data: {
                "registration_ids": [id],
                "data": {
                    "title": "Congratulations",
                    "message": "Your device is now registered with us."
                }
            }
        }, function (error, result) {

        });
    },
    sendPhotoSetMessage: function (ids) {
        HTTP.call("POST", "https://android.googleapis.com/gcm/send", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'key=AIzaSyCpUi3tlnOZ01kcMkzLF5_mHreJrLxABo8'
            },
            data: {
                "registration_ids": ids,
                "data": {
                    "title": "Photoset shared with you",
                    "message": "You have a new photo set shared."
                }
            }
        }, function (error, result) {

        });
    },
    sendNotificationToGroupAboutPhotoset: function (photoSetId) {
        photoSet = PhotoSet.find({_id: photoSetId}).fetch();
        distId = photoSet[0].distListId;
        distList = DistributionList.find({_id: distId}).fetch();

        var deviceIds = [];
        _.each(distList[0].members, function (member) {
            var device = DeviceRegistration.find({mobileNumber: member}).fetch();
            deviceIds.push(device[0].deviceId);
        });

        Meteor.call('sendPhotoSetMessage', deviceIds);
    }
});