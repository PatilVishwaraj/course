import {useState} from "react";
// const showTotal = (total) => {
//     const [total_quantity, setTotal_uantity] = useState(count)
//     return 

// }

const ShowItem = ({title, count}) => {
    const [quantity, setQuantity] = useState(count)

    const calc = (value)=> {
      if (value===-1 && quantity===0) {
        setQuantity(0)
      } else {
        setQuantity(quantity + value)
      }
    }
    return (<div className="items">
    <span>{title}</span>
    <button onClick={()=> calc(1)} className="addBook">
        +
    </button>
    <button onClick={()=> calc(-1)} className="remBook">
        -
    </button>
    <span className="totalBooks">{quantity}</span>
  </div>
    )
  }

export default ShowItem