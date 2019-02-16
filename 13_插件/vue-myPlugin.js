(function () {
  const MyPlugin = {}

  // 必须有install方法, 不由我们直接调用
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('调用Vue的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = 'my-directive-----'+binding.value
    })

    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('调用vm的$myMethod()')
    }
  }

  // 向外暴露
  window.MyPlugin = MyPlugin
})()