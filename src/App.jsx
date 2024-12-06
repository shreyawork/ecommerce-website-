import React,{Suspense} from 'react';
import { BrowserRouter as  Router,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import ErrorBoundary from './components/errorBoundary';
import Header from "./components/Header";
//lazy loading components
const  ProductList = React.lazy(()=> import('./components/ProductList'));
const Productdetail = React.lazy(() => import ('./components/Productdetail'));
const Cart  = React.lazy (() => import ('./components/Cart'));
const NotFound = React.lazy(() =>import('./components/Notfound'));
 function App(){
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Router>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<Productdetail />} />
                        <Route path="/Cart" element={<Cart/> } />
                        <Route path='*' element ={<NotFound/>} />
                        </Routes>
                    
                    </Suspense>
                </Router>
            </Provider>
        </ErrorBoundary>
    );
}
export default App;