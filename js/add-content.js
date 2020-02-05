var today = new Date();
var hourNOw = today.getHours();
var greeting;

if (hourNOw > 18) {
    greeting = 'Good evening!';


} else if (hourNOw > 0) {
    greeting = 'Good morning!';

} else {
    greeting = 'welcome!';

}
document.write('<h3>'+ greeting + '</h3>');