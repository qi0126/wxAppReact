import http from './http';

class Api {
  constructor() {

  }

// 上传图片的接口
  upImgs(params) {
    return http.upload(false, '/common/uploadImg', params);
  }

//  获取今日金价
  selectGoldlist(params) {
    return http.post(false, '/goldManage/selectGoldlist', params);
  }


}

export default new Api();

// export default {

//     // 个人中心
//   findUserInfo(callback) {
//       http.get(true, '/user/myInfo', callback);
//     },

//     // 更新个人信息
//   updateUserInfo(nickname, mobile, callback) {
//       http.post(true, '/user/updateInfo', {
//           nickName: nickname,
//           phone: mobile,
//         }, callback, '保存成功');
//     },

//     // 更新头像
//   updateAvatar(formData, callback) {
//       http.upload(true, '/user/updateHeadImage', formData, callback);
//     },

//     // 手机号码登录
//   login(params, callback) {
//       http.post(false, '/user/login', {
//           phone: params.mobile,
//           captcha: params.captcha,
//           register_token: params.registerToken,
//           registration_id: params.registrationId,
//         }, callback);
//     },

//     // 退出登录
//   logout(callback) {
//       http.post(true, '/user/loginout', {}, callback, '退出登录成功');
//     },

//     // 发送注册短信
//   sendRegisterCaptcha(mobile, callback) {
//       http.post(false, '/user/send/captcha', {
//           mobile,
//         }, callback);
//     },

//     // 获取地址列表
//   getAddressList(callback) {
//       http.get(true, '/serviceAddress/list', callback);
//     },

//     // 编辑地址
//   editAddress(params, callback) {
//       http.post(true, '/serviceAddress/update', {
//           address: params.address,
//           addressId: params.id,
//           consignee: params.consigee,
//           detailAddr: params.street,
//           isDefault: params.isDefault,
//           latitude: params.latitude,
//           longitude: params.longitude,
//           mobile: params.mobile,
//           location: params.adressName,
//         }, callback, params.id ? '更新成功' : '创建成功');
//     },

//     // 删除地址
//   deleteAddress(addressId, callback) {
//       http.get(true, '/serviceAddress/delete', callback, {
//           params: {
//               addressId,
//             },
//         });
//     },

//     // 查询地址
//   getAddress(addressId, callback) {
//       http.get(true, '/serviceAddress/getData', callback, { params: { addressId } });
//     },

//     // 设置默认地址
//   updateDefaultAddress(addressId, callback) {
//       http.get(true, '/serviceAddress/updateDefault', callback, { params: { addressId } });
//     },

//     // 搜索地区数据
//   searchAddress(keywords, callback) {
//       http.get(true, '/serviceAddress/searchAddress', callback, {
//           params: {
//               keyword: keywords,
//             },
//         });
//     },

//     // 分页查询余额金额
//   pageBalance(pagination, callback) {
//       http.page(true, '/memberBill/list', pagination, callback);
//     },

//     // 查询充值模板
//   getRechargeTemplate(callback) {
//       http.get(true, '/charge/templateList', callback);
//     },

//     // 充值
//   recharge(params, callback) {
//       http.post(true, '/charge', params, callback);
//     },

//     // 支付宝充值
//   alipayRecharge(params, callback) {
//       params.pay_type = 2;
//       this.recharge(params, callback);
//     },

//     // 微信支付充值
//   wechatRecharge(params, callback) {
//       params.pay_type = 3;
//       this.recharge(params, callback);
//     },

//     // 获取附近菜单
//     // 新
//   getNearbyMenu(cityName, callback) {
//       http.get(false, '/serviceMenu/getNearlyServicess', callback, { params: { cityName } });
//     },
//     // 旧
// //  getNearbyMenu(callback) {
// //      http.get(true, '/serviceMenu/getNearlyServices', callback)
// //  },

//     // 获取附近菜单列表(分页)

//     // 切换角色
//   toggleRole(callback) {
//       http.get(true, '/user/changeRole', callback);
//     },

