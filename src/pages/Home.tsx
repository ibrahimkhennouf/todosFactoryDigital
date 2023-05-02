import Todos from "../components/Todos";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { id } = JSON.parse(localStorage.getItem("user") as string);

  const { data, isError, isLoading } = useFetch(
    `${import.meta.env.VITE_API_URL}/todos?userId=${id}`
  );

  return (
    <>
      {isError ? (
        <p className="text-red-500 text-center">Error has occured</p>
      ) : (
        <>
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <Todos data={data} id={id} />
          )}
        </>
      )}
    </>
  );
}
