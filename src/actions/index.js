
export const LOG_IN = "log_in";
export const LOG_OUT = "log_out";
export const ADD_COLLECTION = "add_collection";
export const FILTER_COLLECTIONS = "filter_collections";
export const CLASSIFY_COLLECTION = "classify_collection";

// 登录
export function logIn(user){
    return {
        type: LOG_IN,
        user
    }
}

// 退出
export function logOut(){
    return {
        type: LOG_OUT
    }
}

// 添加收藏
export function addCollection(collection){
    return {
        type: ADD_COLLECTION,
        collection
    }
}

// 分类
export function classifyCollection(index){
    return {
        type: classifyCollection,
        index
    }
}

// 按条件搜索
export function filterCollections(condition){
    return {
        type: filterCollections,
        condition
    }
}