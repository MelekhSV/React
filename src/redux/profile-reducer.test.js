import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";



test('new post shold be added', () => {
    let action = addPostActionCreator('test1')
    let state = {
        posts: [
            {id: 1, message: 'Hello worls', like: 15},
            {id: 2, message: "Hi", like: 20}
        ]
    };
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
});

test('messege.test', () => {
    let action = addPostActionCreator('test1')
    let state = {
        posts: [
            {id: 1, message: 'Hello worls', like: 15},
            {id: 2, message: "Hi", like: 20}
        ]
    };
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('test1')
});

test('after deleting lenght of messages should be decrement', () => {
    let action = deletePost (1)
    let state = {
        posts: [
            {id: 1, message: 'Hello worls', like: 15},
            {id: 2, message: "Hi", like: 20}
        ]
    };
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});

test('after deleting lenght of messages should be changet if id is incorrect', () => {
    let action = deletePost (10000)
    let state = {
        posts: [
            {id: 1, message: 'Hello worls', like: 15},
            {id: 2, message: "Hi", like: 20}
        ]
    };
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});

