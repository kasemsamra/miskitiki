$(document).ready(function() {
    $('#instagram').click(function() {
        window.open('https://www.instagram.com/xamra01/', '_blank');
    });

    $('#facebook').click(function() {
        window.open('https://www.facebook.com/', '_blank');
    });

    $('#twitter').click(function() {
        window.open('https://twitter.com/KasemSamra', '_blank');
    });

    $('body').css('overflow', 'hidden');

    setTimeout(function() {
        $('#loading-screen').css('display', 'none');
        $('#content').css('display', 'block');
        $('body').css('overflow', '');
    }, 1500);
});
