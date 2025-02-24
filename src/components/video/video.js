export default function VideoPlayer() {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/SEU_VIDEO_ID"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
