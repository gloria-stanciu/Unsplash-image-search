export default function Search(props: {
  query: string;
  setQuery: (query: string)=> void;
}) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //@ts-expect-error target[0] is our input
    props.setQuery(e.target[0].value)
  }

  return (
    <form
      className="container mx-auto py-8 flex flex-col justify-between gap-y-2 px-2
    sm:gap-x-4 sm:flex-row
    "
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search for pictures"
        name="query"
        className="p-2 border-2 border-slate-200 rounded-md grow outline-slate-700"
      ></input>
      <button
        type="submit"
        className="border-2 border-slate-200 rounded-md py-2 px-4 hover:bg-slate-700 hover:text-white hover:border-slate-700"
      >
        Search
      </button>
    </form>
  );
}
