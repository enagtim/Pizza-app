import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Menu } from './pages/Menu/Menu';
import {LayoutMenu} from './layout/LayoutMenu/LayoutMenu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Product } from './pages/Product/Product';
const router = createBrowserRouter([
	{
		path: '/', 
		element: <LayoutMenu/>,
		children: [
			{
				path: '/', 
				element: <Menu/>
			}, 
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>
			}
		]
	}, 
	{
		path: '*',
		element: <Error/>
	}
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
