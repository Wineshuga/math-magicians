import { useEffect, useState } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const quoteApi = await fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'X-Api-Key': process.env.REACT_APP_QUOTE_API_KEY,
          },
        });
        const result = await quoteApi.json();
        const dataArr = [result[0].quote, result[0].author];
        setData(dataArr);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) return <div className="quote-box">Something went wrong 😪</div>;
  if (loading) return <div className="quote-box">🥰Loading...</div>;
  return (
    <div className="quote-box">
      {data[0]}
      {' '}
      —
      {' '}
      {data[1]}
    </div>
  );
};

export default Quote;
