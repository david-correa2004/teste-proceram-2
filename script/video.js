const videos_info = {
    video1: { id: "1017268067" },
    video2: { id: "1017268116" },
    video3: { id: "1017268324" },
    video4: { id: "1017268410" },
    video5: { id: "1017268463" },
    video6: { id: "1017268514" },
    video7: { id: "1017268563" },
    video8: { id: "1017268596" },
    video9: { id: "1017268645" },
};

const video_containers = document.querySelectorAll(".vimeo-container");

video_containers.forEach(video => {
    video.onclick = () => {
        var script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        document.body.appendChild(script);

        let selectedVideo = video.dataset.video;

        const videoId = videos_info[selectedVideo].id;

        script.onload = () => {
            var options = {
                id: videoId,
                loop: false,
                autoplay: true,
                muted: false,
            };

            video.innerHTML = '';

            var player = new Vimeo.Player(video, options);
            player.setVolume(1);
        };
    };
});
