import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Product } from "../entities/product";
export const ProductType = objectType({
    name: "Product",
    definition(t){
        t.int("id"),
        t.nonNull.string("name"),
        t.nonNull.string("price"),
        t.string("discountPerc"),
        t.id("deletedProduct")
    },
})

export const ProductsQuery = extendType({
  type:"Query",
  definition(t){
    t.nonNull.list.nonNull.field("products",{   //defining the object type
        type:"Product",
        resolve(_parent,_args,_info):Promise<Product[]>{
          return Product.find()

        }

    })
  }  
})

export const CreateProductMutation = extendType({
    type:"Mutation",
    definition(t){
        t.nonNull.field("createProduct",{
            type:"Product",
            args:{
                name: nonNull(stringArg()),
                price:nonNull(stringArg()),
                discountPerc:nonNull(stringArg())
            },
            resolve(_parent,args,_context,_info) : Promise<Product>{
            
                const {name,price,discountPerc}=args;
                return Product.create({name,price,discountPerc}).save()

                
            }
        })
    }
})
  
export const DeleteProductMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('deleteProduct', {
      type: 'Product', 
      args: {
        id:stringArg()
      },
      resolve: async (_root, args, _ctx) => {
        const { id } = args;

        // try {
        //   const deletedProduct = await Product.delete({id});
        //   console.log(deletedProduct)
        //   return deletedProduct;
        // } catch (errors) {
        //   throw new Error(`Failed to delete product`);
        // }

        const deletedProduct = await Product.delete({id});
        //console.log(deletedProduct)
        return deletedProduct;
        
    }
    });
  },
});

