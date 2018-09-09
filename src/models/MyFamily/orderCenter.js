export default {
  namespace: 'myfamOrderCenter',
  state: {
    loading: false,
    visible: false,
  },
  reducers: {
    showModal(state, { payload: status }) {
      return Object.assign({}, state, { visible: status });
    },

    handleOk(state, { payload: status }) {
      return Object.assign({}, state, { loading: status });
    },

    handleCancel(state, { payload: status }) {
      return Object.assign({}, state, { visible: status });
    },
  },
};
