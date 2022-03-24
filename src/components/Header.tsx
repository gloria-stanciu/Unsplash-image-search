export default function Header (props: {title: string}){
  return (
    <header className="w-full top-0 bg-slate-300 p-4 flex flex-row justify-start">
      <h1 className="font-thin">{props.title}</h1>
    </header>
  )
}