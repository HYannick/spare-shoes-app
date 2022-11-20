<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 class="color-black--50">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>