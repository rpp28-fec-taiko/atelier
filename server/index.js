const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const gitToken = process.env.GIT_API_TOKEN;

const app = express();
const servingPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(servingPath));

const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Products API --------------------------------------------------------

app.get('/products', (req, res) => {
  return axios.get(`${apiUrl}/products?page=4`, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((results) => {
    console.log('results', results.data);
  })
  .catch(() => {
    console.log('error fetching products');
  });
});

app.get('/productInfo', (req, res) => {
  return axios.get(`${apiUrl}/products/${req.query.productId}`, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((results) => {
    res.status(200);
    res.json(results.data);
  })
  .catch(() => {
    console.log('error retreiving product info from API');
    res.sendStatus(404);
  });
});

app.get('/styles', (req, res) => {
  return axios.get(`${apiUrl}/products/${req.query.productId}/styles`, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((results) => {
    // console.log('success styles', results.data)
    res.status(200);
    res.json(results.data);
  })
  .catch(() => {
    console.log('error retreiving styles from API')
    res.sendStatus(404);
  });
});

// Cart API --------------------------------------------------------------

app.post('/cart', (req, res) => {
  return axios.post(`${apiUrl}/cart`, { sku_id: req.query.sku }, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((results) => {
    console.log('successfully added to cart API', results)
    res.sendStatus(201);
  })
  .catch(() => {
    console.log('error adding item to cart')
    res.sendStatus(404);
  });
});

app.get('/cart', (req, res) => {
  return axios.get(`${apiUrl}/cart`, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((results) => {
    console.log('getting cart from API', results.data);
    res.status(200);
    res.json(results.data);
  })
  .catch(() => {
    console.log('error getting cart from API');
    res.sendStatus(400);
  })
});


// Reviews API ------------------------------------------------------------

app.get('/allReviews', async (req, res) => {
  try {
    let productId = req.query.productId
    let metaUrl = `${apiUrl}/reviews/meta?product_id=${productId}`;
    let { data: { ratings }} = await axios.get(metaUrl, {headers: {'Authorization': gitToken}})
    // console.log('raings', ratings);
    let totalReviews = 0;
    for (let key in ratings) {
      totalReviews += Number(ratings[key]);
    }
    // console.log('nubmer',totalReviews)

    let url = `${apiUrl}/reviews?page=1&count=${totalReviews}&product_id=${productId}`;
    let allReviews = await axios.get(url, {headers: {'Authorization': gitToken}});
    // console.log('allrating', allRatings);
    res.status(200).send(allReviews.data.results);
  } catch(err) {
    console.log('ERROR GETTING META DATA AND TOTAL REVIEWS', err)
  }
});

app.get('/reviewsMeta', async (req, res) => {
  try {
    let productId = req.query.productId;
    let metaUrl = `${apiUrl}/reviews/meta?product_id=${productId}`;
    let { data: { characteristics }} = await axios.get(metaUrl, {headers: {'Authorization': gitToken}});

    let mapCharacteristics = [];
    for (let key in characteristics) {
      let newObj = {
        ...characteristics[key],
        name: key,
        value: Number(characteristics[key].value).toFixed(1)
      };
      mapCharacteristics.push(newObj);
    }
    // console.log('characteristics', characteristics);
    // console.log('new characteristics', mapCharacteristics);
    res.status(200).send(mapCharacteristics);
  } catch(err) {
    console.log('ERROR GETTING CHARACTERISTICS', err)
  }
});

app.post('/reviews', async (req, res) => {
  try {
    // console.log('req body', req.body)
    let url = `${apiUrl}/reviews`;
    let { data } = await axios.post(url, req.body, {headers: {'Authorization': gitToken}})
    res.status(201).send(data);
  } catch (err) {
    console.log('ERROR CREATING A REVIEW', err);
    res.send(err);
  }
})

app.put('/reviews/:reviewId/helpful', (req, res) => {
  // console.log('req', req.params, 'query', req.query);
  return axios.put(`${apiUrl}/reviews/${req.params.reviewId}/helpful`, null, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then(() => {
    // console.log('submited helpfulness');
    res.sendStatus(204);
  })
  .catch((err) => {
    console.log('ERROR SUBMITTING HELPFULNESS FOR REVIEW', err)
  })
})

app.put('/reviews/:reviewId/report', (req, res) => {
  return axios.put(`${apiUrl}/reviews/${req.params.reviewId}/report`, null, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then(() => {
    console.log('reported review');
    res.sendStatus(204);
  })
  .catch((err) => {
    console.log('ERROR REPORTING REVIEW', err)
  })
})

//Questions

app.get('/qa/questions', (req, res) => {
  return axios(`${apiUrl}/qa/questions/?product_id=${req.query.productId}`, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((resp) => res.status(200).send(resp.data))
  .catch((err) => {
    console.log('ERROR GETTING QUESTIONS FROM API: ', err);
  });
})

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});