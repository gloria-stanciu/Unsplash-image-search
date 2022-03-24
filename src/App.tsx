import { useEffect, useState } from "react";
import SearchImages from "./api/SearchImages";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import UnsplashImage from "./components/UnsplashImage";

export interface Image {
  alt_description: string;
  blur_hash: string;
  description: string;
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("");

  useEffect(() => {
    GetImages();
    setIsLoading(false)
  },[query, pageNumber]);

  async function GetImages() {
    const data = await SearchImages(query, pageNumber);
    setImages(oldArray => [...oldArray, ...data.images]);
  }

  function LoadMore(){
    setPageNumber(pageNumber+1)
    setIsLoading(true)
  }

  function ChangeSearch(query: string){
    setIsLoading(true)
    setQuery(query);
    setPageNumber(1);
    setImages([])
  }

  return (
    <div className="flex flex-col items-center">
      <Header title="Unsplash search app" />
      <Search query={query} setQuery={ChangeSearch} />
      <div className="container mx-auto grid grid-flow-row-dense items-start
      grid-cols-1 gap-2 p-2
      sm:grid-cols-2 sm:p-0
      md:grid-cols-3 md:gap-4
      ">
        {images?.map((item, index) => (
          <UnsplashImage image={item} key={index} />
        ))}
      </div>
      {!isLoading && images.length ? <button onClick={LoadMore} className='rounded-md bg-slate-300 px-4 py-2 my-8 outline-none w-fit'>Load more</button> : null}
    </div>
  );
}

export default App;
