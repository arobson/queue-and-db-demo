module.exports = function partnerResource(queue, sql) {
    return {
      name: 'partner',
      actions: {
        employeePartner: {
          method: 'get',
          url: ':id',
          handle: ( envelope, data, next ) => {
            return sql.selectPartner(data.id)
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
        addPartner: {
            method: 'post',
            url: ':id',
            handle: ( envelope, data, next ) => {
                return queue.publish('/demo/partner', {
                    employeeId: data.id, 
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dateOfBirth: data.dateOfBirth
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
