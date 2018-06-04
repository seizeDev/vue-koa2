module.exports = {
  hello: async (ctx, next) => {
    // ctx.response.type = 'application/Json';
    ctx.response.body = {
      name:'李臻'
    }
  },
  getlist: async (ctx, next) => {
    // ctx.response.type = 'application/Json';
    ctx.response.body = [{
      name:'lizhen',
      age:'22',
      sex:'男'
    },
    {
      name:'lizhen1',
      age:'22',
      sex:'男'
    },
    {
      name:'lizhen2',
      age:'22',
      sex:'男'
    }]
  }
}