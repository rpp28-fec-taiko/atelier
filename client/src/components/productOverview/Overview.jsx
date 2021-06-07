import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        "id": 11,
        "name": "Air Minis 250",
        "slogan": "Full court support",
        "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
        "category": "Basketball Shoes",
        "default_price": "0",
        "features": [
          {
            "feature": "Sole",
            "value": "Rubber"
          },
          {
            "feature": "Material",
            "value": "FullControlSkin"
          }
        ]
      },
      styles: [
        {
          "style_id": 1,
          "name": "Forest Green & Black",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }

          }
        },
        {
          "style_id": 2,
          "name": "Desert Brown & Tan",
          "original_price": "140",
          "sale_price": "0",
          "default?": false,
          "photos": [
            {
            "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
            "url": "urlplaceholder/style_2_photo_number.jpg"
            }

          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }
          }
        },
        {
          "style_id": 3,
          "name": "Orange",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }

          }
        },
        {
          "style_id": 4,
          "name": "Black",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }

          }
        },
        {
          "style_id": 5,
          "name": "Violet",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }

          }
        },
        {
          "style_id": 6,
          "name": "Beige",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }

          }
        },
        {
          "style_id": 7,
          "name": "Purple",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
              "37": {
                    "quantity": 8,
                    "size": "XS"
              },
              "38": {
                    "quantity": 16,
                    "size": "S"
              },
              "39": {
                    "quantity": 17,
                    "size": "M"
              }

          }
        },

      ]
    }

  }

  render() {
    return (
      <div className='overview'>
        <ImageGallery />
        <ProductInfo product={this.state.product}/>
        <StyleSelector styles={this.state.styles}/>
        <Cart />
      </div>
    );
  }
}

export default Overview;