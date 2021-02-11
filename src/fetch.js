const SEARCH_URL = 'https://front-test.beta.aviasales.ru/search';
const TICKET_URL = 'https://front-test.beta.aviasales.ru/tickets';
const numberOfRetries = 10;

const getSearchId = async () => {
  const res = await fetchRetry(SEARCH_URL, numberOfRetries);
  const searchIdParam = await res.json();
  return searchIdParam;
};

const getTicketBatchRes = async (params) => {
  const url = new URL(TICKET_URL);
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
