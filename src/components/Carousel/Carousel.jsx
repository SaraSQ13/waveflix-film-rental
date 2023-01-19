import "./Carousel.scss";
import Carousel from "react-spring-3d-carousel";




const slides = [
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/800/?random" alt="1" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/800/?random" alt="2" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/600/800/?random" alt="3" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/800/?random" alt="5" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/800/?random" alt="8" />,
  },
];

<Carousel slides={slides} />;
