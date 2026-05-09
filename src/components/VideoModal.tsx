import { useEffect } from "react";

type VideoModalProps = {
  videoId: string | null;
  onClose: () => void;
};

function VideoModal({ videoId, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!videoId) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoId, onClose]);

  if (!videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div
      className="video-modal"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="video-modal-content">
        <button className="video-modal-close" type="button" onClick={onClose}>
          x
        </button>
        <iframe
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className="video-modal-footer">
          <a href={watchUrl} target="_blank" rel="noreferrer">
            Watch on YouTube -&gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
