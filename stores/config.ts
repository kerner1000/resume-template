import { defineStore } from 'pinia'

export const useConfig = defineStore('config', {
    state: () => ({
        email: 'my-mail@mail.com',
        profileImage: 'https://avatars.githubusercontent.com/u/10262924?v=4',
    }), actions: {
        async loadData() {
            const data = await import('~~/data/config.json')
            this.email = data.default.email
            this.profileImage = data.default.profileImage
        }
    }
})
