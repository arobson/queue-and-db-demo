module.exports = function contactResource(queue, sql) {
    return {
      name: 'contact',
      actions: {
        employeeContact: {
          method: 'get',
          url: ':id',
          handle: ( envelope, data, next ) => {
            return sql.selectContact(data.id)
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
            url: ':id/type/:type',
            handle: ( envelope, data, next ) => {
                return queue.publish('/demo/contact', {
                    employeeId: data.id, 
                    type: data.type, 
                    contact: data.contact
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
