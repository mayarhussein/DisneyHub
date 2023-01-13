import * as api from '../api';

// Action Creators

// async -> using redux-thunk 
export const getPosts = () => async(dispatch) => {
      
    try{
        // data is the posts
       const {data} = await api.fetchPosts();

       const action = {type: 'FETCH_ALL', payload: data}
       
       // return action
       dispatch(action);

    } catch(err){
         console.log(err.message);
    }
     
}