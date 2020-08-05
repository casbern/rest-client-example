const axios = require('axios');

async function getEntity(url) {
  try {
    const response = await axios.get(url);
    console.log('response', response.data);
  } catch (error) {
    console.error('error', error);
  }
}

async function postEntity(url) {
  axios.post(url, {
    id: 10,
    name: 'Boootcamp',
    author: 'BootLearn',
    price: 1500
  })
  .then(function (response) {
    console.log('response', response.data[response.data.length-1]);
  })
  .catch(function (error) {
    console.log('error', error);
  });
}

async function putEntity(url) {
  axios.put(url, {
    id: 13,
    name: 'Node Modification',
    author: 'Cris',
    price: 150
  })
  .then(function (response) {
    console.log('response', response.data);
  })
  .catch(function (error) {
    console.log('error', error);
  });
}

async function deleteEntity(url) {
  axios.delete(url, {
    id: 9,
    name: 'Node',
    author: 'Cris',
    price: 15
  })
  .then(function (response) {
    console.log('response', response.data);
  })
  .catch(function (error) {
    console.log('error', error);
  });
}


async function main() {
  //getEntity("http://localhost:8080/courses") 
  //postEntity("http://localhost:8080/courses/create") 
  //putEntity("http://localhost:8080/courses/13") 
  deleteEntity("http://localhost:8080/courses/9") 
}

main()