import "./App.css";
import ShowItem from "./components/showitem"
console.log(ShowItem)

function App() {
  var total
  const data = [
    {title:"books", count:13},
    {title:"pens", count:10},
    {title:"notebooks", count:44},
    {title:"inkpens", count:78}
  ]
  data.forEach(({title, count}) => {
    
  })
  array.forEach(element => {
    
  });
  total = 145
  return (
    <div className="App">
      {data.map((item)=> ShowItem(item, total))}
      <div className="total">{total}</div>
    </div>
    
  );
}





export default App;
