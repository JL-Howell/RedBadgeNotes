import React, {Component} from 'react';
import FetchDisplay from './FetchDisplay'

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        console.log('Component mounded!');
        console.log(this.state.img)
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.url
                })
                console.log(this.state.img);
            })
    }

    render() {
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <FetchDisplay url={this.state.img} />
            </div>
        )
    }
}
