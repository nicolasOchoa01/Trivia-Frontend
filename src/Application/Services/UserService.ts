import { type User } from "../../domain/entities/User";
import { type IUserService } from "../interfaces/IUserService";
import { type IUserRepository } from "../ports/IUserRepository";

export class UserService implements IUserService {
    private readonly _repository: IUserRepository;

    constructor(repository: IUserRepository){
        this._repository = repository;
    }
    async register(userName: string, email: string, password: string): Promise<User> {
        if(userName == null){
            throw new Error("el nombre de usuario es requerido");
        }
        if(email == null){
            throw new Error("el email es requerido");
        }
        if(password == null){
            throw new Error("el password es requerido");
        }
        if(userName.length < 3){
            throw new Error("el nombre de usuario debe tener al menos 3 caracteres");
        }
        if(userName.length > 20){
            throw new Error("el nombre de usuario debe tener menos de 20 caracteres");
        }
        if(email.length < 5){
            throw new Error("el email debe tener al menos 5 caracteres");
        }
        if(email.length > 20){
            throw new Error("el email debe tener menos de 20 caracteres");
        }   
        if(!email.includes("@") || !email.includes(".")){
            throw new Error("el email debe contener arroba y punto");
        }
        if(password.length < 6){
            throw new Error("el password debe tener al menos 6 caracteres");
        }
        if(!/^[a-zA-Z0-9]+$/.test(userName)){
            throw new Error("el nombre de usuario debe contener solo letras y numeros");
        }
        if(!/^[a-zA-Z0-9]+$/.test(password)){
            throw new Error("el password debe contener solo letras y numeros");
        }
        const newUser = await this._repository.register(userName, email, password);
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        return newUser;
    }

    async login(emailOrName: string, password: string): Promise<User> {
        if(emailOrName == null){
            throw new Error("email o nombre de usuario es requerido");
        }
        if(password == null){
            throw new Error("password es requerido");
        }
        if(password.length < 6){
            throw new Error("password debe tener al menos 6 caracteres");
        }
        if(emailOrName.length < 3){
            throw new Error("email o nombre de usuario debe tener al menos 3 caracteres");
        }
        if(emailOrName.length > 20){
            throw new Error("email o nombre de usuario debe tener menos de 20 caracteres");
        }
        if(!/^[a-zA-Z0-9]+$/.test(password)){
            throw new Error("password debe contener solo letras y numeros");
        }
        if(!/^[a-zA-Z0-9@]+$/.test(emailOrName)){
            throw new Error("email o nombre de usuario debe contener solo letras, numeros y @");
        }
        
        const loggedUser = await this._repository.login(emailOrName, password);
        console.log("loggedUser", loggedUser);
        
        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        return loggedUser;
    }

    logout(): void {
        this._repository.logout();
        localStorage.removeItem("currentUser");
    }
    
    async getCurrentUser(): Promise<User | null> {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) as User : null;
    }

    async getUserById(id: string): Promise<User> {
        if(id == null){
            throw new Error("el id es requerido");
        }

        return await this._repository.getUserById(id);
    }
    async getUserByName(name: string): Promise<User> {
        if(name == null){
            throw new Error("el name es requerido");
        }

        return await this._repository.getUserByName(name);
    }
    async getAllUsers(): Promise<User[]> {
        return await this._repository.getAllUsers();
    }
}