
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'


function App() {

  const objs = [
    {
      name: "Waqar",
      url: "https://github.com/waqar-5",
      comments: 4,
      points: 2,
      ID: 0
    },
    {
      name: "Akhlaque",
      url: "https://github.com/akhlaque-",
      comments: 4,
      points: 2,
      ID: 1
    }
  ]

  return (
    <>

<div className='App'>
  {objs.map(items => (
    <div key={items.ID}>

<h3>{items.name}</h3>
<a href={items.url} target='_blank' rel="noreferrer">Github Profile</a>
<p>Comments: {items.comments}</p>
<p>points: {items.points}</p>

    </div >
  ))}
</div>

<Hello />
<Welcome />

    </>
  )
}

export default App
