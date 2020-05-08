<template>
  <div>
    home
    <button @click="syn('zz')">同步改变</button>
    <button @click="asyn('zz')">异步改变</button>
    {{name}}

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from '../../request'
export default {

  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    syn (payload) {
      this.changeName(payload)
    },
    asyn () {
      this.getData()
    },
    ...mapMutations(['changeName']),
    ...mapActions(['_changeName']),
    getData () {
      const params = {
        userName: 'zhanglei',
        password: 123
      }
      this._changeName(params)
    }
  },
  created () {

  }

}
</script>

<style lang="scss" scoped>
</style>