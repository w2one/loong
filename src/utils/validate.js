/**
 * validate
 * 1. mobile
 * 2. id card
 * 3. password
 * 4. email
 * 5. name
 * 6. bank number
 */

const validate = {
  /**
   * mobile
   * @param {} v
   */
  mobile: function(v) {
    if (!v) {
      return "请输入手机号码。";
    }
    if (!/^1\d{10}$/.test(v)) {
      return "请输入正确的手机号码。";
    }
    return true;
  },

  // pwd
  pwd: function(v) {
    return /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,15}$/.test(v);
  },

  /**
   * id card
   * @param {*} v
   */
  IDCard: function(v) {
    ///^\d{17}[\da-zA-Z]{1}$/
    // const idNoReg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (!/^\d{17}[\dXx]{1}$/.test(v)) {
      return "请输入正确的身份证号码";
    }
    return true;
  }
};

export default validate;
