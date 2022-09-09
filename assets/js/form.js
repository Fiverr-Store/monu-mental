$(document).ready(function () {
	// form validation and ajax call

	$("#contact-form").submit(function (evt) {
		var form = $(this);
		evt.preventDefault();
		$("#result").hide();

		const email = $("#EMAIL").val();



		if (email.length == "") {
			$(".emailError").text("Email is required");
			$(".email").addClass("is-invalid");
		} else {
			$(".email").removeClass("is-invalid");
		}

		$(".email").focusin(function () {
			$(".email").removeClass("is-invalid");
		});
		$(".email").focusout(function () {
			if ($(this).val() === "") {
				$(".emailError").text("Email is required");
				$(".email").addClass("is-invalid");
			} else {
				$(".email").removeClass("is-invalid");
			}
		});




		// check and isert email
		if (
			email.length != ""
		) {
			$.ajax({
				type: "POST",
				url: "send_mail.php",
				data: {

					email: email,

				},
				dataType: "JSON",

				beforeSend: function () {
					// Before we send the request, remove the .hidden class from the spinner and default to inline-block.
					$("#loader-ajax").removeClass("hidden");
				},

				success: function (feedback) {
					if (feedback.status === "success") {
						$("#resultS").html(feedback.message);
						$("#S_Modal").modal("show");
						form.trigger("reset");
					} else if (feedback.status === "error") {
						$("#result").html(feedback.message);
						$("#result").show();
						form.trigger("reset");
					}
				},

				complete: function () {
					// Set our complete callback, adding the .hidden class and hiding the spinner.
					$("#loader-ajax").addClass("hidden");
				},
			}); /// ajax call add-user
		}
	}); // submit form
});
