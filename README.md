# pure-react-carousel-thumbs
A simple carousel with no other dependencies with thumbnails.
A simple, customizable carousel component for React applications.
A customizable React carousel component with support for thumbnails, autoplay, swiping, and more.

## Installation
`npm install pure-react-carousel-thumbs`

## Usage

First, import the Carousel and CarouselThumbs components:

```
import { Carousel, CarouselThumbs } from 'pure-react-carousel-thumbs';

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
|cover|boolean|false|Whether to cover the entire carousel container otherwise background should scale with **height set to auto**.
|index|number|0|The initial index of the carousel.
|height|number|string|'auto'|The height of the carousel container.
|width|number|string|'100%'|The width of the carousel container.
|interval|number|0|The interval for autoplay (in milliseconds). Set to 0 to disable autoplay.
|animationDuration|number|500|The duration of the slide change animation (in milliseconds).
|autoPlay|boolean|false|Whether to enable autoplay.
|stopAutoPlayOnHover|boolean|false|Whether to stop autoplay when hovering over the carousel.
|swipe|boolean|true|Whether to enable swipe gestures.
|navButtonsAlwaysVisible|boolean|false|Whether to always show navigation buttons.
|navButtonsAlwaysInvisible|boolean|false|Whether to never show navigation buttons.

## CarouselThumbs Component
The CarouselThumbs component displays a row of thumbnail images that can be clicked to change the current slide in the main carousel.

## Props
|Prop|Type|Default|Description|
|---|---|---|---|
|images|string[] \| undefined|undefined|An array of image URLs to display as thumbnails.
|currentIndex|number|0|The index of the currently displayed image in the main carousel.
|changeIndex|(newIndex: number) => void|undefined|A function that changes the index of the currently displayed image in the main carousel.
|height|number \| string|'250px'|The height of the thumbnail images.
|width|number \| string|'250px'|The width of the thumbnail images.
|thumbsClassName|string|undefined|Optional CSS class for the thumbnail images.
|containerClassName|string|undefined|Optional CSS class for the thumbnails container.
|thumbStyle|React.CSSProperties|undefined|Optional style object for the thumbnail images.
|containerStyle|React.CSSProperties|undefined|Optional style object for the thumbnails container.
