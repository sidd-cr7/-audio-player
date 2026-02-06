import React, { useState, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    setSongs([
      { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", genre: "Pop", duration: "3:20", videoId: "fHI8X4OXluQ", cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" },
      { title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", genre: "Pop", duration: "3:35", videoId: "XXYlFuWEuKI", cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" },
      { title: "Starboy", artist: "The Weeknd ft. Daft Punk", album: "Starboy", genre: "Pop", duration: "3:50", videoId: "34Na4j8AVgA", cover: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452" },
      { title: "One Dance", artist: "Drake ft. Wizkid", album: "Views", genre: "Hip-Hop", duration: "2:54", videoId: "eRMEf8xSfI8", cover: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de" },
      { title: "God's Plan", artist: "Drake", album: "Scorpion", genre: "Hip-Hop", duration: "3:18", videoId: "xpVfcZ0ZcFM", cover: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5" },
      { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", genre: "Pop", duration: "3:23", videoId: "TUVcZfQe-Kw", cover: "https://i.scdn.co/image/ab67616d0000b273fc1c7c4129c0e6f8a746c9d2" },
      { title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", genre: "Pop", duration: "3:14", videoId: "DyDfgMOUjCI", cover: "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce" },
      { title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", genre: "Pop", duration: "3:53", videoId: "JGwWNGJdvx8", cover: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96" },
      { title: "Peaches", artist: "Justin Bieber", album: "Justice", genre: "Pop", duration: "3:18", videoId: "tQ0yjYUFKAE", cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431" },
      { title: "Stay", artist: "The Kid LAROI & Justin Bieber", album: "F*ck Love 3", genre: "Pop", duration: "2:21", videoId: "kTJczUoc26U", cover: "https://i.scdn.co/image/ab67616d0000b273e2d156fdc691f57900134342" },
      { title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", genre: "Alternative", duration: "3:58", videoId: "mRD0-GxqHVo", cover: "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea" },
      { title: "As It Was", artist: "Harry Styles", album: "Harry's House", genre: "Pop", duration: "2:47", videoId: "H5v3kku4y6Q", cover: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14" },
      { title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", genre: "Pop", duration: "3:20", videoId: "b1kbLwvqugk", cover: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5" },
      { title: "Flowers", artist: "Miley Cyrus", album: "Endless Summer Vacation", genre: "Pop", duration: "3:20", videoId: "G7KNmW9a75Y", cover: "https://i.scdn.co/image/ab67616d0000b273f58c2ccb8e1c98a3bb4c0c34" },
      { title: "Unholy", artist: "Sam Smith & Kim Petras", album: "Gloria", genre: "Pop", duration: "2:36", videoId: "Uq9gPaIzbe8", cover: "https://i.scdn.co/image/ab67616d0000b273cd519fa579f43e384aa891f5" },
      { title: "Calm Down", artist: "Rema & Selena Gomez", album: "Rave & Roses", genre: "Afrobeats", duration: "3:59", videoId: "WcIcVapfqXw", cover: "https://i.scdn.co/image/ab67616d0000b273a3a7f38ea2033aa501afd4cf" },
      { title: "Vampire", artist: "Olivia Rodrigo", album: "GUTS", genre: "Pop", duration: "3:39", videoId: "RlPNh_PBZb4", cover: "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d" },
      { title: "Cruel Summer", artist: "Taylor Swift", album: "Lover", genre: "Pop", duration: "2:58", videoId: "ic8j13piAhQ", cover: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" },
      { title: "Shivers", artist: "Ed Sheeran", album: "= (Equals)", genre: "Pop", duration: "3:27", videoId: "Il0S8BoucSA", cover: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0" },
      { title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", genre: "Pop", duration: "2:58", videoId: "gNi_6U5Pm_o", cover: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a" }
    ]);
    setLoading(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const skipBackward = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
  };

  if (loading) {
    return (
      <div className="audio-player">
        <div className="loading">Loading music...</div>
      </div>
    );
  }

  if (songs.length === 0) {
    return (
      <div className="audio-player">
        <div className="loading">No songs available</div>
      </div>
    );
  }

  return (
    <div className="audio-player">
      <div className="main-player">
        {songs[currentSongIndex]?.videoId && (
          <iframe
            key={currentSongIndex}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${songs[currentSongIndex].videoId}?autoplay=${isPlaying ? 1 : 0}&controls=0&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ display: 'none' }}
            title="YouTube player"
          />
        )}
        
        <div className="song-info">
          {songs[currentSongIndex]?.cover && (
            <img src={songs[currentSongIndex].cover} alt="Album cover" className="album-cover" />
          )}
          <h3>{songs[currentSongIndex]?.title || 'Loading...'}</h3>
          <p>{songs[currentSongIndex]?.artist || 'Unknown Artist'}</p>
          <div className="song-details">
            <span className="album">{songs[currentSongIndex]?.album || 'Unknown Album'}</span>
            <span className="genre">{songs[currentSongIndex]?.genre || 'Unknown Genre'}</span>
          </div>
        </div>
        
        <div className="controls">
          <button onClick={skipBackward} className="control-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          
          <button onClick={togglePlay} className="play-btn">
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <button onClick={skipForward} className="control-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="queue-panel">
        <h4>Up Next</h4>
        <div className="queue-list">
          {songs.map((song, index) => (
            <div 
              key={index} 
              className={`queue-item ${index === currentSongIndex ? 'active' : ''}`}
              onClick={() => setCurrentSongIndex(index)}
            >
              {song.cover && <img src={song.cover} alt="" className="queue-cover" />}
              <div className="queue-info">
                <div className="queue-title">{song.title}</div>
                <div className="queue-artist">{song.artist}</div>
              </div>
              <div className="queue-duration">{song.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;