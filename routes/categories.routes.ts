import { Router } from 'express';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();

const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post('/', (request, response) => {
	const {name, description} = request.body;

	categoriesRepositories.create({name, description});

	response.status(201).send();
});



export { categoriesRoutes };
