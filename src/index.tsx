import Router from './router';

import PageA from './pages/PageA'
import PageB from './pages/PageB'

const router = new Router({
  routes: {
    PageA: { Component: PageA },
    PageB: { Component: PageB },
    PageD: { Component: PageB },
  },
});


// 测试用例
router.push('PageA', { pageAStringProp: '', pageANumberProp: 1 }); // 预期通过✅
router.push('PageA', { pageAStringProp: '', pageANumberProp: '42' }); // 预期失败❌
router.push('PageA', { pageANotExistProp: '' }); // 预期失败❌

router.push('PageB', { pageBStringProp: '', pageBBooleanProp: true }); // 预期通过✅
router.push('PageB', { pageAStringProp: '', pageANumberProp: 1 }); // 预期失败❌

router.push('PageC', {}); // 预期失败❌

router.push('PageD', { pageBStringProp: '', pageBBooleanProp: true }); // 预期通过✅
router.push('PageD', {}); // 预期失败❌
router.push('PageD', { pageAStringProp: '', pageANumberProp: 1 }); // 预期失败❌

