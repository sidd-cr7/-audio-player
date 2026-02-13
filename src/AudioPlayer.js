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
      { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", genre: "Pop", duration: "3:20", videoId: "4NRXx6U8ABQ", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770987981/weeknd_after_hours_ga6i7n.jpg" },
      { title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", genre: "Pop", duration: "3:53", videoId: "JGwWNGJdvx8", cover: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png" },
      { title: "Someone Like You", artist: "Adele", album: "21", genre: "Pop", duration: "4:45", videoId: "hLQl3WQQoQ0", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", album: "Uptown Special", genre: "Funk", duration: "4:30", videoId: "OPf0YbXqDm0", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888166/Uptown_Funk_-_Bruno_Mars_teczdu.jpg" },
      { title: "Rolling in the Deep", artist: "Adele", album: "21", genre: "Pop", duration: "3:48", videoId: "rYEDA3JcQqw", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" },
      { title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", genre: "Pop", duration: "3:14", videoId: "DyDfgMOUjCI", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888340/badguy_devmuj.jpg" },
      { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", genre: "Pop", duration: "3:23", videoId: "TUVcZfQe-Kw", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888510/levitationg_xfhymr.jpg" },
      { title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", genre: "Pop", duration: "2:54", videoId: "E07s5ZYygMg", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888736/Watermelon_Sugar_-_YouTube_Music_lvvoad.jpg" },
      { title: "Circles", artist: "Post Malone", album: "Hollywood's Bleeding", genre: "Pop", duration: "3:35", videoId: "wXhTHyIgQ_U", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888843/Circles_-_Post_Malone__Song_Lyrics_Music_Videos_Concerts_agjchb.jpg" },
      { title: "Sunflower", artist: "Post Malone & Swae Lee", album: "Spider-Man: Into the Spider-Verse", genre: "Hip-Hop", duration: "2:38", videoId: "ApXoWvfEYVU", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888925/download_e41kf2.jpg" },
      { title: "Senorita", artist: "Shawn Mendes & Camila Cabello", album: "Single", genre: "Pop", duration: "3:11", videoId: "Pkh8UtuejGw", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770889011/download_1_ibfaoa.jpg" },
      { title: "Believer", artist: "Imagine Dragons", album: "Evolve", genre: "Rock", duration: "3:24", videoId: "7wtfhZwyrcc", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770889166/Believer_-_Imagine_Dragons_jntb9k.jpg" },
      { title: "Happier", artist: "Marshmello & Bastille", album: "Single", genre: "Electronic", duration: "3:34", videoId: "m7Bc3pLyij0", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770890203/Happier_-_Marshmello_moycdp.jpg" },
      { title: "Cry For Me", artist: "The Weeknd", album: "Hurry Up Tomorrow", genre: "Pop", duration: "3:30", videoId: "bn8gP5N8hqM", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770987988/weeknd_hut_hucbp5.jpg" },
      { title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", genre: "Pop", duration: "3:35", videoId: "XXYlFuWEuKI", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770987981/weeknd_after_hours_ga6i7n.jpg" },
      { title: "Starboy", artist: "The Weeknd ft. Daft Punk", album: "Starboy", genre: "Pop", duration: "3:50", videoId: "34Na4j8AVgA", cover: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" },
      { title: "One Dance", artist: "Drake ft. Wizkid", album: "Views", genre: "Hip-Hop", duration: "2:54", videoId: "oP3c1h8v2ZQ", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770989378/Views_rafr7v.jpg" },
      { title: "Paradise", artist: "Bazzi", album: "Soul Searching", genre: "Pop", duration: "3:31", videoId: "x90WLRa5uGo", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770989705/bazzi_dtfwrc.jpg" },
      { title: "Stay", artist: "The Kid LAROI & Justin Bieber", album: "F*ck Love 3", genre: "Pop", duration: "2:21", videoId: "kTJczUoc26U", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770990135/STAY_with_Justin_Bieber_uwkf7v.jpg" },
      { title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", genre: "Alternative", duration: "3:58", videoId: "mRD0-GxqHVo", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770989828/Dreamland_by_Glass_Animals_on_Apple_Music_pmidwj.jpg" },
      { title: "As It Was", artist: "Harry Styles", album: "Harry's House", genre: "Pop", duration: "2:47", videoId: "H5v3kku4y6Q", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770989890/harrys_house_iem6ji.jpg" },
      { title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", genre: "Pop", duration: "3:20", videoId: "b1kbLwvqugk", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770989990/You_re_On_Your_Own_Kid_lr9pdm.jpg" },
      { title: "Adore You", artist: "Harry Styles", album: "Fine Line", genre: "Pop", duration: "3:27", videoId: "VF-r5TtlT9w", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770888736/Watermelon_Sugar_-_YouTube_Music_lvvoad.jpg" },
      { title: "Vampire", artist: "Olivia Rodrigo", album: "GUTS", genre: "Pop", duration: "3:39", videoId: "RlPNh_PBZb4", cover: "https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png" },
      { title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", genre: "Pop", duration: "2:58", videoId: "gNi_6U5Pm_o", cover: "https://res.cloudinary.com/drexsvnpj/image/upload/v1770990239/Olivia_Rodrigo_____Sour___Vinyl_LP___Best_Buy_mdgwxq.jpg" }
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