export const fetchList = async ({tab = 'all', page = 1, limit = 10 } = {}) => {
    return fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`).then(data=>data.json());
}