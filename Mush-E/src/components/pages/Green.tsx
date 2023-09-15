import './Green.css'
import { useState, useEffect } from 'react'

export const Green = () => {
  const [data, setData] = useState<{ members: string[] }>({ members: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   fetch("/members")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((responseData) => {
  //       setData(responseData);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    fetch("/members")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(data)
      });
  }, []);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <div >
      {data.members.map((member, i) => (
        <p key={i}>{member}</p>
      ))}
      <div className='greenDiv'>
        TEST
      </div>
    </div>
  );
};
