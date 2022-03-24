import { createApi } from "unsplash-js";
import { Image } from "../App";

const api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string
});

export default async function SearchImages(query: string, page: number):Promise<{ images: Image[]; nextPage: string; }>{
  const regExp = /<(.*?)>/g;
  let nextPage = ''
  console.log(page)
  const response = (await api.search.getPhotos({ query, page, perPage: 9 }))
  const linkHeaders = response.originalResponse.headers.get('link')

  // console.log(response)
  if(linkHeaders){
    nextPage = [...linkHeaders.matchAll(regExp)][1][1]
  }

  const images = response.response?.results as unknown as Image[]
  return {images, nextPage}
}
