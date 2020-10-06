import React from 'react';
import './App.css';
import './vendor/bootstrap-5.0.0-alpha1-dist/css/bootstrap.min.css';
import './vendor/fontawesome-pro-icons/css/all.min.css';
import ListItems from './Listitems.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text, key) {
    const items = this.state.items;
    // eslint-disable-next-line
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <div class="card my-card m-2 border-primary">
          <div class="card-header border-primary">
            <h3>To-Do</h3>
          </div>
          <form id="to-do-form" class="mt-3 p-3" onSubmit={this.addItem}>
            <div class="input-group mb-3">
              <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} class="form-control" placeholder="Add Item" aria-label="Add Item" aria-describedby="button-addon2" />
              <button class="btn btn-outline-primary" type="submit" id="button-addon2"><i class="fa fa-plus"></i> Add</button>
            </div>
          </form>
          <div id="container">
            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
          </div>
        </div>
      </div>
    );
  }
}

export default App;