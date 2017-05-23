const notFoundMessage = ['Not Found']
const unauthorizedMessage = ['Please sign in or create new account']

const createErrorMessages = (error) => {
  const errorBody = error.response.body 

  let errorMessages = []

  switch(error.status){
    case 401:
      errorMessages = unauthorizedMessage
      break
    case 404:
      errorMessages = notFoundMessage
      break
    default:
      Object.keys(errorBody).map( key => {
        errorBody[key].forEach((error) => {
          errorMessages.push(`${key} ${error}`)
        })
      })
  }

  return errorMessages
}

export default class ApiResponseError extends Error {
  constructor(error){
    const messages = createErrorMessages(error)

    super(messages)
    this.name = 'ApiResponseError'
    this.messages = messages
  }
}
