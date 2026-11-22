import { useState } from 'react'
import './App.css'
import heroImg from './assets/hero.png'
import POSlog from './assets/logo_POS_round_PNG.png'
import './index.css'

function App() {
  const [quantity, setQuantity] = useState(0);

/*
  const [products, setProducts] = useState();
  const [showActive, setShowActive] = useState(false);
  const [activeProducts, setActiveProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [footer, setFooter] = useState(null);
  const [qty, setQty] = useState(0);
  const [price, setUnitPrice] = useState();
  useEffect(() => {
    setActiveProducts(products.setProducts(prod => !prod.completed));
  },[products]);
  useEffect(() => {
    setVisibleTodos(showActive ? activeProducts: products);
  },[showActive, products, activeProducts]);
  useEffect(() => {
  setFooter(
    <footer>
      {activeTodos.length} todos left
    </footer>
  );
  },[activeTodos]);
*/
  //const [plu, setPlu] = useState(0);
/*
  const calculateGrandTotal = () =>{
  }
  function NewPLUorProduct({}){
    const [text,setText] = useState('');

    function handleAddClick(){
      setText('');
      onAdd(createPluOrProduct(text));
    }
  }
*/

const updateQuantity = () =>{
  setQuantity
}
const[value, setPriceVal] = useState('');
const [productTotal, setProductTot] = useState(0);


const handleNumber1 = (e) =>{
  e.preventDefault();
  setPriceVal(1);
}
const handleNumber2 = (e) =>{
  e.preventDefault();
  setPriceVal(this.useState);

}
const calculateProductTotal= (e) =>{
    e.preventDefault();
    setProductTot(4);
}
  
  return (
    <>
    <section>
      <img src={POSlog} className="framework" alt="POS logo" width="100" height="100"/>
    </section>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={POSlog} className="framework" alt="React logo" />
          <img src={POSlog} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h2>POS System</h2>   System designed for Browser Use <code>HMR</code>
        </div>

        <div className='hero'>
          <table>
            <tr>
                <th>Item/PLU Code </th>
                <br></br>
                <th>Description </th>
                <br></br>
                <th>Quantity </th>
                <br></br>
                <th>Price Per Unit </th>
                <br></br>
                <th>Total </th>
            </tr>
            <tr>
                <td>
                  <input  placeholder='100000' ></input>
                </td>
                <br></br>
                <p></p>
                <td><label className='hero' for="cars">Choose Item:</label>
                  <select className='hero' name="cars" id="cars">
                  <option onChange={setPriceVal} value={value}>Volvo</option>
                  <option value="200">Saab</option>
                  <option value="300">Mercedes</option>
                  <option value="400">Audi</option>
                </select></td>
                <br></br>
                <td onclick={updateQuantity} id="txtQuantity">{quantity}</td>
                <br></br>
                <td>
                  <input value={value} onChange={e => setPriceVal(e.target.value)} placeholder='45.00' id="txtPricePerUnit" ></input>
                </td>
                <br></br>
                <td><label onChange={setPriceVal} value={value}>{value*quantity}</label> </td>
            </tr>
          </table>
        </div>

        <div classname = "counter">
        
        <p ><button className='counter' onClick={handleNumber1} value={setPriceVal}>1</button><button className='counter' onclick={handleNumber2} value={value}>2</button><button className='counter' value={3}>3</button></p>
        <p><button className='counter'onclick={productTotal} value={calculateProductTotal}>4</button><button className='counter' value={5}>5</button><button className='counter' value={6}>6</button></p>
        <p><button className='counter' value={7}>7</button><button className='counter' value={8}>8</button><button  className='counter' value={9}>9</button></p>
        <p><button className='counter'>C</button><button className='counter' value={0}>0</button><button className='counter'>.</button></p>
        
        
        <p><button className='counter'>Equals</button><button className='counter'>Price</button><button className='counter'>PLU</button></p>
        <p><button onclick="res.redirect('/api/products')" type="button" className="counter">View Products</button>
        <button onclick="app.emit('NewPLUorProduct()', product)" type="button" className="counter">Add Product</button>

        <button onclick="validateProductData()='/api/products'" type="button" className="counter">View Products</button></p>
        <button onclick="res.redirect('/api/orders')" type="button" className="counter">View Orders</button>
        <button onclick="res.redirect('/api/checkout')" type="button" className="counter">Checkout</button>
        <button
          type="button"
          className="counter"
          onClick={() => setQuantity((quantity) => quantity + 1)}
        >
          Increase Quantity
        </button> 
                <button
          type="button"
          className="counter"
          onClick={() => setQuantity((quantity) => quantity - 1)}
        >
          Decrease Quantity
        </button>
        </div>
      </section>
        
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>POS Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://" target="_blank">
                <img className="logo" src={POSlog} alt="" />
                Explore POS System
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={POSlog} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the POS Inaxtor Community</p>
          <ul>
            <li>
              <a href="https://github.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>

            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
export default App
