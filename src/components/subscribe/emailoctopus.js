var emailOctopus = {
    successMessage: 'Thanks for subscribing! -Powered by Email Octopus',
    missingEmailAddressMessage: 'Your email address is required.',
    invalidEmailAddressMessage: 'Your email address looks incorrect, please try again.',
    botSubmissionErrorMessage: 'This doesn\'t look like a human submission.',
    unknownErrorMessage: 'Sorry, an unknown error has occurred. Please try again later.',
    isBotPost: function() {
        return $('.email-octopus-form-row-honeypot input').val();
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
