import "./style.scss";
import ReactPlayer from "react-player";
import React, { useRef, useState, ChangeEvent, useCallback } from "react";

export const VideoPlayer = () => {
	const [volume, setVolume] = useState(0);
	const [duration, setDuration] = useState(0);
	const [played, setPlayed] = useState(0);

	const playerRef = useRef<ReactPlayer | null>(null);

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVolume(parseFloat(e.target.value));
	};

	const handleDuration = (duration: number) => {
		setDuration(duration);
	};

	const handleProgress = useCallback((state: { playedSeconds: number }) => {
		setPlayed(state.playedSeconds);
	}, []);

	const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
		const seekTime = parseFloat(e.target.value);
		setPlayed(seekTime);
		if (playerRef.current) {
			playerRef.current.seekTo(seekTime);
		}
	};

	return (
		<>
			<ReactPlayer
				className="video-player"
				width="1920px"
				height="1080px"
				url="https://www.youtube.com/watch?v=P6Yx3CD4lQQ"
				playing={true}
				volume={volume}
				onProgress={handleProgress}
				onDuration={handleDuration}
			/>
			<input
				type="range"
				min={0}
				max={1}
				step="0.01"
				value={volume}
				onChange={handleVolumeChange}
				className="video-player__volume-slider"
				aria-label="Volume Control"
			/>
			<input
				type="range"
				min={0}
				max={duration}
				step={0.1}
				value={played}
				onChange={handleSeek}
				className="video-player__progress-bar"
				aria-label="Progress control"
			/>
		</>
	);
};
