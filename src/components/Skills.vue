<template>
  <div class="hello especialBG">
      

      <!-- <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter your Skill" v-model="skill" v-validate="'min:5'" name="skill" >
        <p class="alert" v-if="errors.has('skill')"> {{ errors.first('skill') }} </p>
      </form>

      <div class="holder">
        <ul>
          <li v-for="(data, index) in skills" :key='index'> {{data.skill}}  </li>
        </ul>
      </div> -->

       <!-- <div class="holder">
        <ul>
          <li v-for="(data, index) in myJson.restaurantes" :key='index'> {{data.index}}  </li>
        </ul>
      </div> -->

       <!-- <div class="contenedor" v-for="(data, index) in myJson.restaurantes" :key='index'>
        <p>Restaurante: {{ data.balance }} </p>
      </div> -->



    <!-- <form>
      <input placeholder="Phone" name="phone" v-model="restaurantes.phone">
      <input placeholder="Balance" name="balance" v-model="restaurantes.balance">
      <input placeholder="Picture" name="picture" v-model="restaurantes.picture">
      <input placeholder="RestaurantChain" name="restaurantChain" v-model="restaurantes.restaurantChain">
      <input placeholder="Email" name="email" v-model="restaurantes.email">
      <input placeholder="Address" name="address" v-model="restaurantes.address">
      <input placeholder="Foods" name="foods" v-model="restaurantes.foods">

      <button class="button is-primary" v-on:click.prevent="post">Guardar</button> 
    </form>
      

<div>
  <div>
      

      <div class="contenedor" v-for="x in res" :key="x.id">
        <p>Restaurante: {{ x.id }} </p>
        <a v-if="editarX===true" v-on:click.prevent="remove(x.id)">Remover</a>
        <br>
        <a v-if="editarX===true" v-on:click.prevent="edit(x.id)" class="modal-button" data-target="modal" aria-haspopup="true" id="button">Editar</a>
      </div>
  </div>

  <div class="modal" id="page-modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">

            <form>
      <input placeholder="Phone" name="phone" v-model="restaurantes.phone">
      <input placeholder="Balance" name="balance" v-model="restaurantes.balance">
      <input placeholder="Picture" name="picture" v-model="restaurantes.picture">
      <input placeholder="RestaurantChain" name="restaurantChain" v-model="restaurantes.restaurantChain">
      <input placeholder="Email" name="email" v-model="restaurantes.email">
      <input placeholder="Address" name="address" v-model="restaurantes.address">
      <input placeholder="Foods" name="foods" v-model="restaurantes.foods">

      <button class="button is-primary" v-on:click.prevent="fetchData">Actualizar</button> 
    </form>



    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click.prevent="close" ></button>
</div>
  <div>


    



  </div>
</div> -->









  <!--Imported Bulma Carrusel extension-->
    <!-- <section class="hero is-medium has-carousel">
    <div class="hero-carousel carousel-animated carousel-animate-fade">
      <div class='carousel-container'>
        <div class='carousel-item has-background is-active'>
          <img class="is-background" src="images/slidder.jpg" alt="" />
        </div>
        <div class='carousel-item has-background'>
          <img class="is-background" src="images/slidder.jpg" alt="" />
        </div>
        <div class='carousel-item has-background'>
          <img class="is-background" src="images/slidder.jpg" alt="" />
        </div>
        <div class='carousel-item has-background'>
          <img class="is-background" src="images/slidder.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="hero-head">
      <nav class="navbar is-transparent">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="images/official-logo-v2.png" alt="Logo">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item has-text-white is-active">
                Home
              </a>
              <a class="navbar-item has-text-white">
                Examples
              </a>
              <span class="navbar-item has-text-white">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body has-text-centered">
      <div class="columns is-mobile is-centered">
        <div class="column is-half is-narrow">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input" type="text" placeholder="¿Qué se te antoja para comer?">
            </div>
            <div class="control">
              <a class="button is-info">
                Encuentra Restaurantes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="@/assets/images/official-logo-v2.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a> -->
              <span class="navbar-item has-text-white">
                <a class="button is-success ">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span v-on:click.prevent="guardar">Agregar Nuevo</span>
                </a>
              </span>

            <span class="navbar-item has-text-white">
                <a class="button is-success ">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span v-on:click.prevent="editar">Editar</span>
                </a>
              </span>
        </div>
      </div>
    </div>
  </div>
