import ReactStars from "react-rating-stars-component";

 
 
render(
  <ReactStars
    count={5}
    size={24}
    isHalf={true}
    activeColor="#ffd700"
  />,
 
  document.getElementById("where-to-render")
);

export default ReactStars;