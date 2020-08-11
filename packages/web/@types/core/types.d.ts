declare module 'models/spike' {
  export class Spike {
    message: string
    experiment: () => string
    constructor(message: string)
  }
}
declare module 'models/index' {
  export * from 'models/spike'
}
declare module 'index' {
  export * from 'models/index'
}
