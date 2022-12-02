const URL = process.env.REACT_APP_URL_HOST_API;
const PORT = process.env.REACT_APP_PORT_HOST_API;


const _get = (endpoint) => {
    console.log(`${URL}:${PORT}/${endpoint}`);

    return {};
};

const _post = (endpoint) => {
    console.log(`${URL}:${PORT}/${endpoint}`);

};

const _put = (endpoint) => {
    console.log(`${URL}:${PORT}/${endpoint}`);

};

const _patch = (endpoint) => {
    console.log(`${URL}:${PORT}/${endpoint}`);

};

const _delete = (endpoint) => {
    console.log(`${URL}:${PORT}/${endpoint}`);

};

module.exports = {
  _post,
  _get,
  _put,
  _patch,
  _delete,
};