</nav>

  <!--Main Body-->
  <!-- <form>
      <input placeholder="Phone" name="phone" v-model="restaurantes.phone">
      <input placeholder="Balance" name="balance" v-model="restaurantes.balance">
      <input placeholder="Picture" name="picture" v-model="restaurantes.picture">
      <input placeholder="RestaurantChain" name="restaurantChain" v-model="restaurantes.restaurantChain">
      <input placeholder="Email" name="email" v-model="restaurantes.email">
      <input placeholder="Address" name="address" v-model="restaurantes.address">
      <input placeholder="Foods" name="foods" v-model="restaurantes.foods">

      <button class="button is-primary" v-on:click.prevent="post">Guardar</button> 
    </form> -->
   <div class="paragraph"><p>Restaurantes y tipos de comida populares cerca de ti</p></div>

  <!-- <button class="button is-primary" v-on:click.prevent="editar">Editar</button> -->

  <!--Restaurant Cards-->
  <section>
    <!--First Row-->
    <section class="section section-cards" v-for="x in Math.ceil(res.length / 3)" :key="x">
      <div class="columns">


      <!-- <div v-for="x in res" :key="x.id">
        <p>Restaurante: {{ x.id }} </p>
      </div> -->

        <!-- <div class="container" v-for="x in res" :key="x.id"> -->
          <div class="container" v-for="item in res.slice((x - 1) * 3, x * 3)" :key="item">
          <div class="column">
            <!--Card #1-->
            <div class="card center-element">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img class="image-border card-img-top" :src="item.picture" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title">{{item.restaurantChain}}</p>
                    <p class="subtitle">{{item.phone}}</p>
                  </div>
                </div>
                <div class="content">
                  <b>Especialidad:</b> {{item.foods}}
                  <address><b>Dirección:</b> {{item.address}}</address>
                  <time><b>Horario:</b> 12:00 - 20:00 hrs</time>
                  <br>
                  <a href="mailto:trevinopetersen@tingles.com" target="_top">{{item.email}}</a>
                  <!--Edit and Delete Button-->
                  <div class="grouped-buttons">
                    <div class="buttons is-centered">
                        <a class="button is-success is-outlined" v-if="editarX===true" v-on:click.prevent="edit(item.id)">
                          <span class="icon is-small">
                            <i class="fas fa-pencil-alt"></i>
                          </span>
                          <span>Editar</span>
                        </a>

                       <a class="button is-danger is-outlined" v-if="editarX===true" v-on:click.prevent="remove(item.id)">
                        <span>Borrar</span>
                        <span class="icon is-small">
                          <i class="fas fa-trash-alt"></i>
                        </span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>



      </div>
    </section>

</section>

  <div class="modal" id="page-modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">

            <!-- <form>
      <input placeholder="Phone" name="phone" v-model="restaurantes.phone">
      <input placeholder="Balance" name="balance" v-model="restaurantes.balance">
      <input placeholder="Picture" name="picture" v-model="restaurantes.picture">
      <input placeholder="RestaurantChain" name="restaurantChain" v-model="restaurantes.restaurantChain">
      <input placeholder="Email" name="email" v-model="restaurantes.email">
      <input placeholder="Address" name="address" v-model="restaurantes.address">
      <input placeholder="Foods" name="foods" v-model="restaurantes.foods">

      <button class="button is-primary" v-on:click.prevent="fetchData">Actualizar</button> 
    </form> -->
