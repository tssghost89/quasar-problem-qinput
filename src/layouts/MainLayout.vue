<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
          {{
            currentRouteName
              ? currentRouteName
              : currentRoutePath == "/"
              ? "HACTECH"
              : currentRoutePath
          }}
        </q-toolbar-title>
        <!-- <q-space /> -->
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            @click="$q.fullscreen.toggle()"
            v-if="$q.screen.gt.sm"
          >
          </q-btn>
          <!-- <q-btn
            round
            dense
            flat
            color="white"
            icon="fab fa-github"
            type="a"
            href="#"
            target="_blank"
          >
          </q-btn> -->
          <!-- <q-btn
            round
            dense
            flat
            style="color: red !important"
            type="a"
            href="#"
            target="_blank"
          >
            <i class="fa fa-heart fa-2x fa-beat"></i>
          </q-btn> -->
         
          <q-btn round flat to="/profile">
            <q-avatar size="26px">
              <img src="/tung.png" />
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" bordered class="bg-primary text-white"> -->
    <q-drawer v-model="leftDrawerOpen" bordered>
      <div
        style="
          height: 225px;
          /* margin: 10px 10px 10px 10px; */
          background-image: url('/img/nav_bg.png');
          padding: 45px 10px 10px 95px;
        "
        class="vertical-middle"
      >
        <q-avatar class="vertical-middle" size="100px"
          ><img src="/tung.png"
        /></q-avatar>
        <br />
        <br />
        <span
          style="margin: 0px 0px 0px 10px; font-size: 20px"
          class="text-white vertical-middle"
          >Hồ Tùng</span
        >
      </div>
      <q-list>
        <!-- <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item to="/home" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Trang chủ</q-item-label>
          </q-item-section>
        </q-item>

        
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",


  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    var title = "HACTECH";

    return {
      title,
      $q,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    currentRoutePath() {
      return this.$route.path;
    },
  },
});
</script>

<style>
/* FONT AWESOME GENERIC BEAT */
.fa-beat {
  animation: fa-beat 5s ease infinite;
}

@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.25);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.25);
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.25);
  }
  70% {
    transform: scale(1);
  }
}
</style>
