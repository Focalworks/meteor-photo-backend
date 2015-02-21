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
    }
});