import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService{

	constructor(private categoriesRepositories: CategoriesRepositories) {
        
	}


	execute({name, description}: IRequest):void{
        
		const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

		if(categoryAlreadyExists){
			throw new Error('Category Already Exists!');
		}
		this.categoriesRepositories.create({name, description});
	}

}

export {CreateCategoryService};