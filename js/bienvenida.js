 let opcion = 1;
  let tarea = parseInt(prompt("Bienvenido! Listo para comenzar sus tareas? \n 1- Si,Vamos por ello! \n 2-Tal vez en otro momento"));
  
  let mensaje = tarea<=1 ?ejecutarBienvenido()
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

 
