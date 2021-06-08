const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const gitToken = process.env.GIT_API_TOKEN;

const app = express();
const servingPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(servingPath));

const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

app.get('/reviews', (req, res) => {
  return axios.get (`${apiUrl}/reviews/?page=${req.query.page}&count=${req.query.count}&product_id=${req.query.productId}`, {
    headers: {
      'Authorization': gitToken
    }
  })
  .then((resp) => res.status(200).send(resp.data.results))
  .catch((err) => {
    console.log('ERROR GETTING REVIEWS FROM ATELIER API', err)
  })
});

app.get('/allReviews', (req, res) => {
  const count = 10
  const productId = req.query.productId

  const getReviews = async function (page = 1) {
    let url = `${apiUrl}/reviews?page=${page}&count=${count}&product_id=${productId}`;
    var apiResults = await axios.get(url, {headers: {'Authorization': gitToken}})
      .then((resp) => resp.data.results)
      .catch((err) => console.log('ERROR get reviews', err))
    // console.log('first page', apiResults.length);
    return apiResults.map((review) => review.rating);
  }

  const getAllReviews = async function (page = 1) {
    const results = await getReviews(page)
    // console.log('results', page, results.length)
    if (results.length > 0) {
      return results.concat(await getAllReviews(page + 1))
    } else {
      return results;
    }
  }
  // getAllReviews();
  const test = async function () {
    let entireList = await getAllReviews();
    console.log(entireList.length);
    res.status(200).send(entireList);
  }
  test();
});

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

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});