export default class CL_tienda{
    constructor(){
        this.acumganancia=0.0;
        this.mayorprecio=0;
        this.codigomayor=0;
    }
    procesar(art){
        this.acumganancia+=art.ganancia();
        if(art.costoventa>this.mayorprecio){
            this.mayorprecio=art.costoventa;
            this.codigomayor=art.codigo;
        }
            
        
    }
    devlovermayor(){
        return this.codigomayor;
    }
    totalganancia(){
        return this.acumganancia;
    }
}