<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>

        <transition :name="alertAnimation" appear>
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>

        <!-- type은 어떤 css속성을 우선시 할 것인지 -->
        <transition :name="alertAnimation" type="animation" appear>
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>

        <!-- animate.css -->
        <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>

        <!-- One to Another -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
          <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
        </transition>
        <hr>

        <!-- only js animation use :css-->
        <button class="btn btn-primary" @click="load = !load">Load /Remove Element</button>
        <br><br>
        <transition
            @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled"
            :css="false">
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
    <hr>
    
    <!-- dynamic component -->
    <button class="btn btn-primary"
        @click="selectedComponent == 'appSucessAlert' ? selectedComponent = 'appDangerAlert' : selectedComponent = 'appSucessAlert'">
      Toggle Component</button>
    <br><br>
    <transition name="fade" mode="out-in">
      <component :is="selectedComponent"></component>
    </transition>
    <hr>

    <!-- group transition -->
    <button class="btn btn-primary" @click="addItem">Add Item</button>
    <br><br>
    <ul class="list-group">
      <transition-group name="slide">
        <li class="list-group-item"
            v-for="(number, index) in numbers" @click="removeItem(index)"
            style="cursor: pointer" :key="index">{{ number }}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';

export default {
  data() {
    return {
      show: true,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 100,
      selectedComponent: 'appSucessAlert',
      numbers: [1,2,3,4,5]
    }
  },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log('before Enter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth;
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('after Enter');
    },
    enterCancelled(el) {
      console.log('enter Cancelled');
    },
    beforeLeave(el) {
      console.log('before Leave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('after Leave');
    },
    leaveCancelled(el) {
      console.log('leave Cancelled');
    }
  },
  components: {
    appDangerAlert : DangerAlert,
    appSucessAlert : SuccessAlert
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {
  /* transform: translateY(0px); */
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 2s;
  opacity: 0;
  position: absolute;
}

/* transition group을 위한 style */
.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
