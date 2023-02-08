import AuthorService from "../../service/AuthorService";
const authorService = new AuthorService();

const authorResolver = {

  
  Query: {

    getAuthor: async (_parent: undefined, { id }: { id?: number }) => {
      if (!id) {
        return authorService.getAll();
      }

      return authorService.getById(id);
    },

    getAuthorList: async () => {
        return authorService.getAll();
    },

  },

  Mutation: {
    createAuthor: async (
      _parent: undefined,
      {  name, gender, image, country, information, url }: { name: string; gender: string; image: string; country: string; information: string; url: string; }
    ) => { 
        
        return await authorService.create(
            { name, gender, image, country, information, url }
        )
    },

    updateAuthor: async (
      _parent: undefined,
      {  id, name, gender, image, country, information, url }: { id: number, name: string; gender: string; image: string; country: string; information: string; url: string; }
    ) => { 
        const update = await authorService.update(
            id, { name, gender, image, country, information, url }
        );
        if(update){
          return await authorService.getById(id);
        } else {
          throw Error("Error Update");
        }
    },

    deleteAuthor: async (
      _parent: undefined,
      {  id }: { id: number }
    ) => { 
        const data = await authorService.getById(id);
        if(data){
          await authorService.delete(id);
          return data;
        } else {
          throw Error("Error Delete");
        }
    },
  },
};

export default authorResolver;