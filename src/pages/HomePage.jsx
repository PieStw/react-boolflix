import { useNetflixContext } from "../contex/NetflixContext";

export default function HomePage() {
  const { data } = useNetflixContext();

  console.log(data);

  return (
    <>
      {data.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.original_title}</p>
          <p>
            {data.original_language}
            <img
              src={`https://flagsapi.com/${data.original_language.toUpperCase()}/flat/64.png`}
            />
          </p>
          <p>{data.vote_average}</p>
        </div>
      ))}
    </>
  );
}
