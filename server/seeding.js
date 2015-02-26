/**
 * Created by Amitav Roy on 25/2/15.
 */
console.log('Running seed file');

if(Meteor.users.find().count() === 0)
{
    console.log('No users found. Creating new user.');

    var users = [
        {name: 'Amitav Roy', email: 'amitav.roy@focalworks.in', password: 'test12345', roles: ['superadmin']},
        {name: 'Kaustubh Malgaonkar', email: 'kaustubh.malgaonkar@focalworks.in', password: 'test12345', roles: ['manager']},
        {name: 'Jhon Doe', email: 'jhon.doe@focalworks.in', password: 'test12345', roles: []}
    ];

    _.each(users, function (user) {
        id = Accounts.createUser({
            username: user.name,
            email: user.email,
            password: user.password
        })

        if (user.roles.length > 0) {
            Roles.addUsersToRoles(id, user.roles);
        }

        console.log('User ' + user.name + ' account created with password: ' + user.password);
    });
}