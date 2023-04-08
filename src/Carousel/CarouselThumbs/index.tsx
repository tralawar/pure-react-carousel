import React from 'react';

interface CarouselThumbsProps {
  images: string[] | undefined;
  currentIndex: number;
  changeIndex: (newIndex: number) => void;
}

const CarouselThumbs: React.FC<CarouselThumbsProps> = ({
  images,
  currentIndex,
  changeIndex,
}) => {
  if (!images) return null;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '16px',
      }}
    >
      {images?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-thumb-${index}`}
          onClick={() => changeIndex(index)}
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            marginRight: '8px',
            cursor: 'pointer',
            border:
              currentIndex === index
                ? '2px solid black'
                : '2px solid transparent',
          }}
        />
      ))}
    </div>
  );
};

export default CarouselThumbs;
