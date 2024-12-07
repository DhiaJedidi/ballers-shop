import './App.css';
import Footer from './components/footer.js'
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Items from "./pages/items";
import ProductPage from './pages/product-page.js';
import image from './pages/images/FRONT1.jpg'
import product1 from './pages/images/BACK1.jpg'
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/nav_bar.js';
import Cart from './pages/cart.js';
import { useState } from 'react';

function App() {
  let products = [
    { img:product1,
      nom : "artist on the court t-shirt black",
      price : 59,
      color : "black",
      num : 0
    },
    {img:image,
      nom : "artist on the court t-shirt white",
      price : 59,
      color : "white",
      num : 1
    },    
    { img:product1,
      nom : "artist on the court t-shirt black",
      price : 59,
      color : "black",
      num : 3
    },
    {img:image,
      nom : "artist on the court t-shirt white",
      price : 59,
      color : "white",
      num : 4
    }
    ,  
    {img:product1,
    nom : "artist on the court t-shirt black",
    price : 59,
    color : "black",
    num : 0
  },
  {img:image,
    nom : "artist on the court t-shirt white",
    price : 59,
    color : "white",
    num : 1
  },    
  { img:product1,
    nom : "artist on the court t-shirt black",
    price : 59,
    color : "black",
    num : 3
  },
  {img:image,
    nom : "artist on the court t-shirt white",
    price : 59,
    color : "white",
    num : 4
  }
  ];
  const [cart,setCart]  =useState([])
  const handleAddEntry = (newEntry) => {
    setCart([...cart, newEntry]);
  };
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
        <Route exact path='/'  ><Home prod ={products}/></Route>
        <Route exact path='/items' ><Items/></Route>
        <Route exact path='/contact' ><Contact/></Route>
        <Route exact path='/product-page/:index'><ProductPage onAddEntry={handleAddEntry} prods={products} /></Route>
        <Route exact path='/cart'><Cart items={cart}/></Route>

        </Switch>
      <footer >
        <Footer ></Footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
