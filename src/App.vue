<template>
  <div id="app">
    <header class="vu-header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>
