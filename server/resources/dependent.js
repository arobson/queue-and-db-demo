module.exports = function dependentResource(queue, sql) {
    return {
      name: 'dependent',
      actions: {
        employeeDependent: {
          method: 'get',
          url: ':id',
          handle: ( envelope, data, next ) => {
            return sql.selectDependent(data.id)
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
        addDependent: {
            method: 'post',
            url: ':id',
            handle: ( envelope, data, next ) => {
                return queue.publish('/demo/dependent', {
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
