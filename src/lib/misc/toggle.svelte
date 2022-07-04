<script>
    export let checked = false;
    export let color = "#4ED164";
  </script>
  
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 54px;
      height: 30px;
    }
  
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      border-radius: 34px;
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      border-radius: 50%;
    }
  
    input:checked + .slider {
      background-color: #4ED164;
    }
  
    input:checked + .slider {
      box-shadow: 0 0 1px #4ED164;
    }
  
    input:checked + .slider:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }
  </style>
  
  <label class="switch">
    <input type="checkbox" bind:checked />
    <span class="slider" />
  </label>