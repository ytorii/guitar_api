export default class ApiResponseError extends Error {
  constructor(messages){
    super(messages)
    this.name = 'ApiResponseError'
    this.messages = messages
  }
}
