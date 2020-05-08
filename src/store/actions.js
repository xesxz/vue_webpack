import axios from '../request'

const actions = {
  _changeName: (store, params) => {
    axios.post('http://104.168.144.140:4000/bk/login', params).then(res => {
      const name = res.data.data.displayName
      store.commit('changeName', name)
    })

  }
}


export default actions