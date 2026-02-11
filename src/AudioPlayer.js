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
      { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", genre: "Pop", duration: "3:20", videoId: "4NRXx6U8ABQ", cover: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png" },
      { title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", genre: "Pop", duration: "3:53", videoId: "JGwWNGJdvx8", cover: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png" },
      { title: "Someone Like You", artist: "Adele", album: "21", genre: "Pop", duration: "4:45", videoId: "hLQl3WQQoQ0", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", album: "Uptown Special", genre: "Funk", duration: "4:30", videoId: "OPf0YbXqDm0", cover: "https://upload.wikimedia.org/wikipedia/en/7/7d/Mark_Ronson_-_Uptown_Funk_%28Official_Single_Cover%29.png" },
      { title: "Rolling in the Deep", artist: "Adele", album: "21", genre: "Pop", duration: "3:48", videoId: "rYEDA3JcQqw", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" },
      { title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", genre: "Pop", duration: "3:14", videoId: "DyDfgMOUjCI", cover: "https://upload.wikimedia.org/wikipedia/en/9/9f/Billie_Eilish_-_Bad_Guy.png" },
      { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", genre: "Pop", duration: "3:23", videoId: "TUVcZfQe-Kw", cover: "https://upload.wikimedia.org/wikipedia/en/2/2b/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png" },
      { title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", genre: "Pop", duration: "2:54", videoId: "E07s5ZYygMg", cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/Harry_Styles_-_Watermelon_Sugar.png" },
      { title: "Circles", artist: "Post Malone", album: "Hollywood's Bleeding", genre: "Pop", duration: "3:35", videoId: "wXhTHyIgQ_U", cover: "https://upload.wikimedia.org/wikipedia/en/2/27/Post_Malone_-_Circles.png" },
      { title: "Sunflower", artist: "Post Malone & Swae Lee", album: "Spider-Man: Into the Spider-Verse", genre: "Hip-Hop", duration: "2:38", videoId: "ApXoWvfEYVU", cover: "https://upload.wikimedia.org/wikipedia/en/d/d7/Post_Malone_and_Swae_Lee_-_Sunflower_%28Spider-Man_Into_the_Spider-Verse%29.png" },
      { title: "Senorita", artist: "Shawn Mendes & Camila Cabello", album: "Single", genre: "Pop", duration: "3:11", videoId: "Pkh8UtuejGw", cover: "https://upload.wikimedia.org/wikipedia/en/f/f2/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png" },
      { title: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming", genre: "Pop", duration: "3:29", videoId: "q0hyYWKXF0Q", cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Tones_and_I_-_Dance_Monkey.png" },
      { title: "Believer", artist: "Imagine Dragons", album: "Evolve", genre: "Rock", duration: "3:24", videoId: "7wtfhZwyrcc", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Imagine_Dragons_Believer.png" },
      { title: "Happier", artist: "Marshmello & Bastille", album: "Single", genre: "Electronic", duration: "3:34", videoId: "m7Bc3pLyij0", cover: "https://upload.wikimedia.org/wikipedia/en/e/ee/Marshmello_and_Bastille_Happier.png" },
      { title: "Perfect", artist: "Ed Sheeran", album: "÷ (Divide)", genre: "Pop", duration: "4:23", videoId: "2Vv-BfVoq4g", cover: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg" },
      { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", album: "A Star Is Born", genre: "Pop", duration: "3:35", videoId: "bo_efYhYU2A", cover: "https://upload.wikimedia.org/wikipedia/en/e/eb/Lady_Gaga_and_Bradley_Cooper_-_Shallow.png" },
      { title: "Havana", artist: "Camila Cabello ft. Young Thug", album: "Camila", genre: "Pop", duration: "3:37", videoId: "BQ0mxQXmLsk", cover: "https://upload.wikimedia.org/wikipedia/en/e/e1/Camila_Cabello_-_Havana.png" },
      { title: "Rockstar", artist: "Post Malone ft. 21 Savage", album: "Beerbongs & Bentleys", genre: "Hip-Hop", duration: "3:38", videoId: "UceaB4D0jpo", cover: "https://upload.wikimedia.org/wikipedia/en/8/8f/Post_Malone_-_Rockstar.png" },
      { title: "God's Plan", artist: "Drake", album: "Scorpion", genre: "Hip-Hop", duration: "3:18", videoId: "xpVfcZ0ZcFM", cover: "https://upload.wikimedia.org/wikipedia/en/1/12/Drake_-_God%27s_Plan.png" },
      { title: "Old Town Road", artist: "Lil Nas X ft. Billy Ray Cyrus", album: "7", genre: "Country Rap", duration: "2:37", videoId: "r7qovpFAGrQ", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/Lil_Nas_X_-_Old_Town_Road_%28Official_Single_Cover%29.png" },
      { title: "Starboy", artist: "The Weeknd ft. Daft Punk", album: "Starboy", genre: "Pop", duration: "3:50", videoId: "34Na4j8AVgA", cover: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" },
      { title: "One Dance", artist: "Drake ft. Wizkid", album: "Views", genre: "Hip-Hop", duration: "2:54", videoId: "oP3c1h8v2ZQ", cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Drake_-_One_Dance.png" },
      { title: "Closer", artist: "The Chainsmokers ft. Halsey", album: "Collage", genre: "Electronic", duration: "4:04", videoId: "PT2_F-1esPk", cover: "https://upload.wikimedia.org/wikipedia/en/2/23/The_Chainsmokers_%E2%80%93_Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29.png" },
      { title: "Stay", artist: "The Kid LAROI & Justin Bieber", album: "F*ck Love 3", genre: "Pop", duration: "2:21", videoId: "kTJczUoc26U", cover: "https://upload.wikimedia.org/wikipedia/en/c/c5/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png" },
      { title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", genre: "Alternative", duration: "3:58", videoId: "mRD0-GxqHVo", cover: "https://upload.wikimedia.org/wikipedia/en/d/d6/Glass_Animals_-_Heat_Waves.png" },
      { title: "As It Was", artist: "Harry Styles", album: "Harry's House", genre: "Pop", duration: "2:47", videoId: "H5v3kku4y6Q", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Harry_Styles_-_As_It_Was.png" },
      { title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", genre: "Pop", duration: "3:20", videoId: "b1kbLwvqugk", cover: "https://upload.wikimedia.org/wikipedia/en/b/bd/Taylor_Swift_-_Anti-Hero.png" },
      { title: "Flowers", artist: "Miley Cyrus", album: "Endless Summer Vacation", genre: "Pop", duration: "3:20", videoId: "G7KNmW9a75Y", cover: "https://upload.wikimedia.org/wikipedia/en/7/72/Miley_Cyrus_-_Flowers.png" },
      { title: "Vampire", artist: "Olivia Rodrigo", album: "GUTS", genre: "Pop", duration: "3:39", videoId: "RlPNh_PBZb4", cover: "https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png" },
      { title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", genre: "Pop", duration: "2:58", videoId: "gNi_6U5Pm_o", cover: "https://upload.wikimedia.org/wikipedia/en/d/d7/Olivia_Rodrigo_-_Good_4_U.png" }
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