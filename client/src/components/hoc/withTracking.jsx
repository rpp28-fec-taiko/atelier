import React from 'react';

const WithTracking = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    onWrappedComponentClick = (e) => {
      // console.log('wrapped component event', e);
      let interactionTime = new Date().toLocaleString('en-US', {hour12:false});

      let el = e.target.nodeName;
      let elClassname = e.target.className;
      let element = `${el} ${elClassname}`;

      let interactionObj = {
        element,
        widget: 'reviews',
        time: interactionTime
      }
      // console.log('interactionObj', interactionObj);

      fetch(`http://localhost:3000/interactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(interactionObj)
      })
      .then((resp) => {
        console.log('SUCCESSFULLY POSTED INTERACTION', resp);
      })
      .catch((err) => {
        console.log('ERROR CREATING INTERACTION', err);
      })
    }

    render () {
      return (
        <WrappedComponent onWrappedComponentClick={this.onWrappedComponentClick} {...this.props} />
      );
    }
  };
};

export default WithTracking;