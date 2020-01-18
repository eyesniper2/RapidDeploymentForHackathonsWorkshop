import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
			value: '',
    list: []
		}
	}


  getListUrl() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return 'http://localhost:4000/list';
    } else {
      return window.location.protocol + '//' + window.location.host + '/list';
    }
  }

  

  componentDidMount() {

    axios.get(this.getListUrl())
  .then((response) => {
    // handle success
    this.setState({
      list: response.data
    });
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
  }

  handleChange = (evt) => {
    this.setState({value: evt.target.value});
  }

  addNewItem = (evt) => {
    evt.preventDefault();

    axios.post(this.getListUrl(), {
      value: this.state.value
    })
    .then((response) => {
      console.log(response.data);
      let currentList = this.state.list;
      currentList.push(response.data);
      this.setState({
        list: currentList,
        value: ''
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    const listItems = this.state.list.map((item) =>
    <li key={item.id.toString()}>
      {item.value}
    </li>
  );

    return (
      <div className="App">
        <h1>List App</h1>
        <form onSubmit={this.addNewItem}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br/>
        <ul className="list">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;
