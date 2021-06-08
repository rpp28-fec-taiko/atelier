const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const gitToken = process.env.GIT_API_TOKEN;

const app = express();
const servingPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(servingPath));

const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

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