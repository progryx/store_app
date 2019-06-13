import * as axios from "axios/index";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "93b4db84-695f-4bec-89d9-3715a364a6bf"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }

}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
    }
}
