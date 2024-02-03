function LocalStorageWithExpiery() {
  this.getItem = function getItem(key) {
    // get the parsed value of the given key
    let result = JSON.parse(window.localStorage.getItem(key));

    // if the key has value
    if (result) {
      // if the entry is expired
      // remove the entry and return null
      if (result.expireTime <= Date.now()) {
        window.localStorage.removeItem(key);
        return null;
      }

      // else return the value
      return result.data;
    }

    // if the key does not have value
    return null;
  };

  // default expiry is 30 days in milliseconds
  this.setItem = function setItem(key, value, maxAge = 30 * 60 * 60 * 1000) {
    let result = {
      data: value,
    };

    if (maxAge) {
      result.expireTime = Date.now() + maxAge;
    }
    window.localStorage.setItem(key, JSON.stringify(result));
  };

  this.removeItem = function removeItem(key) {
    window.localStorage.removeItem(key);
  };

  this.clear = function clear() {
    window.localStorage.clear();
  };
}

window.localStorageWithExpiery = new LocalStorageWithExpiery();

window.localStorageWithExpiery.setItem("key", "value");
window.localStorageWithExpiery.setItem("key1", "value", 1);

window.localStorageWithExpiery.getItem("key");
// 'value'
window.localStorageWithExpiery.getItem("key1");
// null
