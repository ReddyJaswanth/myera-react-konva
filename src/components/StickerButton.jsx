const StickerButton = ({ type, onClick, emoji, image }) => {
    return (
        <button
            className="sticker-button"
            onClick={onClick}
            title={`Add ${type} sticker`}
        >
            {emoji ? (
                <span className="sticker-emoji">{emoji}</span>
            ) : (
                <img
                    src={image}
                    alt={type}
                    className="sticker-image"
                    width={30}
                    height={30}
                />
            )}
        </button>
    );
};

export default StickerButton; 