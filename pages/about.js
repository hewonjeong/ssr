import { Component } from 'react';
import axios from 'axios';

const getStars = async () => {
  try {
    const res = await axios.get('https://api.github.com/repos/hewonjeong/ssr');
    return res.data.stargazers_count;
  } catch (e) {
    console.error(e);
    return -1;
  }
};

class About extends Component {
  state = { stars: this.props.stars };
  static defaultProps = { contents: 'about this repo🧐' };

  onRefresh = async e => {
    const stars = await getStars();
    this.setState({ stars });
  };
  render() {
    return (
      <div>
        <h2>{this.props.contents}</h2>
        <h2> ⭐️: {this.state.stars} </h2>
        <button onClick={this.onRefresh}>Refresh</button>
      </div>
    );
  }
}

About.getInitialProps = async () => {
  const stars = await getStars();
  return { stars };
};
export default About;
