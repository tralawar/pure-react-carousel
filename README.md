# pure-react-carousel
A simple carousel with no other dependencies with thumbnails.
A simple, customizable carousel component for React applications.
A customizable React carousel component with support for thumbnails, autoplay, swiping, and more.

## Installation
`npm install pure-react-carousel`

## Usage

First, import the Carousel and CarouselThumbs components:

```
import Carousel from 'pure-react-carousel';
import CarouselThumbs from 'pure-react-carousel/CarouselThumbs';

function App() {
  const images = [
    'https://your-image-url-1.jpg',
    'https://your-image-url-2.jpg',
    'https://your-image-url-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Carousel images={images} onChange={setCurrentIndex} />
      <CarouselThumbs
        images={images}
        currentIndex={currentIndex}
        changeIndex={setCurrentIndex}
      />
    </>
  );
}
```


## Carousel Component
The Carousel component displays a carousel of images with customizable options.

## Props  
|Prop|Type|Default|Description|
|---|---|---|---|
|images	|string[]|undefined|undefined	An array of image URLs to display in the carousel.
|className|string|undefined|undefined	Optional CSS class for the carousel container.
|changeOnClick|boolean|true|Whether to change the slide when clicking on it.
|index|number|0|The initial index of the carousel.
|height|number|string|'512px'|The height of the carousel container.
|width|number|string|'100%'|The width of the carousel container.
|interval|number|0|The interval for autoplay (in milliseconds). Set to 0 to disable autoplay.
|animationDuration|number|500|The duration of the slide change animation (in milliseconds).
|autoPlay|boolean|false|Whether to enable autoplay.
|stopAutoPlayOnHover|boolean|false|Whether to stop autoplay when hovering over the carousel.
|swipe|boolean|true|Whether to enable swipe gestures.
|navButtonsAlwaysVisible|boolean|false|Whether to always show navigation buttons.
|navButtonsAlwaysInvisible|boolean|false|Whether to never show navigation buttons.

