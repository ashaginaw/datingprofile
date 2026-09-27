export default function MusicCard(){
    return(
        <div className = "music-card">
            <h2>
                🎵 A Song that Makes me Think of You
            </h2>

            <iframe
                style={{borderRadius: "12px"}}
                src="https://open.spotify.com/embed/track/1WzAeadSKJhqykZFbJNmQv?utm_source=generator&si=af02d23f1b924ea8"
                width="100%"
                height="152"
                frameBorder="0"
                allowfullscreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title = "Spotify Player">
            </iframe>

        </div>
    )
}