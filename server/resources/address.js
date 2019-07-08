module.exports = function addressResource(queue, sql) {
    return {
      name: 'address',
      actions: {
        employeeAddress: {
          method: 'get',
          url: ':id',
          handle: ( envelope, data, next ) => {
            return sql.selectAddress(data.id)
                .then(
                    list => {
                        return {
                            status: 200,
                            data: list.rows
                        }
                    },
                    e => {
                        return {
                            status: 500,
                            data: {
                                error: true,
                                message: 'an internal error has occurred'
                            }
                        }
                    }
                )
          }
        },
        changeContact: {
            method: 'put',
            url: ':id',
            handle: ( envelope, data, next ) => {
                return queue.publish('/demo/address', {
                    employeeId: data.id, 
                    line1: data.line1, 
                    line2: data.line2,
                    province: data.province,
                    region: data.region,
                    country: data.country,
                    postal: data.postal,
                })
                .then(
                    () => { return { status: 200, data: 'ok' } },
                    e => {
                        return {
                            status: 500,
                            data: 'an internal error has occurred'
                        }
                    }
                )
            }
        }
      }
    }
  }
