import { Router } from 'express';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post('/', (request, response) => {
	const {name, description} = request.body;

	const categoryAlreadyExists = categoriesRepositories.findByName(name);

	if(categoryAlreadyExists){
		return response.json({error:'Category Already Exists!'});
	}
	categoriesRepositories.create({name, description});

	response.status(201).send();
});


categoriesRoutes.get('/', (request, response) => {

	const categories = categoriesRepositories.list();

	response.json(categories);
});


export { categoriesRoutes };
