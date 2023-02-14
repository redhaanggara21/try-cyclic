import MovieService from "../../service/MovieService";
import AuthorService from "../../service/AuthorService";
import CategoryMovieService from "../../service/CategoryMovieService";
import redis from "../../config/isCached";

const authorService = new AuthorService();
const movieService = new MovieService();
const categoryMovieService = new CategoryMovieService();

const movieResolver = {
  Query: {
    getMovie: async (_parent: undefined, { id }: { id?: number }) => {

        const movieCache = await redis.get('movieall');
        
        if (movieCache) {
            return movieCache;
        }else{
          if (!id) {
            const datas = movieService.getAll();
            await redis.set('movieall', datas);
            return datas;
          }else {
            return movieService.getById(id);
          }
        } 
    },

    getMovieSearch: async (
      _parent: undefined,
      { search }: { search: String }
    ) => {
      // return await movieService.getAll()
      return await movieService.getMovieSearch(search);
    },

    getMovieList: async () => {
        return await movieService.getAll()
        // return await movieService.getByTitle("Nextflix Oi");
    },

    getBestMoviePerAuthor: async (
      _parent: undefined,
      { limit }: { limit?: number }
    ) => {
        return await movieService.getBestMoviePerAuthor(limit)
    },
  },

  Mutation: {
    createMovie: async (
      _parent: undefined,
      {
        title,
        sysnopsis,
        genre,
        image,
        url,
        authorId,
        rate,
        category
      }: { 
            title: String;
            sysnopsis: String;
            genre: String;
            image: String;
            url: String;
            authorId: number;
            rate: number;
            category: [String];
        }
    ) => {

      const user = await authorService.getById(authorId);

      if (!user) {
        throw Error("Invalid Author");

      }

      let catPass = new Array();

      const [  movieCreated ] = await Promise.all([
        movieService.create({
            title,
            sysnopsis,
            genre,
            image,
            url,
            authorId,
            rate
        })
      ]);

      for(let i = 0; i< category.length; i++){
        catPass.push({
          "category_name": category[i], "movieId": movieCreated.id
        })
      }

      categoryMovieService.create_array(catPass);

      return movieCreated;
    },

    updateMovie: async (
      _parent: undefined,
      {  
        id, 
        title,
        sysnopsis,
        genre,
        image,
        url,
        authorId,
        rate
      }: { 
        id: number,
        title: string,
        sysnopsis: string,
        genre: string,
        image: string,
        url: string,
        authorId: number,
        rate: number,
      }
    ) => { 
        
      const [ author, movies, moviesUpdating, moviesUpdated ] = await Promise.all([
        await authorService.getById(authorId),
        await movieService.getById(id),
        await movieService.update(id, {
            title,
            sysnopsis,
            genre,
            image,
            url,
            authorId,
            rate
          }),
          await movieService.getById(id)
        ]);
        return moviesUpdated;
    },

    deleteMovie: async (
      _parent: undefined,
      {  id }: { id: number }
    ) => { 
        const data = await movieService.getById(id);
        if(data){
          await movieService.delete(id);
          return data;
        } else {
          throw Error("Error Delete");
        }
    }

  },
};

export default movieResolver;