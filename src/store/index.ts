import { defineStore } from 'pinia'
// useStore可以是任何类似useUser、useCart的东西
// 第一个参数是应用程序中 Store 的唯一id
export const useStore = defineStore('store', {
  // state: () => ({ count: 0 }),
  state: () => {
    return {
      // 所有这些属性都将自动推断其数据类型
      token: localStorage.getItem('token') || '',
      userInfo: {},
      role: localStorage.getItem('role') || '',
    }
  },
  getters: {
    getToken(): string {
      return this.token
    },
  },
  actions: {
    setToken(token: string) {
      localStorage.setItem('token', token)
      this.token = token
    },
    setRole(role: string) {
      localStorage.setItem('role', role)
      this.role = role
    },
  },
})
