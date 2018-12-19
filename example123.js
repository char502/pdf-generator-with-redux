const { Component } = React;
const { Provider } = ReactRedux;
const {
  createStore,
  applyMiddleware
} = Redux;
const {
  Field,
  Control,
  Form,
  combineForms
} = ReactReduxForm;
const thunk = ReduxThunk.default;
const logger = reduxLogger();

const initialUserState = {
  firstName: '',
  lastName: '',
};

const store = createStore(combineForms({
  user: initialUserState,
}), applyMiddleware(thunk));

class UserForm extends Component {
  render() {
    return (
      <Form model="user" onSubmit={v => console.log(v)}>
        <div className="field">
          <label>First name:</label>
          <Control.text model=".firstName" />
        </div>

        <div className="field">
          <label>Last name:</label>
          <Control.text model=".lastName" />
        </div>
        
        <div className="field">
          <label>Email:</label>
          <Control.text model=".email" type="email" />
        </div>
        
        <Field model=".sex" className="field">
          <label>
            <input type="radio" value="male" />
            Male
          </label>
          <label>
            <input type="radio" value="female" />
            Female
          </label>
        </Field>
        
        <div className="field">
          <label>Favorite Color:</label>
          <Control.select model=".favoriteColor">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Control.select>
        </div>

        <div className="field">
          <label>
            <Control.checkbox model=".employed" value={true} />
            I am employed
          </label>
        </div>
        
        <div className="field">
          <label>Notes:</label>
          <Control.textarea model=".notes" />
        </div>
        
        <button type="submit">
          Submit
        </button>
        
        <Control.reset model="user" type="reset">
          Reset
        </Control.reset>
      </Form>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));