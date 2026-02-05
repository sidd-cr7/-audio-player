import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch('https://freemusicarchive.org/api/get/tracks.json?api_key=60BLHNQCAOUFPIBZ&limit=20');
      const data = await response.json();
      const formattedSongs = data.dataset.map(track => ({
        title: track.track_title,
        artist: track.artist_name,
        album: track.album_title || 'Unknown Album',
        genre: track.track_genres?.[0]?.genre_title || 'Unknown Genre',
        duration: track.track_duration || '0:00',
        src: track.track_file
      }));
      setSongs(formattedSongs);
      setLoading(false);
    } catch (error) {
      // Fallback to curated royalty-free songs
      setSongs([
        { title: "Chill Abstract", artist: "Coma-Media", album: "Royalty Free Collection", genre: "Electronic", duration: "2:30", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Corporate Motivational", artist: "Music_Unlimited", album: "Business Tracks", genre: "Corporate", duration: "3:15", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Acoustic Guitar", artist: "Free Music", album: "Indie Collection", genre: "Folk", duration: "2:45", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { title: "Upbeat Pop", artist: "Royalty Free Music", album: "Pop Hits", genre: "Pop", duration: "3:00", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Jazz Piano", artist: "Free Jazz Collective", album: "Smooth Jazz", genre: "Jazz", duration: "4:20", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
      ]);
      setLoading(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const skipForward = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => audioRef.current.play(), 100);
    }
  };

  const skipBackward = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => audioRef.current.play(), 100);
    }
  };

  const handleSpeedChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    audioRef.current.playbackRate = newRate;
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src={songs[currentSongIndex]?.src || ''}
        onEnded={skipForward}
      />
      
      <div className="song-info">
        <h3>{songs[currentSongIndex]?.title || 'Loading...'}</h3>
        <p>{songs[currentSongIndex]?.artist || 'Unknown Artist'}</p>
        <div className="song-details">
          <span className="album">{songs[currentSongIndex]?.album || 'Unknown Album'}</span>
          <span className="genre">{songs[currentSongIndex]?.genre || 'Unknown Genre'}</span>
        </div>
      </div>
      
      <div className="progress-container">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="progress-bar"
        />
        <span>{formatTime(duration)}</span>
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
      
      <div className="bottom-controls">
        <div className="volume-container">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="volume-bar"
          />
        </div>
        
        <div className="speed-control">
          <select value={playbackRate} onChange={handleSpeedChange} className="speed-select">
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;