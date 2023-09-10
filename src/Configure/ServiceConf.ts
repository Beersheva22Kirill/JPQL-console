import { ServiceConsole } from "../Service/Interfases/ServiceConsole";
import { ServiceConsoleImpl } from "../Service/ServiceConsoleImpl";


export const serviceConsole:ServiceConsole = new ServiceConsoleImpl('http://localhost:8080/college/jpql');