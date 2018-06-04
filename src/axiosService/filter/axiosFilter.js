import { Loading,Message,MessageBox } from 'element-ui';
import md5 from 'md5'
import router from '../../router'
// import Jsrsasign from 'jsrsasign'必须6.2.2
// import privateKey from '../../pem/private_key'
let timeoutData;
// let loadingInstance;

/**
 * 入参检测
 * @param request
 * @returns {*}
 */

export const axiosRequest = function (request) {
    // loadingInstance = Loading.service();
    let config = request.params || {};
    let timestamp = (new Date()).valueOf();
    /**
     * 判断是否login接口
     * 是login的话则不带三个必要参数
     */
    if(!request.url.includes('login')){
        config.__sid = window.sessionStorage.getItem('__sid');
        config.timestamp = timestamp;
        config.signature = md5(window.sessionStorage.getItem('key') + timestamp.toString())
    }
    /**
     * 判断是否是formdata格式
     * 如果是formdata格式的话需要将三个参数append进去
     */
    if (request.data instanceof window.FormData) {
        request.data.append('__sid', config.__sid);
        request.data.append('timestamp', config.timestamp);
        request.data.append('signature', config.signature)
    }
    if (request.timeout) {//AJAX超时设置，超时后提示
        timeoutData = window.setTimeout(() => {
            // loadingInstance.close();
            window.clearTimeout(timeoutData);
        }, request.timeout);
    }
    request.params = config
    return request
}

function loadingTip() {
    MessageBox.alert('服务器错误', '提示', {
        confirmButtonText: '确定',
        callback: action => {
        }
    });
}

/**
 * 返回状态检测
 * @param response
 * @returns {*}
 */
export const axiosResponse = function (response) {
    // loadingInstance.close();
    switch (response.status) {
        case 404:
            return response;
        case 413:
            return response;
        case 500:
            loadingTip()
            return response;
        case 502:
            loadingTip()
            return response;
        case 503:
            loadingTip()
            return response;
        case 504:
            loadingTip()
            return response;
        default:
            if (response.status && response.status !== 200) {
                loadingTip()
                return response;
            } else {
                if (!response.data.success) {
                    if (response.data.message === undefined) {
                        MessageBox.alert('异常错误', '提示', {
                            confirmButtonText: '确定'
                        });
                    } else {
                        if (response.data.code === 'E000202' || response.data.code === 'E000203' || response.data.code === 'E000005' ||  response.data.code === 'E000006') {
                            MessageBox.alert(response.data.message, '提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    router.push({path: '/login'})
                                }
                            });
                        }else{
                            MessageBox.alert(response.data.message, '提示', {
                                confirmButtonText: '确定'
                            });
                        }
                    }
                }
                return response
            }
    }    
}
