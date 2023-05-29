<template>
  <div>
    index
  </div>
</template>

<script lang="ts" setup>

</script>

<!-- 
<template>
  <div>
    <el-menu class="menu-sidebar" :default-active="route.path" :collapse="isMenuCollapsed" :collapse-transition="false"
      :unique-opened="true" router mode="vertical" @open="handleMenuOpen" @close="handleMenuClose">
      <template v-for="menuItem in menuItems">
        <el-submenu v-if="menuItem.children" :key="menuItem.path" :index="menuItem.path">
          <template #title>
            <i :class="menuItem.icon"></i>
            <span>{{ menuItem.label }}</span>
          </template>
          <el-menu-item v-for="childItem in menuItem.children" :key="childItem.path" :index="childItem.path">
            <router-link :to="childItem.path">{{ childItem.label }}</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="'key' + menuItem.path" :index="menuItem.path">
          <i :class="menuItem.icon"></i>
          <span>{{ menuItem.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// import { computed, ref } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

interface MenuItem {
  label: string
  path: string
  icon?: string
  children?: MenuItem[]
}

const route = useRoute()
const router = useRouter()
const isMenuCollapsed = ref(false)

// 根据角色和路由配置生成菜单项
const menuItems = computed<MenuItem[]>(() => {
  const userRole = 'admin' // 根据实际角色获取
  const routes = route.matched

  return routes.reduce((menu: MenuItem[], route) => {
    const requiredRoles = Array.isArray(route.meta.roles) ? route.meta.roles : []

    if (requiredRoles.includes(userRole)) {
      const label = (route.meta.title || route.name || '') as string
      const path = route.path
      const icon = route.meta.icon as string // 将类型断言为 string

      const menuItem: MenuItem = { label, path }
      if (route.children && route.children.length > 0) {
        menuItem.children = route.children.map((childRoute) => ({
          label: (childRoute?.meta?.title || childRoute.name || '') as string,
          path: childRoute.path,
        }))
      }

      if (icon) {
        menuItem.icon = icon
      }

      menu.push(menuItem)
    }

    return menu
  }, [])
})

function handleMenuOpen(index: string) {
  router.push(index)
}

function handleMenuClose(index: string) {
  const currentPath = route.path

  if (currentPath.startsWith(index)) {
    router.push(index)
  }
}
</script>

<style scoped>
.menu-sidebar {
  width: 200px;
  background-color: #f0f2f5;
  overflow-y: auto;
}
</style>   -->
