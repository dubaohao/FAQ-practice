// 缓存是一种提高数据读取性能的技术，在硬件设计和开发中应用十分广泛
// 比如常见的CPU缓存、数据库缓存、浏览器缓存等缓存的大小有限，当缓存被用满时，哪些数据应该被清理出去哪些数据该保存
// 常见策略
// 先进先出策略FIFO
// 最少使用策略LFU
// 最近最少使用策略LRU

// 运用你所学习的数据结构设计实现一个缓存机制，至少包含操作，get和put
// 该实现：次数优先级大于时间优先级
// 如果想实现时间优先级大于次数优先级，sort排序需要按照次数排序，对比标准由minNumber变成maxTime
class LRU {
  constructor(maxLength) {
    this.array = [];
    this.index = 0;
    this.maxLength = maxLength;
    this.time = 0; //数字越大，代表时间越接近
  }

  // init = (number) => {
  //   this.maxLength = number;
  // }
  put = (key, value) => {
    this.time++
    let temp = this.get(key)
    if (this.length() < this.maxLength && !temp) {
      this.array.push(
          {
            key: key,
            value: value,
            num: 1,
            time: this.time,
          }
      )
    } else if (this.length === this.maxLength && temp) {
      let keyIndex
      for (var i = 0; i < this.array.length; i++) {
        if (key === this.array[i].key) {
          keyIndex = i
        }
      }
      this.array.splice(keyIndex, 1)
      this.array.push(
          {
            key: key,
            value: value,
            num: temp+1,
            time: this.time,
          }
      )
    } else {
      let keyIndex
      for (var i = this.array.length-1; i >= 0; i--) {
        if (this.minNumber() === this.array[i].num) {
          keyIndex = i
        }
      }
      this.array.splice(keyIndex,1)
      this.array.push(
          {
            key: key,
            value: value,
            num: 1,
            time: this.time,
          }
      )
    }
    this.sort()
  }
  get = (key) => {
    for (var i = 0; i < this.array.length; i++) {
      if (key === this.array[i].key) {
        this.array[i].num = this.array[i].num + 1
        this.time++
        this.array[i].time = this.time
        return this.array[i].value
      }
    }
    this.sort()
    return null
  }
  length = () => {
    return this.array.length;
  }
  sort = () => {
    this.array.sort((a,b) => {
      return a.time - b.time
    })
  }
  minNumber = () => {
    let minNumber = this.array[0] && this.array[0].num || 0;
    for (var i = 0; i < this.array.length; i++) {
      if(this.array[i].num < minNumber){
        minNumber = this.array[i].num
      }
    }
    return minNumber
  }
}
var cache = new LRU(2)
// a.init(2)
cache.put(1,1)
cache.get(1) //1
cache.put(3,3)
cache.get(2) //null
cache.put(4,4)
cache.get(3) // null
cache.get(4) //1
