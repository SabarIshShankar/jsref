var rtc = {
	client: null,
	localAudioTrack: null,
};
var options = {
	appId: "",
	channel: null,
	token: null,
};

$(() => {
	var urlParams = new URL(location.href).searchParams;
	options.appid = "a6af85f840ef43108491705e2315a857";
	options.channel = urlParams.get("channel");
	if (options.appid && options.channel) {
		$("#channel").val(options.channel);
		$("#join-form").submit();
	}
	enableUiControls();
})

$("#join-form").submit(async function (e) {
	e.preventDefault();
	$("#join").attr("disabled", true);
	try {
		options.appid = "a6af85f840ef43108491705e2315a857";
		options.channel = $("#channel").val();
		await join();
	} catch (error) {
		console.error(error);
	} finally {
		$("#leave").attr("disabled", false);
	}
})

$("#leave").click(function (e) {
	leaveCall();
})

async function leaveCall() {
  rtc.localAudioTrack.close();
	await rtc.client.leave();
	$("#mic-btn").prop("disabled", true);
	$("#join").attr("disabled", false);
	$("#leave").attr("disabled", true);
}

async function join() {
	rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
	const uid = await rtc.client.join(options.appId, options.channel, options.token, null);
	$("#mic-btn").prop("disabled", false);
	rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
	await rtc.client.publish([rtc.localAudioTrack]);
	$("#local-player-name").append(`<div id="player-wrapper-${uid}">
  <p class="player-name">localUser(${uid})</p>
	

</div>`);

	console.log("Successfully published.");
	rtc.client.on("user-published", async (user, mediaType) => {
		await rtc.client.subscribe(user, mediaType);
		console.log("Successfully subscribed.");

		if (mediaType === "audio") {
			const player = $(`
          <div id="player-wrapper-${uid}">
            <p class="player-name">remoteUser(${uid})</p>
          </div>
        `);
			$("#remote-playerlist").append(player);

			const remoteAudioTrack = user.audioTrack;

			remoteAudioTrack.play();
		}
	});
	rtc.client.on("user-unpublished", user => {
		const playerContainer = document.getElementById("player-wrapper-" + uid);
		playerContainer.remove();
	});
}

// Action buttons
function enableUiControls() {
	$("#mic-btn").click(function () {
		toggleMic();
	});
}

// Toggle Mic
function toggleMic() {
	if ($("#mic-icon").hasClass('fa-microphone')) {
		rtc.localAudioTrack.setEnabled(false);
		console.log("Muted.");
	} else {
		rtc.localAudioTrack.setEnabled(true);
		console.log("Unmuted.");
	}
	$("#mic-icon").toggleClass('fa-microphone').toggleClass('fa-microphone-slash');
}