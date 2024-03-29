import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        this.setState({
            hasError: true
        })
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if(this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
