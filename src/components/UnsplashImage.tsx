import { Image } from "../App";

export default function UnsplashImage(props:{image: Image}){
  return(
    <div>
      <img className="w-full aspect-square object-cover" alt={props.image.alt_description} src={props.image.urls.regular}/>
    </div>
  )
}