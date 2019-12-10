import callApi from './../Utils/apiCaller';
import * as Types from '../Constants/ActionTypes'

export const closePostForm = () => {
  return {
    type: Types.CLOSE_POST_FORM,
  }
}
export const openPostForm = () => {
  return {
    type: Types.OPEN_POST_FORM,
  }
}
export const fetchPostsDataRequest = () => {
  return (dispatch) => {
    return callApi('post', 'GET', null).then(res => {
      dispatch(fetchPostsData(res.data.posts))
    });
  };
}
export const fetchPostsData = (posts) => {
  return {
    type: Types.FETCH_POSTS_DATA,
    posts
  }
}

export const addPost = (post, id) => {
  return {
    type: Types.ADD_POST,
    post,
    id
  }
}

export const addPostRequest = (postData) => {
  return (dispatch) => {
    return callApi('post', 'POST', postData).then(res => {
      dispatch(addPost(postData, res.data.info._id))
    })
  }
}
export const updatePost = (post) => {
  return {
    type: Types.UPDATE_POST,
    post
  }
}

export const updatePostRequest = (postData) => {
  var postDataChange = [
    {
      prop: 'title',
      value: postData.title
    },
    {
      prop: 'content',
      value: postData.content
    },
    {
      prop: 'author',
      value: postData.author
    }
  ]
  return (dispatch) => {
    console.log(postData.id)
    return callApi(`post/${postData.id}`, 'PATCH', postDataChange).then(res => {
      dispatch(updatePost(postData))
    })
  }
}

export const editPost = (post) => {
  return {
    type: Types.EDIT_POST,
    post
  }
}
export const set_isPostEditing_null = () => {
  return {
    type: Types.SET_NULL,
  }
}

export const deletePostRequest = (id) => {
  return (dispatch) => {
    return callApi(`post/${id}`, 'DELETE', null).then(res => {
      dispatch(deletePost(id))
    })
  }
}

export const deletePost = (id) => {
  return {
    type: Types.DELETE_POST,
    id
  }
}