//     // 微信登录
//   wechatLogin(unionid, callback, error) {
//       http.post(false, '/user/wechatLoginCheck', {
//           union_id: unionid,
//         }, callback, false, error);
//     },

//     // 微信注册
//   wechatRegister(params, callback) {
//       http.post(false, '/user/wechatLogin', {
//           captcha: params.captcha,
//           head_image: params.avatar,
//           nick_name: params.nickname,
//           union_id: params.unionid,
//           register_token: params.registerToken,
//         }, callback, '登录成功');
//     },


//     // 易
//     // 首页
//     // 新
//   homeData(params, callback) {
//       http.get(false, '/mains', callback, params);
//     },
//     // 旧
// //  homeData(params, callback) {
// //      http.get(true, '/main', callback, params)
// //  },

//     // 搜索服务(在分页)


//     // 全部服务列表
//   serviceMenuList(params, callback) {
//       http.get(false, '/service/menuList', callback, params);
//     },

//     // 二级服务列表
//     // baidu
//   serviceLists(params) {
//       http.get(false, 'service/lists', callback, params);
//     },

// 	// 新
//   serviceList(params, callback) {
//   http.get(false, '/service/listss', callback, params);
// },
//     // 旧
// //  serviceList(params, callback) {
// //      http.get(true, '/service/list', callback, params)
// //  },

//     // 二级服务详情
//   serviceDetail(params, callback) {
//       http.get(false, '/service/detail', callback, params);
//     },

//     // 活动详情
//   activityDetail(params, callback) {
//       http.get(true, '/activity/detail', callback, params);
//     },


//     // 领取优惠卷
//   getCpupon(params, callback) {
//       http.post(true, '/userCoupon/getPoint', params, callback);
//     },

//     // 二级服务评价列表
//   evaluateList(params, callback) {
//       http.get(false, '/evaluate/list', callback, params);
//     },

//     // 我的优惠卷
//   userCoupon(params, callback) {
//       http.get(true, '/userCoupon/list', callback, params);
//     },

//     // 确认订单
//   serveConfirmOrder(params, callback) {
//       http.get(true, '/serviceOrder/preOrder', callback, params);
//     },

//     // 订单支付
//   orderPayReady(params, callback) {
//       http.get(true, '/serviceOrder/payReady', callback, params);
//     },

//     // 下订单
//   serveAddOrder(params, callback) {
//       http.post(true, '/serviceOrder/add', params, callback);
//     },

//     // 订单详情
//   serveOrderDetail(params, callback) {
//       http.get(true, '/serviceOrder/detail', callback, params);
//     },

//     // 余额支付
//   balancePay(params, callback) {
//       http.post(true, '/serviceOrder/balancePay', params, callback);
//     },

//     // 移动支付
//   mobilePay(params, callback) {
//       http.post(true, '/serviceOrder', params, callback);
//     },

//     // 一键下单
//   addOneButtonOrder(params, callback) {
//       http.post(true, '/serviceOrder/addOneButtonOrder', params, callback);
//     },

//     // 分享的新人列表
//   userMyShared(params, callback) {
//       http.get(true, '/user/myShared', callback, params);
//     },

//     // 分享有礼签名
//   shareSign(params, callback) {
//     	  http.get(true, '/wechat/getjsapi/signpackage', callback, params);
//     },

//     // 分享新人
//   addShareUser(params, callback) {
//       http.post(false, '/user/share', params, callback);
//     },

//     // 工人模块订单
//   workerOrderList(params, callback) {
//       http.get(true, '/serviceOrder/listForWorker', callback, params);
//     },

//     // 工人位置
//   workerPositionList(params, callback) {
//       http.get(true, '/location/getList', callback, params);
//     },
//     // 工人端更新订单状态
//   updateOrderStatus(params, callback) {
//       http.post(true, '/serviceOrder/updateOrderStatus', params, callback);
//     },
//     // 获取工人端派单页菜单
//   updateOrderMenu(params, callback) {
//       http.get(true, '/serviceOrder/pend', params, callback);
//     },
//     // 工人列表
//   updateOrderPeople(callback) {
//       http.get(true, '/user/pendingMan', callback);
//     },


// };