<div class="columns" style="margin: 30px;">
    <div class="column is-half ">


 <div class="field">
   <label class="label">URL Imagen</label>
   <div class="control">
     <input class="input is-rounded is-warning " type="text" name="picture" v-model="restaurantes.picture">
   </div>
 </div>

 <div class="field">
   <label class="label">Nombre de Restaurante</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" name="restaurantChain" v-model="restaurantes.restaurantChain">
   </div>
 </div>

 <div class="field">
   <label class="label">Teléfono</label>
   <div class="control">
     <input class="input is-rounded is-warning" type="text" name="phone" v-model="restaurantes.phone">
   </div>
 </div>

 <div class="field">
   <label class="label">Especialidad</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" name="foods" v-model="restaurantes.foods">
   </div>
 </div>

</div>


<div class="column is-half ">
  <div class="field">
   <label class="label">Dirección</label>
   <div class="control">
     <input class="input is-rounded is-warning" type="text" name="address" v-model="restaurantes.address">
   </div>
 </div>

 <div class="field">
   <label class="label">Horario</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" >
   </div>
 </div>

 <div class="field">
   <label class="label">Email</label>
   <div class="control">
     <input class="input is-rounded is-warning" type="text" name="email" v-model="restaurantes.email">
   </div>
 </div>


 <div class="field">
   <label class="label">Balance</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" name="balance" v-model="restaurantes.balance">
   </div>
 </div>
</div>

</div>

<button class="button is-primary" v-on:click.prevent="fetchData">Actualizar</button>



    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click.prevent="close" ></button>
</div>



<!-- Modal 2 -->

  <div class="modal" id="page-modal2">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
<div class="columns" style="margin: 30px;">
    <div class="column is-half ">


 <div class="field">
   <label class="label">URL Imagen</label>
   <div class="control">
     <input class="input is-rounded is-warning " type="text" name="picture" v-model="restaurantes.picture">
   </div>
 </div>

 <div class="field">
   <label class="label">Nombre de Restaurante</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" name="restaurantChain" v-model="restaurantes.restaurantChain">
   </div>
 </div>

 <div class="field">
   <label class="label">Teléfono</label>
   <div class="control">
     <input class="input is-rounded is-warning" type="text" name="phone" v-model="restaurantes.phone">
   </div>
 </div>

 <div class="field">
   <label class="label">Especialidad</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" name="foods" v-model="restaurantes.foods">
   </div>
 </div>

</div>


<div class="column is-half ">
  <div class="field">
   <label class="label">Dirección</label>
   <div class="control">
     <input class="input is-rounded is-warning" type="text" name="address" v-model="restaurantes.address">
   </div>
 </div>

 <div class="field">
   <label class="label">Horario</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" >
   </div>
 </div>

 <div class="field">
   <label class="label">Email</label>
   <div class="control">
     <input class="input is-rounded is-warning" type="text" name="email" v-model="restaurantes.email">
   </div>
 </div>


 <div class="field">
   <label class="label">Balance</label>
   <div class="control">
     <input class="input is-rounded is-success" type="text" name="balance" v-model="restaurantes.balance">
   </div>
 </div>
</div>

</div>

<button class="button is-primary" v-on:click.prevent="post">Guardar</button>



    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click.prevent="close2" ></button>
</div>














      

     
      

  </div>
</template>

<script>
import json from 'C:/Users/Vills/Desktop/jsonserver/db.json'

//import "../../node_modules/bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css"
import bulmaCarousel from '../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';

