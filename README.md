## Challenge - Frontend React .

Consumo de API Rick and Morty

[DEMO]()

## Description
Desarrollo de aplicacion en React con Typescript de una interfaz donde se consume una API.
    Se puede ver la lista de personajes y sus respectivas variantes, para poder buscar los episodios se debe hacer click en el boton de Search y se mostraran los episodios en los que aparece el personaje seleccionado en el lado izquierdo vs lado derecho.
    Una vez activado el boton de buscar se bloquearan los botones de Prev y Next, para evitar request innecesarios



## Herramientas
- React v18
- Typescript
- Styles: CSS + TailwindCSS
- Host : Vercel


## Intalacion y ejecucion
```
yarn install
yarn run dev
```

## Aclaracion

No estoy seguro de respetar 100% la consigna, porque se pedia que de un lado este una pagina y en la derecha otra pagina, el problema que vi aqui es que tambien en la consiga pedia agregar una validacion para que solo haga los request sobre los episodios cuando esten seleccionado en ambos lados, el problema radica en la logica de "negocio" , en caso de estar en Page1(Lado Izq) y Page2(Lado Der) , que pasaria si quiero comparar los 2 primeros personajes pero estos se encuentran en el lado izquierdo lo que hace imposible que funcione debido a la validacion. 
Por lo tanto para respetar la consigna y que funcione correctamente, se opto por hacerlo de la siguiente manera: en lado izquierda y lado derecha traen los personajes de la API, y cuando se selecciona un personaje se hace el request de los episodios, y se bloquean los botones de Prev y Next para evitar request innecesarios.
A medida que van cambiando de personas se muestran las cards con sus variantes con sus respectivos nombre, status y especie de caracter informativo.