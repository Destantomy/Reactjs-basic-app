import {React, useState, useEffect} from 'react'

const useFetch = (url) => {
    // hook declare start
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
// /hook declare start

    useEffect(() => {
      setTimeout(() => {
        fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('couldnt fetch data from resource')
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null)
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
      }, 1000);
    }, [url]);
    return {data, isPending, error}
}

export default useFetch