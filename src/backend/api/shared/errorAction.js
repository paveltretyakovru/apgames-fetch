const Promise = require('promise')

const errorAction = (error) => {
  return new Promise((resolve, reject) => {
    if (error) {
      let errorDump = ''

      if(error.errors){
        for(var key in error.errors) {
          errorDump = `${error.errors[key].message}; ${errorDump}`
        }
      } else {
        errorDump = error.message ? error.message : 'Непредвиденная ошибка'
      }

      console.error('Произошла ошибка во время сохранения', errorDump)
      return reject(errorDump)
    }
    
    return resolve()
  })
}

module.exports = errorAction