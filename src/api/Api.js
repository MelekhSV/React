import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseUrl:`https://social-network.samuraijs.com/api/1.0/`
});

export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => {
                return response.data
            }
        );
    },
    follow(userId) {
        return instance.post(`follow/${userId}`
        )
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileApi')
        return profileApi.getProfile(userId)
    }
}



export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
     getStatus(userId) {
         return instance.get(`profile/status/` + userId)
     },
    updateStatus(userId) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.posts('auth/login', {email, password, rememberMe});
    },
    logout () {
        return instance.delete('auth/login')
    }
}





