import React, { useEffect, useRef, useState } from 'react';

type CarouselProps = {
  images: string[] | undefined;
  className?: string;
  changeOnClick?: boolean;
  height?: number | string;
  width?: number | string;
  index?: number;
  autoPlay?: boolean;
  stopAutoPlayOnHover?: boolean;
  interval?: number;
  animationDuration?: number;
  swipe?: boolean;
  navButtonsAlwaysVisible?: boolean;
  navButtonsAlwaysInvisible?: boolean;
  cyclical?: boolean;
  navIcon?: React.ReactNode;
  onChange?: (newIndex: number) => any;
  next?: (now?: number, previous?: number) => any;
  prev?: (now?: number, previous?: number) => any;
};

const Carousel: React.FC<CarouselProps> = ({
  className,
  changeOnClick = true,
  images,
  index = 0,
  height = '512px',
  width = '100%',
  interval = 0,
  animationDuration = 500,
  autoPlay = false,
  stopAutoPlayOnHover = false,
  swipe = true,
  navButtonsAlwaysVisible = false,
  navButtonsAlwaysInvisible = false,
  cyclical = true,
  onChange,
  next,
  prev,
  navIcon = '',
}) => {
  if (!images) return <div>no images</div>;
  // eslint-disable-next-line
  const [currentIndex, setCurrentIndex] = useState(index);
  // eslint-disable-next-line
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  // eslint-disable-next-line
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  // eslint-disable-next-line
  const timeoutRef = useRef<number | undefined>();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      // eslint-disable-next-line
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleNext = () => {
    const previous = currentIndex;
    // eslint-disable-next-line
    const now = currentIndex === images?.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(now);
    next?.(now, previous);
    onChange?.(now);
  };

  const handlePrev = () => {
    const previous = currentIndex;
    // eslint-disable-next-line
    const now = currentIndex === 0 ? images?.length - 1 : currentIndex - 1;
    setCurrentIndex(now);
    prev?.(now, previous);
    onChange?.(now);
  };
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event?.touches?.[0]) {
      // eslint-disable-next-line
      setTouchStartX(event.touches[0].clientX);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event?.touches?.[0]) {
      // eslint-disable-next-line
      setTouchEndX(event.touches[0].clientX);
    }
  };
  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      if (touchEndX - touchStartX > 100) {
        handlePrev();
      } else if (touchStartX - touchEndX > 100) {
        handleNext();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };
  const handleMouseEnter = () => {
    if (stopAutoPlayOnHover) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (stopAutoPlayOnHover)
      timeoutRef.current = window.setTimeout(nextSlide, interval);
  };

  const showNavButtons = navButtonsAlwaysVisible || !navButtonsAlwaysInvisible;
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    if (interval === 0 || autoPlay === false) {
      return;
    }
    timeoutRef.current = window.setTimeout(nextSlide, interval);
    // eslint-disable-next-line
    return () => {
      // eslint-disable-next-line
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, interval]);
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    if (index !== undefined) {
      // eslint-disable-next-line
      setCurrentIndex(index);
    }
  }, [index]);

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={swipe ? handleTouchStart : undefined}
      onTouchMove={swipe ? handleTouchMove : undefined}
      onTouchEnd={swipe ? handleTouchEnd : undefined}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height,
        width,
      }}
    >
      {images && showNavButtons && (
        <>
          <button
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              borderTop: '3px solid #fff',
              borderRight: '3px solid #fff',
              transform: 'rotate(-135deg)',
              position: 'absolute',
              top: '50%',
              left: '18px',
              zIndex: 1,
            }}
            onClick={handlePrev}
            disabled={!cyclical && currentIndex === 0}
          >
            {navIcon}
          </button>
          <button
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              borderTop: '3px solid #fff',
              borderRight: '3px solid #fff',
              transform: 'rotate(45deg)',
              position: 'absolute',
              top: '50%',
              right: '18px',
              zIndex: 1,
            }}
            onClick={handleNext}
            disabled={!cyclical && currentIndex === images.length - 1}
          >
            {navIcon}
          </button>
        </>
      )}
      {images?.map((image, imgIndex) => (
        <img
          key={imgIndex}
          src={image}
          alt={`carousel-slide-${imgIndex}`}
          onClick={() => changeOnClick && handleNext}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: currentIndex === imgIndex ? 1 : 0,
            transition: `opacity ${animationDuration}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
