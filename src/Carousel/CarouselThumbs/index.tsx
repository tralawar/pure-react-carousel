import React from 'react';

interface CarouselThumbsProps {
  images: string[] | undefined;
  currentIndex: number;
  changeIndex: (newIndex: number) => void;
  height?: number | string;
  width?: number | string;
  thumbsClassName?: string;
  containerClassName?: string;
  thumbStyle?: React.CSSProperties; // Add this prop
  containerStyle?: React.CSSProperties; // Add this prop
}

const CarouselThumbs: React.FC<CarouselThumbsProps> = ({
  images,
  currentIndex,
  changeIndex,
  height = '250px',
  width = '250px',
  thumbsClassName,
  containerClassName,
  thumbStyle, // Add this prop
  containerStyle, // Add this prop
}) => {
  if (!images) return null;
  return (
    <div
      className={containerClassName}
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '16px',
        ...containerStyle, // Add this line
      }}
    >
      {images?.map((image, index) => (
        <img
          className={thumbsClassName}
          key={index}
          src={image}
          alt={`carousel-thumb-${index}`}
          onClick={() => changeIndex(index)}
          style={{
            width: width ? width : '250px',
            height: height ? height : '250px',
            objectFit: 'cover',
            marginRight: '8px',
            cursor: 'pointer',
            border:
              currentIndex === index
                ? '2px solid black'
                : '2px solid transparent',
            ...thumbStyle, // Add this line
          }}
        />
      ))}
    </div>
  );
};

export default CarouselThumbs;
