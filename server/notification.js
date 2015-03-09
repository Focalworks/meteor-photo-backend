/**
 * Created by Amitav Roy on 21/2/15.
 */
/*First one is unclickd*/
/*Second money tracker*/
Meteor.methods({
    sendDeviceRegisteredNotification: function (id) {
        HTTP.call("POST", "https://android.googleapis.com/gcm/send", {
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'key=AIzaSyCpUi3tlnOZ01kcMkzLF5_mHreJrLxABo8'
                'Authorization': 'key=AIzaSyDJn-FOAJaCIqJ5HV6ROLVJ5hw9SIqxj_w'
            },
            data: {
                "registration_ids": [id],
                "data": {
                    "title": "Congratulations",
                    "message": "Your device is now registered with us.",
                    "type": 'sendDeviceRegisteredNotification'
                }
            }
        }, function (error, result) {

        });
    },
    sendPhotoSetMessage: function (ids, photoSet) {
        console.log(photoSet[0]);
        HTTP.call("POST", "https://android.googleapis.com/gcm/send", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'key=AIzaSyCpUi3tlnOZ01kcMkzLF5_mHreJrLxABo8'
            },
            data: {
                "registration_ids": ids,
                "data": {
                    "title": "Photo set " + photoSet[0].name + "shared with you",
                    "message": "You have a new photo set shared.",
                    "type": 'sendPhotoSetMessage',
                    "photoSetTitle": photoSet[0].name,
                    "createdByNumber": photoSet[0].createdBy,
                    "urls": photoSet[0].urls,
                    "created": photoSet[0].created
                }
            }
        }, function (error, result) {

        });
    },
    sendNotificationToGroupAboutPhotoset: function (photoSetId) {
        photoSet = PhotoSet.find({_id: photoSetId}).fetch();

        distId = photoSet[0].distListId;
        distList = DistributionList.find({_id: distId}).fetch();

        var regIds = [];
        _.each(distList[0].members, function (member) {
            var device = DeviceRegistration.find({mobileNumber: member}).fetch();
            regIds.push(device[0].regId);
        });

        Meteor.call('sendPhotoSetMessage', regIds, photoSet);
    }
});