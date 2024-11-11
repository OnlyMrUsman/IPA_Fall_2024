import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Dashboard from '../components/Dashboard.vue';
import Overview from '../components/Overview.vue';
import Settings from '../components/Settings.vue';
	const routes = [
	  {
	    path: '/',
	    name: 'HomePage',
	    component: HomePage
	  },
	  {
	    path: '/login',
	    name: 'Login',
	    component: Login
	  },
	  {
	    path: '/sign-up',
	    name: 'Signup',
	    component: Signup
	  },
	  {
	    path: '/dashboard',
	    name: 'Dashboard',
	    component: Dashboard,
		meta: { requiresAuth: true }
	  },
	  {
	    path: '/over-view',
	    name: 'Overview',
	    component: Overview,
		meta: { requiresAuth: true }
	  },{
	    path: '/settings',
	    name: 'Settings',
	    component: Settings,
		meta: { requiresAuth: true }
	  },
	  
	];

	const router = createRouter({
	  history: createWebHistory(),
	  routes
	});



	router.beforeEach((to, from, next) => {
		if (to.matched.some(record => record.meta.requiresAuth)) {
			const user = localStorage.getItem("user");
			
			if (!user) {
				next({ name: 'Login' });
			} else {
				next();
			}
		} else {
			next();
		}
	});
	export default router;