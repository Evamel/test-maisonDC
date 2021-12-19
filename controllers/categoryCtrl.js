
const Category = require('../models/categoryModel')

const categoryCtrl = {
getCategories: async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    }catch (err) {
        return res.status(566).json({msg: err.message})
    }
},
createCategory: async (req, res) => {
    try {
        //If user have role 1 he's admin
        //Only admin can create, delete and update categories

        const {name} = req.body;
        const category = await Category.findOne({name})
        if(category) return res.status(444).json({msg: 'This category already exists'})
        
        const newCategory = new Category({name})
        await newCategory.save()
        res.json({msg: 'Category created'})
        
        res.json('Check admin success')
    } catch (err) {
        return res.status(565).json({msg: err.message}) 
    }
},
deleteCategory: async (req, res) =>{
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.json({msg: 'Category deleted'})
    } catch (err) {
        return res.status(555).json({msg: err.message})
    }
},
updateCategory: async (req, res) =>{
    try {
        const {name} = req.body;
        if(!name) return res.status(454).json({msg: "no completed"})

        await Category.findOneAndUpdate({_id: req.params.id}, {name})

        res.json({msg: 'Category updated'})
    } catch (err) {
        return res.status(550).json({msg: err.message})
    }
}
}


module.exports = categoryCtrl