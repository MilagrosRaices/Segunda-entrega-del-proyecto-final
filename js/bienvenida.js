 let opcion = "si";
  let tarea = parseInt(prompt("Bienvenido! Listo para comenzar sus tareas?"));
  
  let mensaje = tarea!="si" ?ejecutarBienvenido()
                            :ejecutarVago();


    alert(mensaje);

    function ejecutarBienvenido()
    {
        return "Genial! Comenzemos"
    }

    function ejecutarVago()
    {
        return "muy bien, un dia libre no le hace daño a nadie, nos vemos pronto"
    }

 
