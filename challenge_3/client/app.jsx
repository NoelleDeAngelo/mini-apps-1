

class App extends React.Component {
  constructor (props){
    super(props)
    this.changeTo= this.changeTo.bind(this)
    this.state= {
      whatToRender: Home
    }
  }
  render() {
    return (
      <this.state.whatToRender  changeTo= {this.changeTo}/>
    )
  }

  changeTo(page) {
    this.setState({whatToRender: page})
  }


}

var Home = function ({changeTo}){
  return (
  <div>
    <h1>Checkout Cart</h1>
    <button onClick= {()=> changeTo(SignUp)}>checkout</button>
  </div>

  )
}

var SignUp = function ({changeTo}){
  return (
  <div>
    <h1>Sign Up</h1>
    <form>
      <label>Name:
        <input id='name' name='name'></input>
      </label>
      <label>Email:
        <input type='email' id='email'name='email'></input>
      </label>
      <label>Password:
        <input type='password' id= 'password'name='password'></input>
      </label>
      <button onClick= {(event)=> { event.preventDefault(); changeTo(Shipping)}}>Sign Up</button>
    </form>
  </div>

  )
}
var Shipping = function ({changeTo}){
  return (
    <div>
    <h1>Shipping Information</h1>
    <form>
      <div>
        <label for='line1' >Address:</label>
        <input required id='line1'name='line1'></input>
        <label for='line1' >Apt</label>
        <input id='line2'name= 'line2'></input>
      </div>
      <div>
        <label for='city' >City:</label>
        <input required id='city' name= 'city'></input>
        <label for='state' >State:</label>
        <input required id='state' name= 'state'></input>
        <label for='zip' >ZipCode:</label>
        <input required id='zip' name= 'zip'></input>
      </div>
      <div>
        <label for='phone' >Phone Number:</label>
        <input id='phone' name = 'phone'></input>
      </div>

      <button onClick= {(event)=> {event.preventDefault(); changeTo(Payment)}}>Next</button>
    </form>
  </div>
  )
}

var Payment = function ({changeTo}){
  return (
    <div>
    <h1>Payment Information</h1>
    <form>
      <div>
        <label for='CCnumber' >Credit Card Number</label>
        <input required id='CCnumber'name='CCnumber'></input>
      </div>
      <div>
        <label for='exp' >Exp:</label>
        <input required id='exp' name= 'exp'></input>
        <label for='csv' >CSV:</label>
        <input required id='csv' name= 'csv'></input>
      </div>
      <div>
        <label for='billingZip' >ZipCode:</label>
        <input required id='billingZip' name= 'billingZip'></input>
      </div>

      <button onClick= {(event)=> {event.preventDefault(); changeTo(Summary)}}>Next</button>
    </form>
  </div>
  )
}

var Summary = function ({changeTo}){
  return (
    <div>
    <h1>Summary</h1>
    <div id= 'summary'></div>
      <button onClick= {()=> changeTo(Home)}>Next</button>
  </div>
  )
}






ReactDOM.render(<App/>, document.getElementById('app'))