import { Router } from 'express';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post('/', (request, response) => {
	const {name, description} = request.body;

	const createCategoryService = new CreateCategoryService(categoriesRepositories);

	createCategoryService.execute({name, description});

	response.status(201).send();
});


categoriesRoutes.get('/', (request, response) => {

	const categories = categoriesRepositories.list();

	response.json(categories);
});


export { categoriesRoutes };
