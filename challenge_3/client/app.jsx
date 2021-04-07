
class App extends React.Component {
  constructor (props){
    super(props)
    this.state= {
      whatToRender: Form1
    }
  }
  render(){
    return (
      <this.state.whatToRender/>
    )
  }



}

var Home = function (props){
  return (
  <div>
    <h1>Checkout Cart</h1>
    <button>checkout</button>
  </div>

  )
}

var Form1 = function (props){
  return (<div>
    <h1>Sign Up</h1>
    <form>
      <lable>Name:
        <input required id='name'></input>
      </lable>
      <lable>Email:
        <input required type='email'></input>
      </lable>
      <lable>Password:
        <input required type='password'></input>
      </lable>
      <button >Sign Up</button>
    </form>
  </div>

  )
}
var Form2 = function (props){
  return (
    <button>checkout</button>
  )
}







ReactDOM.render(<App/>, document.getElementById('app'))