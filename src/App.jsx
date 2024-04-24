import './App.css'

function App() {

  const handleAddUser = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('user added success')
        form.reset()
      }
    })
  }

  return (
    <>
      <h1>CRUD Application With MongoDB and React</h1>
      <form onSubmit={handleAddUser}>
        <p className='text-xl'>Your Name: </p>
        <input type="text" name='name' />
        <br />
        <p className="text-xl">Your Email: </p>
        <input type="email" name='email'/>
        <br />
        <br />
        <input type="submit" value="Add User"/>
      </form>
    </>
  )
}

export default App