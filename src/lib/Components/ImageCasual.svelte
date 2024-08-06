<script lang="ts">
    import { onMount } from 'svelte';
  
    // let images = [
    //   'url_to_image_1.jpg',
    //   'url_to_image_2.jpg',
    //   'url_to_image_3.jpg',
    //   // Thêm các URL hình ảnh khác ở đây
    // ];
    let {images} = $props<{images:string[]}>()
  
    let currentIndex = $state(0);
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  
    function setImage(index: number) {
      currentIndex = index;
    }
  
    onMount(() => {
      const interval = setInterval(nextImage, 5000); // Tự động chuyển ảnh sau mỗi 5 giây
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="carousel">
    <img src={images[currentIndex]} alt="Carousel image" />
    
    <button on:click={prevImage} class="prev">&#10094;</button>
    <button on:click={nextImage} class="next">&#10095;</button>
    
    <div class="dots">
      {#each images as _, i}
        <span 
          class="dot" 
          class:active={i === currentIndex} 
          on:click={() => setImage(i)}
        ></span>
      {/each}
    </div>
  </div>
  
  <style>
    .carousel {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  
    img {
      width: 100%;
      height: auto;
    }
  
    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      padding: 16px;
      cursor: pointer;
    }
  
    .prev { left: 10px; }
    .next { right: 10px; }
  
    .dots {
      text-align: center;
      margin-top: 10px;
    }
  
    .dot {
      height: 10px;
      width: 10px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      margin: 0 5px;
      cursor: pointer;
    }
  
    .active {
      background-color: #717171;
    }
  </style>