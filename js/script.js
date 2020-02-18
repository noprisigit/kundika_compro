// Navbar click set active class
$('.navbar-nav a').on('click', function () {
    console.log(this);
    $(this).addClass('active').siblings().removeClass('active');
});