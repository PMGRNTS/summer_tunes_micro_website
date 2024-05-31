document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playlist = document.getElementById('playlist');

    const songs = [
        { title: 'Song 1', src: 'music/05 Round and Round.mp3' },
        { title: 'Song 2', src: 'music/song2.mp3' }
        // Add more songs as needed
    ];

    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.dataset.src = song.src;
        listItem.addEventListener('click', () => {
            audioPlayer.src = song.src;
            audioPlayer.play();
        });
        playlist.appendChild(listItem);
    });

    audioPlayer.addEventListener('ended', () => {
        const currentIndex = songs.findIndex(song => song.src === audioPlayer.src);
        const nextIndex = (currentIndex + 1) % songs.length;
        audioPlayer.src = songs[nextIndex].src;
        audioPlayer.play();
    });
});