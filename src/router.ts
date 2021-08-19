import { createRouter, createWebHistory } from 'vue-router';
import NftList from '/src/views/NftList.vue';
// TODO -- add NFT Page
// import NftPage from '/src/views/NftPage.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    noScroll?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash })
        }, 500)
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    if (to.meta.noScroll && from.meta.noScroll) {
      return {}
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'NFT List',
      component: NftList,
      meta: { title: 'NFT List' },
    },
    // TODO -- Add NFT Page
  ],
})

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title)
  const parentTitle = parent ? parent.meta.title : null
  document.title = to.meta.title || parentTitle || 'Frontend Challenge'
});

export default router;