export default {
  name: 'Skills',
  data(){
    return {
      myJson: json,
      skill: '',
      editarX: false,
      selectedRestaurant:null,
      selectedAction:null,
      // skills: [
      //   { "skill": "Vue" },
      //   { "skill": "Angular" }

      // ]
      res: [],
      restaurantes:{
      isActive: false,
      balance: "",
      picture: "",
      restaurantChain: "",
      email: "",
      phone: "",
      address: "",
      foods: "",
      }
    }
  },
  methods: {

    post:function(){
      console.log(this.restaurantes.phone);
      this.$http.post('http://localhost:3000/restaurantes', {

        isActive: false,
        balance: this.restaurantes.balance,
        picture: this.restaurantes.picture,
        restaurantChain: this.restaurantes.restaurantChain,
        email: this.restaurantes.email,
        phone: this.restaurantes.phone,
        address: this.restaurantes.address,
        foods: this.restaurantes.foods

      }).then(function(data){
        console.log(data);
      });
    },
    fetchData:function(){
      console.log();
      this.$http.put('http://localhost:3000/restaurantes/'+this.selectedRestaurant, {
                isActive: false,
        balance: this.restaurantes.balance,
        picture: this.restaurantes.picture,
        restaurantChain: this.restaurantes.restaurantChain,
        email: this.restaurantes.email,
        phone: this.restaurantes.phone,
        address: this.restaurantes.address,
        foods: this.restaurantes.foods
      }).then(function(x){
        
        console.log(x);
      });
    },



    editar:function(){
      if(this.editarX==false){
        this.editarX=true
      }else{
        this.editarX=false
      }

    },
    
    edit:function(id){
      var modal = document.getElementById('page-modal');
      modal.style.display = 'block';
      this.selectedRestaurant=id;


    },
    
    guardar: function(){
         var modal = document.getElementById('page-modal2');
      
      modal.style.display = 'block';
    },
    close2:function(){
      var modal = document.getElementById('page-modal2');
      //var close = document.getElementById('modal-close');
      modal.style.display = 'none';
    },
    
    
    close: function(){
      var modal = document.getElementById('page-modal');
      //var close = document.getElementById('modal-close');
      modal.style.display = 'none';
    },

    remove: function(id){
      console.log(id);
      this.$http.delete('http://localhost:3000/restaurantes/'+id);

    }



    },
    updated(){
      this.bulmaExtensions.carousel = new bulmaCarousel(document.getElementById("bulmaCarousel"));
    },
    mounted(){
      this.$http.get('http://localhost:3000/restaurantes').then(function(res){
        this.res = res.body;
        console.log(this.res);
      }).catch(function(error){
        console.log('Error', error);
      })

    var carousels = bulmaCarousel.attach();

      
      
      
      
    },
    
  }
  // props: {
  //   msg: String
  // }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* .contenedor {
    background: #E0E0E0;


  border-radius: 10px;
  border: 1px solid black;
  
  width: 200px;
  height: 150px;
  } */
  
  /* .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  } */

  /*@font-face {
	font-family: antartida;
	src: url('css/Atartida-Bold.otf');
}*/

@import url('https://fonts.googleapis.com/css?family=Raleway');

body{
	font-family: 'Raleway', sans-serif;
	font-size: 14px;
}
.center-element{
	margin: 0 auto;
}

.card {
	min-width: 230px;
	width: 85%;
	border-radius: 15px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin-bottom: 20px;
}

.title{
	font-size: 24px;
	color: #F5613A;
}



.media .media-content{
	overflow: hidden;
}

.paragraph{
	text-align: center;
	margin: 40px;
	margin-bottom: 55px;
	font-size: 21px;
	color: #FFCA2D;
	font-weight: bold;
}

.section-cards{
	padding-top: 0px;
	padding-bottom: 32px;
}

.image-border{
	border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.card-content{
	border-top: 9px double #FFCA2D  !important;
	padding: 15px;
}

.grouped-buttons{
	margin-top: 15px;
}

.column{
	padding: 0;
	margin: 0 !important;
}

.columns{
margin: 30px;
}

.card-img-top {
  transition: transform .2s ease-out,opacity 1s ease-in-out,-webkit-transform .2s ease-out;
}
.card-img-top:hover {
  -webkit-transform:scale(1.1,1.1);
  transform:scale(1.1, 1.1);
}

.is-4by3{
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	overflow:hidden;
	display: block;
}


</style>
