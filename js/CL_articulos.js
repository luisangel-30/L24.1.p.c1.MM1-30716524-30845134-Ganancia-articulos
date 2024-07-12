export default class CL_articulos{
    constructor(codigo, costo, costoventa){
        this.codigo=codigo;
        this.costo=costo;
        this.costoventa=costoventa;
    }
    ganancia(){
       return this.costoventa-this.costo;
    }
}