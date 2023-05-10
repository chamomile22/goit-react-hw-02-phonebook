import React, {Component} from 'react';
import { nanoid } from 'nanoid'

export class Form extends Component {
  state = {
    name: '',
  }
  
  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let {name}=this.state;
    let id = nanoid();
    this.props.onSubmit({name, id});

    this.reset();
  };

  reset=()=>{
    this.setState({name: ''})
  }
  render(){
    return (<form
      style={{
        marginLeft: 20,
        padding: 20,
        border: '2px solid #000000',
        borderRadius: 6,
        display: 'inline-block',
      }}
      onSubmit={this.handleSubmit}
    >
      <label>
        <span style={{ marginRight: 10 }}>Name</span>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button
        type="submit"
        style={{ 
          display: 'block', 
          marginTop: 10, 
          marginLeft: 'auto',
          marginRight: 'auto' 
        }}
      >
        Add contact
      </button>
    </form>);
  }
}