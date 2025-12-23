import "dotenv/config";
import express, { type Application } from "express";
import { routes } from "./routes/routes";

// class App {

//   public app: Application

//   constructor() {
//     this.app = express()
//     this.config()
//     this.routes()
//   }

//   config():void {
//     this.app.use(express.json())
//     this.app.use(express.urlencoded({extended: true}))
//   }

//   routes():void {
//     this.app.use(routes)
//   }

//   listen(port: number):void {
//     this.app.listen(port, ()=> console.log(`Servidor rodando na porta: http://localhost:${port}`))
//   }
// }

// // export default new App
// export {App}

class App {
  public app: Application  // tornar público

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes(): void {
    this.app.use(routes)
  }

  listen(port: number): void {
    this.app.listen(port, () => console.log(`Servidor rodando na porta: http://localhost:${port}`))
  }
}

const appInstance = new App()
export const app = appInstance.app   // exportar a instância do Express
export default appInstance





// meu erro estava sendo não exportar o express, pois eu precisava da instancia do express 