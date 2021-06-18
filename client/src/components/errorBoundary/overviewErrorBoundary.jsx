import React from 'react';

class OverviewErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR BOUNDARY', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong with the Overview Widget</h2>;
    }

    return this.props.children;
  }
}

export default OverviewErrorBoundary;