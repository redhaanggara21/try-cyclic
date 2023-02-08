  - ### End-Points: `mobile/`
    - Auth-User
      - `user/login`
      - `user/register`
      - `user/forgot-password`
      - `user/set-new-password`
    - Auth-Customer
      - `customer/login`
      - `customer/register`
      - `customer/forgot-password`
      - `customer/set-new-password`
    - Store
        - `store/add`
        - `store/list-by-customer-id`
    - User Store
      - `user/store/list`
    - Work
      - `work/add`
      - `work/get-work-list`
    - Reservation
      - `reservation/add`
      - `reservation/get-reservation-list-by-user-id`
      - `reservation/get-reservation-list-by-store-id`
    - Graphql
      -  Author
          createAuthor(name: "Elon", gender: "male",image: "haha.jpg", country: "indonesia",information: "haha", url: "http://fb.co.id"){
            id,
            name,
            country, 
            information
          }

          updateAuthor(
            id: 3, 
            name: "Elon X", 
            gender: "male",
            image: "haha.jpg", 
            country: "indonesia",
            information: "haha", 
            url: "http://fb.co.id"
          ){
            id,
            name,
            country, 
            information,
            url
          }

        deleteAuthor(
          id: 4
        ){
          id,
          name,
          country, 
          information,
          url
        }
        
        Author
        createMovie(
          title: "Nextflix Oi",
          sysnopsis: "Watching serial tv by house series",
          genre: "adventure",
          image: "pow.png",
          url: "https://www.facebook.com/business/tools/ads-manager",
          authorId: 2,
          rate: 2,
          category: ["action", "adventure", "drama"]
        ){
          id,
          title,
          sysnopsis, 
          genre,
          image,
          url,
          authorId,
          rate
        }
      
        updateMovie(
          id:15,
          title: "Nextflix Oi Update",
          sysnopsis: "Watching serial tv by house series",
          genre: "adventure",
          image: "pow.png",
          url: "https://www.facebook.com/business/tools/ads-manager",
          authorId: 2,
          rate: 2,
        ){
          id,
          title,
          sysnopsis, 
          genre,
          image,
          url,
          authorId,
          rate
        }
      
        deleteMovie(
          id: 15
        ){
          id,
          title,
          sysnopsis, 
          genre,
          image
        }
      
    }

    query {
        getAuthor(id: 1){
            name
        }
        getAuthorList{
            name,
            country
        }
        getMovie(id: 9){
            title
        }
        getMovieList{
            title,
            sysnopsis
        }
    


### Proje Başlatmak için
- `npm run dev` for build 
- `docker-compose up` for docker compose
