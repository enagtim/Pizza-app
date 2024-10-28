import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {LayoutMenu} from './layout/LayoutMenu/LayoutMenu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { Product } from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/API';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/', 
		element: <LayoutMenu/>,
		children: [
			{
				path: '/', 
				element: <Suspense fallback={<>Загрузка...</>}><Menu/></Suspense>
			}, 
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>,
				errorElement: <>Ошибка</>, 
				loader: async ({params}) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 2000);
						})
					});			
				} 
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
