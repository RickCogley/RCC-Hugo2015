// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Parallax

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}

// Email octopus

var emailOctopus = {
    successMessage: 'Thanks for subscribing!',
    missingEmailAddressMessage: 'Your email address is required.',
    invalidEmailAddressMessage: 'Your email address looks incorrect, please try again.',
    botSubmissionErrorMessage: 'This doesn\'t look like a human submission.',
    unknownErrorMessage: 'Sorry, an unknown error has occurred. Please try again later.',
    isBotPost: function() {
        return $('.email-octopus-form-row-hp input').val();
    },
    basicValidateEmail: function(email) {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    },
    ajaxSuccess: function() {
        $('.email-octopus-success-message').text(
            emailOctopus.successMessage
        );
        $('.email-octopus-form').hide();
    },
    ajaxError: function(textStatus) {
        var response = $.parseJSON(textStatus.responseText);
        if (response && response.error && response.error.code) {
            switch(response.error.code) {
                case 'INVALID_PARAMETERS':
                    $('.email-octopus-error-message').text(
                        emailOctopus.invalidParametersErrorMessage
                    );
                    return;
                case 'BOT_SUBMISSION':
                    $('.email-octopus-error-message').text(
                        emailOctopus.botSubmissionErrorMessage
                    );
                    return;
            }
        }

        $('.email-octopus-error-message').text(
            emailOctopus.unknownErrorMessage
        );
    },
    ajaxSubmit: function() {
        var form = $('.email-octopus-form');
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function() {
                emailOctopus.ajaxSuccess();
            },
            error: function(textStatus) {
                emailOctopus.ajaxError(textStatus);
            },
        });
    }
}

$(function() {
    $('.email-octopus-form').submit(function(e) {
        $('.email-octopus-error-message').empty();
        var emailAddress = $('.email-octopus-email-address').val();

        if (emailOctopus.isBotPost()) {
            $('.email-octopus-error-message').text(
                emailOctopus.botSubmissionErrorMessage
            );
        } else if (!$.trim(emailAddress)) {
            $('.email-octopus-error-message').text(
                emailOctopus.missingEmailAddressMessage
            );
        } else if (!emailOctopus.basicValidateEmail(emailAddress)) {
            $('.email-octopus-error-message').text(
                emailOctopus.invalidParametersErrorMessage
            );
        } else {
            emailOctopus.ajaxSubmit();
        }

        return false;
    });
});
