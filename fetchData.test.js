const fetchData = require('./fetchData')
const axios = require('axios')

jest.mock('axios')

test('fetch data from api successfullly', async () => {
    const data = { userId: 1, id: 1, title: 'Test Title', body: 'Test Body' };
    axios.get.mockResolvedValue({ data });

    const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).toEqual(data);
})