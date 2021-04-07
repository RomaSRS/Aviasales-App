const BASE_URL = 'https://front-test.beta.aviasales.ru/';
const numberOfRetries = 10;

const getSearchId = async () => {
  const res = await fetchRetry(`${BASE_URL}search`);
  const searchId = await res.json();
  return searchId;
};

const getTicketBatchRes = async (params) => {
  const url = new URL(`${BASE_URL}tickets`);
  url.search = new URLSearchParams(params);
  const res = await fetchRetry(url, numberOfRetries);
  return res;
};

const fetchRetry = async (url, n) => {
  try {
    const res = await fetch(url);
    if (res.status !== 200) {
      return fetchRetry(url, n - 1);
    }
    return res;
  } catch (err) {
    if (n <= 1) throw err;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetchRetry(url, n - 1);
  }
};

export { getTicketBatchRes, getSearchId };