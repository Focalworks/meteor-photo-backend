/**
 * Created by Amitav Roy on 24/2/15.
 */

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('home');
});