// 动态判断域名
const host = 'https://baojia.chelun.com';
// /loaclhost/.test(window.location.host) ? 'http://baojia-test.chelun.com' : 

function sendRequest(url, method = 'GET', data = {}) {
  let params = {
    method
  };
  // 判断如果是一个post请求，带上请求体信息
  if (method == 'POST') {
    params.body = JSON.stringify(data);
  }
  // 判断请求查询url是否携带query
  if (url.indexOf('?') == -1) {
    url += `?_=${+new Date()}`
  } else {
    url += `&_=${+new Date()}`
  }
  return fetch(host + url, params).then(res => res.json()).then(body => body)
}

/*
 * 获取车辆品牌数据
 * @return promise
 */
export let getBrandList = () => {
  return sendRequest('/v2-car-getMasterBrandList.html');
}

/*
 * 获取车系数据
 * @params id 车辆品牌id
 * @return promise
 */
export let getMakeList = (id) => {
  return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}

/*
 *获取车系详情
 * @params id 车辆品牌id
 * @return promise
 */


export let getDeatilList = (id) => {
  return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}


// https://baojia.chelun.com/v2-dealer-alllist.html?carId=126282&cityId=201&_1539312768101

/**
 *获取咨询列表数据
 * @param {*} id
 * @returns
 */
export let getQuoList = (id, cityId) => {
  return sendRequest(`/v2-dealer-alllist.html?carId=${id}&cityId=${cityId}`)
}

// https: //baojia.chelun.com/v1-city-alllist.html?_1539344597791

export let getAddressList = () => {
  return sendRequest(`/v1-city-alllist.html`)
}

// https://baojia.chelun.com/v1-city-alllist.html?provinceid=6&_1539562811838
/**
 *
 *
 * @param {*} id
 * @returns
 */
export let getProvince = (id) => {
  return sendRequest(`/v1-city-alllist.html?provinceid=${id}`)
}


// https://baojia.chelun.com/v2-car-getImageList.html?SerialID=2573&_1539587422034

export let getImg = (params) => {
  let search = ``;
  for (let i in params) {
    search += `&${i}=${params[i]}`
  }
  return sendRequest(`/v2-car-getImageList.html?${search.slice(1, search.length)}`)
  // return sendRequest(`/v2-car-getImageList.html?SerialID=${params}`)
}


// https: //baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=2364&_1539605102126

export let getModelImageYearColor = (id) => {
  return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}


/**
 * 获取图片列表的接口
 * @param {*} serialId  车系id
 * @param {*} imgId   图片分类id
 * @param {number} [page=1] 分页页码数
 * @param {number} [pageSize=30] 分页每页数量
 * @param {*} carId  车型id
 * @param {*} colorId 颜色id
 * @returns promise
 */
export let getCategoryImgList = (param) => {
  let search = ``;
  for (let i in param) {
    search += `&${i}=${param[i]}`;
  }
  // 补充page与pageSize
  if (!param['Page']) {
    search += `&Page=1`;
  }
  if (!param['PageSize']) {
    search += `&PageSize=30`;
  }
  return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1, search.length)}`);
}
